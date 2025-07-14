let removeElement = function(arr, val){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != val){
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    return x;
}

let arr = [1, 4, 2, 3, 2, 5, 4, 5, 4]
const res = removeElement(arr, 4);
console.log(res);