 let removeDuplicate = function(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[x]){
            x = x + 1;
            arr[x] = arr[i];
        }
    }
    return (x + 1);
}

let arr = [0, 0, 1, 1, 2, 2, 2, 3, 4, 4, 5]
const res = removeDuplicate(arr);
console.log(res)