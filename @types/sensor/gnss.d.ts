import { Feature as CommonFeature } from "../common";
import { SensorType } from "../network";

export interface GNSSStationFirmware {
    Version: string;
    Start: string;
    End: string;
}

export interface GNSSStationReceiver {
    Model: string;
    SerialNumber: string;
    Firmware: GNSSStationFirmware[];
}

export interface GNSSStationReceiverPeriod {
    Receiver: GNSSStationReceiver;
    Start: string;
    End: string;
}

export interface GNSSStationAntennaDetails {
    Model: string;
    SerialNumber: string;
}

export interface GNSSStationAntennaOffset {
    Vertical: number;
    North: number;
    East: number;
}

export interface GNSSStationAntennaPeriod {
    Antenna: GNSSStationAntennaDetails;
    Offset: GNSSStationAntennaOffset;
    Start: string;
    End: string;
}