import { GeoNet } from "../src/GeoNet";
import { MMI } from "../@types/common";

describe("QuakeMapUtil", () => {
    const geonet = new GeoNet();
    const coordinates: [number, number] = [174.7762, -41.2865];

    test.each([
        [MMI.Unknown, "unnoticeable", "#FEECDE"],
        [MMI.NotFelt, "unnoticeable", "#FEECDE"],
        [MMI.BarelyFelt, "unnoticeable", "#FEECDE"],
        [MMI.SlightlyFelt, "unnoticeable", "#FEECDE"],
        [MMI.Weak, "weak", "#FDD0A2"],
        [MMI.Light, "light", "#FDAE6B"],
        [MMI.Moderate, "moderate", "#FD8D3C"],
        [MMI.Strong, "strong", "#F16913"],
        [MMI.Severe, "severe", "#F03B20"],
        [MMI.Extreme, "extreme", "#8C2D04"],
    ])("should map MMI.%s to %s intensity and color %s", (mmi, expectedIntensity, expectedColor) => {
        // Test map URL generation
        const url = geonet.generateMapURL(coordinates, mmi);
        expect(url).toContain(`-${expectedIntensity}.png`);

        // Test color code generation
        const color = geonet.generateColourCode(mmi);
        expect(color).toBe(expectedColor);
    });

    describe("error handling", () => {
        test("should throw error for invalid coordinates in generateMapURL", () => {
            expect(() => geonet.generateMapURL(null as any, MMI.Light))
                .toThrow("Invalid coordinates provided.");
        });

        test("should throw error for invalid MMI in generateColourCode", () => {
            expect(() => geonet.generateColourCode(999 as any))
                .toThrow("MMI not provided, or was not a valid MMI.");
        });
    });
});