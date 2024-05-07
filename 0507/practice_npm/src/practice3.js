// import axios from 'axios';  // module 방식으로 사용할 때
// import * as cheerio from 'cheerio';  // 이렇게 import 하도록 바뀌었음

const axios = require("axios");
const cheerio = require("cheerio"); 

axios.get("https://naver.com").then(resp => {
    return resp.data;
}).then(data=>{
    console.log(data);
    const $ = cheerio.load(data); // jquery 관례가 이어 온 것이다
});
