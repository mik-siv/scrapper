import * as cheerio from 'cheerio';
import { stringify as csvStringify } from 'csv-stringify';
import * as fs from 'fs';

import {reqPage} from './requests';
import {CryptoRowData} from "./models";

const scrape = async (url: string): Promise<void> => {
    let page
    try {
        page = await reqPage(url);

    } catch (error) {
        // Optional: Wrap errors
        console.log(`Error: ${error}`);
        return;
    }

    const $ = cheerio.load(page.data);

    const result: CryptoRowData[] = [];
	//code here
    //https://github.com/microsoft/TypeScript
    //init typescript config file: npx tsc --init

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
