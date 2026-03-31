import {test, expect} from '../../fixtures/fixtures'
import { BasePage } from '../../pages(models)/BasePage';
import { MainPage } from "../../pages(models)/MainPage";

test('Проверка доступности элементов хедера неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Проверка доступности табов категорий неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов меню неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.menuHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openAddPopupList();
    await mainPage.addPopupListHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов попап уведомлений неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openNotificationPopupList();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов окна авторизации неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openAuthorizationModal();
    await mainPage.authorizationModalHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов развернутого меню неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.openFullMenu();
    await mainPage.menuFullHasCorrectAriaSnapshot();
})

test('Переключение темы неавторизованного пользователя', async ({ mainPage }) => {
    await mainPage.closeModal();
    await mainPage.checkThemeAttributeValue('dark2021')
    await mainPage.changeThemeToWhite();
    await mainPage.checkThemeAttributeValue('white2022');
})

