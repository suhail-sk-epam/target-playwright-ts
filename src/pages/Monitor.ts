import { Page } from '@playwright/test';

export default class Monitor {
  private page: Page;
  private monitorbtn = "//a[.='Monitors']";
  private monitor1 = "//a[.='Apple monitor 24']";
  private m1price = "//h5[.='$400']";
  private monitor2 = "//a[.='ASUS Full HD']";
  private m2price = "//h5[.='$230']";

  constructor(page: Page) {
    this.page = page;
  }

  async isMonitorDisplayed() {
    await this.page.locator(this.monitorbtn).click();
    await expect(this.page.locator(this.monitor1)).toBeVisible();
    await expect(this.page.locator(this.m1price)).toBeVisible();
    await expect(this.page.locator(this.monitor2)).toBeVisible();
    await expect(this.page.locator(this.m2price)).toBeVisible();
  }

  async ValidateMonitor1(data: string) {
    await expect(this.page.locator(this.monitor1)).toHaveText(data);
  }

  async Validatemonitor1Price(data: string) {
    await expect(this.page.locator(this.m1price)).toHaveText(data);
  }

  async ValidateMonitor2(data: string) {
    await expect(this.page.locator(this.monitor2)).toHaveText(data);
  }

  async Validatemonitor2Price(data: string) {
    await expect(this.page.locator(this.m2price)).toHaveText(data);
  }
}
