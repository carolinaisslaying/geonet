/*
    Types relating to news endpoint requests.
*/

/** Request parameters for `getNews`. */
export interface NewsFeedRequest {
    /** The page number of the news feed to fetch. If not provided, the first page is returned. */
    page?: number;
}

/*
    Types relating to news endpoint responses.
*/

/** A story in the GeoNet news feed. */
export interface NewsItem {
    /** The title of the story. */
    title: string;
    type: string;
    tag: string;
    val: number;
    /** The date the story was published. */
    published: string;
    /** A link to the news story. */
    link: string;
    /** A link to a mobile version of the news story. */
    mlink: string;
}

/** A simple JSON feed of GeoNet news. */
export interface NewsFeedResponse {
    page: number;
    total: number;
    /** The news stories. */
    feed: NewsItem[];
}