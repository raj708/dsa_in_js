//Merge two Shorted Array
let array1=[3,7,12,34,56,90];
let array2=[4,9,25,45];
let array3=[];

let a1=0,a2=0,a3=0;
while(a1<array1.length && a2<array2.length){
    if(array1[a1]<array2[a2]){
        array3[a3]=array1[a1];
        a1++;
    }
    else{
        array3[a3]=array2[a2];
        a2++;
    }
    a3++;
}

while(a1<array1.length){
    array3[a3]=array1[a1];
    a1++;
    a3++;
}
console.log(array3);