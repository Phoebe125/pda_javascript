// 실패한 코드임...! -> practice7.js 확인

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';


const getHTML = async (url) => {
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};

async function parseNews($, newsElem) {
    const author = $(newsElem).find('.c-tit-doc .tit_item .txt_info').text().trim();
    const title = $(newsElem).find('.c-item-content .item-title').text().trim();
    const content = $(newsElem).find('.c-item-content p').text().trim();
    const date = $(newsElem).find('.c-item-content .gem-subinfo .txt_info').text().trim();
    const url = $(newsElem).find('.item-contents a').prop("href");
    const img_url = $(newsElem).find('.item-thumb img').prop("data-original-src");
    const detailHtml = await getHTML(url);

    if (author !== "") {
        return { "author": author, "title": title, "content": content, "date": date, "url": url, "image_url": img_url, "detail_html": detailHtml };
    }
}


async function scrapeNewsPage(pageNum) {
    await axios.get(`https://search.daum.net/search?w=news&cluster=y&q=금융서비스&p=${pageNum}`)
        .then(resp => {
            return resp.data;
        }).then (data => {
            const $ = cheerio.load(data);
            const quoteTags = $('.c-list-basic li'); // quote class 가져오기
            const values = quoteTags.map(async (i, elem) => {
                return await parseNews($, elem);
            }).get();
        
            console.log(`PAGE ${pageNum} CRAWLING RESULT`);
            const result = Promise.all(values); // Promise.all을 await로 기다림

            fs.writeFile(`../output/result_${pageNum}.json`, JSON.stringify(result, null, 2), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Saved result_${pageNum}.json`);
                }
            });
        })
        }

for (let i = 1; i < 3; i++) {
        await scrapeNewsPage(i);
    }
