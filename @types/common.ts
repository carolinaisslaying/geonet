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
    Unknown = -1,
    NotFelt = 0,
    Weak = 1,
    Light = 2,
    Moderate = 3,
    Strong = 4,
    Severe = 5,
    VeryStrong = 6,
    Violent = 7,
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