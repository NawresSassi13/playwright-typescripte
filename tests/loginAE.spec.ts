import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import{Hooks}from '../utils/hooks';

const  hooks = new Hooks();
test.beforeAll(async ({ browser }) =>{
    await hooks.beforeAll(browser);
 });

 test.beforeAll(async () =>{
    await hooks.beforeEach();
 });

  test.afterEach(async ({}, testInfo) =>{
    await hooks.afterEach(testInfo.title, testInfo.status!.toString());
 });












test.describe('Automation Exercise Login', () =>{
    test('Successful login with valid credentials', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('nawrestest@gmail.com', 'G@bes123');
        await login.expectLoginSuccess();
    });

    test ('login fails with invalid credentials', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('nawres@gmail.com', 'G@bes23');
        await login.expectLoginFailure();

    });



    


}); 