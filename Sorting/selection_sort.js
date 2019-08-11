function ss(arr){

    var temp=0;
    for(i=0;i<arr.length-1;i++){
        
        for(j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(ss([12,34,12,2,4,6,7,21,213,33]));

module.exports = ss
