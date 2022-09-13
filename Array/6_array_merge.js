let array1=[3,7,12,34,56,90];
let array2=[4,9,25,45];
let array3=[];
for(let i=0;i<array1.length;i++){
    array3[i]=array1[i];
}
for(let i=0;i<array2.length;i++){
    array3[array1.length +i] =array2[i];
}

//Another method

// array3 =[...array1,...array2];

console.log(array3);
