import { FeatureCollection as CommonFeatureCollection } from "./common";
import { FDSNStationChannel } from "./sensor";
import { GNSSStationAntennaPeriod, GNSSStationReceiverPeriod } from "./sensor";

/*
    Types relating to both network endpoint requests and responses.
*/

/** Sensor types for `getNetworkSensor`. */
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

/** Request parameters for `getNetworkSensor`. */
export interface NetworkSensorRequest {
    /** The type of sensor. */
    sensorType: SensorType;
    /** The start date of the sensor. */
    startDate?: string;
    /** The end date of the sensor. */
    endDate?: string;
    /** The station code. */
    station?: string;
}

/** Request parameters for a GNSS mark. */
export interface NetworkGNSStationRequest {
    /** The GNSS mark code. */
    code: string;
}

/** Request parameters for `getNetworkFDSNDetails`. */
export interface NetworkFDSNStationRequest {
    /** The FDSN station code. */
    station: string;
    /** The FDSN network code. */
    network: string;
}

/*
    Types relating to network endpoint responses.
*/

/**
 * Properties of each sensor feature returned by `getNetworkSensor`.
 *
 * @remarks
 * GNSS antenna features (`SensorType.GNSSAntenna`) return `Mark` instead of `Network`, `Station` and `Location`.
 */
export interface NetworkSensorProperties {
    /** The network ID. Not returned for GNSS antennas. */
    Network?: string;
    /** The station code. Not returned for GNSS antennas. */
    Station?: string;
    /** The location of the sensor. Not returned for GNSS antennas. */
    Location?: string;
    /** The GNSS mark code. Only returned for GNSS antennas. */
    Mark?: string;
    /** The station code, or the GNSS mark code for GNSS antennas. */
    Code: string;
    /** The start date of the sensor. */
    Start: string;
    /** The end date of the sensor. */
    End: string;
    /** The sensor type. */
    SensorType: string;
}

/** GeoNet network sensor data: GeoJSON features, one for each sensor. */
export type NetworkSensorResponse = CommonFeatureCollection<NetworkSensorProperties>;

/** Details of a GNSS mark, returned by `getNetworkGNSSDetails`. */
export interface NetworkGNSStationResponse {
    /** The GNSS mark code. */
    Code: string;
    DomesNumber: string;
    Latitude: number;
    Longitude: number;
    Elevation: number;
    Antennas: GNSSStationAntennaPeriod[];
    Receivers: GNSSStationReceiverPeriod[];
}

/** Details of an FDSN station, returned by `getNetworkFDSNDetails`. */
export interface NetworkFDSNStationResponse {
    /** The FDSN network code. */
    Network: string;
    /** The FDSN station code. */
    Station: string;
    Name: string;
    Start: string;
    End: string;
    Channels: FDSNStationChannel[];
}