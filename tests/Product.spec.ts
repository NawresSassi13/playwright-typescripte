import { test } from '@playwright/test';
import { Product } from '../pages/Product';
import { LoginPage } from '../pages/LoginPage';


test.describe('Add review on product', () => {
    test('Successful review message', async ({ page }) => {
        const product = new Product(page);
        const login = new LoginPage(page);
        await login.goto();
        await product.acceptCookieConsent();
        await product.clickOnProducts();
        await product.expectAllProductText();
        await product.clickOnViewProduct();
        await product.expectWriteReviewText();
        await product.fillReviewDetails('Nawres', 'Nawrestest@gmail.com','i dont like !');
        await product.expectSuccessReviewMsg();
    });
});