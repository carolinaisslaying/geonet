import { GeoNet } from "../src/GeoNet";
import { MMI } from "../@types/common";

describe("QuakeMapUtil", () => {
    const geonet = new GeoNet();
    const coordinates: [number, number] = [174.7762, -41.2865];

    test.each([
        [MMI.Unknown, "unnoticeable"],
        [MMI.NotFelt, "unnoticeable"],
        [MMI.BarelyFelt, "unnoticeable"],
        [MMI.SlightlyFelt, "unnoticeable"],
        [MMI.Weak, "weak"],
        [MMI.Light, "light"],
        [MMI.Moderate, "moderate"],
        [MMI.Strong, "strong"],
        [MMI.Severe, "severe"],
        [MMI.Extreme, "extreme"],
    ])("should map MMI.%s to %s intensity", (mmi, expected) => {
        const url = geonet.generateMapURL(coordinates, mmi);
        expect(url).toContain(`-${expected}.png`);
    });
});