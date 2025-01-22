export enum JSONFormatTypes {
    APPLICATION_JSON = "application/json",
    APPLICATION_JSON_VERSION_2 = "application/json;version=2",
    APPLICATION_VND_GEO_JSON_VERSION_2 = "application/vnd.geo+json;version=2"
}

export interface BaseServiceGETRequest {
    endpoint: string;
    format: JSONFormatTypes;
}