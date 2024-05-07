import axios from 'axios';  // module 방식으로 사용할 때
import * as cheerio from 'cheerio';  // 이렇게 import 하도록 바뀌었음

axios.get("https://example.com").then(resp => {
    return resp.data;
}).then(data => {
    // console.log(data);
    const $ = cheerio.load(data); // jquery 관례가 이어 온 것이다

    // 1. 특정 tag 값 가져오기
    const header = $('h1');
    // console.log(header);
    console.log(header.text()); // 이 tag안에 있는 text들을 가져와라!

    // 2. 자식 태그 가져오기
    const pTags = $('div').children('p'); // const pTags = $('div > p'); // 둘다 똑같은 의미이다!
    console.log(pTags.text());

    // 3. 특정 속성값 가져오기
    const url = $('a').prop('href');
    console.log(url);

    // 4. map, for를 사용하여 여러가지 tag를 한번에 처리하기
    const ptag = $('p');
    const values = ptag.map((i, elem) => {
        return $(elem).text();
    }).get();
    console.log(values);

    const data2 = [];
    for (let i = 0; i < ptag.length; i++) {
        data2.push($(ptag[i]).text())
    }
    console.log(data2);
});

