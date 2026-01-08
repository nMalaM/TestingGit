import { Page } from '@playwright/test';

export class PolicyAdvisorPage {
    constructor(private page: Page) {}

    async clickChatWithPolicies() {
        await this.page.click('button:has-text("Chat with Policies")');
    }

    async clickConfiguration() {
        await this.page.click('button:has-text("Configuration")');
    }

    async goBackToDashboard() {
        await this.page.getByAltText('Logo').click();
    }
}
