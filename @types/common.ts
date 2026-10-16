/** A GeoJSON point geometry. */
export interface Geometry {
    /** The GeoJSON geometry type. Always `"Point"`. */
    type: "Point";
    /** The point's coordinates. Position 0 is the longitude, and position 1 is the latitude. */
    coordinates: [number, number];
}

/**
 * A GeoJSON feature collection, as returned by most GeoNet API endpoints.
 *
 * @typeParam T - The type of each feature's properties.
 */
export interface FeatureCollection<T> {
    /** The GeoJSON object type. Always `"FeatureCollection"`. */
    type: "FeatureCollection";
    /** The features in the collection. */
    features: Feature<T>[];
}

/**
 * A GeoJSON feature: a point geometry and its properties.
 *
 * @typeParam T - The type of the feature's properties.
 */
export interface Feature<T> {
    /** The GeoJSON object type. Always `"Feature"`. */
    type: "Feature";
    /** The feature's location. */
    geometry: Geometry;
    /** The feature's properties, which depend on the endpoint. */
    properties: T;
}

/**
 * The New Zealand Modified Mercalli Intensity (MMI) shaking scale.
 *
 * @remarks
 * GeoNet accepts values from -1 to 8 inclusive. -1 is used for quakes that are too small to calculate a stable MMI
 * value for.
 */
export enum MMI {
    /** No data or unclassified intensity. */
    Unknown = -1,
    /** Unnoticeable: Not felt at all. */
    NotFelt = 0,
    /** Unnoticeable: Barely sensed by a very few people. */
    BarelyFelt = 1,
    /** Unnoticeable: Felt indoors as a light vibration, no effect outdoors. */
    SlightlyFelt = 2,
    /** Weak: Felt indoors as a light vibration, hanging objects may swing slightly. */
    Weak = 3,
    /** Light: Generally noticed indoors, moderate vibration or jolt, light sleepers may be awakened. */
    Light = 4,
    /** Moderate: Felt outdoors and indoors, small objects may be shifted, some glassware may break. */
    Moderate = 5,
    /** Strong: Felt by all, furniture and appliances may move, some non-structural building damage. */
    Strong = 6,
    /** Severe: Difficulty standing, significant damage to fragile or unsecured objects. */
    Severe = 7,
    /** Extreme: Alarm may approach panic, major structural damage, widespread destruction. */
    Extreme = 8
}

/** The quality of quake information: best, preliminary, automatic or deleted. */
export enum Quality {
    Best = "best",
    Preliminary = "preliminary",
    Automatic = "automatic",
    Deleted = "deleted"
}

/** The evaluation status of quake information: automatic, reviewed, duplicate or deleted. */
export enum Status {
    Automatic = "automatic",
    Reviewed = "reviewed",
    Duplicate = "duplicate",
    Deleted = "deleted"
}