let wrap = document.getElementById('wrap');
let outer = document.getElementById('outer');
let inner = document.getElementById('inner');

wrap.addEventListener('click', e => {
    e.stopPropagation(); // 만일 부모 tag까지 event 전파를 막기 위해서 (나는 이 이벤트만 실행하고 싶어!)
    console.log("wrap Event");
})
outer.addEventListener('click', e => {
    e.stopPropagation(); // 만일 부모 tag까지 event 전파를 막기 위해서 (나는 이 이벤트만 실행하고 싶어!)
    console.log("outer Event");
})
inner.addEventListener('click', e => {
    e.stopPropagation(); // 만일 부모 tag까지 event 전파를 막기 위해서 (나는 이 이벤트만 실행하고 싶어!)
    console.log("inner Event");
})