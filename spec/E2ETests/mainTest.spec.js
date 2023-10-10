const addToCart = require("../pageModel/addToCart.main");
const Checkout = require("../pageModel/checkout.main");

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 80 * 1000;
jasmine.getEnv().defaultTimeoutInterval = 800000;

// Start to write the first test case
describe("E-Commerce Site End-To-End Tests", function () {
  beforeEach(async () => {
    addToCart.before();
  });

  afterEach(async () => {
    addToCart.quitB();
  });

  it("Add Item To Cart And Checkout", async function () {
    await addToCart.visit();

    // Add to cart
    await addToCart.categoryBtn();
    await addToCart.phonesCategoryBtn();
    await addToCart.iPhoneBtn();
    await addToCart.addToCartBtn();
    await addToCart.cartBtn();
    await addToCart.itemName();

    // Checkout
    await Checkout.checkoutBtn();
    await Checkout.guestCheckout();
    await Checkout.setFirstName();
    await Checkout.setLastName();
    await Checkout.setEmail();
    await Checkout.SetTelephone();
    await Checkout.setCompany();
    await Checkout.setAddress();
    await Checkout.setCity();
    await Checkout.setPostalCode();
    await Checkout.selectCountryElement();
    await Checkout.selectZoneElement();
    await Checkout.agreeTerms();
    await Checkout.continueBtn();
    await Checkout.confirmOrder();
    await Checkout.OrderPlacedSuccessMessage();
  });

});
