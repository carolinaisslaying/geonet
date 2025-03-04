import axios from "axios";
import { BaseServiceGETRequest } from "../../@types/base";

/**
 * BaseService class to handle common HTTP requests to the GeoNet API.
 * @abstract
 * @since 1.0.0 
 */
export abstract class BaseService {
    protected readonly baseURL = "https://api.geonet.org.nz";

    protected async GET(req: BaseServiceGETRequest): Promise<any> {
        const url = `${this.baseURL}${req.endpoint}`;
        console.log('Request URL:', url);
        console.log('Request Headers:', {
            "Content-Type": req.format,
            "Accept": req.format
        });

        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": req.format,
                    "Accept": req.format
                }
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Response Error:', {
                    status: error.response?.status,
                    data: error.response?.data
                });
            }
            throw new Error(error instanceof Error ? error.message : String(error));
        }
    }
}