const axios = require('axios'); 

axios.get("https://naver.com").then(resp => {
    return resp.data;
}).then(data=>{
    console.log(data);
})

// 첫번째 인자: header
// 두번째 인자: request body