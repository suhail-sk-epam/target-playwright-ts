import { test, expect } from '@playwright/test';
import { APIClient } from '../../framework/apiClient';

// Example API Test

test('Fetch user data', async () => {
  const apiClient = new APIClient('https://jsonplaceholder.typicode.com');
  const userData = await apiClient.get('/users/1');
  expect(userData).toHaveProperty('id', 1);
});