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
    Unknown = -1,         // No data or unclassified intensity
    NotFelt = 0,          // Unnoticeable: Not felt at all
    BarelyFelt = 1,       // Unnoticeable: Barely sensed by a very few people
    SlightlyFelt = 2,     // Unnoticeable: Felt indoors as a light vibration, no effect outdoors
    Weak = 3,             // Weak: Felt indoors as a light vibration, hanging objects may swing slightly
    Light = 4,            // Light: Generally noticed indoors, moderate vibration or jolt, light sleepers may be awakened
    Moderate = 5,         // Moderate: Felt outdoors and indoors, small objects may be shifted, some glassware may break
    Strong = 6,           // Strong: Felt by all, furniture and appliances may move, some non-structural building damage
    Severe = 7,           // Severe: Difficulty standing, significant damage to fragile or unsecured objects
    Extreme = 8           // Extreme: Alarm may approach panic, major structural damage, widespread destruction
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