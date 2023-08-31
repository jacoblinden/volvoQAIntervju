import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.js";

describe("Links and routing", () => {
  before("Set up", async () => {
    await VolvoPage.open();
    await VolvoPage.consentButton.click();
  });

  beforeEach("Open page", async () => {
    await browser.url("intl/v/car-safety/a-million-more");
  });

  it("Learn more button routes to correct page", async () => {
    const learnMoreButton = await VolvoPage.LearnMoreButton;
    await learnMoreButton.click();
    await expect(browser).toHaveUrlContaining(
      "intl/v/car-safety/safety-heritage"
    );
  });
  it("Link mild hybrid cars routes to correct page", async () => {
    const linkMildHybridCars = await VolvoPage.getLinkMildHybridCars;
    await linkMildHybridCars.click();
    await expect(browser).toHaveUrlContaining("cars/other-powertrains");
  });
});
