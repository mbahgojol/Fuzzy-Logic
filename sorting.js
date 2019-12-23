var arr = [50, 100, 20, 1, 3, 0];
for (var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    for (var j = i - 1; j >= 0 && temp < arr[j]; j--){
        arr[j + 1] = arr[j];    
    }
    arr[j + 1] = temp;
}
console.log(arr);