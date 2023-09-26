import { expect, Page } from "playwright/test";

export class SauseLandingPage {
   readonly page : Page

   constructor(page : Page){
    this.page = page
   }

   async openSauceDemoPage(){
      await this.page.goto('https://www.saucedemo.com/')
   }

   async login(){
      let userName = await (await this.page.locator("#login_credentials").innerText()).split("\n")[1]
      let password = await (await this.page.locator('div.login_password').innerText()).split("\n")[1]

      await this.page.fill("#user-name", userName)
      await this.page.fill("#password", password)
      await this.page.click("#login-button")
      await expect(this.page.textContent(".error-button")).toBe("false")
   }
}