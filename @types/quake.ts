import { FeatureCollection as CommonFeatureCollection, MMI, Quality } from "./common";

/*
    Types relating to quake endpoint requests.
*/

/** Request parameters for a single quake. */
export interface QuakeRequest {
    /** A valid public ID for a quake, e.g. `2014p715167`. */
    publicID: string;
}

/** Request parameters for `getQuakes`. */
export interface QuakesRequest {
    /**
     * Requests quakes that may have caused shaking greater than or equal to this MMI value in the New Zealand region.
     */
    mmi: MMI;
}

/*
    Types relating to quake endpoint responses.
*/

/** Properties of a quake feature. */
export interface QuakeProperties {
    /** The unique public identifier for this quake. */
    publicID: string;
    /** The origin time of the quake. */
    time: string;
    /** The depth of the quake in km. */
    depth: number;
    /** The summary magnitude for the quake. */
    magnitude: number;
    /** The calculated MMI shaking at the closest locality in the New Zealand region. */
    mmi: MMI;
    /** Distance and direction to the nearest locality. */
    locality: string;
    /** The quality of this information. */
    quality: Quality;
}

/** Properties of a quake location history feature. */
export interface QuakeHistoryProperties extends QuakeProperties {
    /** The modification time of this information. */
    modificationTime: string;
}

/** Information for a single quake. */
export type QuakeResponse = CommonFeatureCollection<QuakeProperties>;

/** Location history for a single quake. Not all quakes have a location history, so the features array may be empty. */
export type QuakeHistoryResponse = CommonFeatureCollection<QuakeHistoryProperties>;

/** Quake statistics. */
export interface QuakeStatsResponse {
    /** Summaries of magnitude by count over the last 7, 28 and 365 days. */
    magnitudeCount: {
        /** Magnitude by count over the last 365 days, keyed by whole magnitude (e.g. `"2"`). */
        days365: Record<MMI, number> & Record<string, number>;
        /** Magnitude by count over the last 28 days, keyed by whole magnitude (e.g. `"2"`). */
        days28: Record<MMI, number> & Record<string, number>;
        /** Magnitude by count over the last 7 days, keyed by whole magnitude (e.g. `"2"`). */
        days7: Record<MMI, number> & Record<string, number>;
    };
    /** Quake occurrence rates. */
    rate: {
        /** A per-day summary by count of quake occurrence, keyed by ISO 8601 date (e.g. `"2025-10-16T00:00:00+00:00"`). */
        perDay: Record<MMI, number> & Record<string, number>;
    };
}

/** Quakes possibly felt in the New Zealand region during the last 365 days, up to a maximum of 100 quakes. */
export type QuakesResponse = CommonFeatureCollection<QuakeProperties>;