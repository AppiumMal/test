const { default: AppiumService } = require("@wdio/appium-service")
const { default: AppiumLauncher } = require("@wdio/appium-service/build/launcher")

module.exports = class AppScreen {
    constructor(selector) {
      this.selector = selector
      

    }
    //  AppiumServer(){
    //    AppiumService = new AppiumServiceBuilder();
    //    AppiumServiceBuilder.usingAnyFreePort();
    // }
    /**
     * Wait for the main screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown(isShown = true) {
      return $(this.selector).waitForDisplayed({
        
        timeout: 11000,
        reverse: !isShown,
      })

      
    }
  }
  