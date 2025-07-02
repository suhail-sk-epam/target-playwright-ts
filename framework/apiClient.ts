import { request } from '@playwright/test';

export class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(endpoint: string) {
    const response = await request.get(`${this.baseURL}${endpoint}`);
    return response.json();
  }
}