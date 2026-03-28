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

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
    await mainPage.openAddPopupList();
    await mainPage.addPopupListHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
    await mainPage.openNotificationPopupList();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов окна авторизации', async ({ mainPage }) => {
    await mainPage.openAuthorizationModal();
    await mainPage.authorizationModalHasCorrectAriaSnapshot();
})