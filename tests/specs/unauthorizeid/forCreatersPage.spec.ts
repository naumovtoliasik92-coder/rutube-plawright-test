import { test } from '@playwright/test';
import { ForCreatorsPage } from "../../pages(models)/ForCreatorsPage";

ForCreatorsPage.testParams.forEach(({ url, screenshotName, name }) => {
    test(`Проверка лайаута Таба - ${name}`, async ({ page }) => {
            const forCreatorsPage = new ForCreatorsPage(page);
            await forCreatorsPage.open(url);
            await forCreatorsPage.pageHasCorrectLayout(screenshotName);
        });
    });