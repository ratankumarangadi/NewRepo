import { test, expect } from '@playwright/test';
import { TestClass } from '../pages/google.page'; 
test('Navigate to Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');
});

test('Search for Playwright', async ({ page }) => {
  await page.goto('https://google.com/');
  let exampletest = new TestClass(page);
  await exampletest.typeSearchText();
  await exampletest.pressEnter();
  const text = await exampletest.searchResult();
  await console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
});