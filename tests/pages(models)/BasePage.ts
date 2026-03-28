import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;
    
    constructor (page: Page){
        this.page = page;
    }

     async closeModal () {
        await this.page.getByRole('button', { name: 'Закрыть' }).click();
    }
}