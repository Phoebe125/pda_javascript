// 연습문제(6): 와디즈 데이터 수집
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import iconv from 'iconv-lite';


async function scrapeWadiz(num) {
    const payload = {
        startNum: num,
        order: "recommend",
        limit: 500,
        categoryCode: "",
        endYn: ""
    };

    const resp = await axios.post('https://service.wadiz.kr/api/search/funding', payload, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
    });
    const data = await resp.data.data.list;
    console.log(resp.data);
    return data;
}

const resultOutput = [];

for (let i = 0; i < 2; i++) {
    const singleOutput = await scrapeWadiz(i);
    resultOutput.push(...singleOutput); 

}
fs.writeFile(`../output/result_wadiz.json`, JSON.stringify(resultOutput, null, 2), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Saved result_wadiz.json`);
    }
});