const { test, expect } = require('@playwright/test');

test('Search Galaxy and add to cart', async ({ page }) => {
  
  // Open Amazon
  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

  // Search Galaxy
  await page.fill('#twotabsearchtextbox', 'Samsung Galaxy');
  await page.press('#twotabsearchtextbox', 'Enter');

  // Wait for results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // Select first product
  const firstProduct = page.locator('[data-component-type="s-search-result"] h2 a').first();

  // Click and handle new tab
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    firstProduct.click()
  ]);

  // Wait for price
  await newPage.waitForSelector('.a-price-whole');

  // Get price
  const price = await newPage.locator('.a-price-whole').first().innerText();
  console.log('Galaxy Price:', price);

  // Add to cart
  await newPage.click('#add-to-cart-button');
});