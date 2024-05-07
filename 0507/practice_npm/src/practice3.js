import axios from 'axios';  // module 방식으로 사용할 때
import * as cheerio from 'cheerio';  // 이렇게 import 하도록 바뀌었음

axios.get("https://example.com").then(resp => {
    return resp.data;
}).then(data => {
    // console.log(data);
    const $ = cheerio.load(data); // jquery 관례가 이어 온 것이다
    const header = $('h1');
    // console.log(header);
    console.log(header.text()); // 이 tag안에 있는 text들을 가져와라!
    const pTags = $('div').children('p'); // const pTags = $('div > p'); // 둘다 똑같은 의미이다!
    console.log(pTags.text());
});

