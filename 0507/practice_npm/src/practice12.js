// 연습문제 (7): 이차전지 키워드로 네이버 뉴스 리스트 - JSONP로

// 연습문제 (7): 이차전지 키워드로 네이버 뉴스 리스트

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeNaverNews(pageNum) {
    const url = 'https://s.search.naver.com/p/newssearch/search.naver?cluster_rank=15&de=&ds=&eid=&field=0&force_original=&is_dts=0&is_sug_officeid=0&mynews=0&news_office_checked=&nlu_query=&nqx_theme=%7B%22theme%22%3A%7B%22main%22%3A%7B%22name%22%3A%22encyclopedia%22%2C%22score%22%3A%220.895011%22%7D%7D%7D&nso=%26nso%3Dso%3Ar%2Cp%3Aall%2Ca%3Aall&nx_and_query=&nx_search_hlquery=&nx_search_query=&nx_sub_query=&office_category=0&office_section_code=0&office_type=0&pd=0&photo=0&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80&query_original=&service_area=0&sort=0&spq=0&where=news_tab_api&nso=so:r,p:all,a:all';
    const resp = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        },
        params: {
            start: pageNum,
        },
    });

    const data = await resp.data.contents;
    const nextUrl = resp.data.nextUrl;
    
    console.log(data.length);
    console.log(nextUrl);
    
    for (let i=0; i<data.length; i++){
        const $ = cheerio.load(data[i]);
        console.log(data[i]);

    }
}   

function parseNews(elem) {
    const author = elem.find('.news_info .info_group a').text().trim();
    const title = elem.find('.news_contents .news_tit').text().trim();
    const desc = elem.find('.news_dsc').text().trim();
    const imgs = elem.find('.news_contents img').attr('data-lazysrc');
    return { author: author, title: title, desc: desc, imgs: imgs };
}

// let i = 1;
// const newsOutput = [];
// while (i < 101) {
//     const newsOneOutput = await scrapeNaverNews(i);
//     newsOutput.push(...newsOneOutput);
//     console.log(newsOutput.length);
//     i += 10;
// }
scrapeNaverNews(1);
