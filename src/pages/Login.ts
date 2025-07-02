import { Page, expect } from '@playwright/test';

export default class Login {
  private page: Page;
  private loginbtn = "//a[.='Log in']";
  private usernametxt = "//input[@id='loginusername']";
  private passwordtxt = "//input[@id='loginpassword']";
  private signInbtn = "//button[.='Log in']";
  private welcomemsg = "//a[.='Welcome PeterPanter']";

  constructor(page: Page) {
    this.page = page;
  }

  async clickLogin() {
    await this.page.locator(this.loginbtn).click();
    await expect(this.page.locator("//h5[.='Log in']")).toBeVisible();
  }

  async setUserName(username: string) {
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.usernametxt).click();
    await this.page.locator(this.usernametxt).fill(username);
  }

  async setPassword(password: string) {
    await this.page.locator(this.passwordtxt).click();
    await this.page.locator(this.passwordtxt).fill(password);
  }

  async clickLoginbtn() {
    await this.page.locator(this.signInbtn).click();
  }

  async verifyLoginSuccessMsg(successMsg: string) {
    await expect(this.page.locator(this.welcomemsg)).toHaveText(successMsg);
  }
}
