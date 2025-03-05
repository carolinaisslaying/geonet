import { Geometry, MMI } from "../../@types/common";

/**
 * Utility class for generating GeoNet earthquake map URLs.
 * 
 * @since 1.0.0 
 */
export class QuakeMapUtil {
    protected readonly baseMapURL = "https://static.geonet.org.nz/maps/4/quake/xxxhdpi/";
    
    /**
     * Generates a link to the GeoNet quake map URL for a given set of coordinates and MMI.
     * 
     * @param {Geometry["coordinates"]} coordinates - The coordinates of the quake. Position 0 is the longitude, and position 1 is the latitude.
     * @param {MMI} mmi - The New Zealand Modified Mercalli Intensity of the quake.
     * @returns {string} - The URL string for the quake map.
     * @throws {Error} - Throws an error if the coordinates are invalid or if the MMI is not provided.
     * @since 1.0.0
     */
    public generateMapURL(coordinates: Geometry["coordinates"], mmi: MMI): string {
        if (!coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
            throw new Error("Invalid coordinates provided.");
        }

        if (isNaN(coordinates[0]) || isNaN(coordinates[1])) {
            throw new Error("Coordinates must be an integer.");
        }

        if (mmi === undefined || (!Object.values(MMI).includes(mmi))) throw new Error("MMI not provided, or was not a valid MMI.");

        const formattedCoordinates = Math.round(coordinates[0]) + "E" + Math.abs(Math.round(coordinates[1])) + "S";

        let intensity: "unnoticeable" | "weak" | "light" | "moderate" | "strong" | "severe" | "extreme";

        switch (mmi) {
            case MMI.Weak:
                intensity = "weak";
                break;
            case MMI.Light:
                intensity = "light";
                break;
            case MMI.Moderate:
                intensity = "moderate";
                break;
            case MMI.Strong:
                intensity = "strong";
                break;
            case MMI.Severe:
                intensity = "severe";
                break;
            case MMI.Extreme:
                intensity = "extreme";
                break;
            default:
                intensity = "unnoticeable";
                break;
        }

        return `${this.baseMapURL}${formattedCoordinates}-${intensity}.png`;
    }
}