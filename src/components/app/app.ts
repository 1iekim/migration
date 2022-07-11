import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IAppView, IAppController } from '../models/appType';

class App {
    private controller: IAppController;
    private view: IAppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        if (document.querySelector('.sources')) {
            document
                .querySelector('.sources')!
                .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data!)));
        }
        this.controller.getSources((data) => this.view.drawSources(data!));
    }
}

export default App;
