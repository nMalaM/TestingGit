import { Page } from '@playwright/test';

export class ContractCounselPage {
    constructor(private page: Page) {}

    async clickNotesForAtlas() {
        await this.page.click('button:has-text("Notes for Atlas")');
    }

    async clickContractFiles() {
        await this.page.click('button:has-text("Contract Files")');
    }

    async clickReviewGuidelines() {
        await this.page.click('button:has-text("Review Guidelines")');
    }

    async clickAnalysisAndChat() {
        await this.page.click('button:has-text("Analysis & Chat")');
    }

    async goBackToDashboard() {
        await this.page.getByAltText('Logo').click();
    }
}
