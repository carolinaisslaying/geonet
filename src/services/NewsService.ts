import { JSONFormatTypes } from "../../@types/base";
import { NewsFeedRequest, NewsFeedResponse } from "../../@types/news";
import { BaseService } from "./BaseService";

/**
 * NewsService class for fetching a simple JSON feed of GeoNet's news from the GeoNet API.
 * Extends the BaseService class.
 */
export class NewsService extends BaseService {
    /**
     * Fetches a simple JSON feed of GeoNet's news.
     * @param {NewsFeedRequest} req - The request parameters for fetching the news feed.
     * @returns {Promise<NewsFeedResponse>} - A promise that resolves to the simple JSON news feed data.
     * @throws {Error} - Throws an error if the page number is not an integer.
     */
    public async getNews(req: NewsFeedRequest): Promise<NewsFeedResponse> {
        if (req.page && isNaN(req.page)) throw new Error("Invalid page number, the page number must be an integer.");

        return await this.GET({
            endpoint: `/news/geonet${req.page ? `?page=${req.page}` : ""}`,
            format: JSONFormatTypes.APPLICATION_JSON_VERSION_2
        });
    }
}