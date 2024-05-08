// 연습문제(5): 네이버 주식 공시 리스트 가져오기
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import iconv from 'iconv-lite';

const responseTypeValue = 'arraybuffer';
const responseEncodingValue = 'binary';
const baseUrl = 'https://finance.naver.com';

async function scrapeNotice(pageNum) {
    const resp = await axios.get('https://finance.naver.com/item/news_notice.naver', {
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
    const data = iconv.decode(Buffer.from(resp.data), 'EUC-KR');
    const $ = cheerio.load(data);
    const table = $('tr');
    const tableParsed = table.map((i, el) => {
        return parseTable($(el));
    }).get();

    fs.writeFile(`../output/result_notice_${pageNum}.json`, JSON.stringify(tableParsed, null, 2), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Saved result_notice_${pageNum}.json`);
        }
    });
}

function parseTable(Elem) {
    const title = Elem.find('.title').text();
    const url = baseUrl + Elem.find('.title a').prop('href');
    const info = Elem.find('.info').text();
    const date = Elem.find('.date').text();
    if (title) {
        return { "title": title, "url": url, "info": info, "date": date };
    }
}

for (let i = 1; i < 11; i++) {
    await scrapeNotice(i);
}