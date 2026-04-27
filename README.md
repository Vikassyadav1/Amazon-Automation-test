# Amazon Automation (Playwright)

## Step 0: Unzip the Project

First unzip the downloaded ZIP project folder before running anything.

---

## Overview

Automates Amazon workflows:

* Search iPhone & Samsung Galaxy
* Open product page
* Extract price
* Add to cart
* Run tests in parallel

---

## Setup

### Install Dependencies

```bash id="c7xk3n"
npm install
npx playwright install
```

---

## Run Tests

```bash id="m9k2qp"
npx playwright test
```

---

## Structure

```id="3f9k2v"
tests/
  iphone.spec.js
  galaxy.spec.js
playwright.config.js
```

---

## Parallel Execution

```js id="b2l7re"
fullyParallel: true,
workers: 2
```

---

## Test Cases

* iPhone search and add to cart
* Galaxy search and add to cart

---

## Output

Prints product price in console.

---

## Note

Amazon UI is dynamic; selectors may change.
