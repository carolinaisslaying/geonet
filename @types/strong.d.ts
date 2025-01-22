import { Feature as CommonFeature } from './common';

export interface StrongRequest {
    publicID: string;
}

export interface StrongResponse {
    type: string;
    metadata: Metadata;
    features: StrongFeature[];
}

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