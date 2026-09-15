import { expect, Locator, Page, test } from "@playwright/test";
export class Checkout {
    page: Page;
    Email: Locator;
    Country: Locator;
    SelectCountry: Locator;
    Selected: Locator;
    Month: Locator;
    Date: Locator;
    Cvv: Locator;
    cardName: Locator;
    coupen: Locator;
    applycp: Locator;
    toast: Locator;
    plceorder: Locator;
    Confirmation_text: Locator;


    constructor(page: Page) {
        this.page = page
        this.Email = page.locator('input.input.txt.text-validated.ng-pristine')
        this.Country = page.locator('[placeholder="Select Country"]')
        this.SelectCountry = page.locator('[placeholder="Select Country"]')
        this.Selected = page.locator('.ta-item.list-group-item.ng-star-inserted')
        this.Month = page.locator('select.input.ddl')
        this.Date = page.locator('select.input.ddl')
        this.Cvv = page.locator('input.input.txt')
        this.cardName = page.locator('input.input.txt')
        this.coupen = page.locator('input.input.txt')
        this.applycp = page.locator('button[type="submit"]')
        this.toast = page.locator('.mt-1.ng-star-inserted')
        this.plceorder = page.locator('.btnn.action__submit')
        this.Confirmation_text = page.locator('.hero-primary')
    }

    async CardDetails() {

        console.log("Email:", await this.Email.inputValue());
        await expect(this.Email).toBeVisible();
        await this.Country.click();
        await this.SelectCountry.pressSequentially("Ind");
        await this.Selected.nth(1).click();
        await this.Month.first().selectOption('02');
        await this.Date.last().selectOption('27');
        await this.Cvv.nth(1).type('123');
        await this.cardName.nth(2).type('Rahul Gandu');
        await this.coupen.nth(3).type('rahulshettyacademy');
        await this.applycp.click();
        await expect(this.toast).toBeVisible();
        console.log("Coupon Message:", await this.toast.textContent());
        await this.plceorder.click();
        await expect(this.Confirmation_text).toBeVisible();
        const confirmationMessage = await this.Confirmation_text.textContent();
        console.log("Confirmation:", confirmationMessage);
        await expect(this.Confirmation_text).toContainText("Thankyou for the order.");


    }
}

module.exports = {Checkout}