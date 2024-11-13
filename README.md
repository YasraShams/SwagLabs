
<H1>Swag Labs Automation Testing Plan: POM Implementation</H1> 

**Screen Recording of Tests running:**

https://github.com/user-attachments/assets/6ca15a0b-8bb7-4abb-9e98-4ff7c3ed6477

--------------------------------------

**Introduction:**

This test plan is designed to identify the scope and approach for all automation testing activities for Swag labs, an application for online shopping. The purpose of this document is to execute the test cases that provide 100% test coverage and reduce manual effort.


**Objective:**

The objective of this test plan is as follows:
- Ensure reliability of main user flows: Login, Product Browsing, Add to Cart, Checkout, and Logout.
- Reduce manual effort and increase the speed of testing.
- Provide fast feedback for feature validation and regression testing through automated test cases.

**Scope:**
- Validates all functional aspects of the modules.
- Regression testing of all modules.
- UI/UX testing that checks for visual consistency and user experience.

**Test Strategy:**

Key scenarios are automated using Cypress with the **Page Object Model (POM)** to improve maintainability and reusability of test scripts.

**Test environment:**
- **Web Browsers:** Chrome, Firefox.
- **Operation System:** macOS, windows. 

**Programming language:** JavaScript.

**Test Cases:**

**Login page:**
- Validate page header.
- Validate users can login with the correct username, password and land on the Products page.
- Validate users are unable to login with incorrect username and password.
- Validate error message in case of incorrect username and password.

**Products Page:**
- Validate page header section:
  - App logo visible.
  - Burger menu visible and clickable(Expanded and collapsible).
  - Validate cart button visible.
- Validate Products header visible.
- Validate sorting products:
  - Active selection.
  - Name (Z to A)
  - Price low to high.
  - Price high to low.
- Validate products adding and removal from cart functioning.
- Validate cart badge state updated. 
- Validate cart button clickable and navigate user to cart page.

**Cart Page:**
- Validate cart items.
- Validate remove functionality working
- Validate Continue shopping redirects back to the product page.
- Validate checkout button redirects to Checkout page.

**Checkout Page:**
- Validate users can fill Checkout information.
- Validate continue page redirects to Checkout overview page.
- Validate order number and Total of products.
- Validate finish button redirects user to checkout-complete page.

**Test Data:**
- Usernames and passwords
- User information (First name, Last name, Zip/Postal Code)


**Conclusion:**

The automation test plan establishes a clear strategy for efficient and reliable testing of the Swag Labs application. By implementing this plan, we aim to enhance application stability, improve testing accuracy, and significantly reduce testing time and costs. This approach will ensure the Swag Labs application consistently meets quality standards, supporting faster and more reliable releases.



























