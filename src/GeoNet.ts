import { IntensityService } from "./services/IntensityService";
import { IntensityRequestUnion, IntensityResponse } from "../@types/intensity";

import { StrongService } from "./services/StrongService";
import { StrongRequest, StrongResponse } from "../@types/strong";

import { NewsService } from "./services/NewsService";
import { NewsFeedRequest, NewsFeedResponse } from "../@types/news";

import { QuakeService } from "./services/QuakeService";
import { QuakeHistoryResponse, QuakeRequest, QuakeResponse, QuakesRequest, QuakesResponse, QuakeStatsResponse } from "../@types/quake";

import { VolcanoService } from "./services/VolcanoService";
import { VolcanoAlertLevelResponse, VolcanoQuakeRequest, VolcanoQuakeResponse } from "../@types/volcano";

import { NetworkService } from "./services/NetworkService";
import { NetworkFDSNStationRequest, NetworkFDSNStationResponse, NetworkGNSStationRequest, NetworkGNSStationResponse, NetworkSensorRequest, NetworkSensorResponse } from "../@types/network";

/**
 * Main class for interacting with the GeoNet API.
 * Provides access to all GeoNet services through a unified interface.
 * 
 * @remarks
 * This class acts as a central interface for all GeoNet API services, thus providing a simplified
 * way for accessing earthquake, volcano, network data, among others, from GeoNet.
 * 
 * @example
 * ```typescript
 * const geonet = new GeoNet();
 * 
 * // Get recent earthquakes
 * const quakes = await geonet.getQuakes({ mmi: MMI.Weak });
 * ```
 * 
 * @see {@link IntensityService} For intensity-related methods
 * @see {@link StrongService} For strong motion-related methods
 * @see {@link NewsService} For news-related methods
 * @see {@link QuakeService} For quake-related methods
 * @see {@link VolcanoService} For volcano-related methods
 * @see {@link NetworkService} For network-related methods
 * 
 * @since 1.0.0
 */
export class GeoNet {
    constructor(
        private readonly intensityService: IntensityService = new IntensityService(),
        private readonly strongService: StrongService = new StrongService(),
        private readonly newsService: NewsService = new NewsService(),
        private readonly quakeService: QuakeService = new QuakeService(),
        private readonly volcanoService: VolcanoService = new VolcanoService(),
        private readonly networkService: NetworkService = new NetworkService()
    ) {}

    /** @inheritdoc {@link IntensityService.getIntensity} */
    public async getIntensity(req: IntensityRequestUnion): Promise<IntensityResponse> {
        return await this.intensityService.getIntensity(req);
    }

    /** @inheritdoc {@link StrongService.getStrong} */
    public async getStrong(req: StrongRequest): Promise<StrongResponse> {
        return await this.strongService.getStrong(req);
    }

    /** @inheritdoc {@link NewsService.getNews} */
    public async getNews(req: NewsFeedRequest): Promise<NewsFeedResponse> {
        return await this.newsService.getNews(req);
    }

    /** @inheritdoc {@link QuakeService.getQuake} */
    public async getQuake(req: QuakeRequest): Promise<QuakeResponse> {
        return await this.quakeService.getQuake(req);
    }

    /** @inheritdoc {@link QuakeService.getQuakeHistory} */
    public async getQuakeHistory(req: QuakeRequest): Promise<QuakeHistoryResponse> {
        return await this.quakeService.getQuakeHistory(req);
    }

    /** @inheritdoc {@link QuakeService.getQuakeStats} */
    public async getQuakeStats(): Promise<QuakeStatsResponse> {
        return await this.quakeService.getQuakeStats();
    }

    /** @inheritdoc {@link QuakeService.getQuakes} */
    public async getQuakes(req: QuakesRequest): Promise<QuakesResponse> {
        return await this.quakeService.getQuakes(req);
    }

    /** @inheritdoc {@link VolcanoService.getVolcanoAlertLevel} */
    public async getVolcanoAlertLevel(): Promise<VolcanoAlertLevelResponse> {
        return await this.volcanoService.getVolcanoAlertLevel();
    }

    /** @inheritdoc {@link VolcanoService.getVolcanoQuakes} */
    public async getVolcanoQuakes(req: VolcanoQuakeRequest): Promise<VolcanoQuakeResponse> {
        return await this.volcanoService.getVolcanoQuakes(req);
    }

    /** @inheritdoc {@link NetworkService.getNetworkSensor} */
    public async getNetworkSensor(req: NetworkSensorRequest): Promise<NetworkSensorResponse> {
        return await this.networkService.getNetworkSensor(req);
    }

    /** @inheritdoc {@link NetworkService.getNetworkGNSSDetails} */
    public async getNetworkGNSSDetails(req: NetworkGNSStationRequest): Promise<NetworkGNSStationResponse> {
        return await this.networkService.getNetworkGNSSDetails(req);
    }

    /** @inheritdoc {@link NetworkService.getNetworkFDSNDetails} */
    public async getNetworkFDSNDetails(req: NetworkFDSNStationRequest): Promise<NetworkFDSNStationResponse> {
        return await this.networkService.getNetworkFDSNDetails(req);
    }
}