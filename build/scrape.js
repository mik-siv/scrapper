"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const requests_1 = require("./requests");
const scrape = async (url) => {
    let page;
    try {
        page = await (0, requests_1.reqPage)(url);
    }
    catch (error) {
        // Optional: Wrap errors
        console.log(`Error: ${error}`);
        return;
    }
    let columnNames = {
        name: "name",
        symbol: "symbol",
        circulatingSupply: "circulating supply",
        daysRange: "day's range",
        link: "link",
        marketCap: "market cap",
        openPrice: "open",
        price: "price (intraday)",
        previousClosePrice: "previous close"
    };
    const $ = cheerio.load(page.data);
    const result = [];
    $('tbody .simpTblRow').each((i, el) => {
        let row = {};
        $(el).find("td").each((i, el) => {
            var _a;
            for (const iter in columnNames) {
                if (((_a = $(el).attr("aria-label")) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === columnNames[iter]) {
                    row[iter] = $(el).text();
                }
            }
        });
        result.push(row);
    });
    console.log(JSON.stringify(result));
    //1. read table rows
    //2. get data from every row
    //3. request and parse detail view of every row
    //4. get data from detail view
    //5. create CryptoRowData object from data
    //6. push object into result array
    //7. convert result array into CSV string (csv-stringify)
    //8. write output.csv file (fs.writeFileSync)
};
(async () => {
    const startingUrl = 'https://finance.yahoo.com/cryptocurrencies/';
    await scrape(startingUrl);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NjcmFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBbUM7QUFHbkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBaUIsRUFBRTtJQUNoRCxJQUFJLElBQUksQ0FBQTtJQUNSLElBQUk7UUFDQSxJQUFJLEdBQUcsTUFBTSxJQUFBLGtCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLHdCQUF3QjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQixPQUFPO0tBQ1Y7SUFDRCxJQUFJLFdBQVcsR0FBYztRQUN6QixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGlCQUFpQixFQUFFLG9CQUFvQjtRQUN2QyxTQUFTLEVBQUUsYUFBYTtRQUN4QixJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLEtBQUssRUFBRSxrQkFBa0I7UUFDekIsa0JBQWtCLEVBQUUsZ0JBQWdCO0tBQ3ZDLENBQUE7SUFDRCxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNsQyxJQUFJLEdBQUcsR0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7O1lBQzVCLEtBQUssTUFBTSxJQUFJLElBQUksV0FBVyxFQUFFO2dCQUM1QixJQUFJLENBQUEsTUFBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywwQ0FBRSxpQkFBaUIsRUFBRSxNQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDckUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDNUI7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBR25DLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLHlEQUF5RDtJQUN6RCw2Q0FBNkM7QUFFakQsQ0FBQyxDQUFBO0FBRUQsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNSLE1BQU0sV0FBVyxHQUFHLDZDQUE2QyxDQUFDO0lBQ2xFLE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nO1xuaW1wb3J0IHtyZXFQYWdlfSBmcm9tICcuL3JlcXVlc3RzJztcbmltcG9ydCB7Q3J5cHRvUm93RGF0YSwgQ3J5cHRvUm93fSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuY29uc3Qgc2NyYXBlID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgbGV0IHBhZ2VcbiAgICB0cnkge1xuICAgICAgICBwYWdlID0gYXdhaXQgcmVxUGFnZSh1cmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE9wdGlvbmFsOiBXcmFwIGVycm9yc1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNvbHVtbk5hbWVzOiBDcnlwdG9Sb3cgPSB7XG4gICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICBzeW1ib2w6IFwic3ltYm9sXCIsXG4gICAgICAgIGNpcmN1bGF0aW5nU3VwcGx5OiBcImNpcmN1bGF0aW5nIHN1cHBseVwiLFxuICAgICAgICBkYXlzUmFuZ2U6IFwiZGF5J3MgcmFuZ2VcIixcbiAgICAgICAgbGluazogXCJsaW5rXCIsXG4gICAgICAgIG1hcmtldENhcDogXCJtYXJrZXQgY2FwXCIsXG4gICAgICAgIG9wZW5QcmljZTogXCJvcGVuXCIsXG4gICAgICAgIHByaWNlOiBcInByaWNlIChpbnRyYWRheSlcIixcbiAgICAgICAgcHJldmlvdXNDbG9zZVByaWNlOiBcInByZXZpb3VzIGNsb3NlXCJcbiAgICB9XG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChwYWdlLmRhdGEpO1xuICAgIGNvbnN0IHJlc3VsdDogQ3J5cHRvUm93RGF0YVtdID0gW107XG4gICAgJCgndGJvZHkgLnNpbXBUYmxSb3cnKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICBsZXQgcm93OiB7fSA9IHt9O1xuICAgICAgICAkKGVsKS5maW5kKFwidGRcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlciBpbiBjb2x1bW5OYW1lcykge1xuICAgICAgICAgICAgICAgIGlmICgkKGVsKS5hdHRyKFwiYXJpYS1sYWJlbFwiKT8udG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gY29sdW1uTmFtZXNbaXRlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcm93W2l0ZXJdID0gJChlbCkudGV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzdWx0LnB1c2gocm93KVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxuXG5cbiAgICAvLzEuIHJlYWQgdGFibGUgcm93c1xuICAgIC8vMi4gZ2V0IGRhdGEgZnJvbSBldmVyeSByb3dcbiAgICAvLzMuIHJlcXVlc3QgYW5kIHBhcnNlIGRldGFpbCB2aWV3IG9mIGV2ZXJ5IHJvd1xuICAgIC8vNC4gZ2V0IGRhdGEgZnJvbSBkZXRhaWwgdmlld1xuICAgIC8vNS4gY3JlYXRlIENyeXB0b1Jvd0RhdGEgb2JqZWN0IGZyb20gZGF0YVxuICAgIC8vNi4gcHVzaCBvYmplY3QgaW50byByZXN1bHQgYXJyYXlcbiAgICAvLzcuIGNvbnZlcnQgcmVzdWx0IGFycmF5IGludG8gQ1NWIHN0cmluZyAoY3N2LXN0cmluZ2lmeSlcbiAgICAvLzguIHdyaXRlIG91dHB1dC5jc3YgZmlsZSAoZnMud3JpdGVGaWxlU3luYylcblxufVxuXG4oYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0aW5nVXJsID0gJ2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vY3J5cHRvY3VycmVuY2llcy8nO1xuICAgIGF3YWl0IHNjcmFwZShzdGFydGluZ1VybClcbn0pKCk7XG4iXX0=