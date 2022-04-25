import * as cheerio from 'cheerio';
import {reqPage} from './requests';
import {CryptoRowData, CryptoRow} from "./models";

const scrape = async (url: string): Promise<void> => {
    const baseUrl = 'https://finance.yahoo.com';
    let cryptoCurrenciesPage;
    let loadPage = async (url) => {
        let page
        try {
            page = await reqPage(url);
        } catch (error) {
            // Optional: Wrap errors
            console.log(`Error: ${error}`);
            return;
        }
        return page;
    }
    let fillAdditionalData = (obj, pageData) => {
        obj.previousClosePrice = pageData('#Main').find('[data-test="PREV_CLOSE-value"]').text()
        obj.openPrice = pageData('#Main').find('[data-test="OPEN-value"]').text()
        obj.daysRange = pageData('#Main').find('[data-test="DAYS_RANGE-value"]').text()
    }
    let columnNames: CryptoRow = {
        name: "name",
        symbol: "symbol",
        circulatingSupply: "circulating supply",
        daysRange: "day's range",
        link: "link",
        marketCap: "market cap",
        openPrice: "open",
        price: "price (intraday)",
        previousClosePrice: "previous close"
    }
    cryptoCurrenciesPage = await loadPage(url)
    const $ = cheerio.load(cryptoCurrenciesPage.data);
    const result: CryptoRowData[] = [];
    // await $('tbody .simpTblRow').each(async (i, el) => {
    //     let row: {} = {};
    //     $(el).find("td").each((i, el) => {
    //         for (const iter in columnNames) {
    //             if ($(el).attr("aria-label")?.toLocaleLowerCase() === columnNames[iter]) {
    //                 row[iter] = $(el).text();
    //             }
    //         }
    //     })
    //     let linkAddress = $(el).find('[data-test="quoteLink"]').attr("href");
    //     row.link = baseUrl + linkAddress;
    //     let subPage;
    //     try {
    //         subPage = await reqPage(row.link);
    //     } catch (err) {
    //         console.log(err);
    //         return;
    //     }
    //     const pageData = cheerio.load(subPage.data)
    //     row.previousClosePrice = pageData('#Main').find('[data-test="PREV_CLOSE-value"]').text()
    //     row.openPrice = pageData('#Main').find('[data-test="OPEN-value"]').text()
    //     row.daysRange = pageData('#Main').find('[data-test="DAYS_RANGE-value"]').text()
    //     result.push(row)
    //     console.log(result.length)
    // })
    // console.log(result.length)

    let fillInTable = async function () {
        return new Promise(resolve => {
            await $('tbody .simpTblRow').each(async (i, el) => {
                    let row = {};
                    let subPage;
                    $(el).find("td").each((i, el) => {
                        for (const iter in columnNames) {
                            if ($(el).attr("aria-label")?.toLocaleLowerCase() === columnNames[iter]) {
                                row[iter] = $(el).text();
                            }
                        }
                    })
                    row.link = baseUrl + $(el).find('[data-test="quoteLink"]').attr("href");
                    subPage = await loadPage(row.link)
                    const pageData = cheerio.load(subPage.data)
                    fillAdditionalData(row, pageData)
                    result.push(row)
                    console.log(result[i])
                }
            )
            return resolve(result)
        })
    }
    await fillInTable()
    //1. read table rows
    //2. get data from every row
    //3. request and parse detail view of every row
    //4. get data from detail view
    //5. create CryptoRowData object from data
    //6. push object into result array
    //7. convert result array into CSV string (csv-stringify)
    //8. write output.csv file (fs.writeFileSync)

}

(async () => {
    const startingUrl = 'https://finance.yahoo.com/cryptocurrencies';
    await scrape(startingUrl)
})();
