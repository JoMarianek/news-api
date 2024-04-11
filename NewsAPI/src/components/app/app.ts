import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import NewsApiResponse from '../view/news/newsApiResponse';
import SourcesApiResponse from '../view/sources/sourcesApiResponse';

class App {
    private controller: AppController; /*this is a url so type string? */
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data: NewsApiResponse) => this.view.drawNews(data)));
        this.controller.getSources((data: SourcesApiResponse) => this.view.drawSources(data));
    }
}

export default App;
