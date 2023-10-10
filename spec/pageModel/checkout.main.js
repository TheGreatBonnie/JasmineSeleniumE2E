const Main = require('./main');
const { Select } = require("selenium-webdriver");

class Checkout extends Main {
  
    constructor() {
      super();

      this.checkoutButton = ('//a[@class="btn btn-lg btn-primary"]');
      this.guestCheckoutCheckbox = ("//label[@for='input-account-guest']");
      this.firstNameInput = ("input-payment-firstname");
      this.lastNameInput = ("input-payment-lastname");
      this.emailInput = ("input-payment-email");
      this.telephoneInput = ("input-payment-telephone");
      this.companyInput = ("input-payment-company");
      this.addressInput = ("input-payment-address-1");
      this.cityInput = ("input-payment-city");
      this.postalcodeInput = ("input-payment-postcode");
      this.selectCountryElementInput = ("input-payment-country");
      this.selectZoneElementInput = ("input-payment-zone");
      this.agreeTermsCheckbox = ('//label[@for="input-agree"]');
      this.continueButton = ("button-save");
      this.confirmOrderButton = ("button-confirm");
      this.OrderPlacedSuccessMessageText = ('//h1[@class="page-title my-3"]');
    }
  
    async checkoutBtn() {
        const checkoutBtn = await this.byXpath(this.driver, this.checkoutButton);
        await checkoutBtn.click();
      }
    
      async guestCheckout() {
        const guestCheckout = await this.byXpath(this.driver, this.guestCheckoutCheckbox);
        await guestCheckout.click();
      }
    
      async setFirstName() {
        const userFirstName = await this.byId(this.driver, this.firstNameInput);
        await userFirstName.clear();
        await userFirstName.sendKeys("James");
      }
    
      async setLastName() {
        const userLastName = await this.byId(this.driver, this.lastNameInput);
        await userLastName.clear();
        await userLastName.sendKeys("Doe");
      }
    
      async setEmail() {
        const userEmail = await this.byId(this.driver, this.emailInput);
        await userEmail.clear();
        await userEmail.sendKeys("john101@gmail.com");
      }
    
      async SetTelephone() {
        const setTelephone = await this.byId(this.driver, this.telephoneInput);
        await setTelephone.clear();
        await setTelephone.sendKeys("0712345678");
      }
    
      async setCompany() {
        const userCompany = await this.byId(this.driver, this.companyInput);
        await userCompany.clear();
        await userCompany.sendKeys("TheCompany");
      }
    
      async setAddress() {
        const userAddress = await this.byId(this.driver, this.addressInput);
        await userAddress.clear();
        await userAddress.sendKeys("My address");
      }
    
      async setCity() {
        const userCity = await this.byId(this.driver, this.cityInput);
        await userCity.clear();
        await userCity.sendKeys("New York");
      }
    
      async setPostalCode() {
        const userPostalCode = await this.byId(this.driver, this.postalcodeInput);
        await userPostalCode.clear();
        await userPostalCode.sendKeys("50500");
      }
    
      async selectCountryElement() {
        const selectCountryElement = await this.byId(this.driver, this.selectCountryElementInput);
        const selectCountry = new Select(selectCountryElement);
        await selectCountry.selectByValue("223");
      }
    
      async selectZoneElement() {
        const selectZoneElement = await this.byId(this.driver, this.selectZoneElementInput);
        const selectZone = new Select(selectZoneElement);
        await selectZone.selectByValue("3655");
      }
    
      async agreeTerms() {
        const agreeTerms = await this.byXpath(this.driver, this.agreeTermsCheckbox);
        await agreeTerms.click();
      }
    
      async continueBtn() {
        const continueBtn = await this.byId(this.driver, this.continueButton);
        await continueBtn.click();
      }
    
      async confirmOrder() {
        const confirmOrder = await this.byId(this.driver, this.confirmOrderButton);
        await confirmOrder.click();
      }
    
      async OrderPlacedSuccessMessage() {
        const OrderPlacedSuccessMessage = await this.byXpath(this.driver, this.OrderPlacedSuccessMessageText);
        OrderPlacedSuccessMessage.getText().then(function (value) {
          expect(value).toBe("Your order has been placed!");
        });
      }
}

module.exports = new Checkout();