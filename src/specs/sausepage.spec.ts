import { test, expect } from '@playwright/test';
import { SauseLandingPage } from '../pages/sausepage.page';

test("Login to sauce landing page", async({page}) =>{
   let landing = new SauseLandingPage(page)
   await landing.openSauceDemoPage()
   await landing.login()
});