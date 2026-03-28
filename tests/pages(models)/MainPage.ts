import { expect, Page } from '@playwright/test'
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    private readonly headerLocator: Locator;
    private readonly categoriesTabsLocator: Locator;
    private readonly menuLocator: Locator;
    private readonly headerAddButtonLocator: Locator;
    private readonly headerNotificationsButtonLocator: Locator;
    private readonly headerLoginButtonLocator: Locator;
    private readonly headerAddButtonPopupLocator: Locator;
    private readonly headerNotificationsPopupLocator: Locator;
    private readonly authorizationModalLocator: Locator;

    constructor (page: Page){
        super(page);
        this.headerLocator = this.page.getByRole('banner');
        this.categoriesTabsLocator = this.page.locator('section').filter({ 
            hasText: 'ГлавнаяГлавнаяФильмыФильмыСериалыСериалыТелешоуТелешоуСпортСпортБлогерыБлогерыМу' }).nth(1) 
        this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
        this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить'}) ;
        this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
        this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
        this.headerAddButtonPopupLocator = this.page.locator('.freyja_char-header-video-menu__list_PVuar');
        this.headerNotificationsPopupLocator = this.page.locator('.wdp-notifications-popup-module__wrapper');
        this.authorizationModalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role="form"]')
    } 

    async open() {
        await this.page.goto('https://rutube.ru');
    }

    async headerHasCorrectAriaSnapshot () {
        await expect(this.headerLocator).toMatchAriaSnapshot({
            name: 'headerAriaSnapshot.yml'});
    }
    async categoriesTabsHasCorrectAriaSnapshot () {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
            name: 'categoriesTabsSnapshot.yml'});
    }

    async menuHasCorrectAriaSnapshot () {
        await expect(this.menuLocator).toMatchAriaSnapshot({
            name: 'menuHasSnapshot.yml'});
    } 

    async openAddPopupList () {
        this.headerAddButtonLocator.click()
    }
    
    async openNotificationPopupList () {
        this.headerNotificationsButtonLocator.click()
    }

    async openAuthorizationModal () {
        this.headerLoginButtonLocator.click()
    }

    async addPopupListHasCorrectAriaSnapshot() {
        await expect(this.headerAddButtonPopupLocator).toMatchAriaSnapshot({
            name: 'addButtonPopupList.yml'});
    }

    async notificationsPopupHasCorrectAriaSnapshot() {
        await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({
            name: 'notificationsPopup.yml'});
    }
    async authorizationModalHasCorrectAriaSnapshot() {
        await expect(this.authorizationModalLocator).toMatchAriaSnapshot({
            name: 'authorizationModal.yml'});
    }
}

