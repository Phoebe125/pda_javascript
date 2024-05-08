// 연습문제 (7): 이차전지 키워드로 네이버 뉴스 리스

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeNaverNews(pageNum) {
    const url = 'https://search.naver.com/search.naver';
    const resp = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        },
        params: {
            where: "news",
            query: "이차전지",
            start: pageNum,
            sscode: "tab.news.all",
        },
    });

    const data = await resp.data;
    const $ = cheerio.load(data);
    const news = $('.news_wrap.api_ani_send');
    const result = [];
    news.each((i, elem) => {
        result.push(parseNews($(elem)));
    });
    fs.writeFile(`../output/result_news_${pageNum}.json`, JSON.stringify(result, null, 2), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Saved result_news_${pageNum}.json`);
        }
    });
    console.log(result);
    await sleep(1000); // 1초 동안 sleep (1000 밀리초)
}

function parseNews(elem) {
    const author = elem.find('.news_info .info_group a').text().trim();
    const title = elem.find('.news_contents .news_tit').text().trim();
    const desc = elem.find('.news_dsc').text().trim();
    const imgs = elem.find('.news_contents img').attr('data-lazysrc');
    return { author: author, title: title, desc: desc, imgs: imgs };
}

let i = 1;
while (i < 101) {
    await scrapeNaverNews(i);
    i += 10;
}
