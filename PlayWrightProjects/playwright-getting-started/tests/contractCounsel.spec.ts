import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ContractCounselPage } from '../pages/ContractCounselPage';
import dotenv from 'dotenv';
dotenv.config({ path: 'test.env' });

test('User can navigate to ContractCounsel, use all features, and return to dashboard', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto(process.env.INFERR_BASE_URL!);
    await loginPage.login(process.env.INFERR_USERNAME!, process.env.INFERR_PASSWORD!);
    await dashboardPage.validateLoginSuccess();
    expect(await page.locator('h1:has-text("Inferr.ing™ by Polyrific")')).toBeTruthy();

    // Click ContractCounsel link
    await page.click('a:has-text("ContractCounsel")');

    // ContractCounsel Page
    const contractCounselPage = new ContractCounselPage(page);
    await contractCounselPage.clickNotesForAtlas();
    await page.waitForTimeout(3000);
    await contractCounselPage.clickContractFiles();
    await page.waitForTimeout(3000);
    await contractCounselPage.clickReviewGuidelines();
    await page.waitForTimeout(3000);
    await contractCounselPage.clickAnalysisAndChat();
    await page.waitForTimeout(3000);

    // Go back to dashboard by clicking the logo on the top left
    await contractCounselPage.goBackToDashboard();
    await dashboardPage.validateLoginSuccess();
    await page.waitForTimeout(2000);
});
