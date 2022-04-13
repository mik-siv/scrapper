import * as cheerio from 'cheerio';
import {reqPage} from './requests';
import {CryptoRowData, CryptoRow} from "./models";

const scrape = async (url: string): Promise<void> => {
    let page
    try {
        page = await reqPage(url);
    } catch (error) {
        // Optional: Wrap errors
        console.log(`Error: ${error}`);
        return;
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
    const $ = cheerio.load(page.data);
    const result: CryptoRowData[] = [];
    $('tbody .simpTblRow').each((i, el) => {
        let row: {} = {};
        $(el).find("td").each((i, el) => {
            for (const iter in columnNames) {
                if ($(el).attr("aria-label")?.toLocaleLowerCase() === columnNames[iter]) {
                    row[iter] = $(el).text();
                }
            }
        })
        result.push(row)
    })

    console.log(JSON.stringify(result))


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
    const startingUrl = 'https://finance.yahoo.com/cryptocurrencies/';
    await scrape(startingUrl)
})();
