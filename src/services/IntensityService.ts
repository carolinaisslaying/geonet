import { JSONFormatTypes } from "../../@types/base";
import { IntensityRequestUnion, IntensityResponse } from "../../@types/intensity";
import { BaseService } from "./BaseService";

/**
 * IntensityService class for fetching intensity data from the GeoNet API.
 * @extends BaseService
 */
export class IntensityService extends BaseService {
    public async getIntensity(req: IntensityRequestUnion): Promise<IntensityResponse> {
        /**
         * Fetches shaking intensity information data based on the provided request parameters.
         * 
         * @param {IntensityRequestUnion} req - The request parameters for fetching intensity data.
         * @returns {Promise<IntensityResponse>} - A promise that resolves to the intensity response data.
         * @throws {Error} - Throws an error if the request type is invalid.
         */
        if (req.type === "measured") {
            const params = new URLSearchParams({
                type: req.type,
                ...(req.publicID && { publicID: req.publicID })
            });
              
            return await this.GET({
                endpoint: `/intensity?${params.toString()}`,
                format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
            });

        } else if (req.type === "reported") {
            const params = new URLSearchParams({
                type: req.type,
                ...(req.aggregation && { aggregation: req.aggregation }),
                ...(req.publicID && { publicID: req.publicID })
            });

            return await this.GET({
                endpoint: `/intensity?${params.toString()}`,
                format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
            });
            
        } else throw new Error("Invalid req type. Must be either 'measured' or 'reported'.");
    }
}