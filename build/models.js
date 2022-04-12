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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7OztBQWNILE1BQWEsYUFBYTtJQUN0QixZQUFtQixJQUFZLEVBQVMsTUFBYyxFQUFTLEtBQWEsRUFBUyxrQkFBMEIsRUFBUyxTQUFpQixFQUFTLFNBQWlCLEVBQVMsU0FBaUIsRUFBUyxpQkFBeUIsRUFBUyxJQUFZO1FBQWpPLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7SUFDcFAsQ0FBQztDQUNKO0FBSEQsc0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFkZCB5b3VyIG1vZGVscyBoZXJlLCBleGFtcGxlOlxuICogaW50ZXJmYWNlIENyeXB0byB7XG4gKiAgbmFtZTogc3Jpbmc7XG4gKiAgc3ltYm9sOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogZXhwb3J0IGludGVyZmFjZSBDcnlwdG9BcnIgZXh0ZW5kcyBBcnJheTxDcnlwdG8+XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBDcnlwdG9Sb3d7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN5bWJvbDogc3RyaW5nO1xuICAgIHByaWNlOiBzdHJpbmc7XG4gICAgcHJldmlvdXNDbG9zZVByaWNlOiBzdHJpbmc7XG4gICAgb3BlblByaWNlOiBzdHJpbmc7XG4gICAgZGF5c1JhbmdlOiBzdHJpbmc7XG4gICAgbWFya2V0Q2FwOiBzdHJpbmc7XG4gICAgY2lyY3VsYXRpbmdTdXBwbHk6IHN0cmluZztcbiAgICBsaW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9Sb3dEYXRhIGltcGxlbWVudHMgQ3J5cHRvUm93e1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBzeW1ib2w6IHN0cmluZywgcHVibGljIHByaWNlOiBzdHJpbmcsIHB1YmxpYyBwcmV2aW91c0Nsb3NlUHJpY2U6IHN0cmluZywgcHVibGljIG9wZW5QcmljZTogc3RyaW5nLCBwdWJsaWMgZGF5c1JhbmdlOiBzdHJpbmcsIHB1YmxpYyBtYXJrZXRDYXA6IHN0cmluZywgcHVibGljIGNpcmN1bGF0aW5nU3VwcGx5OiBzdHJpbmcsIHB1YmxpYyBsaW5rOiBzdHJpbmcpIHtcbiAgICB9XG59XG5cbiJdfQ==