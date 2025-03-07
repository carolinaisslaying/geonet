import { IntensityService } from "./services/IntensityService";
import { IntensityRequestUnion, IntensityResponse } from "../@types/intensity";

import { StrongService } from "./services/StrongService";
import { StrongResponse } from "../@types/strong";

import { NewsService } from "./services/NewsService";
import { NewsFeedResponse } from "../@types/news";

import { QuakeService } from "./services/QuakeService";
import { QuakeHistoryResponse, QuakeResponse, QuakesResponse, QuakeStatsResponse } from "../@types/quake";

import { VolcanoService } from "./services/VolcanoService";
import { VolcanoAlertLevelResponse, VolcanoID, VolcanoQuakeResponse } from "../@types/volcano";

import { NetworkService } from "./services/NetworkService";
import { NetworkFDSNStationRequest, NetworkFDSNStationResponse, NetworkGNSStationResponse, NetworkSensorRequest, NetworkSensorResponse } from "../@types/network";

import { Geometry, MMI } from "../@types/common";
import { QuakeMapUtil } from "./utils/QuakeMapUtil";

/**
 * Main class for interacting with the GeoNet API and related utilities.
 * Provides access to all GeoNet services through a unified interface.
 * 
 * @remarks
 * This class acts as a central interface for all GeoNet API services and related utilities, thus providing a simplified
 * way for accessing earthquake, volcano, network data, among others, from GeoNet.
 * 
 * @example
 * ```typescript
 * import { GeoNet } from "geonet";
 * const geonet = new GeoNet();
 * 
 * // Get recent earthquakes
 * const quakes = await geonet.getQuakes(...);
 * ```
 * 
 * @see {@link https://api.geonet.org.nz} GeoNet API Documentation.
 * @see {@link IntensityService} For intensity-related methods.
 * @see {@link StrongService} For strong motion-related methods.
 * @see {@link NewsService} For news-related methods.
 * @see {@link QuakeService} For quake-related methods.
 * @see {@link VolcanoService} For volcano-related methods.
 * @see {@link NetworkService} For network-related methods.
 * @see {@link QuakeMapUtil} For generating GeoNet quake map URLs.
 * 
 * @since 1.0.0
 */
export class GeoNet {
    /**
     * Creates a new instance of the GeoNet client.
     * 
     * @param {IntensityService} intensityService - Service for intensity data.
     * @param {StrongService} strongService - Service for strong motion data.
     * @param {NewsService} newsService - Service for news feed data.
     * @param {QuakeService} quakeService - Service for earthquake data.
     * @param {VolcanoService} volcanoService - Service for volcanic activity data.
     * @param {NetworkService} networkService - Service for network sensor data.
     */
    constructor(
        private readonly intensityService: IntensityService = new IntensityService(),
        private readonly strongService: StrongService = new StrongService(),
        private readonly newsService: NewsService = new NewsService(),
        private readonly quakeService: QuakeService = new QuakeService(),
        private readonly volcanoService: VolcanoService = new VolcanoService(),
        private readonly networkService: NetworkService = new NetworkService(),
        private readonly quakeMapUtil: QuakeMapUtil = new QuakeMapUtil()
    ) {}

    /** @inheritdoc {@link IntensityService.getIntensity} */
    public async getIntensity(req: IntensityRequestUnion): Promise<IntensityResponse> {
        return await this.intensityService.getIntensity(req);
    }

    /** @inheritdoc {@link StrongService.getStrong} */
    public async getStrong(publicID: string): Promise<StrongResponse> {
        return await this.strongService.getStrong(publicID);
    }

    /** @inheritdoc {@link NewsService.getNews} */
    public async getNews(page?: number): Promise<NewsFeedResponse> {
        return await this.newsService.getNews(page);
    }

    /** @inheritdoc {@link QuakeService.getQuake} */
    public async getQuake(publicID: string): Promise<QuakeResponse> {
        return await this.quakeService.getQuake(publicID);
    }

    /** @inheritdoc {@link QuakeService.getQuakeHistory} */
    public async getQuakeHistory(publicID: string): Promise<QuakeHistoryResponse> {
        return await this.quakeService.getQuakeHistory(publicID);
    }

    /** @inheritdoc {@link QuakeService.getQuakeStats} */
    public async getQuakeStats(): Promise<QuakeStatsResponse> {
        return await this.quakeService.getQuakeStats();
    }

    /** @inheritdoc {@link QuakeService.getQuakes} */
    public async getQuakes(mmi: MMI): Promise<QuakesResponse> {
        return await this.quakeService.getQuakes(mmi);
    }

    /** @inheritdoc {@link VolcanoService.getVolcanoAlertLevel} */
    public async getVolcanoAlertLevel(): Promise<VolcanoAlertLevelResponse> {
        return await this.volcanoService.getVolcanoAlertLevel();
    }

    /** @inheritdoc {@link VolcanoService.getVolcanoQuakes} */
    public async getVolcanoQuakes(volcanoID: VolcanoID): Promise<VolcanoQuakeResponse> {
        return await this.volcanoService.getVolcanoQuakes(volcanoID);
    }

    /** @inheritdoc {@link NetworkService.getNetworkSensor} */
    public async getNetworkSensor(req: NetworkSensorRequest): Promise<NetworkSensorResponse> {
        return await this.networkService.getNetworkSensor(req);
    }

    /** @inheritdoc {@link NetworkService.getNetworkGNSSDetails} */
    public async getNetworkGNSSDetails(code: string): Promise<NetworkGNSStationResponse> {
        return await this.networkService.getNetworkGNSSDetails(code);
    }

    /** @inheritdoc {@link NetworkService.getNetworkFDSNDetails} */
    public async getNetworkFDSNDetails(req: NetworkFDSNStationRequest): Promise<NetworkFDSNStationResponse> {
        return await this.networkService.getNetworkFDSNDetails(req);
    }

    /** @inheritdoc {@link QuakeMapUtil.generateMapURL} */
    public generateMapURL(coordinates: Geometry["coordinates"], mmi: MMI): string {
        return this.quakeMapUtil.generateMapURL(coordinates, mmi);
    }

    /** @inheritdoc {@link QuakeMapUtil.generateColourCode} */
    public generateColourCode(mmi: MMI): string {
        return this.quakeMapUtil.generateColourCode(mmi);
    }
}