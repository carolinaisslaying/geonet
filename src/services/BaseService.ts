import axios from "axios";
import { BaseServiceGETRequest } from "../../@types/base";

export class BaseService {
    protected baseURL: string = "https://api.geonet.org.nz";

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