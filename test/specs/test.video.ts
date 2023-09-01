import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.ts";

describe("As a user, i want to watch a video", () => {
  before("Set up", async () => {
    await VolvoPage.open();
    await VolvoPage.consentButton.click();
  });

  it("Should contain mp4 volvo car image", async () => {
    const videoSource = await VolvoPage.videoSource;
    const source = await videoSource.getProperty("src");
    await expect(source).toContain("https://www.volvocars.com/images/");
    await expect(source).toContain(".mp4");
  });

  it(" Video should autostart ", async () => {
    const video = await VolvoPage.video;
    await expect(video).toHaveAttribute("preload", "auto");
    const videoPlayButton = await VolvoPage.videoPlayButton;

    await videoPlayButton.waitForClickable({ timeout: 1000 });
    await expect(videoPlayButton).toHaveAttribute("aria-label", "pause");
  });

  it("Button should stop and start video", async () => {
    const videoPlayButton = await VolvoPage.videoPlayButton;
    await videoPlayButton.waitForClickable({ timeout: 1000 });

    await expect(videoPlayButton).toHaveAttribute("aria-label", "pause");
    await videoPlayButton.click();
    await expect(videoPlayButton).toHaveAttribute("aria-label", "play");
  });

  it("Pressing button watch story should start iframe player", async () => {
    const videoWatchStoryButton = await VolvoPage.videoWatchStoryButton;
    await videoWatchStoryButton.waitForClickable({ timeout: 1000 });
    await videoWatchStoryButton.click();
    await VolvoPage.youtubeFrame.waitForDisplayed({ timeout: 2000 });
    await expect(VolvoPage.youtubeFrame).toHaveAttrContaining(
      "src",
      "www.youtube.com"
    );
  });
});