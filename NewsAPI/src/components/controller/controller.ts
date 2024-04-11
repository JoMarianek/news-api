import NewsApiResponse from '../view/news/newsApiResponse';
import AppLoader from './appLoader';
import SourcesApiResponse from '../view/sources/sourcesApiResponse';
import { ApiEndPoint } from './apiEndpoint';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesApiResponse) => void) {
        super.getResp(
            {
                endpoint: ApiEndPoint.Sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsApiResponse) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer && target !== null) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: ApiEndPoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
