let options = {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2'
}

// 순서와 상관이 없음
const {title, width, height, ...rest} = options; 
console.log(title);
console.log(width);
console.log(height);
console.log(rest); // ...: 나머지는 다 묶어서 받을래

