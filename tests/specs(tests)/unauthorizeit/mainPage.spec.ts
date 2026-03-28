import test from "@playwright/test";
import { MainPage } from "../../pages(models)/MainPage";

test('Открытие главной страницы', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
})

test('Проверка доступности элементов хедера', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
      await mainPage.closeModal();
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Проверка доступности табов категорий', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeModal();
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов меню', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeModal();
    await mainPage.menuHasCorrectAriaSnapshot();
})