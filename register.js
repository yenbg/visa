const puppeteer = require('puppeteer');

(async () => {
    const start = new Date();
    const rows = [
        {
            familyName: "Nguyen",
            givensName: "Phu Du",
            phone: "0394926940",
            email: "emdza0012@gmail.com",
            password: "@Tambiet310520"
        }
    ]

    const browser = await puppeteer.launch({
        headless: false
    });
    try {
        for (const row of rows) {
            const page = await browser.newPage();
            await page.goto('https://online.immi.gov.au/lusc/register');

            await page.waitForSelector('#_1a4a0a0f1');
            console.log("Selector #_1a4a0a0f1 found");
            await page.type('#_1a4a0a0f1', row.familyName);
            console.log("Typed familyName: ", row.familyName);

            await page.waitForSelector('#_1a4a0a0f2');
            console.log("Selector #_1a4a0a0f2 found");
            await page.type('#_1a4a0a0f2', row.givensName);
            console.log("Typed givensName: ", row.givensName);

            await page.waitForSelector('#_1a4a0a0f3');
            console.log("Selector #_1a4a0a0f3 found");
            await page.type('#_1a4a0a0f3', row.phone);
            console.log("Typed phone: ", row.phone);

            await page.waitForSelector('#_1a4a0a0f5');
            console.log("Selector #_1a4a0a0f5 found");
            await page.type('#_1a4a0a0f5', row.email);
            console.log("Typed email: ", row.email);

            await page.waitForSelector('#_1a4a0a0f6');
            console.log("Selector #_1a4a0a0f6 found");
            await page.type('#_1a4a0a0f6', row.email);
            console.log("Typed email: ", row.email);

            await page.waitForSelector('button[name="continue"]');
            console.log("Selector button[name=\"continue\"] found");

            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('button[name="continue"]').click();
                });
            } catch (error) {
                console.error('Lỗi khi click vào nút continue:', error);
            }

            console.log('gbashefghaseff');

            await page.waitForNavigation();
            console.log('àhgbashfbasfa');

            await page.waitForSelector('#_1a4a0a1b');
            console.log("Selector #_1a4a0a1b found");
            await page.type('#_1a4a0a1b', row.password);

            await page.waitForSelector('#_1a4a0a1c');
            console.log("Selector #_1a4a0a1c found");
            await page.type('#_1a4a0a1c', row.password);

            await page.waitForSelector('#_1a4a0a1d0-r0-_0b');
            console.log("Selector #_1a4a0a1d0-r0-_0b found");
            await page.select('#_1a4a0a1d0-r0-_0b', '4');

            await page.waitForSelector('#_1a4a0a1d0-r0-_0c');
            console.log("Selector #_1a4a0a1d0-r0-_0c found");
            await page.type('#_1a4a0a1d0-r0-_0c', 'Dog');

            await page.waitForSelector('#_1a4a0a1d0-r1-_0b');
            console.log("Selector #_1a4a0a1d0-r1-_0b found");
            await page.select('#_1a4a0a1d0-r1-_0b', '10');

            await page.waitForSelector('#_1a4a0a1d0-r1-_0c');
            console.log("Selector #_1a4a0a1d0-r1-_0c found");
            await page.type('#_1a4a0a1d0-r1-_0c', 'Green');

            await page.waitForSelector('#_1a4a0a1d0-r2-_0b');
            await page.select('#_1a4a0a1d0-r2-_0b', '3');

            await page.waitForSelector('#_1a4a0a1d0-r2-_0c');
            await page.type('#_1a4a0a1d0-r2-_0c', 'Information');

            await page.waitForSelector('#_1a4a0a1g');
            console.log("Selector #_1a4a0a1g found");
            await page.click('#_1a4a0a1g');

            await page.waitForSelector('.field.nolabel div div div');
            console.log("Selector .field.nolabel div div div found");
            await page.click('.field.nolabel div div div');

            await page.waitForSelector('button[name="submit"]');
            console.log("Selector button[name=\"submit\"] found");
            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('button[name="submit"]').click();
                });
            } catch (error) {
                console.error('Lỗi khi click vào nút continue:', error);
            }

            await Promise.all([
                page.waitForNavigation(), // đợi cho trang mới được tải hoàn toàn
                page.waitForSelector('button[name="continue"]'), // đợi cho selector xuất hiện trên trang mới
            ]);

            await Promise.all([
                page.waitForNavigation(),
                page.click('button[name="continue"]')
            ]);
            console.log('Thanh cong');
        }
        await browser.close();
    }catch(error) {
        console.log('That bai ', error);
        await browser.close();
    }finally {
        await browser.close();
    }
    const end = new Date();
    const total = end - start;
    console.log('total', total);
})();
