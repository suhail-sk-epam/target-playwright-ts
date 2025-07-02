import { test, expect } from '@playwright/test';
import Monitor from '../pages/Monitor';
import Login from '../pages/Login';
import monitorData from '../fixtures/monitor.json';

test.describe('Validate Data Displayed on MonitorPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    console.log('Launched Application-->Login Test');
  });

  test('Validate Price and Monitor Name is correct', async ({ page }) => {
    const login = new Login(page);
    await login.clickLogin();
    await login.setUserName(monitorData.UserName);
    await login.setPassword(monitorData.UserPassword);
    console.log('Entered User Details-->Login Test');
    await login.clickLoginbtn();
    await login.verifyLoginSuccessMsg(monitorData.loginmsg);
    console.log('Validated success Login Msg-->Login Test');

    const monitor = new Monitor(page);
    await monitor.isMonitorDisplayed();
    await monitor.ValidateMonitor1(monitorData.monitor1);
    await monitor.Validatemonitor1Price(monitorData.m1Price);
    await monitor.ValidateMonitor2(monitorData.monitor2);
    await monitor.Validatemonitor2Price(monitorData.m2Price);

    const loadTime = Date.now() - startTime;
    console.log(`TotalTime taken to ValidateMonitor's: ${loadTime}ms`);
  });
});