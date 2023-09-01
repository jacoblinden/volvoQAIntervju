import Page from "./page.ts";


 class NotFoundPage extends Page {
    public open = () =>{
        return super.open("wrongadgressssss");
    }

    public get notFoundTitle(){
        return $("#FullscreenMessage-1 > section > div > div > h2");
    }
}

export default new NotFoundPage();