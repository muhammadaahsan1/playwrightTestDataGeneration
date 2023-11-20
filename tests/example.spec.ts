import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'
import { count } from 'console';


test('test Data Generation', async ({ page }) => {
  await page.goto('https://www.coursera.org/?authMode=login');
  const randName = faker.person.fullName()
  const Email = randName.replace(' ','')+faker.number.int(500)+'@test.com';
    await page.fill("//input[@data-e2e='login-email-input']", Email)
    await page.waitForTimeout(10000)
  


  // Expect a title "to contain" a substring.
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
