/**
 * add your models here, example:
 * interface Crypto {
 *  name: sring;
 *  symbol: string;
 * }
 *
 * export interface CryptoArr extends Array<Crypto>
 */

export interface CryptoRow{
    name: string;
    symbol: string;
    price: string;
    previousClosePrice: string;
    openPrice: string;
    daysRange: string;
    marketCap: string;
    circulatingSupply: string;
    link: string;
}

export class CryptoRowData implements CryptoRow{
    constructor(public name: string, public symbol: string, public price: string, public previousClosePrice: string, public openPrice: string, public daysRange: string, public marketCap: string, public circulatingSupply: string, public link: string) {
    }
}

