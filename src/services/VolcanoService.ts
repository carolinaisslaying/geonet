import { JSONFormatTypes } from "../../@types/base";
import { VolcanoAlertLevelResponse, VolcanoID, VolcanoQuakeRequest, VolcanoQuakeResponse } from "../../@types/volcano";
import { BaseService } from "./BaseService";

/**
 * VolcanoService class for volcanic alert level information and volcano earthquakes from the GeoNet API.
 * @extends BaseService
 * @since 1.0.0 
 */
export class VolcanoService extends BaseService {
    /**
     * Fetches the volcanic alert level data for every volcano.
     * 
     * @returns {Promise<VolcanoAlertLevelResponse>} - A promise that resolves to the volcanic alert level data.
     * @since 1.0.0
     */
    public async getVolcanoAlertLevel(): Promise<VolcanoAlertLevelResponse> {
        return await this.GET({
            endpoint: "/volcano/val",
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }

    /**
     * Fetches quakes in the vicinity of the volcano within a pre-defined region by GeoNet over the past 60 days.
     * 
     * @param {VolcanoID} volcanoID - The request object containing the volcano ID.
     * @returns {Promise<VolcanoQuakeResponse>} - A promise that resolves to the volcano quake data.
     * @throws {Error} - Throws an error if the volcano ID is not provided or is not a valid volcano ID.
     * @since 1.0.0 
     */
    public async getVolcanoQuakes(volcanoID: VolcanoID): Promise<VolcanoQuakeResponse> {
        if (!volcanoID || !Object.values(VolcanoID).includes(volcanoID)) throw new Error("Volcano ID not provided, or was invalid.");

        return await this.GET({
            endpoint: `/volcano/quake/${volcanoID}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }
}