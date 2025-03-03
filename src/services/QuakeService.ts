import { JSONFormatTypes } from "../../@types/base";
import { MMI } from "../../@types/common";
import { QuakeHistoryResponse, QuakeRequest, QuakeResponse, QuakesRequest, QuakesResponse, QuakeStatsResponse } from "../../@types/quake";
import { BaseService } from "./BaseService";

/**
 * QuakeService class for fetching quake information from the GeoNet API.
 * @extends BaseService
 * @since 1.0.0 
 */
export class QuakeService extends BaseService {
    /**
     * Fetches quake data for a given public ID.
     * 
     * @param {QuakeRequest} req - The request object containing the public ID.
     * @returns {Promise<QuakeResponse>} - A promise that resolves to the quake data.
     * @throws {Error} - Throws an error if the public ID is not provided.
     * @since 1.0.0 
     */
    public async getQuake(req: QuakeRequest): Promise<QuakeResponse> {
        if (!req.publicID) throw new Error("Public ID not provided.");

        return await this.GET({
            endpoint: `/quake/${req.publicID}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }

    /**
     * Fetches location history data for a given public ID. Not all quakes have a location history.
     * 
     * @param {QuakeRequest} req - The request object containing the public ID.
     * @returns {Promise<QuakeHistoryResponse>} - A promise that resolves to the quake history data. The features array may be empty!
     * @throws {Error} - Throws an error if the public ID is not provided.
     * @since 1.0.0 
     */
    public async getQuakeHistory(req: QuakeRequest): Promise<QuakeHistoryResponse> {
        if (!req.publicID || typeof(req.publicID) !== "string") throw new Error("Public ID not provided, or was not a string.");

        return await this.GET({
            endpoint: `/quake/history/${req.publicID}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }

    /**
     * Fetches quake stats for the past 365 days.
     * 
     * @returns {Promise<QuakeStatsResponse>} - A promise that resolves to the quake stats data.
     * @since 1.0.0 
     */
    public async getQuakeStats(): Promise<QuakeStatsResponse> {
        return await this.GET({
            endpoint: "/quake/stats",
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }

    /**
     * Fetches all quakes that have occurred over the past 365 days.
     * 
     * @param {QuakesRequest} req - The request object containing the MMI.  
     * @returns {Promise<QuakesResponse>} - A promise that resolves to the quakes data.
     * @error {Error} - Throws an error if the MMI is not provided or is not a valid MMI.
     * @since 1.0.0 
     */
    public async getQuakes(req: QuakesRequest): Promise<QuakesResponse> {
        if (!req.mmi || !Object.values(MMI).includes(req.mmi)) throw new Error("MMI not provided, or was not a valid MMI.");

        return await this.GET({
            endpoint: `/quake?mmi=${req.mmi}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }
}