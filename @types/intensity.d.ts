/* 
    Types relating to intensity endpoint requests. 
*/

import { Feature as CommonFeature } from "./common";

export interface IntensityRequest {
    type: "measured";
    publicID: undefined | string;
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
    mmi: number;
    count: number;
    count_mmi: Record<number, number>;
}

export type IntensityResponse = CommonFeature<IntensityProperties>;

