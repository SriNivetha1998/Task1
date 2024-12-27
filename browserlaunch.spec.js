const{test,chromium,expect}= require ('@playwright/test');  

test('launching the application URL', async() => { 

const browser = await chromium.launch({

    headless:false
});

const context =await browser.newContext();
const page = await context.newPage();
const url= 'https://www.youtube.com/';
await page.goto(url);

await expect(page).toHaveURL(url);
await expect(page).toHaveTitle('YouTube');

await page.goto('https://www.facebook.com/login.php/', { timeout: 60000 });

await page.goBack();

await page.goForward();

await expect(page).toHaveURL('https://www.facebook.com/login.php/', { timeout: 60000 });
await page.waitForTimeout(5000);


const page2 = await context.newPage();
await page2.goto('https://www.amazon.in/', { timeout: 60000 });

await page.waitForTimeout(5000);

const context2= await browser.newContext();
const page3=await context2.newPage();
await page3.goto('https://www.amazon.in/', { timeout: 60000 });
//await page.waitForTimeout(5000);


})