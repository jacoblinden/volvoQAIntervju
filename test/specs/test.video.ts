import { expect } from "@wdio/globals";
import VolvoPage from "../pageobjects/volvo.page.js";

describe("Volvo a million more page video", () => {
  before("Set up", async () => {
    await VolvoPage.open();
    await VolvoPage.consentButton.click();
  });

  it("Video should have correct source", async () => {
    const videoSource = await VolvoPage.videoSource;
    await expect(videoSource).toHaveAttribute(
      "src",
      "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4"
    );
  });
  it("Video should auto start", async () => {
    const video = await VolvoPage.video;
    await expect(video).toHaveAttribute("preload", "auto");
    const videoPlayButton = await VolvoPage.videoPlayButton;

    await videoPlayButton.waitForClickable({ timeout: 1000 });
    await expect(videoPlayButton).toHaveAttribute("aria-label", "pause");
  }),
    it("Video button should pause and play", async () => {
      const videoPlayButton = await VolvoPage.videoPlayButton;
      await videoPlayButton.waitForClickable({ timeout: 1000 });

      await expect(videoPlayButton).toHaveAttribute("aria-label", "pause");
      await videoPlayButton.click();
      await expect(videoPlayButton).toHaveAttribute("aria-label", "play");
    });

  it("Watch the story button should set youtube video", async () => {
    const videoWatchStoryButton = await VolvoPage.videoWatchStoryButton;
    await videoWatchStoryButton.waitForClickable({ timeout: 1000 });
    await videoWatchStoryButton.click();
    await VolvoPage.youtubeFrame.waitForDisplayed({ timeout: 2000 });
    await expect(VolvoPage.youtubeFrame).toHaveAttrContaining(
      "src",
      "https://www.youtube.com/embed/fj_WFwVOYn8?color=white&cc_load_policy=1&rel=0&autoplay=1&cc_lang_pref=en&hl=en"
    );
  });
});
