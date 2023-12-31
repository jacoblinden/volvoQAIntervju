import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VolvoPage extends Page {
  public get title() {
    return $("#ModelIntro-1 > section > h2");
  }

  public get video() {
    return this.videoContainer.$("video");
  }

  public get videoSource() {
    return this.videoContainer.$("video>source");
  }

  public get videoContainer() {
    return $("#Video-1>section>div>button>div");
  }

  public get videoPlayButton() {
    return this.videoContainer.$("button");
  }

  public get videoWatchStoryButton() {
    return $("#Video-1 > section > div > div > div > button");
  }

  public get titleModel() {
    return $("#ModelTitle-1");
  }

  public get youtubeFrame() {
    return $("#Video-1 > section > div > iframe");
  }

  public get highWayIcon() {
    return $('svg[data-icon="highway"]');
  }

  public get calloutPart() {
    return $("#Callouts-1");
  }

  public get intro() {
    return $("#ModelIntro-1");
  }

  public get mainVideo() {
    return $("#Video-1");
  }
  public get textStatements() {
    return $("#TextStatement-1");
  }

  public get DecadesOfInnovationContainer() {
    return $("#ImageWithText-1");
  }
  public get bottomCarousel() {
    return $("#ProductListCarousel-1");
  }

  public get bottomDisclaimer() {
    return $("#Disclaimer-1");
  }

  public get LearnMoreButton() {
    return $("a[aria-label='Learn more']");
  }

  public get consentButton() {
    return $("#onetrust-accept-btn-handler");
  }

  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
  public get getLinkMildHybridCars() {
    return $("a[href='/intl/v/cars/other-powertrains']");
  }
  public get allAtags() {
    return $$("a");
  }
}
export default new VolvoPage();
