import type {Page} from '@playwright/test'

export class TestClass {
    readonly page : Page
    constructor(page : Page){
        this.page = page
    }
     
  async openControl(){  
    await this.page.click(".category-cards > div:nth-child(1) div.card-up")
    //await this.page.locator(".category-cards > div:nth-child(1) div.card-up").click
  }
  
}
