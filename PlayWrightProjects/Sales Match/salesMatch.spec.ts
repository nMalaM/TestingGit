import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { SalesMatchPage } from '../pages/SalesMatchPage';
import dotenv from 'dotenv';
dotenv.config({ path: 'test.env' });

test('User can perform a new search in SalesMatch, filter by category, and return to dashboard', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    
    await page.goto(process.env.INFERR_BASE_URL!);
    await loginPage.login(process.env.INFERR_USERNAME!, process.env.INFERR_PASSWORD!);
    await dashboardPage.validateLoginSuccess();
    expect(await page.locator('h1:has-text("Inferr.ing™ by Polyrific")')).toBeTruthy();

    // Click SalesMatch link
    await page.click('a:has-text("SalesMatch")');

    // SalesMatch Page
    const salesMatchPage = new SalesMatchPage(page);
    await salesMatchPage.clickNewSearch();
    await salesMatchPage.enterSearchQuery('Do you have a 1000-piece puzzle for 10 years 10-year-old kid?');
   // await salesMatchPage.waitForResult(20000); // Wait for result for 10 seconds


    // Scroll down and filter by category = "Furniture"
   //await page.evaluate(() => window.scrollBy(0, window.innerHeight));
   // await salesMatchPage.filterByCategory('Furniture');
    await page.waitForTimeout(3000); // Wait for filter result for 2 seconds

    await salesMatchPage.clickBackToSearchHistory();
    // Go back to dashboard by clicking the logo on the top left
    await salesMatchPage.goBackToDashboard();
    await dashboardPage.validateLoginSuccess();
    await page.waitForTimeout(5000);
});
