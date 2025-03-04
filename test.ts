import { GeoNet } from "./src/GeoNet";
import { MMI } from "./@types/common";
import { VolcanoID } from "./@types/volcano";

const geonet = new GeoNet();

// Intensity Service
geonet.getIntensity({ type: "measured" }).then((response) => {
    console.log('Intensity:', JSON.stringify(response, null, 2));
}).catch(error => {
    console.error('Error:', { message: error.message, cause: error.cause, stack: error.stack });
});