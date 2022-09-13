//to check sorted array
// a=[1,2,3,4]-sorted array
// b=[1,3,2,4]-unsorted array

function checkSorted(arr,index){
    //base case
    if(index>=arr.length){
        return true;
    }
    else if(arr[index]<arr[index-1]){
        return false;
    }
    return checkSorted(arr,index+1)

}
let a =[1,2,4,3];
console.log(checkSorted(a,1))
