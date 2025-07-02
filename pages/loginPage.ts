import { BasePage } from '../framework/basePage';

export class LoginPage extends BasePage {
  async navigate() {
    await this.navigateTo('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async isLoggedIn(): Promise<boolean> {
    return this.page.isVisible('.inventory_list');
  }
}