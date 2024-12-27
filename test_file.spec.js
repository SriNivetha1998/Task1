
const{test,chromium}= require ('@playwright/test');  

test('launch the application URL', async() => { 

const browser = await chromium.launch({

    headless:false
});

const context =await browser.newContext();
const page = await context.newPage();
const url= 'https://www.facebook.com/';
await page.goto(url);

await page.fill('input[name="email"]','Sri Nivetha');
await page.fill('input[name="pass"]','Sri@Nivetha');

const Btn = await page.locator('text= Create new account');
await Btn.click();

await page.fill('input[name="firstname"]', 'sri'); 
await page.fill('input[name="lastname"]', 'nivi'); 
await page.fill('input[name="reg_email__"]', 'shreenvth@example.com');
})