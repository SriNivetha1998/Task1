const { test, chromium, expect } = require ('@playwright/test');

test('launching the application URL', async () => {
    const browser = await chromium.launch({
        headless: false // Browser UI will be visible
    });

    const context = await browser.newContext();  // Corrected to newContext()
    const page = await context.newPage(); // Corrected newpage() to newPage()
    const url = 'https://www.youtube.com/';
    
//     await page.goto(url);
    
//     // Corrected the spelling of expect
//     await expect(page).toHaveURL(url); // Fixed spelling issue
//     await expect(page).toHaveTitle('YouTube'); // Capitalization corrected for "YouTube"

//     await page.goto('https://www.facebook.com/login.php/');
    
//     await page.goBack(); // Go back to YouTube
//     await page.goForward(); // Go forward to Facebook login page

//     // Corrected expect spelling
//     await expect(page).toHaveURL('https://www.facebook.com/login.php/');
    
//    // await page.waitForTimeout(5000); // Wait for 5 seconds

//     const page2 = await context.newPage(); // Corrected newpage() to newPage()
//     await page2.goto('https://www.flipkart.com/');
    
//     //await page.waitForTimeout(5000); // Wait for 5 seconds

//     const context2 = await browser.newContext(); // Corrected to newContext()
//     const page3 = await context2.newPage(); // Corrected newpage() to newPage()
//     await page3.goto('https://www.amazon.in/');
    
//     //await page.waitForTimeout(5000); // Wait for 5 seconds

//     // Closing the browser to clean up
    await browser.close();
});