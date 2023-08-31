import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.js";

describe("Volvo a million more page text", () => {
  before("Set up", async () => {
    await VolvoPage.open();
    await VolvoPage.consentButton.click();
  });

  // Depending on the scope more text tests can be added here
  describe("Titles is correct", () => {
    it("Page should contain correct title", async () => {
      const titleElement = await VolvoPage.title;
      await expect(titleElement).toBeDefined();
      await expect(titleElement).toHaveText(
        "Ideas that change the world are often the most controversial."
      );
    });

    it("Title should have correct styling", async () => {
      const fontSize = (
        await (await VolvoPage.title).getCSSProperty("font-size")
      ).value;
      const fontFontFamily = (
        await (await VolvoPage.title).getCSSProperty("font-family")
      ).value;
      const fontColor = (await (await VolvoPage.title).getCSSProperty("color"))
        .parsed.rgba;

      await expect(fontSize).toBe("40px");
      await expect(fontFontFamily).toBe("volvo novum");
      await expect(fontColor).toBe("rgba(0,0,0,0.96)");
    });
  });
});
