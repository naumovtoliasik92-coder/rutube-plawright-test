import {test, expect} from '../../fixtures/fixtures'
import { BasePage } from '../../pages(models)/BasePage';
import { MainPage } from "../../pages(models)/MainPage";

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Проверка доступности табов категорий', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов меню', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.menuHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openAddPopupList();
    await mainPage.addPopupListHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openNotificationPopupList();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов окна авторизации', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openAuthorizationModal();
    await mainPage.authorizationModalHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов развернутого меню', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openFullMenu();
    await mainPage.menuFullHasCorrectAriaSnapshot();
})

test('Переключение темы', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.checkThemeAttributeValue('dark2021')
    await mainPage.changeThemeToWhite();
    await mainPage.checkThemeAttributeValue('white2022');
})

