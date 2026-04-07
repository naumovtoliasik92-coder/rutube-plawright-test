import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CategoriesPage extends BasePage {
    private readonly contentPageLocator: Locator

constructor(page:Page) {
    super(page);
    this.contentPageLocator = this.page.getByText('АвтоRUTUBE x PREMIERRUTUBE x');
}

    async open() {
        this.page.goto('https://rutube.ru/categories/');
    }
    async closeModal() {
        await this.page.getByRole('button', { name: 'Закрыть попап' }).click();     
    }
    async closeCoockiAllert () {
        await this.page.getByRole('button', { name: 'Ок' }).click();
    }
    async contentPageHasCorrectLayout() {
        await this.checkLayoutByScreenshot(this.contentPageLocator, 'categoriesPage.png')
    }
    async hideHeader() {
        await this.hideElement('header')
    }
}