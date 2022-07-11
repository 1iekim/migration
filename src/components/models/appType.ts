import { DataArticles, ClassNews } from './article';
import { DataSources, ClassSource } from './source';
import { IOption, IError, IRespObj, Callback } from './loader';

export interface IAppView {
    news: ClassNews;
    sources: ClassSource;

    drawNews(data: DataArticles & DataSources): void;

    drawSources(data: DataArticles & DataSources): void;
}

export interface IAppController extends Iloader {
    getSources(callback: Callback): void;
    getNews(e: Event, callback: Callback): void;
}

interface Iloader {
    baseLink: string;
    options: IOption;

    // getResp({ endpoint, options }: IRespObj, callback: Callback): void;

    // errorHandler<T extends IError>(res: T): T;

    // makeUrl(options: IOption, endpoint: string): string;

    // load(method: string, endpoint: string, callback: Callback, options: IOption): void;
}
