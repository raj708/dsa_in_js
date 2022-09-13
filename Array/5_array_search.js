let array =[20,40,60,5,10,70,80,99]
let item =80;
let index;
for(let i=0;i<array.length;i++){
    if(array[i]==item){
        index=i;
        break;
    }
}
console.log(index);

//Another method
// let res= array.indexOf(item)
// console.log(res)
