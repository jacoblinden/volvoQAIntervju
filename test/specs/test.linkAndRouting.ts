import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.ts";
import NotFoundPage from "../pageobjects/notFound.page.ts";

describe("As a user i want to navigate with a link", () => {
  before("Set up", async () => {
    await VolvoPage.open();
    await VolvoPage.consentButton.click();
  });

  beforeEach("Open page", async () => {
    await browser.url("intl/v/car-safety/a-million-more");
  });

  it("Learn more button links to correct site ", async () => {
    const learnMoreButton = await VolvoPage.LearnMoreButton;
    await learnMoreButton.click();
    await expect(browser).toHaveUrlContaining(
      "intl/v/car-safety/safety-heritage"
    );
    const notFoundTitle = NotFoundPage.notFoundTitle;
    await expect(notFoundTitle).not.toExist();
  });

  it("Mild hybrid cars link routes to correct page", async () => {
    const linkMildHybridCars = await VolvoPage.getLinkMildHybridCars;
    await linkMildHybridCars.click();
    await expect(browser).toHaveUrlContaining("cars/other-powertrains");

    const notFoundTitle = NotFoundPage.notFoundTitle;
    await expect(notFoundTitle).not.toExist();
  });

  it("All links contain a path", async () => {
    const tags = await VolvoPage.allAtags;
    await expect(tags).toExist();
    await expect(tags.length).toBeGreaterThan(0);
    for (let i = 0; i < tags.length; i++) {
      const link = await tags[i].getAttribute("href");
      expect(link).not.toEqual("");
    }
  });

  it("External links should open a new tab", async () => {
    const tags = await VolvoPage.allAtags;
    await expect(tags.length).toBeGreaterThan(0);
    for (let i = 0; i < tags.length; i++) {
      const link = await tags[i].getAttribute("href");
      if (link.includes("https")) {
        await expect(tags[i]).toHaveAttribute("target", "_blank");
      }
    }
  });

  it("Internal links should redirect user", async () => {
    const tags = await VolvoPage.allAtags;
    await expect(tags.length).toBeGreaterThan(0);
    for (let i = 0; i < tags.length; i++) {
      const link = await tags[i].getAttribute("href");
      await expect(link).toBeDefined();

      if (!link.includes("https")) {
        await expect(tags[i]).not.toHaveAttribute("target", "_blank");
      }
    }
  });
});
