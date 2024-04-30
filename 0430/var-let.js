// let
function sample() {
    console.log(name1);
    if (true) {
        let name1 = 1;
    }
    console.log(name1);
}

// var
function sample2() {
    console.log(name2);
    if (true) {
        var name2 = 1;
    }
    console.log(name2);

}

sample();
sample2();

// 우리는 let과 const만 사용할 겁니다