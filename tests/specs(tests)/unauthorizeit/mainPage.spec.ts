import {test, expect} from '../../fixtures/fixtures'
import { MainPage } from "../../pages(models)/MainPage";

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Проверка доступности табов категорий', async ({ mainPage }) => {
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов меню', async ({ mainPage }) => {
    await mainPage.menuHasCorrectAriaSnapshot();
})