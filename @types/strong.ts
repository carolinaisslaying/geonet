import { Feature as CommonFeature, MMI } from "./common";

/*
    Types relating to strong endpoint requests.
*/

/** Request parameters for `getStrong`. */
export interface StrongRequest {
    /** A valid quake public ID. */
    publicID: string;
}

/*
    Types relating to strong endpoint responses.
*/

/** Metadata about the quake. */
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

/**
 * Strong motion data from a station.
 *
 * @remarks
 * GeoNet gives peak ground acceleration (PGA) in %g, and peak ground velocity (PGV) in cm/second.
 */
export interface StrongProperties {
    distance: number;
    location: string;
    mmi: MMI;
    name: string;
    network: string;
    pga_h: number;
    pga_v: number;
    pgv_h: number;
    pgv_v: number;
    station: string;
}

/** A GeoJSON feature with strong motion data from a station. */
export type StrongFeature = CommonFeature<StrongProperties>;

/** Strong motion information for a quake: quake metadata and strong motion data from stations. */
export interface StrongResponse {
    /** The GeoJSON object type. */
    type: string;
    /** Metadata about the quake. */
    metadata: Metadata;
    /** GeoJSON features with strong motion data from stations. */
    features: StrongFeature[];
}