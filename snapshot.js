import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.setViewport({ width: 1080, height: 1024 });
  const image = await page.screenshot({ path: "/public/screenshot.png" });
  await browser.close();
})();
