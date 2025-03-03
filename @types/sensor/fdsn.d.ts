export interface FDSNStationComment {
    Value: string;
}

export interface FDSNStationEquipment {
    Type?: string;
    Manufacturer: string;
    Model: string;
}

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