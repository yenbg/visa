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
                await page.evaluate(() => {
                    document.querySelector('button[name="login"]').click();
                });
            } catch (error) {
                console.error('Lỗi khi click vào nút login:', error);
            }

            await page.waitForSelector('button[name="continue"]');
            try {
                await page.evaluate(() => {
                    document.querySelector('button[name="continue"]').click();
                });
            } catch (error) {
                console.error('Lỗi khi click vào nút continue:', error);
            }

            await page.waitForSelector('button[name="btn_newapp"]');
            await Promise.all([
                page.waitForNavigation(),
                page.click('button[name="btn_newapp"]')
            ]);

            await page.waitForSelector('.wc-submenu.wc-submenu-type-tree#mainpanel_parentSection_1b0a0bf');
            await page.waitForTimeout(1500);
            await page.evaluate(() => {
                const element = document.querySelector('.wc-submenu.wc-submenu-type-tree#mainpanel_parentSection_1b0a0bf');
                element.click();
            });

            await page.waitForSelector('.wc-menuitem.wc-invite.wc-nobutton#mainpanel_parentSection_1b0a0bf1a');
            await page.waitForTimeout(1500);
            await page.evaluate(() => {
                const element = document.querySelector('.wc-menuitem.wc-invite.wc-nobutton#mainpanel_parentSection_1b0a0bf1a');
                element.click();
            });

            await page.waitForSelector('#_2a0b0a0a0e0a0a0a5a1a_input');
            await page.evaluate(() => {
                const element = document.querySelector('#_2a0b0a0a0e0a0a0a5a1a_input');
                element.click();
            });

            await page.waitForSelector('button[name="next"]');
            await page.evaluate(() => {
                const element = document.querySelector('button[name="next"]');
                element.click();
            });
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
