import { test, expect } from '@playwright/test';

test.describe('LoginPage',()=>{
const baseURL = 'https://qatraining.fr/pages/features/login.html';
test ('Should loging succeddfully with valid credentions', async ({page})=>{
    await page.goto(baseURL);
    await page .fill('#username', ' Nawres');
    await page .fill('#password', ' Nawres123');
    await page .click('//button[normalize-space()="Se connecter"]');


});

});




