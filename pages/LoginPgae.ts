import{Page, expect, Locator, test} from "@playwright/test";
export class LoginUser 
{
    page: Page;
    username: Locator;
    userPass: Locator;
    submit: Locator;

    constructor(page: Page)
    {
        this.page = page
        this.username = page.locator('input[type="email"]')
        this.userPass = page.locator('input[type="password"]')
        this.submit = page.locator('input[type="submit"]')
    }

    async gotoURL() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async LoginUser(username: string, userPass: any)
    {
        await this.username.fill(username)
        await this.userPass.fill(userPass)
        await this.submit.click()
    }


}

module.exports = {LoginUser}
