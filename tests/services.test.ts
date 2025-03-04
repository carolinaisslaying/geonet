import { GeoNet } from "../src/GeoNet";
import { MMI } from "../@types/common";
import { VolcanoID } from "../@types/volcano";
import { SensorType } from "../@types/network";

describe("GeoNet API", () => {
  const geonet = new GeoNet();

  describe("Intensity Service", () => {
    test("getIntensity should return intensity data", async () => {
      const intensity = await geonet.getIntensity({ type: "measured" });
      expect(intensity).toBeDefined();
      expect(intensity.type).toBe("FeatureCollection");
    });
  });

  describe("Strong Motion Service", () => {
    test("getStrong should return strong motion data", async () => {
      const strong = await geonet.getStrong("2025p074148");
      expect(strong).toBeDefined();
      expect(strong.features).toBeDefined();
    });
  });

  describe("News Service", () => {
    test("getNews should return news feed data", async () => {
      const news = await geonet.getNews(1);
      expect(news).toBeDefined();
      expect(news.feed).toBeDefined();
    });
  });

  describe("Quake Service", () => {
    test("getQuake should return single quake data", async () => {
      const quake = await geonet.getQuake("2025p074148");
      expect(quake).toBeDefined();
      expect(quake.features).toBeDefined();
    });

    test("getQuakes should return multiple quakes data", async () => {
      const quakes = await geonet.getQuakes(MMI.Light);
      expect(quakes).toBeDefined();
      expect(Array.isArray(quakes.features)).toBe(true);
    });

    test("getQuakeHistory should return quake history", async () => {
      const history = await geonet.getQuakeHistory("2025p074148");
      expect(history).toBeDefined();
      expect(history.features).toBeDefined();
    });

    test("getQuakeStats should return quake statistics", async () => {
      const stats = await geonet.getQuakeStats();
      expect(stats).toBeDefined();
    });
  });

  describe("Volcano Service", () => {
    test("getVolcanoAlertLevel should return alert levels", async () => {
      const alerts = await geonet.getVolcanoAlertLevel();
      expect(alerts).toBeDefined();
      expect(alerts.features).toBeDefined();
    });

    test("getVolcanoQuakes should return volcano quakes", async () => {
      const quakes = await geonet.getVolcanoQuakes(VolcanoID.Taupō);
      expect(quakes).toBeDefined();
      expect(quakes.features).toBeDefined();
    });
  });

  describe("Network Service", () => {
    test("getNetworkSensor should return sensor data", async () => {
      const sensor = await geonet.getNetworkSensor({ sensorType: SensorType.Accelerometer });
      expect(sensor).toBeDefined();
      expect(sensor.features).toBeDefined();
    });

    test("getNetworkGNSSDetails should return GNSS mark details", async () => {
      const gnss = await geonet.getNetworkGNSSDetails("DUND");
      expect(gnss).toBeDefined();
      expect(gnss.Antennas).toBeDefined();
      expect(gnss.Receivers).toBeDefined();
    });

    test("getNetworkFDSNDetails should return FDSN station details", async () => {
      const fdsn = await geonet.getNetworkFDSNDetails({
        network: "NZ",
        station: "QRZ"
      });
      expect(fdsn).toBeDefined();
      expect(fdsn.Channels).toBeDefined();
    });
  });
});