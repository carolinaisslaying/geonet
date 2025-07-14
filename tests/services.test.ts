import { GeoNet } from "../src/GeoNet";
import { MMI, Quality } from "../@types/common";
import { VolcanoID } from "../@types/volcano";
import { SensorType } from "../@types/network";
import { IntensityResponse } from "../@types/intensity";
import { QuakeResponse, QuakesResponse, QuakeHistoryResponse } from "../@types/quake";
import { VolcanoAlertLevelResponse, VolcanoQuakeResponse } from "../@types/volcano";
import { NetworkSensorResponse } from "../@types/network";

describe("GeoNet API", () => {
    const geonet = new GeoNet();

    describe("Intensity Service", () => {
        test("getIntensity should return valid intensity data", async () => {
            const intensity: IntensityResponse = await geonet.getIntensity({ type: "measured" });
            
            expect(intensity).toBeDefined();
            expect(intensity.type).toBe("FeatureCollection");
            expect(Array.isArray(intensity.features)).toBe(true);
            
            if (intensity.features.length > 0) {
                const feature = intensity.features[0];
                
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.mmi).toBe("number");
                
                expect(
                    feature.properties.count === undefined || typeof feature.properties.count === "number"
                ).toBe(true);
                
                expect(
                    feature.properties.count_mmi === undefined || typeof feature.properties.count_mmi === "object"
                ).toBe(true);
            }
        });
        
        test("getIntensity should throw on invalid type", async () => {
            // @ts-expect-error
            await expect(geonet.getIntensity({ type: "invalid" })).rejects.toThrow();
        });
    });

    describe("Strong Motion Service", () => {
        test("getStrong should return valid strong motion data", async () => {
            const strong = await geonet.getStrong("2025p074148");
            
            expect(strong).toBeDefined();
            expect(strong.type).toBeDefined();
            expect(strong.metadata).toBeDefined();
            expect(Array.isArray(strong.features)).toBe(true);
            
            if (strong.features.length > 0) {
                const feature = strong.features[0];
                
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.mmi).toBe("number");
                expect(typeof feature.properties.location).toBe("string");
            }
        });
        
        test("getStrong should throw on missing publicID", async () => {
            // @ts-expect-error
            await expect(geonet.getStrong()).rejects.toThrow();
        });
    });

    describe("News Service", () => {
        test("getNews should return news feed data with items", async () => {
            const news = await geonet.getNews(1);
            
            expect(news).toBeDefined();
            expect(typeof news.page).toBe("number");
            expect(typeof news.total).toBe("number");
            expect(Array.isArray(news.feed)).toBe(true);
            
            if (news.feed.length > 0) {
                const item = news.feed[0];
                
                expect(typeof item.title).toBe("string");
                expect(typeof item.type).toBe("string");
                expect(typeof item.published).toBe("string");
                expect(typeof item.link).toBe("string");
            }
        });
        
        test("getNews should throw on invalid page number", async () => {
            // @ts-expect-error
            await expect(geonet.getNews("not-a-number")).rejects.toThrow();
        });
    });

    describe("Quake Service", () => {
        test("getQuake should return valid single quake data", async () => {
            const quake: QuakeResponse = await geonet.getQuake("2025p074148");
            
            expect(quake).toBeDefined();
            expect(quake.type).toBe("FeatureCollection");
            expect(Array.isArray(quake.features)).toBe(true);
            
            if (quake.features.length > 0) {
                const feature = quake.features[0];
                
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.publicID).toBe("string");
                expect(typeof feature.properties.magnitude).toBe("number");
                expect(Object.values(MMI)).toContain(feature.properties.mmi);
                expect(Object.values(Quality)).toContain(feature.properties.quality);
            }
        });
        
        test("getQuake should throw on missing publicID", async () => {
            // @ts-expect-error
            await expect(geonet.getQuake()).rejects.toThrow();
        });
        
        test("getQuakes should return multiple quakes data", async () => {
            const quakes: QuakesResponse = await geonet.getQuakes(MMI.Light);
            expect(quakes).toBeDefined();
            expect(quakes.type).toBe("FeatureCollection");
            expect(Array.isArray(quakes.features)).toBe(true);
            if (quakes.features.length > 0) {
                const feature = quakes.features[0];
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
            }
        });
        
        test("getQuakes should throw on invalid MMI", async () => {
            await expect(geonet.getQuakes("invalid" as any)).rejects.toThrow();
        });
        
        test("getQuakeHistory should return quake history", async () => {
            const history: QuakeHistoryResponse = await geonet.getQuakeHistory("2025p074148");
            
            expect(history).toBeDefined();
            expect(history.type).toBe("FeatureCollection");
            expect(Array.isArray(history.features)).toBe(true);
            
            if (history.features.length > 0) {
                const feature = history.features[0];
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.modificationTime).toBe("string");
            }
        });
        test("getQuakeStats should return quake statistics", async () => {
            const stats = await geonet.getQuakeStats();

            expect(stats).toBeDefined();
            expect(stats.magnitudeCount).toBeDefined();
            expect(stats.rate).toBeDefined();
            expect(typeof stats.magnitudeCount.days365).toBe("object");
            expect(typeof stats.rate.perDay).toBe("object");
        });
    });

    describe("Volcano Service", () => {
        test("getVolcanoAlertLevel should return alert levels", async () => {
            const alerts: VolcanoAlertLevelResponse = await geonet.getVolcanoAlertLevel();
            
            expect(alerts).toBeDefined();
            expect(alerts.type).toBe("FeatureCollection");
            expect(Array.isArray(alerts.features)).toBe(true);
            
            if (alerts.features.length > 0) {
                const feature = alerts.features[0];
                
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.volcanoID).toBe("string");
                expect(typeof feature.properties.level).toBe("number");
            }
        });

        test("getVolcanoQuakes should return volcano quakes", async () => {
            const quakes: VolcanoQuakeResponse = await geonet.getVolcanoQuakes(VolcanoID.Taupō);
            
            expect(quakes).toBeDefined();
            expect(quakes.type).toBe("FeatureCollection");
            expect(Array.isArray(quakes.features)).toBe(true);
            
            if (quakes.features.length > 0) {
                const feature = quakes.features[0];
                
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.intensity).toBe("string");
                expect(typeof feature.properties.regionIntensity).toBe("string");
            }
        });

        test("getVolcanoQuakes should throw on invalid volcanoID", async () => {
            await expect(geonet.getVolcanoQuakes("invalid" as any)).rejects.toThrow();
        });
    });

    describe("Network Service", () => {
        test("getNetworkSensor should return sensor data", async () => {
            const sensor: NetworkSensorResponse = await geonet.getNetworkSensor({ sensorType: SensorType.Accelerometer });
           
            expect(sensor).toBeDefined();
            expect(sensor.type).toBe("FeatureCollection");
            expect(Array.isArray(sensor.features)).toBe(true);
           
            if (sensor.features.length > 0) {
                const feature = sensor.features[0];
                expect(feature.type).toBe("Feature");
                expect(feature.geometry).toBeDefined();
                expect(feature.properties).toBeDefined();
                expect(typeof feature.properties.Station).toBe("string");
                expect(typeof feature.properties.SensorType).toBe("string");
            }
        });

        test("getNetworkSensor should throw on missing sensorType", async () => {
            // @ts-expect-error
            await expect(geonet.getNetworkSensor({})).rejects.toThrow();
        });

        test("getNetworkGNSSDetails should return GNSS mark details", async () => {
            const gnss = await geonet.getNetworkGNSSDetails("DUND");
           
            expect(gnss).toBeDefined();
            expect(typeof gnss.Code).toBe("string");
            expect(Array.isArray(gnss.Antennas)).toBe(true);
            expect(Array.isArray(gnss.Receivers)).toBe(true);
        });

        test("getNetworkGNSSDetails should throw on missing code", async () => {
            // @ts-expect-error
            await expect(geonet.getNetworkGNSSDetails()).rejects.toThrow();
        });

        test("getNetworkFDSNDetails should return FDSN station details", async () => {
            const fdsn = await geonet.getNetworkFDSNDetails({
                network: "NZ",
                station: "QRZ"
            });
            
            expect(fdsn).toBeDefined();
            expect(typeof fdsn.Network).toBe("string");
            expect(typeof fdsn.Station).toBe("string");
            expect(Array.isArray(fdsn.Channels)).toBe(true);
        });

        test("getNetworkFDSNDetails should throw on missing station or network", async () => {
            // @ts-expect-error
            await expect(geonet.getNetworkFDSNDetails({ network: "NZ" })).rejects.toThrow();
            // @ts-expect-error
            await expect(geonet.getNetworkFDSNDetails({ station: "QRZ" })).rejects.toThrow();
        });
    });
});