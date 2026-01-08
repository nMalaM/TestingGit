import { Page } from '@playwright/test';

export class SalesMatchPage {
    constructor(private page: Page) {}

    async clickNewSearch() {
        await this.page.click('button:has-text("New Search")');
    }

    async enterSearchQuery(query: string) {
        await this.page.fill('textarea', query);
        await this.page.keyboard.press('Enter');
    }

    async waitForResult(timeout) {
        await this.page.waitForTimeout(timeout);
    }

    async clickBackToSearchHistory() {
        await this.page.click('button:has-text("Back to Search History")');
    }

    async goBackToDashboard() {
       // await this.page.click('a:has-text("Dashboard")');
        await this.page.getByAltText('Logo').click();
    }

    async filterByCategory(category: string) {
        // Adjust selector as needed for your app's filter dropdown or input
        await this.page.selectOption('#category-filter', { label: 'Furniture' });
    }
}
