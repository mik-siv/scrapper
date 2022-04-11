"use strict";
/**
 * add your models here, example:
 * interface Crypto {
 *  name: sring;
 *  symbol: string;
 * }
 *
 * export interface CryptoArr extends Array<Crypto>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoRowData = void 0;
class CryptoRowData {
    constructor(name, symbol, price, previousClosePrice, openPrice, daysRange, marketCap, circulatingSupply, link) {
        this.name = name;
        this.symbol = symbol;
        this.price = price;
        this.previousClosePrice = previousClosePrice;
        this.openPrice = openPrice;
        this.daysRange = daysRange;
        this.marketCap = marketCap;
        this.circulatingSupply = circulatingSupply;
        this.link = link;
    }
}
exports.CryptoRowData = CryptoRowData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7OztBQWNILE1BQWEsYUFBYTtJQUN0QixZQUFtQixJQUFZLEVBQVMsTUFBYyxFQUFTLEtBQWEsRUFBUyxrQkFBMEIsRUFBUyxTQUFpQixFQUFTLFNBQWlCLEVBQVMsU0FBaUIsRUFBUyxpQkFBeUIsRUFBUyxJQUFZO1FBQWpPLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7SUFDcFAsQ0FBQztDQUNKO0FBSEQsc0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFkZCB5b3VyIG1vZGVscyBoZXJlLCBleGFtcGxlOlxuICogaW50ZXJmYWNlIENyeXB0byB7XG4gKiAgbmFtZTogc3Jpbmc7XG4gKiAgc3ltYm9sOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogZXhwb3J0IGludGVyZmFjZSBDcnlwdG9BcnIgZXh0ZW5kcyBBcnJheTxDcnlwdG8+XG4gKi9cblxuaW50ZXJmYWNlIENyeXB0b1Jvd3tcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG4gICAgcHJpY2U6IHN0cmluZztcbiAgICBwcmV2aW91c0Nsb3NlUHJpY2U6IHN0cmluZztcbiAgICBvcGVuUHJpY2U6IHN0cmluZztcbiAgICBkYXlzUmFuZ2U6IHN0cmluZztcbiAgICBtYXJrZXRDYXA6IHN0cmluZztcbiAgICBjaXJjdWxhdGluZ1N1cHBseTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENyeXB0b1Jvd0RhdGEgaW1wbGVtZW50cyBDcnlwdG9Sb3d7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN5bWJvbDogc3RyaW5nLCBwdWJsaWMgcHJpY2U6IHN0cmluZywgcHVibGljIHByZXZpb3VzQ2xvc2VQcmljZTogc3RyaW5nLCBwdWJsaWMgb3BlblByaWNlOiBzdHJpbmcsIHB1YmxpYyBkYXlzUmFuZ2U6IHN0cmluZywgcHVibGljIG1hcmtldENhcDogc3RyaW5nLCBwdWJsaWMgY2lyY3VsYXRpbmdTdXBwbHk6IHN0cmluZywgcHVibGljIGxpbms6IHN0cmluZykge1xuICAgIH1cbn1cblxuIl19