import axios from 'axios';
import * as cheerio from 'cheerio';

axios.get("https://quotes.toscrape.com/").then(resp => {
    return resp.data;
}).then(data => {
    const $ = cheerio.load(data);
    const quoteTags = $('.quote'); // quote class 가져오기
    const values = quoteTags.map((i, elem) => {
        const quote = $(elem).find('.text').text();
        const author = $(elem).find('.author').text();
        const tags = $(elem).find('.tags .tag').map((t, el) => {
            return $(el).text();
        }).get();

        return { "quote": quote, "author": author, "tags": tags };
    }).get();
    console.log(JSON.stringify(values));

});
