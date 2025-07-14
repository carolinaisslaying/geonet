import { FeatureCollection as CommonFeatureCollection, Status } from "./common";
import { QuakeProperties } from "./quake";

/* 
    Types relating to both volcano endpoint requests and responses.
*/

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

export interface VolcanoQuakeRequest {
    volcanoID: VolcanoID;
}

/* 
    Types relating to volcano endpoint responses.
*/

export enum VolcanoAviationColourCode {
    Green = "Green",
    Orange = "Orange",
    Red = "Red"
}

export enum VolcanoLevel {
    NoUnrest = 0,
    MinorUnrest = 1,
    ModerateUnrest = 2,
    MinorEruption = 3,
    ModerateEruption = 4,
    MajorEruption = 5
}

export interface VolcanoProperties {
    acc: VolcanoAviationColourCode;
    activity: string;
    hazards: string;
    level: VolcanoLevel;
    volcanoID: VolcanoID;
    volcanoTitle: string;
}

export type VolcanoAlertLevelResponse = CommonFeatureCollection<VolcanoProperties>;

export enum QuakeIntensity {
    Unnoticeable = "unnoticeable",
    Weak = "weak",
    Light = "light",
    Moderate = "moderate",
    Strong = "strong",
    Severe = "severe"
}

export interface VolcanoQuakeProperties extends QuakeProperties {
    intensity: QuakeIntensity;
    regionIntensity: QuakeIntensity;
    status: Status;
}

export type VolcanoQuakeResponse = CommonFeatureCollection<VolcanoQuakeProperties>;