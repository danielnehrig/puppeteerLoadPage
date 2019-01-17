const puppeteer = require("puppeteer");
const url = "https://radioearn.com/radio/3/start.php?uid=4015&suid=84397";
const url2 = "https://www.openprocessing.org/sketch/186320/";

const height = 1200;
const width = 1500;
let browser;
let page;
let page2;

const x = 55;
const y = 47;

const loadPageHeadless = async (page, time, url) => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  page.emulate({
    viewport: {
      width: width,
      height: height
    },
    userAgent: ''
  });


  await page.goto(url);
  await page.waitForSelector('pjsCanvas');
  await page.mouse.click(x, y);
  await page.mouse.click(x, y);
  await page.mouse.click(x, y);
  await page.mouse.click(x, y);
  await page.mouse.click(x, y);
  await page.mouse.click(x, y);
  await page.click('rearn');
  setTimeout( async () => {
    console.log('done');
    await browser.close();
  }, time)
}

loadPageHeadless(page, 600000, url);
loadPageHeadless(page2, 600000, url2);
