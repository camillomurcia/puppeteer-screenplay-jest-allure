import { Page } from 'puppeteer';

export class Stage {
    readonly page: Page;

    private constructor(page: Page){
        this.page = page;
    }

    static from(page: Page): Stage{
        return  new Stage(page);
    }
}