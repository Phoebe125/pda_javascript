// import axios from 'axios';  // module 방식으로 사용할 때
const axios = require('axios');  // commonjs 방식으로 사용할 때 (default임)
axios({
    method: "GET",
    url: "https://www.naver.com",
}).then(response=>{
    console.log(response);
})