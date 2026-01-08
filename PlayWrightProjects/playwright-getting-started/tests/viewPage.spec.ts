import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ViewsPage } from '../pages/ViewsPage';
import dotenv from 'dotenv';
dotenv.config({ path: 'test.env' });

// Test data (replace with your actual credentials)
const ViewName = 'SQL';

test('User can search and navigate to MySQL Server view and return to dashboard', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await page.goto(process.env.INFERR_BASE_URL!);
    await loginPage.login(process.env.INFERR_USERNAME!, process.env.INFERR_PASSWORD!);
    await dashboardPage.validateLoginSuccess();
    expect(await page.locator('h1:has-text("Inferr.ing™ by Polyrific")')).toBeTruthy();

    // Dashboard
    await dashboardPage.validateLoginSuccess();
    await dashboardPage.clickViewsLink();

    // Views Page
    const viewsPage = new ViewsPage(page);
    await viewsPage.searchView(ViewName);
    await page.waitForTimeout(2000); // waits for 2000 milliseconds (2 seconds)

    await viewsPage.clickMySQL();
    // Assume navigation to MySQL Server details page
    await page.waitForTimeout(2000); // waits for 2000 milliseconds (2 seconds)

    // Go back to dashboard
    await viewsPage.goBackToDashboard();
    await page.waitForTimeout(2000); // waits for 2000 milliseconds (2 seconds)
});
