import { test, expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly productButton: Locator;
  readonly allProductText: Locator;
  readonly viewProduct: Locator;
  readonly writeReviewText: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly addReviewText: Locator;
  readonly submitBtn: Locator;
  readonly successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productButton = page.locator("productButton");
    this.allProductText = page.locator('//h2[@class="title text-center"]');
    this.viewProduct = page.locator(
      '//div[@class="col-sm-9 padding-right"]//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]'
    );
    this.writeReviewText = page.locator(
      '//a[normalize-space()="Write Your Review"]'
    );
    this.nameInput = page.locator('//input[@id="name"]');
    this.emailInput = page.locator('//input[@id="email"]');

    this.addReviewText = page.locator('//textarea[@id="review"]');
    this.submitBtn = page.locator('//button[@id="button-review"]');
    this.successMsg = page.locator('//span[normalize-space()="Thank you for your review."]');
  }

 async goto() {
        await this.page.goto( 'http://automationexercise.com');   
 }
        async clickOnProductButton(email: string, password: string) {
        await this.productButton.click();
    }

      async clickOnViewProduct() {
   // await this.waitForOverlayToDisappear(); 
    await this.viewProduct.click();
}

 

     async expectWriteReviewText() {
        expect(this.writeReviewText).toBeVisible;
     }

     async fillReviewDetails(name : string , email: string , addText : string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.addReviewText.fill(addText)
        await this.submitBtn.click();
     }

    async expectSuccessReviewMsg() {
        expect(this.successMsg).toBeVisible;

    }


}
