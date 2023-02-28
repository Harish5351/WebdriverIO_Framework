class ScreenshotPage{

    takeScreenshot(filename) {
        const timestamp = new Date().getTime();
        const filepath = `./screenshots/${filename}_${timestamp}.png`;
        browser.saveScreenshot(filepath);
      }

}
module.exports = new ScreenshotPage();