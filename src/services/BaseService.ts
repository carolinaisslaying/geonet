import axios from "axios";
import { BaseServiceGETRequest } from "../../@types/base";

/**
 * BaseService class to handle common HTTP requests to the GeoNet API.
 * @abstract
 * @since 1.0.0 
 */
export class BaseService {
    protected baseURL: string = "https://api.geonet.org.nz";

    /**
     * Performs a GET request to the specified endpoint.
     * 
     * @param {BaseServiceGETRequest} req - The request object containing the endpoint and format.
     * @returns {Promise<any>} - A promise that resolves to the response data.
     * @throws {Error} - Throws an error if the endpoint is not provided, is not a string, or does not start with a backslash (/).
     * @since 1.0.0
     */
    protected async GET(req: BaseServiceGETRequest): Promise<any> {
        if (!req.endpoint || typeof(req.endpoint) !== "string") 
            throw new Error("Endpoint not provided or is not a string.");

        if (!req.endpoint.startsWith("/"))
            throw new Error("Endpoint must start with a backslash (/).");

        await axios.get(`${this.baseURL}${req.endpoint}`, {
            headers: {
                "Content-Type": req.format
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            throw new Error(err);
        });
    }
}