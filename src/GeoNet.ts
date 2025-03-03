import { IntensityService } from "./services/IntensityService";
import { IntensityRequestUnion, IntensityResponse } from "../@types/intensity";

import { StrongService } from "./services/StrongService";
import { StrongRequest, StrongResponse } from "../@types/strong";

import { NewsService } from "./services/NewsService";
import { NewsFeedRequest, NewsFeedResponse } from "../@types/news";
import { QuakeService } from "./services/QuakeService";
import { QuakeRequest, QuakeResponse, QuakesRequest, QuakesResponse, QuakeStatsResponse } from "../@types/quake";

export class GeoNet {
    private intensityService: IntensityService;
    private strongService: StrongService;
    private newsService: NewsService;
    private quakeService: QuakeService;

    constructor(intensityService: IntensityService, strongService: StrongService, newsService: NewsService, quakeService: QuakeService) {
        this.intensityService = intensityService;
        this.strongService = strongService;
        this.newsService = newsService;
        this.quakeService = quakeService;
    }

    public async getIntensity(req: IntensityRequestUnion): Promise<IntensityResponse> {
        return await this.intensityService.getIntensity(req);
    }

    public async getStrong(req: StrongRequest): Promise<StrongResponse> {
        return await this.strongService.getStrong(req);
    } 

    public async getNews(req: NewsFeedRequest): Promise<NewsFeedResponse> {
        return await this.newsService.getNews(req);
    }

    public async getQuake(req: QuakeRequest): Promise<QuakeResponse> {
        return await this.quakeService.getQuake(req);
    }

    public async getQuakeHistory(req: QuakeRequest): Promise<QuakeResponse> {
        return await this.quakeService.getQuakeHistory(req);
    }

    public async getQuakeStats(): Promise<QuakeStatsResponse> {
        return await this.quakeService.getQuakeStats();
    }

    public async getQuakes(req: QuakesRequest): Promise<QuakesResponse> {
        return await this.quakeService.getQuakes(req);
    }
}