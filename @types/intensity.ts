/*
    Types relating to intensity endpoint requests.
*/

import { FeatureCollection as CommonFeatureCollection, MMI } from "./common";

/** Request parameters for measured shaking intensity over the last 60 minutes. */
export interface IntensityRequest {
    /** The type of shaking information. */
    type: "measured";
}

/** Request parameters for reported shaking intensity. */
export interface IntensityRequestReported {
    /** The type of shaking information. */
    type: "reported"
    /**
     * The aggregation method performed on reported values where there is a distribution of values. GeoNet defaults to
     * `max`.
     */
    aggregation: undefined | "max" | "median";
    /**
     * A valid quake public ID. Returns shaking information in a time window around the quake time. If not provided, the
     * information is for the last 60 minutes.
     */
    publicID: undefined | string;
}

/** Request parameters for `getIntensity`: either measured or reported shaking intensity. */
export type IntensityRequestUnion = IntensityRequest | IntensityRequestReported;

/*
    Types relating to intensity endpoint response.
*/

/** Properties of each shaking intensity feature. */
export interface IntensityProperties {
    /** The MMI measured at the point, or reported in the area around the point. */
    mmi: MMI;
    /** The count of MMI values reported in the area around the point. Only returned for reported intensity. */
    count: undefined | number;
    /** A summary of report counts by MMI. Only returned for reported intensity. */
    count_mmi: undefined | Partial<Record<MMI, number>>;
}

/** Shaking intensity information: GeoJSON features with the MMI at each point. */
export type IntensityResponse = CommonFeatureCollection<IntensityProperties> & {
    /** The total count of MMI values reported. Only returned for reported intensity. */
    count?: number;
    /** A summary of report counts by MMI across all features. Only returned for reported intensity. */
    count_mmi?: Partial<Record<MMI, number>>;
};