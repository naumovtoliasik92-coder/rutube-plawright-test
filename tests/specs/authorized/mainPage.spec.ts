import {test, expect} from '../../fixtures/fixtures'
import { MainPage } from "../../pages(models)/MainPage";

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов попап уведомлений авторизованного пользователя', async ({ mainPage }) => {
    await mainPage.openNotificationPopupList();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов развернутого меню авторизованного пользователя', async ({ mainPage }) => {
    await mainPage.openFullMenu();
    await mainPage.menuFullHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов меню пользователя в хедере авторизованного пользователя', async ({ mainPage }) => {
    await mainPage.openHeaderUserMenu();
    await mainPage.headerUserMenyHasCorrectAriaSnapshot();
})

