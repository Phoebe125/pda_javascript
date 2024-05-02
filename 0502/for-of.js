// for문의 다양한 형태 3
const arr = ['a', 'b', 'c', 'd']
for (let idx in arr) {
    console.log(idx);
} 
for (let item of arr) {
    console.log(item);
} // 배열도 object의 일종이니 가능