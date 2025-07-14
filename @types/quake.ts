import { FeatureCollection as CommonFeatureCollection, MMI, Quality } from "./common";

/* 
    Types relating to quake endpoint requests.
*/

export interface QuakeRequest {
    publicID: string;
}

export interface QuakesRequest {
    mmi: MMI;
}

/* 
    Types relating to quake endpoint responses.
*/

export interface QuakeProperties {
    publicID: string;
    time: string;
    depth: number;
    magnitude: number;
    mmi: MMI;
    locality: string;
    quality: Quality;
}

export interface QuakeHistoryProperties extends QuakeProperties {
    modificationTime: string;
}

export type QuakeResponse = CommonFeatureCollection<QuakeProperties>;

export type QuakeHistoryResponse = CommonFeatureCollection<QuakeHistoryProperties>;

export interface QuakeStatsResponse {
    magnitudeCount: {
        days365: Record<MMI, number>;
        days28: Record<MMI, number>;
        days7: Record<MMI, number>;
    };
    rate: {
        perDay: Record<MMI, number>;
    };
}

export type QuakesResponse = CommonFeatureCollection<QuakeProperties>;