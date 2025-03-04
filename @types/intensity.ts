/* 
    Types relating to intensity endpoint requests. 
*/

import { Feature as CommonFeature, MMI } from "./common";

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
    count: number;
    count_mmi: Record<MMI, number>;
}

export type IntensityResponse = CommonFeature<IntensityProperties>;

