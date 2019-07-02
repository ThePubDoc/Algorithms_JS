function bs(arr, x, start, end) {
    if (start > end){
        return false;
    }

    let mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === x){
        return true;
    }
    if (arr[mid] > x){
        return bs(arr, x, start, mid - 1);
    }
    else {
        return bs(arr, x, mid + 1, end);
    }
  }
  

  console.log(bs([1, 2, 3, 4], 1, 0, 4));
  module.exports = bs;