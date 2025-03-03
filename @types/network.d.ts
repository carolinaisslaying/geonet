import { Feature as CommonFeature } from "./common";
import { FDSNStationChannel } from "./sensor";
import { GNSSStationAntennaPeriod, GNSSStationReceiverPeriod } from "./sensor";

/* 
    Types relating to both network endpoint requests and responses.
*/

export enum SensorType {
    Accelerometer = 1,
    Barometer = 2,
    BroadbandSeismometer = 3,
    GNSSAntenna = 4,
    Hydrophone = 5,
    Microphone = 6,
    PressureSensor = 7,
    ShortPeriodBoreholeSeismometer = 8,
    ShortPeriodSeismometer = 9,
    StrongMotionSensor = 10
}

/* 
    Types relating to network endpoint requests.
*/

export interface NetworkSensorRequest {
    sensorType: SensorType;
    startDate?: string;
    endDate?: string;
    station?: string;
}

export interface NetworkGNSStationRequest {
    code: string;
}

export interface NetworkFDSNStationRequest {
    station: string;
    network: string;
}

/* 
    Types relating to network endpoint responses.
*/

export interface NetworkSensorProperties {
    Network: string;
    Station: string;
    Location: string;
    Code: string;
    Start: string;
    End: string;
    SensorType: SensorType;
}

export interface NetworkSensorResponse {
    type: "FeatureCollection";
    features: CommonFeature<NetworkSensorProperties>[];
}

export interface NetworkGNSStationResponse {
    Code: string;
    DomesNumber: string;
    Latitude: number;
    Longitude: number;
    Elevation: number;
    Antennas: GNSSStationAntennaPeriod[];
    Receivers: GNSSStationReceiverPeriod[];
}

export interface NetworkFDSNStationResponse {
    Network: string;
    Station: string;
    Name: string;
    Start: string;
    End: string;
    Channels: FDSNStationChannel[];
}