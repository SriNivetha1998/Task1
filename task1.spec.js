
const{test,chromium}= require ('@playwright/test');  

test('launch the application URL', async() => { 

const browser = await chromium.launch({

    headless:false
});

const context =await browser.newContext();
const page = await context.newPage();
const url= 'https://x.com/?lang=en';
await page.goto(url);
const Btn = await page.locator('text=Create account');
await Btn.click();
await page.waitForTimeout(5000); // Wait for 5 seconds
await page.waitForSelector('input[name="name"]');
await page.fill('input[name="name"]','Sri Nivetha');
await page.fill('input[name="email"]','shreenvth@gmail.com');










// await browser.close();









}) 