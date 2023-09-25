import type {Page} from '@playwright/test'

export class TestClass {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async typeSearchText() {
        // await this.page.type('input[name="q"]',"Playwright")
        let lcoator = this.page.locator("#APjFqb").fill("Playwright")
    }

    async pressEnter() {
        await this.page.keyboard.press('Enter');
    }

    async openControl() {
        this.page.locator(".card-body")
            .filter({"has" : this.page.locator("h5:contains('Elements')")}).click()
    }
}