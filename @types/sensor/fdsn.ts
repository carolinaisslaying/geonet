/** A comment on an FDSN station channel. */
export interface FDSNStationComment {
    Value: string;
}

/** Equipment on an FDSN station channel: its sensor or data logger. */
export interface FDSNStationEquipment {
    Type?: string;
    Manufacturer: string;
    Model: string;
}

/** A channel of an FDSN station. */
export interface FDSNStationChannel {
    Code: string;
    Location: string;
    Start: string;
    End: string;
    Latitude: number;
    Longitude: number;
    Elevation: number;
    Depth: number;
    Azimuth: number;
    Dip: number;
    SampleRate: number;
    Sensor: FDSNStationEquipment;
    DataLogger: FDSNStationEquipment;
    Comments: FDSNStationComment[];
}