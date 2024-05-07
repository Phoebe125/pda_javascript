import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

async function scrapeQuotePage(pageNum){
    const url = `https://quotes.toscrape.com/page/${pageNum}`;
    const resp = await axios.get(url);
    const html = await resp.data;

    const $ = cheerio.load(html);
    
    const quoteTag = $('.quote');
    const arr = [];
    for(let i =0; i<quoteTag.length; i++){
        const text = $(quoteTag[i]).find('.text').text();
        const author = $(quoteTag[i]).find('.author').text();
        const tags = $(quoteTag[i]).find('.tag');
        const tagValues = tags.map((i, elem)=>{
            return $(elem).text();
        }).get();
        arr.push({text, author, tags:tagValues});
    }
    return arr;
}

(async ()=>{
    let result = []
    for (let i=1; i<=10; i++){
        const arr = await scrapeQuotePage(i);
        result = [
            ...result,
            ...arr
        ]
    }
    // JSON.stringify() // js object => json(문자열)
    // JSON.parse() // json(문자열) => js object
    const data = JSON.stringify(result);
    fs.writeFile('result.json', data, (err)=>{});
})();

// const promiseArr = []
// for (let i =1; i<=11; i++){
//     promiseArr.push(scrapeQuotePage(i));
// }
// // Promise.allSettled
// Promise.all(promiseArr).then(dataArr=>{
//     let result =[]
//     for (let i=0; i<dataArr.length; i++){
//         result = [
//             ...result,
//             ...dataArr[i]
//         ]
//     }
//     fs.writeFile('result2.json', JSON.stringify(result), (err)=>{});
// })