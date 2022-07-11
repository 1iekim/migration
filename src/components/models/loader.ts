import { DataArticles } from './article';
import { DataSources } from '../models/source';

export interface IOption {
    [key: string]: string;
}

export interface IRespObj {
    endpoint: string;
    options?: IOption;
}

export interface IError {
    ok: boolean;
    status: number;
    statusText: string;
}

export interface Callback {
    (data?: DataArticles & DataSources): void;
}

export type Data = DataArticles & DataSources;
