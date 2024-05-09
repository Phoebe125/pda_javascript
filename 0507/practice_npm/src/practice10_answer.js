import axios from 'axios';

async function fetchWadiz(){
    const url = 'https://service.wadiz.kr/api/search/funding';
    let result = [];
    const targetSize = 1000;
    const size = 500;
    for (let i=0; i<Math.ceil(targetSize/size); i++){
        const resp = await axios.post(url, {
            "startNum": i*size,
            "order":"recommend",
            "limit": size,
            "categoryCode":"",
            "endYn":""
        }, {});
        result = [
            ...result, 
            ...resp.data.data.list
        ]
    }
    
    console.log(result.length);
    // JSON.parse()
}

fetchWadiz()