//Bubble Sort

function bs(arr){
    var temp=0;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


console.log(bs([1,33,1,2,3,5656,767,878,76,7687]));
module.exports = bs;
