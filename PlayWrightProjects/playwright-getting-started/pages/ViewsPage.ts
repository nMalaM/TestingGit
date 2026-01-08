import { Page } from '@playwright/test';

export class ViewsPage {
    constructor(private page: Page) {}

    async searchView(viewName: string) {
        await this.page.click('input[placeholder="Search views..."]');
        await this.page.fill('input[placeholder="Search views..."]', viewName);
        await this.page.click('button:has-text("Search")');
    }

    async clickMySQL() {
         await this.page.click('button[title="MySQL"]');
    }

    async goBackToDashboard() {
        await this.page.getByAltText('Logo').click();
    }
}
