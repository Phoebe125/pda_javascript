import axios from 'axios';
import * as cheerio from 'cheerio';

axios.get('https://quotes.toscrape.com/').then(resp=>{
    return resp.data;
}).then(data=>{
    const $ = cheerio.load(data);
    const quoteTags = $('.container .quote');
    // console.log(
    //     quoteTags.map((i, el)=>{
    //         return $(el).find('')
    //     })
    // )
    console.log(
        // <cheerio객체>.find(<css selector>)
        $(quoteTags[0]).find('.text').text()
    );
})