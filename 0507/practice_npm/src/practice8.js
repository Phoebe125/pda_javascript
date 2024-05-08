import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import iconv from 'iconv-lite';

const responseTypeValue = 'arraybuffer';
const responseEncodingValue = 'binary';

async function scrapeDatePrice(pageNum) {
    const resp = await axios.get('https://finance.naver.com/item/sise_day.naver', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        },
        params: {
            code: '005930',
            page: pageNum,
        },
        'responseType': responseTypeValue,
        'responseEncoding': responseEncodingValue,
    });
    const data = iconv.decode(Buffer.from(resp.data), 'EUC-KR');;
    const $ = cheerio.load(data);
    const table = $('tr');
    const tableParsed = table.map((i, el) => {
        return parseTable($(el), $);
    }).get();

    fs.writeFile(`../output/result_stock_${pageNum}.json`, JSON.stringify(tableParsed, null, 2), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Saved result_stock_${pageNum}.json`);
        }
    });
}

function parseTable(Elem, $) {
    const date = Elem.find('span.tah.p10.gray03').text();
    const priceList = Elem.find('span.tah.p11');
    const status = Elem.find('em .blind').text();
    const priceParse = priceList.map((i, elem) => {
        const price = $(elem).text().trim();
        return price
    }).get();
    if (date) {
        const result = {
            "date": date, "closed": priceParse[0], "diff": priceParse[1], "status": status,
            "Open": priceParse[2], "High": priceParse[3], "Low": priceParse[4], "Volume": priceParse[5]
        };
        console.log(result);
        return result;

    }
}

for (let p = 1; p < 11; p++) {
    await scrapeDatePrice(p);
}