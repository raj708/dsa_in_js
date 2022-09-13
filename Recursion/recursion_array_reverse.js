//Reverse the array using recursion
let arr = [20, 30, 70, 12, 32];
let temp;
function reverseArray(arr, start, last) {
  console.log(arr);
  if (start <= last) {
    temp = arr[start];
    arr[start] = arr[last];
    arr[last] = temp;
    reverseArray(arr, start + 1, last - 1);
  }
}
reverseArray(arr, 0, (arr.length - 1));

//default function
// let newArr=arr.reverse()
// console.log(newArr)
