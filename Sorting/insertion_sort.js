function is(arr){

    for(i=0;i<arr.length;i++){
        var temp = arr[i];
        var j=i;

        while(j > 0 && temp < arr[j-1]){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}


console.log(is([1,34,5,121,44,3,43,54,6545,54]));