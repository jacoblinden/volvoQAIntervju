import { expect } from "@wdio/globals";
import NotFoundPage from "../pageobjects/notFound.page.ts";

describe("As a user, i want it to be clear that i navigated to and invalid address", () => {
  before("Set up", async () => {
    await NotFoundPage.open();
  });

  it("Is navigated to the invalid page when incorrect address has been given", async () => {
    const notFoundTitle = await NotFoundPage.notFoundTitle;
    await expect(notFoundTitle).toExist();
  });
});