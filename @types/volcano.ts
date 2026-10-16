import { FeatureCollection as CommonFeatureCollection, Status } from "./common";
import { QuakeProperties } from "./quake";

/*
    Types relating to both volcano endpoint requests and responses.
*/

/** Unique identifiers for volcanoes monitored by GeoNet. */
export enum VolcanoID {
    Taupō = "taupo",
    Tongariro = "tongariro",
    AucklandVolcanicField = "aucklandvolcanicfield",
    KermadecIslands = "kermadecislands",
    MayorIsland = "mayorisland",
    Ngāuruhoe = "ngauruhoe",
    Northland = "northland",
    Ōkataina = "okataina",
    Rotorua = "rotorua",
    TaranakiMaunga = "taranakiegmont",
    WhiteIsland = "whiteisland",
    Ruapehu = "ruapehu"
}

/*
    Types relating to volcano endpoint requests.
*/

/** Request parameters for `getVolcanoQuakes`. */
export interface VolcanoQuakeRequest {
    /** A valid volcano ID, e.g. `ruapehu`. */
    volcanoID: VolcanoID;
}

/*
    Types relating to volcano endpoint responses.
*/

/** Aviation colour code. */
export enum VolcanoAviationColourCode {
    Green = "Green",
    Yellow = "Yellow",
    Orange = "Orange",
    Red = "Red"
}

/** Volcanic Alert Level. */
export enum VolcanoLevel {
    NoUnrest = 0,
    MinorUnrest = 1,
    ModerateUnrest = 2,
    MinorEruption = 3,
    ModerateEruption = 4,
    MajorEruption = 5
}

/** Volcanic Alert Level properties for a volcano. */
export interface VolcanoProperties {
    /** Aviation colour code. */
    acc: VolcanoAviationColourCode;
    /** Volcanic activity. */
    activity: string;
    /** Most likely hazards. */
    hazards: string;
    /** Volcanic Alert Level. */
    level: VolcanoLevel;
    /** A unique identifier for the volcano. */
    volcanoID: VolcanoID;
    /** The volcano title. */
    volcanoTitle: string;
}

/** The current Volcanic Alert Level for volcanoes in New Zealand. */
export type VolcanoAlertLevelResponse = CommonFeatureCollection<VolcanoProperties>;

/** Quake intensity, as returned by the volcano quakes endpoint. */
export enum QuakeIntensity {
    Unnoticeable = "unnoticeable",
    Weak = "weak",
    Light = "light",
    Moderate = "moderate",
    Strong = "strong",
    Severe = "severe"
}

/** Properties of a quake in the vicinity of a volcano. */
export interface VolcanoQuakeProperties extends QuakeProperties {
    /** Quake intensity at the epicentre. */
    intensity: QuakeIntensity;
    /** Quake intensity at the closest locality in the New Zealand region. */
    regionIntensity: QuakeIntensity;
    /** The evaluation status of this information. */
    status: Status;
}

/** Quakes in the vicinity of a volcano (within a predefined region) in the past 60 days. */
export type VolcanoQuakeResponse = CommonFeatureCollection<VolcanoQuakeProperties>;