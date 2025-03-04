import { JSONFormatTypes } from "../../@types/base";
import { StrongRequest, StrongResponse } from "../../@types/strong";
import { BaseService } from "./BaseService";

/**
 * StrongService class for fetching strong motion information for a specified quake from the GeoNet API.
 * @extends BaseService
 * @since 1.0.0 
 */
export class StrongService extends BaseService {
    /**
     * Fetches strong intensity data for a given public ID.
     * 
     * @param {string} publicID - The public ID for the earthquake.
     * @returns {Promise<StrongResponse>} - A promise that resolves to the strong intensity data.
     * @throws {Error} - Throws an error if the public ID is not provided.
     * @since 1.0.0 
     */
    public async getStrong(publicID: string): Promise<StrongResponse> {
        if (!publicID || typeof(publicID) !== "string") throw new Error("Public ID not provided, or was not a string.");

        return await this.GET({
            endpoint: `/intensity/strong/processed/${publicID}`,
            format: JSONFormatTypes.APPLICATION_JSON
        });
    }
}