/**
 * Formats and versions for the `Accept` header of GeoNet API requests.
 *
 * @remarks
 * GeoNet versions its API queries via the `Accept` header, which must be specified exactly as given for the endpoint
 * being queried.
 *
 * @see {@link https://api.geonet.org.nz} GeoNet API Documentation.
 */
export enum JSONFormatTypes {
    /** JSON (`application/json`). Used by the strong motion endpoint. */
    APPLICATION_JSON = "application/json",
    /** JSON, version 2 (`application/json;version=2`). */
    APPLICATION_JSON_VERSION_2 = "application/json;version=2",
    /** GeoJSON, version 2 (`application/vnd.geo+json;version=2`). */
    APPLICATION_VND_GEO_JSON_VERSION_2 = "application/vnd.geo+json;version=2"
}

/** A GET request to the GeoNet API, as made by `BaseService`. */
export interface BaseServiceGETRequest {
    /** The endpoint path, appended to `https://api.geonet.org.nz`. Must start with a forward slash (/). */
    endpoint: string;
    /** The format and version sent in the `Accept` and `Content-Type` headers. */
    format: JSONFormatTypes;
}