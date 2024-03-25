import News from './news/news';
import NewsApiResponse from './news/newsApiResponse';
import Sources from './sources/sources';
import SourcesApiResponse from './sources/sourcesApiResponse';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsApiResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesApiResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
