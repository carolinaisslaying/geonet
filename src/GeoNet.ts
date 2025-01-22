import { IntensityRequestUnion, IntensityResponse } from "../@types/intensity";
import { IntensityService } from "./services/IntensityService";
import { StrongService } from "./services/StrongService";
import { StrongRequest, StrongResponse } from "../@types/strong";

export class GeoNet {
    private intensityService: IntensityService;
    private strongService: StrongService;

    public async getIntensity(req: IntensityRequestUnion): Promise<IntensityResponse> {
        return await this.intensityService.getIntensity(req);
    }

    public async getStrong(req: StrongRequest): Promise<StrongResponse> {
        return await this.strongService.getStrong(req);
    } 
}