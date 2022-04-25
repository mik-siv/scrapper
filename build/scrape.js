"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const requests_1 = require("./requests");
const scrape = async (url) => {
    const baseUrl = 'https://finance.yahoo.com';
    let cryptoCurrenciesPage;
    let loadPage = async (url) => {
        let page;
        try {
            page = await (0, requests_1.reqPage)(url);
        }
        catch (error) {
            // Optional: Wrap errors
            console.log(`Error: ${error}`);
            return;
        }
        return page;
    };
    let fillAdditionalData = (obj, pageData) => {
        obj.previousClosePrice = pageData('#Main').find('[data-test="PREV_CLOSE-value"]').text();
        obj.openPrice = pageData('#Main').find('[data-test="OPEN-value"]').text();
        obj.daysRange = pageData('#Main').find('[data-test="DAYS_RANGE-value"]').text();
    };
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
    cryptoCurrenciesPage = await loadPage(url);
    const $ = cheerio.load(cryptoCurrenciesPage.data);
    const result = [];
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
            $('tbody .simpTblRow').each(async (i, el) => {
                let row = {};
                let subPage;
                $(el).find("td").each((i, el) => {
                    var _a;
                    for (const iter in columnNames) {
                        if (((_a = $(el).attr("aria-label")) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === columnNames[iter]) {
                            row[iter] = $(el).text();
                        }
                    }
                });
                row.link = baseUrl + $(el).find('[data-test="quoteLink"]').attr("href");
                subPage = await loadPage(row.link);
                const pageData = cheerio.load(subPage.data);
                fillAdditionalData(row, pageData);
                result.push(row);
                console.log(result[i]);
            });
            return resolve(result);
        });
    };
    await fillInTable();
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
    const startingUrl = 'https://finance.yahoo.com/cryptocurrencies';
    await scrape(startingUrl);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NjcmFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBbUM7QUFHbkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBaUIsRUFBRTtJQUNoRCxNQUFNLE9BQU8sR0FBRywyQkFBMkIsQ0FBQztJQUM1QyxJQUFJLG9CQUFvQixDQUFDO0lBQ3pCLElBQUksUUFBUSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN6QixJQUFJLElBQUksQ0FBQTtRQUNSLElBQUk7WUFDQSxJQUFJLEdBQUcsTUFBTSxJQUFBLGtCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLHdCQUF3QjtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMvQixPQUFPO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUE7SUFDRCxJQUFJLGtCQUFrQixHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQ3ZDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEYsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDekUsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbkYsQ0FBQyxDQUFBO0lBQ0QsSUFBSSxXQUFXLEdBQWM7UUFDekIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFN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QztBQUVqRCxDQUFDLENBQUE7QUFFRCxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ1IsTUFBTSxXQUFXLEdBQUcsNENBQTRDLENBQUM7SUFDakUsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDN0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XG5pbXBvcnQge3JlcVBhZ2V9IGZyb20gJy4vcmVxdWVzdHMnO1xuaW1wb3J0IHtDcnlwdG9Sb3dEYXRhLCBDcnlwdG9Sb3d9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5jb25zdCBzY3JhcGUgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20nO1xuICAgIGxldCBjcnlwdG9DdXJyZW5jaWVzUGFnZTtcbiAgICBsZXQgbG9hZFBhZ2UgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgICAgIGxldCBwYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlID0gYXdhaXQgcmVxUGFnZSh1cmwpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gT3B0aW9uYWw6IFdyYXAgZXJyb3JzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIGxldCBmaWxsQWRkaXRpb25hbERhdGEgPSAob2JqLCBwYWdlRGF0YSkgPT4ge1xuICAgICAgICBvYmoucHJldmlvdXNDbG9zZVByaWNlID0gcGFnZURhdGEoJyNNYWluJykuZmluZCgnW2RhdGEtdGVzdD1cIlBSRVZfQ0xPU0UtdmFsdWVcIl0nKS50ZXh0KClcbiAgICAgICAgb2JqLm9wZW5QcmljZSA9IHBhZ2VEYXRhKCcjTWFpbicpLmZpbmQoJ1tkYXRhLXRlc3Q9XCJPUEVOLXZhbHVlXCJdJykudGV4dCgpXG4gICAgICAgIG9iai5kYXlzUmFuZ2UgPSBwYWdlRGF0YSgnI01haW4nKS5maW5kKCdbZGF0YS10ZXN0PVwiREFZU19SQU5HRS12YWx1ZVwiXScpLnRleHQoKVxuICAgIH1cbiAgICBsZXQgY29sdW1uTmFtZXM6IENyeXB0b1JvdyA9IHtcbiAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgIHN5bWJvbDogXCJzeW1ib2xcIixcbiAgICAgICAgY2lyY3VsYXRpbmdTdXBwbHk6IFwiY2lyY3VsYXRpbmcgc3VwcGx5XCIsXG4gICAgICAgIGRheXNSYW5nZTogXCJkYXkncyByYW5nZVwiLFxuICAgICAgICBsaW5rOiBcImxpbmtcIixcbiAgICAgICAgbWFya2V0Q2FwOiBcIm1hcmtldCBjYXBcIixcbiAgICAgICAgb3BlblByaWNlOiBcIm9wZW5cIixcbiAgICAgICAgcHJpY2U6IFwicHJpY2UgKGludHJhZGF5KVwiLFxuICAgICAgICBwcmV2aW91c0Nsb3NlUHJpY2U6IFwicHJldmlvdXMgY2xvc2VcIlxuICAgIH1cbiAgICBjcnlwdG9DdXJyZW5jaWVzUGFnZSA9IGF3YWl0IGxvYWRQYWdlKHVybClcbiAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGNyeXB0b0N1cnJlbmNpZXNQYWdlLmRhdGEpO1xuICAgIGNvbnN0IHJlc3VsdDogQ3J5cHRvUm93RGF0YVtdID0gW107XG4gICAgLy8gYXdhaXQgJCgndGJvZHkgLnNpbXBUYmxSb3cnKS5lYWNoKGFzeW5jIChpLCBlbCkgPT4ge1xuICAgIC8vICAgICBsZXQgcm93OiB7fSA9IHt9O1xuICAgIC8vICAgICAkKGVsKS5maW5kKFwidGRcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAvLyAgICAgICAgIGZvciAoY29uc3QgaXRlciBpbiBjb2x1bW5OYW1lcykge1xuICAgIC8vICAgICAgICAgICAgIGlmICgkKGVsKS5hdHRyKFwiYXJpYS1sYWJlbFwiKT8udG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gY29sdW1uTmFtZXNbaXRlcl0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcm93W2l0ZXJdID0gJChlbCkudGV4dCgpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgbGV0IGxpbmtBZGRyZXNzID0gJChlbCkuZmluZCgnW2RhdGEtdGVzdD1cInF1b3RlTGlua1wiXScpLmF0dHIoXCJocmVmXCIpO1xuICAgIC8vICAgICByb3cubGluayA9IGJhc2VVcmwgKyBsaW5rQWRkcmVzcztcbiAgICAvLyAgICAgbGV0IHN1YlBhZ2U7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBzdWJQYWdlID0gYXdhaXQgcmVxUGFnZShyb3cubGluayk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zdCBwYWdlRGF0YSA9IGNoZWVyaW8ubG9hZChzdWJQYWdlLmRhdGEpXG4gICAgLy8gICAgIHJvdy5wcmV2aW91c0Nsb3NlUHJpY2UgPSBwYWdlRGF0YSgnI01haW4nKS5maW5kKCdbZGF0YS10ZXN0PVwiUFJFVl9DTE9TRS12YWx1ZVwiXScpLnRleHQoKVxuICAgIC8vICAgICByb3cub3BlblByaWNlID0gcGFnZURhdGEoJyNNYWluJykuZmluZCgnW2RhdGEtdGVzdD1cIk9QRU4tdmFsdWVcIl0nKS50ZXh0KClcbiAgICAvLyAgICAgcm93LmRheXNSYW5nZSA9IHBhZ2VEYXRhKCcjTWFpbicpLmZpbmQoJ1tkYXRhLXRlc3Q9XCJEQVlTX1JBTkdFLXZhbHVlXCJdJykudGV4dCgpXG4gICAgLy8gICAgIHJlc3VsdC5wdXNoKHJvdylcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0Lmxlbmd0aClcbiAgICAvLyB9KVxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5sZW5ndGgpXG5cbiAgICBsZXQgZmlsbEluVGFibGUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICQoJ3Rib2R5IC5zaW1wVGJsUm93JykuZWFjaChhc3luYyAoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgJChlbCkuZmluZChcInRkXCIpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXIgaW4gY29sdW1uTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuYXR0cihcImFyaWEtbGFiZWxcIik/LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGNvbHVtbk5hbWVzW2l0ZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1tpdGVyXSA9ICQoZWwpLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJvdy5saW5rID0gYmFzZVVybCArICQoZWwpLmZpbmQoJ1tkYXRhLXRlc3Q9XCJxdW90ZUxpbmtcIl0nKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViUGFnZSA9IGF3YWl0IGxvYWRQYWdlKHJvdy5saW5rKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IGNoZWVyaW8ubG9hZChzdWJQYWdlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIGZpbGxBZGRpdGlvbmFsRGF0YShyb3csIHBhZ2VEYXRhKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChyb3cpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFtpXSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXdhaXQgZmlsbEluVGFibGUoKVxuICAgIC8vMS4gcmVhZCB0YWJsZSByb3dzXG4gICAgLy8yLiBnZXQgZGF0YSBmcm9tIGV2ZXJ5IHJvd1xuICAgIC8vMy4gcmVxdWVzdCBhbmQgcGFyc2UgZGV0YWlsIHZpZXcgb2YgZXZlcnkgcm93XG4gICAgLy80LiBnZXQgZGF0YSBmcm9tIGRldGFpbCB2aWV3XG4gICAgLy81LiBjcmVhdGUgQ3J5cHRvUm93RGF0YSBvYmplY3QgZnJvbSBkYXRhXG4gICAgLy82LiBwdXNoIG9iamVjdCBpbnRvIHJlc3VsdCBhcnJheVxuICAgIC8vNy4gY29udmVydCByZXN1bHQgYXJyYXkgaW50byBDU1Ygc3RyaW5nIChjc3Ytc3RyaW5naWZ5KVxuICAgIC8vOC4gd3JpdGUgb3V0cHV0LmNzdiBmaWxlIChmcy53cml0ZUZpbGVTeW5jKVxuXG59XG5cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRpbmdVcmwgPSAnaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9jcnlwdG9jdXJyZW5jaWVzJztcbiAgICBhd2FpdCBzY3JhcGUoc3RhcnRpbmdVcmwpXG59KSgpO1xuIl19