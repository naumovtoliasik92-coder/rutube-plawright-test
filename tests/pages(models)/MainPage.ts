import { expect, Locator, Page } from '@playwright/test'
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
    private readonly menuButtonLocator: Locator;
    private readonly openMenuAriatLocator: Locator;
    private readonly changeThemeButtonLocator: Locator

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
        this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' }) 
        this.openMenuAriatLocator = this.page.locator('.menu-content-module__menuOpen')  
        this.changeThemeButtonLocator = this.page.getByRole('button', { name: 'Переключить на светлую тему' })
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
        await this.headerAddButtonLocator.click();
    }
    
    async openNotificationPopupList () {
        await this.headerNotificationsButtonLocator.click();
    }

    async openAuthorizationModal () {
        await this.headerLoginButtonLocator.click();
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

    async openFullMenu () {
        await this.menuButtonLocator.click();
        await expect(this.openMenuAriatLocator).toBeVisible();
    }

    async menuFullHasCorrectAriaSnapshot() {
        await expect(this.openMenuAriatLocator).toBeVisible();
        const menuList = this.openMenuAriatLocator.getByRole('list').first();
        await expect(menuList).toBeVisible();
        await expect(menuList.getByRole('link', { name: 'Главная' })).toBeVisible();
        await expect(menuList.getByRole('link', { name: 'Авто' })).toBeVisible();
        await expect(menuList.getByRole('link', { name: 'Моё' })).toBeVisible();
        await expect(menuList).toMatchAriaSnapshot({
            name: 'FullMenuSnapshot.yml'});
    }

    async changeThemeToWhite() {
        await this.changeThemeButtonLocator.click()
    }

    async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022' ) {
        await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
    }
}

