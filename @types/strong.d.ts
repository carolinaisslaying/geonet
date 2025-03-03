import { Feature as CommonFeature } from "./common";

/* 
    Types relating to strong endpoint requests.
*/

export interface StrongRequest {
    publicID: string;
}

/* 
    Types relating to strong endpoint responses.
*/

export interface Metadata {
    author: string;
    depth: number;
    description: string;
    event_id: string;
    latitude: number;
    longitude: number;
    mag_type: string;
    magnitude: number;
    version: string;
}

export interface StrongProperties {
    distance: number;
    location: string;
    mmi: number;
    name: string;
    network: string;
    pga_h: number;
    pga_v: number;
    pgv_h: number;
    pgv_v: number;
    station: string;
}

export type StrongFeature = CommonFeature<StrongProperties>;

export interface StrongResponse {
    type: string;
    metadata: Metadata;
    features: StrongFeature[];
}