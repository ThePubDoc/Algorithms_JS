function cs(arr){
    var count=[];
    
    var min=Math.min(...arr);
    var max=Math.max(...arr);

    for(i=min;i<=max;i++){
        count[i]=0;
    }

    for(i=0;i<arr.length;i++){
        count[arr[i]]++;
    }
    
    var sortedArray=[];

    for(i=0;i<count.length;i++){
        if(count[i]!==0){
            for(j=0;j<count[i];j++){
                sortedArray.push(i);
            }
        }
    }
    return sortedArray;
}


console.log(cs([1,3,4,3,2,1,2,2,3,4,4,5,3,2,1,2,33,23]));
module.exports = cs;