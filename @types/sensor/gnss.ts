import { Feature as CommonFeature } from "../common";
import { SensorType } from "../network";

/** Firmware of a GNSS receiver over a period of time. */
export interface GNSSStationFirmware {
    Version: string;
    Start: string;
    End: string;
}

/** A GNSS receiver. */
export interface GNSSStationReceiver {
    Model: string;
    SerialNumber: string;
    Firmware: GNSSStationFirmware[];
}

/** A GNSS receiver at a mark over a period of time. */
export interface GNSSStationReceiverPeriod {
    Receiver: GNSSStationReceiver;
    Start: string;
    End: string;
}

/** A GNSS antenna. */
export interface GNSSStationAntennaDetails {
    Model: string;
    SerialNumber: string;
}

/** The offset of a GNSS antenna. */
export interface GNSSStationAntennaOffset {
    Vertical: number;
    North: number;
    East: number;
}

/** A GNSS antenna at a mark over a period of time. */
export interface GNSSStationAntennaPeriod {
    Antenna: GNSSStationAntennaDetails;
    Offset: GNSSStationAntennaOffset;
    Start: string;
    End: string;
}