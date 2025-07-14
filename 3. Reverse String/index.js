let reverseString = function(s){
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for(let i = 0; i < halfLen; i++){
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
    return s;
}

let s = ["h", "e", "l", "l", "o"]

const res = reverseString(s);
console.log(res)