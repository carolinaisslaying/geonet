import { JSONFormatTypes } from "../../@types/base";
import { NewsFeedRequest, NewsFeedResponse } from "../../@types/news";
import { BaseService } from "./BaseService";

/**
 * NewsService class for fetching a simple JSON feed of GeoNet's news from the GeoNet API.
 * @extends BaseService
 * @since 1.0.0 
 */
export class NewsService extends BaseService {
    /**
     * Fetches a simple JSON feed of GeoNet's news.
     * 
     * @param {number} page - The request parameters for fetching the news feed. If empty, the first page is returned.
     * @returns {Promise<NewsFeedResponse>} - A promise that resolves to the simple JSON news feed data.
     * @throws {Error} - Throws an error if the page number is not an integer.
     * @since 1.0.0
     */
    public async getNews(page?: number): Promise<NewsFeedResponse> {
        if (page && isNaN(page)) throw new Error("Invalid page number, the page number must be an integer.");

        return await this.GET({
            endpoint: `/news/geonet${page ? `?page=${page}` : ""}`,
            format: JSONFormatTypes.APPLICATION_JSON_VERSION_2
        });
    }
}