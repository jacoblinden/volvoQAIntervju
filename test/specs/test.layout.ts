import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.ts";

describe("As a user i want to see a complete page view", () => {
  
    before("Set up", async () => {
    await VolvoPage.open();
  });
  
  it("Should contain intro title", async () => {
    const intro = await VolvoPage.intro;
    await expect(intro).toExist();
  });

  it("Should contain main video", async () => {
    const video = await VolvoPage.mainVideo ;
    await expect(video).toExist();
  });

  it("Should contain text statement", async () => {
    const textStatements = await VolvoPage.textStatements;
    await expect(textStatements).toExist();
  });

  it("Should contain decades of innovation part", async () => {
    const container = await VolvoPage.DecadesOfInnovationContainer;
    await expect(container).toExist();
  });

  it("Should contain car carousel", async () => {
    const bottomCarousel = await VolvoPage.bottomCarousel;
    await expect(bottomCarousel).toExist();
  });
  it("Should contain bottom disclaimer ", async () => {
    const bottomDisclaimer = await VolvoPage.bottomDisclaimer;
    await expect(bottomDisclaimer).toExist();
  });

});
