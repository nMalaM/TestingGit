import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PolicyAdvisorPage } from '../pages/PolicyAdvisorPage';
import dotenv from 'dotenv';
dotenv.config({ path: 'test.env' });

test('User can navigate to PolicyAdvisor, use chat, configuration, and return to dashboard', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto(process.env.INFERR_BASE_URL!);
    await loginPage.login(process.env.INFERR_USERNAME!, process.env.INFERR_PASSWORD!);
    await dashboardPage.validateLoginSuccess();
    expect(await page.locator('h1:has-text("Inferr.ing™ by Polyrific")')).toBeTruthy();

    // Click PolicyAdvisor link
    await page.click('a:has-text("PolicyAdvisor")');

    // PolicyAdvisor Page
    const policyAdvisorPage = new PolicyAdvisorPage(page);

    await policyAdvisorPage.clickConfiguration();
    await page.waitForTimeout(3000); // Wait for 3 seconds

    await policyAdvisorPage.clickChatWithPolicies();
    await page.waitForTimeout(3000); // Wait for 3 seconds

    // Go back to dashboard by clicking the logo on the top left
    await policyAdvisorPage.goBackToDashboard();
    await dashboardPage.validateLoginSuccess();
    await page.waitForTimeout(2000);
});
