/* 
    Types relating to intensity endpoint requests. 
*/

import { FeatureCollection as CommonFeatureCollection, MMI } from "./common";

export interface IntensityRequest {
    type: "measured";
}

export interface IntensityRequestReported {
    type: "reported"
    aggregation: undefined | "max" | "median";
    publicID: undefined | string;
}

export type IntensityRequestUnion = IntensityRequest | IntensityRequestReported;

/* 
    Types relating to intensity endpoint response. 
*/

export interface IntensityProperties {
    mmi: MMI;
    count: undefined | number;
    count_mmi: undefined | Record<MMI, number>;
}

export type IntensityResponse = CommonFeatureCollection<IntensityProperties>;