#  Amazon Automation (Playwright)

##  Overview

Automates Amazon workflows:

* Search iPhone & Samsung Galaxy
* Open product page
* Extract price
* Add to cart
* Run tests in parallel

---

## ⚙️ Setup

```bash
npm install
npx playwright install
```

---

##  Run Tests

```bash
npx playwright test
```

---

##  Structure

```
tests/
  iphone.spec.js
  galaxy.spec.js
playwright.config.js
```

---

## Parallel Execution

```js
fullyParallel: true,
workers: 2
```

---

## Time Limit

* Each test has a default timeout of **30 seconds**
* Proper waits (`waitForSelector`) are used to avoid timeout failures

---

##  Test Cases

* iPhone search & add to cart
* Galaxy search & add to cart

---

##  Output

Prints product price in console.

---

## Note

Amazon UI is dynamic; selectors may change.
