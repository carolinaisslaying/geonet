export interface Geometry {
    type: "Point";
    coordinates: [number, number];
}

export interface Feature<T> {
    type: "Feature";
    geometry: Geometry;
    properties: T;
}