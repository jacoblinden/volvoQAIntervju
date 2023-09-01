import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.js";

describe("As a user i want to see the title", () => {
  before("Set up", async () => {
    await VolvoPage.open();
    await VolvoPage.consentButton.click();
  });
    it("Should contain title", async () => {
      const titleElement = await VolvoPage.title;
      await expect(titleElement).toBeDefined();
      
      const tileText = await titleElement.getText();
      await expect(tileText.length).toBeGreaterThan(0);
    });

    it("Should have correct styling", async () => {
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
