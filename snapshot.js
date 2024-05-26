const puppeteer = require("puppeteer");

(async () => {
  const fs = require("fs");
  const puppeteer = require("puppeteer");

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.setViewport({ width: 1080, height: 1024 });

    // Take the screenshot and store it as a buffer
    const imageBuffer = await page.screenshot();

    // Convert image buffer to Base64
    const base64Image = imageBuffer.toString("base64");

    await browser.close();

    // Path to your README.md
    const readmePath = "README.md";

    // Read current README content
    let readmeContent = fs.readFileSync(readmePath, "utf8");

    // Regex to find an existing image in Base64 format
    const imgRegex = /!\[Screenshot]\(data:image\/png;base64,[^\)]+\)/;

    // New image markdown
    const newImageMarkdown = `![Screenshot](data:image/png;base64,${base64Image})`;

    // Replace old image with new image, or add new image if not present
    if (readmeContent.match(imgRegex)) {
      readmeContent = readmeContent.replace(imgRegex, newImageMarkdown);
    } else {
      readmeContent += `\n\n${newImageMarkdown}`;
    }

    // Write back to README.md
    fs.writeFileSync(readmePath, readmeContent, "utf8");
  })();
})();
