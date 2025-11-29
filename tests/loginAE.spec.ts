import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

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