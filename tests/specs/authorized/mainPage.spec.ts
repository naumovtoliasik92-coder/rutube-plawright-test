import {test, expect} from '../../fixtures/fixtures'
import { MainPage } from "../../pages(models)/MainPage";

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
    await mainPage.headerHasCorrectAriaSnapshot();
})

test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
    await mainPage.openNotificationPopupList();
    await mainPage.notificationsPopupHasCorrectAriaSnapshot();
})



test('Проверка доступности элементов развернутого меню', async ({ mainPage }) => {
    await mainPage.openFullMenu();
    await mainPage.menuFullHasCorrectAriaSnapshot();
})

