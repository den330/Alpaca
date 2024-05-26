const puppeteer = require("puppeteer");

(async () => {
  const fs = require("fs");
  const puppeteer = require("puppeteer");

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.setViewport({ width: 1080, height: 1024 });
    await page.screenshot({ path: "./public/screenshot.png" });
    await browser.close();
    const readmePath = "README.md";

    // Read current README content
    let readmeContent = fs.readFileSync(readmePath, "utf8");
    const finalContent = `${readmeContent}\n\n![screenshot](./public/screenshot.png)`;
    fs.writeFileSync(readmePath, finalContent);
  })();
})();
