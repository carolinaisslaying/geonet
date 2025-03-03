/* 
    Types relating to news endpoint requests.
*/

export interface NewsFeedRequest {
    page: undefined | number;
}

/* 
    Types relating to news endpoint responses.
*/

export interface NewsItem {
    title: string;
    type: string;
    tag: string;
    val: number;
    published: string;
    link: string;
    mlink: string;
}

export interface NewsFeedResponse {
    page: number;
    total: number;
    feed: NewsItem[];
}