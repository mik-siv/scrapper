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
    const $ = cheerio.load(page.data);
    const result = [];
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
};
(async () => {
    const startingUrl = 'https://finance.yahoo.com/cryptocurrencies/';
    await scrape(startingUrl);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NjcmFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUluQyx5Q0FBbUM7QUFHbkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBaUIsRUFBRTtJQUNoRCxJQUFJLElBQUksQ0FBQTtJQUNSLElBQUk7UUFDQSxJQUFJLEdBQUcsTUFBTSxJQUFBLGtCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7S0FFN0I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLHdCQUF3QjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQixPQUFPO0tBQ1Y7SUFFRCxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsQyxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ3RDLFdBQVc7SUFDUix5Q0FBeUM7SUFDekMsNkNBQTZDO0lBRTdDLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLHlEQUF5RDtJQUN6RCw2Q0FBNkM7QUFFakQsQ0FBQyxDQUFBO0FBRUQsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNSLE1BQU0sV0FBVyxHQUFHLDZDQUE2QyxDQUFDO0lBQ2xFLE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nO1xuaW1wb3J0IHsgc3RyaW5naWZ5IGFzIGNzdlN0cmluZ2lmeSB9IGZyb20gJ2Nzdi1zdHJpbmdpZnknO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5pbXBvcnQge3JlcVBhZ2V9IGZyb20gJy4vcmVxdWVzdHMnO1xuaW1wb3J0IHtDcnlwdG9Sb3dEYXRhfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuY29uc3Qgc2NyYXBlID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgbGV0IHBhZ2VcbiAgICB0cnkge1xuICAgICAgICBwYWdlID0gYXdhaXQgcmVxUGFnZSh1cmwpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gT3B0aW9uYWw6IFdyYXAgZXJyb3JzXG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQocGFnZS5kYXRhKTtcblxuICAgIGNvbnN0IHJlc3VsdDogQ3J5cHRvUm93RGF0YVtdID0gW107XG5cdC8vY29kZSBoZXJlXG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHRcbiAgICAvL2luaXQgdHlwZXNjcmlwdCBjb25maWcgZmlsZTogbnB4IHRzYyAtLWluaXRcblxuICAgIC8vMS4gcmVhZCB0YWJsZSByb3dzXG4gICAgLy8yLiBnZXQgZGF0YSBmcm9tIGV2ZXJ5IHJvd1xuICAgIC8vMy4gcmVxdWVzdCBhbmQgcGFyc2UgZGV0YWlsIHZpZXcgb2YgZXZlcnkgcm93XG4gICAgLy80LiBnZXQgZGF0YSBmcm9tIGRldGFpbCB2aWV3XG4gICAgLy81LiBjcmVhdGUgQ3J5cHRvUm93RGF0YSBvYmplY3QgZnJvbSBkYXRhXG4gICAgLy82LiBwdXNoIG9iamVjdCBpbnRvIHJlc3VsdCBhcnJheVxuICAgIC8vNy4gY29udmVydCByZXN1bHQgYXJyYXkgaW50byBDU1Ygc3RyaW5nIChjc3Ytc3RyaW5naWZ5KVxuICAgIC8vOC4gd3JpdGUgb3V0cHV0LmNzdiBmaWxlIChmcy53cml0ZUZpbGVTeW5jKVxuXG59XG5cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRpbmdVcmwgPSAnaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9jcnlwdG9jdXJyZW5jaWVzLyc7XG4gICAgYXdhaXQgc2NyYXBlKHN0YXJ0aW5nVXJsKVxufSkoKTtcbiJdfQ==