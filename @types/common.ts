export interface Geometry {
    type: "Point";
    coordinates: [number, number];
}

export interface Feature<T> {
    type: "Feature";
    geometry: Geometry;
    properties: T;
}

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

export enum Quality {
    Best = "best",
    Preliminary = "preliminary",
    Automatic = "automatic",
    Deleted = "deleted"
}

export enum Status {
    Automatic = "automatic",
    Reviewed = "reviewed",
    Duplicate = "duplicate",
    Deleted = "deleted"
}