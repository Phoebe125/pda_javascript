import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

async function main(){
    const url = 'https://s.search.naver.com/p/newssearch/search.naver';
    const params = {
        cluster_rank:99,
        field:0,
        is_dts:0,
        is_sug_officeid:0,
        mynews:0,
        nqx_theme:{"theme":{"main":{"name":"encyclopedia","score":"0.895011"}}},
        nso:'&nso=so:r,p:all,a:all',
        office_category:0,
        office_section_code:0,
        office_type:0,
        pd:0,
        photo:0,
        query:'이차전지',
        service_area:0,
        sort:0,
        spq:0,
        start:1,
        where:'news_tab_api',
        nso:'so:r,p:all,a:all',
        _callback:'jQuery1124006899474636072167_1715213644492&_=1715213644497'
    }
    const resp = await axios.get(url, {
        params:params
    });
    console.log(resp.data);
}
main();