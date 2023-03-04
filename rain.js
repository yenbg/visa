const puppeteer = require('puppeteer');
const xlsx = require('xlsx');

(async () => {
    const workbook = xlsx.readFile('thongtin.xlsx');
    const worksheet = workbook.Sheets['Sheet1'];
    const rows = xlsx.utils.sheet_to_json(worksheet);

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    for (const row of rows) {
        //console.log('row.column1',row.lastname);
        await page.goto('https://eduquiz.vn/user/register', { timeout: 120000 });

        await page.waitForSelector('#mui-3');
        await page.type('#mui-3', row.lastname);

        await page.waitForSelector('#mui-4');
        await page.type('#mui-4', row.firstname);

        await page.waitForSelector('#mui-5');
        await page.type('#mui-5', row.loginname);

        await page.waitForSelector('#mui-6');
        await page.type('#mui-6', row.email);

        await page.waitForSelector('#mui-7');
        await page.type('#mui-7', row.phone);

        await page.waitForSelector('#mui-8');
        await page.type('#mui-8', row.pass);

        await page.waitForSelector('#mui-9');
        await page.type('#mui-9', row.pass);

        await page.click('#mui-10');
    }

    await browser.close();
})();
