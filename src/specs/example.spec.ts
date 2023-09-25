import { test, expect } from '@playwright/test';
import { TestClass } from '../pages/google.page'; 
test('Navigate to Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');
});

test('Search for Playwright', async ({ page }) => {
  test.setTimeout(100000000)
  await page.goto('https://demoqa.com/');
  let exampletest = new TestClass(page);
  const text = exampletest.openControl()
});




