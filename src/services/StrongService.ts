import { JSONFormatTypes } from "../../@types/base";
import { StrongRequest, StrongResponse } from "../../@types/strong";
import { BaseService } from "./BaseService";

/**
 * StrongService class for fetching strong motion information for a specified quake from the GeoNet API.
 * Extends the BaseService class.
 */
export class StrongService extends BaseService {
    /**
     * Fetches strong intensity data for a given public ID.
     * 
     * @param {StrongRequest} req - The request object containing the public ID.
     * @returns {Promise<StrongResponse>} - A promise that resolves to the strong intensity data.
     * @throws {Error} - Throws an error if the public ID is not provided.
     */
    public async getStrong(req: StrongRequest): Promise<StrongResponse> {
        if (!req.publicID) throw new Error("Public ID not provided.");

        return await this.GET({
            endpoint: `/intensity/strong/processed/?${req.publicID}`,
            format: JSONFormatTypes.APPLICATION_JSON
        });
    }
}