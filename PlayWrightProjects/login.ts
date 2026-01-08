import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: 'test.env' });
//dotenv.config({ path: path.resolve(__dirname, '../test.env') });

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    
    await page.goto(process.env.SAUCE_BASE_URL!);
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);
    await dashboardPage.validateLoginSuccess();
    expect(await page.locator('h1:has-text("Inferr.ing™ by Polyrific")')).toBeTruthy();

});
