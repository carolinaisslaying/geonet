import { JSONFormatTypes } from "../../@types/base";
import { NetworkFDSNStationRequest, NetworkFDSNStationResponse, NetworkGNSStationRequest, NetworkGNSStationResponse, NetworkSensorRequest, NetworkSensorResponse } from "../../@types/network";
import { BaseService } from "./BaseService";

/**
 * StrongService class for fetching strong motion information for a specified quake from the GeoNet API.
 * @extends BaseService
 */
export class NetworkService extends BaseService {
    /**
     * Fetches network data for a given sensor type.
     * 
     * @since 1.0.0
     * @param {NetworkSensorRequest} req - The request object containing the sensor type.
     * @returns {Promise<NetworkSensorResponse>} - A promise that resolves to the sensor data.
     * @throws {Error} - Throws an error if the sensor type is not provided, or if the optional parameters are not strings.
     */
    public async getNetworkSensor(req: NetworkSensorRequest): Promise<NetworkSensorResponse> {
        if (!req.sensorType) throw new Error("Sensor type not provided.");

        // Validate optional string parameters if they are defined
        if (req.startDate !== undefined && typeof req.startDate !== "string") {
            throw new Error("Start date must be a string.");
        }

        if (req.endDate !== undefined && typeof req.endDate !== "string") {
            throw new Error("End date must be a string.");
        }

        if (req.station !== undefined && typeof req.station !== "string") {
            throw new Error("Station code must be a string.");
        }

        const params = new URLSearchParams({
            sensorType: req.sensorType.toString(),
            ...(req.startDate && { startDate: req.startDate }),
            ...(req.endDate && { endDate: req.endDate }),
            ...(req.station && { station: req.station })
        });

        return await this.GET({
            endpoint: `/network/sensor/?${params}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }

    /**
     * Fetches network data for a specified GNSS mark.
     * 
     * @since 1.0.0
     * @param {NetworkGNSStationRequest} req - The request object containing the mark code.
     * @returns {Promise<NetworkGNSStationResponse>} - A promise that resolves to the sensor details data.
     * @throws {Error} - Throws an error if the mark code is not provided.
     */
    public async getNetworkGNSSDetails(req: NetworkGNSStationRequest): Promise<NetworkGNSStationResponse> {
        if (!req.code || typeof(req.code) !== "string") throw new Error("GNSS mark code not provided, or was not a string.");

        return await this.GET({
            endpoint: `/network/gnss/mark?code=${req.code}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }

    /**
     * Fetches network data for a specified GNSS mark.
     * 
     * @since 1.0.0
     * @param {NetworkFDSNStationRequest} req - The request object containing the mark code.
     * @returns {Promise<NetworkFDSNStationResponse>} - A promise that resolves to the sensor details data.
     * @throws {Error} - Throws an error if the mark code is not provided.
     */
    public async getNetworkFDSNDetails(req: NetworkFDSNStationRequest): Promise<NetworkFDSNStationResponse> {
        if (!req.station || typeof(req.station) !== "string") throw new Error("FDSN station code not provided, or was not a string.");
        if (!req.network || typeof(req.network) !== "string") throw new Error("FDSN network code not provided, or was not a string.");

        return await this.GET({
            endpoint: `/network/gnss/mark?station=${req.station}&network=${req.network}`,
            format: JSONFormatTypes.APPLICATION_VND_GEO_JSON_VERSION_2
        });
    }
}