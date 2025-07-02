import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { APIClient } from '../../framework/apiClient';

// Example Integration Test

test('User logs in and fetches user data', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  expect(await loginPage.isLoggedIn()).toBeTruthy();

  const apiClient = new APIClient('https://jsonplaceholder.typicode.com');
  const userData = await apiClient.get('/users/1');
  expect(userData).toHaveProperty('id', 1);
});