import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VolvoPage extends Page {



  
  public get title() {
    return $("h2*=Ideas that change the world");
  }

  public get video() {
    return  this.videoContainer.$("video");
  }

  public get videoSource(){
    return this.videoContainer.$("video>source");
  }

  public get videoContainer(){
    return $("#Video-1>section>div>button>div");
  }

  public get videoPlayButton() {
    return this.videoContainer.$("button");
  }

  public  get videoWatchStoryButton(){
    return $("#Video-1 > section > div > div > div > button"
    );
  }

  public get youtubeFrame(){
    return $("#Video-1 > section > div > iframe");
  }

  public get highWayIcon(){
    return $('svg[data-icon="highway"]');
  }


  public get LearnMoreButton(){
    return $("a[aria-label='Learn more']");
  }    

  public get consentButton(){
    return $("#onetrust-accept-btn-handler");
  }

  public open() {
    return super.open("intl/v/car-safety/a-million-more");
  }
  public get getLinkMildHybridCars(){
    return $("a[href='/intl/v/cars/other-powertrains']");
  }
}
export default new VolvoPage();
