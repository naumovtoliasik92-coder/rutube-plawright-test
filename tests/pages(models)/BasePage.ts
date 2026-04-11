import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
    static closeModal() {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    
    constructor (page: Page){
        this.page = page;
    }

     async closeModal () {
        await this.page.getByRole('button', { name: 'Закрыть' }).click();
    }

    protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
     await expect(locator).toMatchAriaSnapshot({
            name: ariaName
        });
    }
    protected async checkLayoutByScreenshot (locator: Locator, screenshotName: string) {
        await expect(locator).toHaveScreenshot(screenshotName)
    }
    protected async hideElement(selector: string) {
         await this.page.evaluate((selector) => {
            const header = document.querySelector(selector);
            if (header){
               (header as HTMLElement).style.display = 'none'; 
            }
        }, selector);
    }
}