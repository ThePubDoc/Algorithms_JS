function merge_sort(arr){
    if(arr.length < 2)
        return arr;

    var mid = Math.floor(arr.length/2);
    var a1 = merge_sort(arr.slice(0,mid));
    var a2 = merge_sort(arr.slice(mid,arr.length));
    return merge(a1 , a2);
}

function merge(a1 , a2){
    var res=[];
    while( a1.length && a2.length){
        if(a1[0] <= a2[0]){
            res.push(a1[0]);
            a1.shift();
        }

        else{
            res.push(a2[0]);
            a2.shift();
        }
    }

    
    return res.concat(a1 , a2);
}

console.log(merge_sort([1,32,22,12,444,22,3221]));

module.exports = merge_sort;
