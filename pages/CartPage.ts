import { expect, Locator, Page, test } from "@playwright/test";

export class Cart {
    page: Page;
    CartButton: Locator;
    Buynow: Locator;

    constructor(page: Page) {
        this.page = page
        this.CartButton = page.locator("button[routerlink='/dashboard/cart']")
        this.Buynow = page.locator('text= Buy Now')
    }

    async goToCart() {
        await this.CartButton.click();
        await this.Buynow.click();
    }

}

module.exports = {Cart}