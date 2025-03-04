import { GeoNet } from "../src/GeoNet";
import { MMI } from "../@types/common";

describe("QuakeMapgeonet", () => {
    const geonet = new GeoNet();
    const validCoordinates: [number, number] = [174.7762, -41.2865];

    describe("generateMapURL", () => {
        test("should generate unnoticeable intensity map URL for MMI.NotFelt", () => {
            const url = geonet.generateMapURL(validCoordinates, MMI.NotFelt);
            expect(url).toContain("175E41S-unnoticeable.png");
        });

        test("should generate weak intensity map URL for MMI.Weak to MMI.Light", () => {
            const weakMMIs = [MMI.Weak, MMI.Light];
            weakMMIs.forEach(mmi => {
                const url = geonet.generateMapURL(validCoordinates, mmi);
                expect(url).toContain("175E41S-weak.png");
            });
        });

        test("should generate moderate intensity map URL for MMI.Moderate to MMI.Strong", () => {
            const moderateMMIs = [MMI.Moderate, MMI.Strong];
            moderateMMIs.forEach(mmi => {
                const url = geonet.generateMapURL(validCoordinates, mmi);
                expect(url).toContain("175E41S-moderate.png");
            });
        });

        test("should generate strong intensity map URL for MMI values above Strong", () => {
            const strongMMIs = [MMI.Severe, MMI.VeryStrong, MMI.Violent, MMI.Extreme];
            strongMMIs.forEach(mmi => {
                const url = geonet.generateMapURL(validCoordinates, mmi);
                expect(url).toContain("175E41S-strong.png");
            });
        });

        test("should throw error for invalid coordinates", () => {
            expect(() => geonet.generateMapURL(null as any, MMI.Light)).toThrow("Invalid coordinates provided");
            expect(() => geonet.generateMapURL([1] as any, MMI.Light)).toThrow("Invalid coordinates provided");
            expect(() => geonet.generateMapURL([NaN, 1], MMI.Light)).toThrow("Coordinates must be an integer");
        });

        test("should throw error for invalid MMI", () => {
            expect(() => geonet.generateMapURL(validCoordinates, null as any)).toThrow("MMI not provided");
            expect(() => geonet.generateMapURL(validCoordinates, 999 as any)).toThrow("not a valid MMI");
        });

        test("should round coordinates to nearest integer", () => {
            const url = geonet.generateMapURL([174.6, -41.4], MMI.Light);
            expect(url).toContain("175E41S");
        });
    });
});