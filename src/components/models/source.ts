export interface Source {
    [key: string]: string;
}

export interface DataSources {
    status: string;
    sources: Source[];
}

export interface ClassSource {
    draw(data: Source[]): void;
}
