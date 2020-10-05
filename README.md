# Imhio Test Assign App
NextJS SSR Application

Available online: https://app.

---

## How to install

Install dependencies first

```bash
$ yarn install
```

---
### Development

To start in dev mode
```bash
$ yarn dev
```

Run tests
```bash
$ yarn test
```

Run linter
```bash
$ yarn lint
```

Run linter and fix problems
```bash
$ yarn format
```

---
### Production

Build for production
```bash
$ yarn build
```

Run in production
```bash
$ yarn start
```

---
### Based on
- Written with TypeScript for NextJS.
- Styled Components as CSS framework. Layout based on grid and flexbox for mobile first (up to 480px) and desktop.
- Used only react hooks and context API for state management.
- Integration tests with Jest and react-testing-library (JSDOM).
- Configured ESLint and Prettier as code formatter.

---
### Features
- A single page of catalog with video cards that fits automatically without media queries.
- A slider of pictures for every video card. On click it starts to scroll pictures. On second click it stops the scrolling. On click on other card it stops the previous scroller.
- Outline additional info on click on "More Info". It spreads down into the next line.

---
### Problems and Hints
- All device-specific CSS rules based on media queries and some elements can be hidden depends on screen size. Although this is a best practice, I have an experience to catch user agent and send only required elements from the server. So, for now I chose the-best-practice-way because it's easier and faster.
- Filtering by tags wasn't been produced because there are no target in test assignment.
- There are 5 cards in row instead of 4 in full width page view, because it fits in grid container automatically for 240px. If we want to fix it, we should increase the minimum width of cards up to 270px and it's also ok for mobile devices. So, I switched to it in the last version.
- Lazy list wasn't been produced, because SSR needs to render all elements immediately. But it works now for images via intersection observer.
- Test coverage is not full because it's not easy to check how is element is in viewport in JSDOM. So, I droped it, but know how to produce it. Or just use other tool like Selenium or Cypress.

---
### Time Cost
It costs about 13 hours of development includes tests.