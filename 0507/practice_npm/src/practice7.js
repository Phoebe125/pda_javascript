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

async function scrapeNewsSearchPage(query, page) {
    const resp = await axios.get('https://search.daum.net/search', {
        params: {
            w: 'news',
            cluster: 'y',
            q: query,
            p: page
        }
    });
    const data = await resp.data;
    const $ = cheerio.load(data);
    const newsList = $('ul.c-list-basic > li');
    const newsParsed = newsList.map((i, el) => {
        return parseNews($(el));
    }).get();

    for (let i=0; i<newsParsed.length; i++){
        const htmlResult = await getHTML(newsParsed[i].url);
        newsParsed[i]["htmlResult"] = htmlResult
    }
    console.log(newsParsed);

    fs.writeFile(`../output/result_${page}.json`, JSON.stringify(newsParsed, null, 2), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Saved result_${page}.json`);
        }
    });

}
function parseNews(newsElem) {
    const press = newsElem.find('.c-tit-doc .tit_item').prop('title');
    const titleAnchor = newsElem.find('.c-item-content .item-title a');
    const title = titleAnchor.text();
    const url = titleAnchor.prop('href');
    const desc = newsElem.find('.c-item-content .conts-desc').text();
    const img_url = newsElem.find('.item-thumb img').prop("data-original-src");
    return {
        press, title, url, desc, img_url
    }
}

for (let page=1; page<4; page++){
    await scrapeNewsSearchPage("금융 서비스", page);
    

}