let array =[2,3,9,20,75];
let position =3;
for(let i=position;i<array.length;i++){
    array[i]=array[i+1];
}
array.length=array.length-1;


//Another method
// array.splice(position,1);

console.log(array);
