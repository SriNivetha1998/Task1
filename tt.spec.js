const { test, chromium, expect } = require ('@playwright/test');

test('launching the application URL', async () => {
    const browser = await chromium.launch({
        headless: false // Browser UI will be visible
    });

    const context = await browser.newContext();  // Corrected to newContext()
    const page = await context.newPage(); // Corrected newpage() to newPage()
    const url = 'https://www.youtube.com/';

})