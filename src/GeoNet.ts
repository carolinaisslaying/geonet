import { IntensityService } from "./services/IntensityService";
import { IntensityRequestUnion, IntensityResponse } from "../@types/intensity";

import { StrongService } from "./services/StrongService";
import { StrongRequest, StrongResponse } from "../@types/strong";

import { NewsService } from "./services/NewsService";
import { NewsFeedRequest, NewsFeedResponse } from "../@types/news";

export class GeoNet {
    private intensityService: IntensityService;
    private strongService: StrongService;
    private newsService: NewsService;

    constructor(intensityService: IntensityService, strongService: StrongService, newsService: NewsService) {
        this.intensityService = intensityService;
        this.strongService = strongService;
        this.newsService = newsService;
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
}