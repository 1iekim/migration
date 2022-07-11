import News from './news/news';
import Sources from './sources/sources';
import { Article, DataArticles, ClassNews } from '../models/article';
import { Source, DataSources, ClassSource } from '../models/source';
import { IAppView } from '../models/appType';

export class AppView implements IAppView {
    news: ClassNews;
    sources: ClassSource;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataArticles & DataSources) {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataArticles & DataSources) {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
