import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

for (let i=1; i<11; i++){
    axios.get(`https://quotes.toscrape.com/page/${i}`).then(resp => {
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
        console.log(`PAGE ${i} CRAWLING RESULT`)
        // console.log(JSON.stringify(values)); // js object -> json(문자열)
        // JSON.parse() // json (문자열) => js object
        const result = JSON.stringify(values);
        console.log(result);
        fs.writeFile('./output/result.json', result, (err)=>{})
    });
}
