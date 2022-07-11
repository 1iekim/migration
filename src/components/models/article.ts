// interface for API item;
interface Source {
    id: string;
    name: string;
}

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface DataArticles {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface ClassNews {
    draw(data: Article[]): void;
}
