# Telnyx.com — Cypress Test Automation

Automated end-to-end tests for [telnyx.com](https://telnyx.com), covering critical user flows and responsive header behavior. Built with [Cypress](https://www.cypress.io/) and integrated with GitHub Actions CI and Cypress Cloud for test reporting.

## 📋 Test Plan

The full test plan (10 critical test cases with Preconditions, Test Steps, and Expected Results) is available in [`Telnyx_TestPlan_10Critical.xlsx`](./Telnyx_TestPlan_10Critical.xlsx).

| ID | Title | Priority |
|----|-------|----------|
| TC-01 | Homepage loads successfully | Critical |
| TC-02 | Logo click returns user to the homepage | High |
| TC-03 | "Pricing" menu item navigates to the pricing page | Critical |
| TC-04 | "Log in" button links to the customer portal | Critical |
| TC-05 | "Sign up" button navigates to the registration page | Critical |
| TC-06 | "Contact us" button navigates to the contact page | High |
| TC-07 | "Talk to an expert" hero button navigates correctly | High |
| TC-08 | Footer "Privacy Policy" link points to the correct page | Medium |
| TC-09 | Footer LinkedIn icon links to the correct social profile | Low |
| TC-10 | Burger menu icon is displayed at mobile screen width | Critical |

## 🛠 Tech Stack

- **[Cypress](https://www.cypress.io/)** — end-to-end testing framework
- **GitHub Actions** — CI pipeline, runs on every push/PR to `main`
- **Cypress Cloud** — test run recording, dashboards, and video/screenshot artifacts

## 📁 Project Structure

```
TelnyxAutoTest/
├── cypress/
│   └── e2e/
│       ├── critical-flows.cy.js   # TC-01 – TC-09 (desktop, core user flows)
│       └── responsive.cy.js       # TC-10 (mobile viewport, burger menu)
├── .github/
│   └── workflows/
│       └── cypress.yml            # CI pipeline definition
├── cypress.config.js              # Default config (desktop viewport)
├── cypress.mobile.config.js       # Alternate config (mobile viewport)
├── package.json
├── .gitignore
└── README.md
```

## ⚙️ How the Tests Work

All tests interact with real, verified elements on telnyx.com using Cypress's built-in commands — no custom framework abstractions, to keep the suite easy to read and maintain.

**Core commands used:**
- `cy.visit()` — loads a page
- `cy.get()` — selects elements by CSS selector
- `cy.contains()` — finds elements by visible text (used heavily since it's more resilient to markup changes than brittle CSS classes)
- `.should()` — makes assertions (visibility, `href` attribute values, URL content, etc.)
- `.click({ force: true })` — clicks elements; `force: true` is used where elements may be partially obscured or visually hidden (e.g. accessible-only menu labels)
- `cy.viewport()` — simulates different screen sizes for responsive testing

**Pattern:** each `it()` block is a fully independent, self-contained test that maps 1:1 to a row in the test plan (`TC-01`, `TC-02`, etc.), making it easy to trace a failing test back to its test case.

## 🚀 Getting Started

### Install dependencies
```bash
npm install
npx cypress install
```

### Run tests locally (interactive mode)
```bash
npm run cy:open
```

### Run tests headlessly (desktop config)
```bash
npm run cy:run
```

### Run the responsive test (mobile config)
```bash
npm run cy:run:mobile
```

## 🔁 CI/CD Pipeline

Every push or pull request to `main` automatically triggers the GitHub Actions workflow (`.github/workflows/cypress.yml`), which:
1. Checks out the repository
2. Installs dependencies and the Cypress binary
3. Runs the full test suite in headless Chrome
4. Records the run and uploads results (screenshots, video, test replay) to **Cypress Cloud**

The workflow can also be triggered manually from the **Actions** tab via `workflow_dispatch`.

### Setup requirements
- `projectId` set in `cypress.config.js` and `cypress.mobile.config.js` (from Cypress Cloud)
- `CYPRESS_RECORD_KEY` added as a GitHub Actions secret (Repo → Settings → Secrets and variables → Actions)

### 📊 Reports
Test run history and reports are available on Cypress Cloud:
👉 [Telnyx Cypress Cloud Dashboard](https://cloud.cypress.io/projects/7otkbt/runs)

## 📌 Notes
- `cypress.config.js` runs `critical-flows.cy.js` at a standard desktop viewport (1280×800).
- `cypress.mobile.config.js` runs `responsive.cy.js` at a mobile viewport (375×812), demonstrating a separate configuration for a different testing context.