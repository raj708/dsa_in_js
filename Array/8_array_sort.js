//sorting by bubble algo

let arr =[40,30,12,25];
//ascending order
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]>arr[j+1]){
            let temp =arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }   
    }
}
console.log(arr);

//descending order
// for (let i = arr.length-1; i >=0; i--) {
//     for (let j = arr.length-1; j >=0; j--){
//         if(arr[j+1]>arr[j]){
//             let temp=arr[j+1]
//             arr[j+1]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)