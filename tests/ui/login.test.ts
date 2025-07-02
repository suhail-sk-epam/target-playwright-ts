import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

// Example UI Test

test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  expect(await loginPage.isLoggedIn()).toBeTruthy();
});