function ls(ar,n){
    

    for(i=0;i<n;i++){
        if(ar[i]===n){
            return true;
        }
    }
    return false;
}

console.log(ls([1,2,3,4,5,5,6,67,7,2],2));
console.log(ls([1,2,3,4,5,5,6,67,7,2],10));
module.exports = ls;