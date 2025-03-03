import { GeoNet } from "../src/GeoNet";

describe("GeoNet", () => {
  const geonet = new GeoNet();

  test("getQuakes should return earthquake data", async () => {
    const quakes = await geonet.getQuakes({ mmi: 1 });
    expect(quakes).toBeDefined();
    expect(quakes.features).toBeDefined();
    expect(Array.isArray(quakes.features)).toBe(true);
  });
});