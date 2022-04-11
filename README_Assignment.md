## Scrape Yahoo Finances

The integration written in Typescript and use a combination of http
requests and cheerio.js to extract data.

*Integrations are core to Plaid's business. Thank you for taking the time to complete this test!*

### Getting started

Go to 'https://finance.yahoo.com/cryptocurrencies/'.

Take a look around the site to understand its structure and where data comes from.
Your next step will be to write an scraper that scrapes data from the site
into a CSV.

### Requirements

We've provided a TypeScript framework and test runner to use in building your extractor.
Take a look at `src/scrape.ts`. This is the test runner for your extractor.
Your extractor code should all live within the `src/` directory, with the
entry point for your extractor being `scrape.ts`.

`scrape.ts` expects your extractor to have the following implemented:

```
  models                // Declaring and creating Types/Interfaces in Typescript
  csv-stringify         // Use this package to convert your results to csv format
  cheerio parsing       // Parse the HTML pages dynamically by targeting the right CSS selectors
  README.md             // A description of how your scraper works, edge cases, known issues, etc (feel free to delete this README to make room for yours)
```

### Running your extractor

To run the scraper:

```
npm install (to add `package-lock.json`)
make setup
make build
make scrape
```

Again, your task is to implement `scrape` and the rest of the required parsin. A previous developer set up `scrape` and added `reqPage` to handle your http requests before having to switch to another project.

Once you've completed your changes and want to test your work, you can run the scrape script again:

```
make scrape
```

You should now receive output that looks similar to `example_output.csv`.

You may want to use `make watch` in a separate terminal window in order to run the TypeScript compiler in watch mode. Watch input files and trigger recompilation on changes, removing the need to run `make build` every time you want to test some changes.

Before you submit your solution, please run `make lint` (you'll need to implement ESLint) to run eslint on the `src` directory.

#### Windows users
This extractor's _Makefile_ uses unix style file paths. If you are working on a Windows machine you may have to replace `/` with `\`; For example:


`BIN = node_modules/.bin` => `BIN = node_modules\.bin`


### Grading Criteria


  - **Completeness**: did you complete the required functions?
  - **Correctness**: does the scraper return correct & comprehensive data?
  - **Readability**: is the code easy to follow?
  - **Thoroughness**: are edge cases handled correctly? what happens if the site changes their css selectors later on?
