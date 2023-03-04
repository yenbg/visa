const puppeteer = require('puppeteer');

(async () => {
    const start = new Date();
    const rows = [
        {
            username: "giapthiyenvtvybg@gmail.com",
            password: "Giapyen20092000@37",
        }
    ]

    const browser = await puppeteer.launch({
        headless: false
    });
    try {
        for (const row of rows) {
            const page = await browser.newPage();
            await page.goto('https://online.immi.gov.au/lusc/login');

            await page.waitForSelector('#username');
            await page.type('#username', row.username);

            await page.waitForSelector('#password');
            await page.type('#password', row.password);

            await page.waitForSelector('button[name="login"]');
            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('button[name="login"]').click();
                });

            } catch (error) {
                console.error('Lỗi khi click vào nút login:', error);
            }

            await page.waitForSelector('button[name="continue"]');
            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('button[name="continue"]').click();
                });

            } catch (error) {
                console.error('Lỗi khi click vào nút continue:', error);
            }

            await Promise.all([
                page.waitForNavigation(), // đợi cho trang mới được tải hoàn toàn
                page.waitForSelector('button[name="btn_newapp"]'), // đợi cho selector xuất hiện trên trang mới
            ]);
            await page.click('button[name="btn_newapp"]')
            console.log('egeehbeyhfhefyhe'),

               await page.waitForSelector('button[name="mainpanel_parentSection_1b0a0bf"]'), // đợi cho selector xuất hiện trên trang mới


                console.log('efgbehfgbeheughegh');
            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('button[name="mainpanel_parentSection_1b0a0bf"]').click();
                });
            } catch (error) {
                console.error('Lỗi khi click vào nút mainpanel_parentSection_1b0a0bf1a:', error);
            }
                console.log('lailailai11111')
                await page.waitForSelector('button[name="mainpanel_parentSection_1b0a0bf1a"]'), // đợi cho selector xuất hiện trên trang mới
                    console.log('lailailai222222')
            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('button[name="mainpanel_parentSection_1b0a0bf1a"]').click();
                });
            } catch (error) {
                console.error('Lỗi khi click vào nút mainpanel_parentSection_1b0a0bf1a:', error);
            }
           console.log('lailailai')

            await Promise.all([
                page.waitForNavigation(), // đợi cho trang mới được tải hoàn toàn
                page.waitForSelector('#_2a0b0a0a0e0a0a0a5a1a_input"]'), // đợi cho selector xuất hiện trên trang mới
            ]);
            await Promise.all([
                page.waitForNavigation(),
                page.click('#_2a0b0a0a0e0a0a0a5a1a_input"]')
            ]);

            await page.waitForSelector('#_2a0b0a0a0g1');
            try {
                await page.waitForTimeout(1000);
                await page.evaluate(() => {
                    document.querySelector('#_2a0b0a0a0g1').click();
                });

            } catch (error) {
                console.error('Lỗi khi click vào nút next:', error);
            }
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
