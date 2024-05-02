// for문의 다양한 형태 1
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// for문의 다양한 형태 2
const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

for (let key in obj1) {
    console.log(key, obj1[key])
} // in 일 경우에는 해당 Object의 Key값이 호출된다.
// key 또는 index를 반환

// for문의 다양한 형태 3
const arr = ['a', 'b', 'c', 'd']
for (let item of arr) {
    console.log(item);
}
