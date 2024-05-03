const newDiv = document.createElement('div');

newDiv.innerHTML = "Welcome to my site!";
newDiv.setAttribute('id', 'oldDiv');

// 문서에 요소를 추가합니다.
document.body.appendChild(newDiv);

document.getElementById('oldDiv');
document.querySelector('#oldDiv');

newDiv.style.fontsize = '20px';

const toNaver = document.createElement('a');
toNaver.innerHTML = 'NAVER 로 가자';
toNaver.setAttribute('href', 'https://www.naver.com');
toNaver.setAttribute("target", "_blank");
newDiv.appendChild(toNaver);