import { Page } from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) {}

    async validateLoginSuccess() {
        await this.page.waitForSelector('h1:has-text("Inferr.ing™ by Polyrific")');
    }

    async validateViewSuccess() {
        await this.page.waitForSelector('//a[text()="Start using Views"]');
    }

    async validatePolicyAdvisorSuccess() {
        await this.page.waitForSelector('a[href="/policy-advisor"]');
    }

    // New: Click the "Views" link
    async clickViewsLink() {
        await this.page.click('a:has-text("Views")');
    }

    // New: Go back to dashboard (assume a breadcrumb or back button exists)
    async goBackToDashboard() {
        await this.page.click('a:has-text("Dashboard")');
    }
}
