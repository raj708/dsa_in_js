let array=[60,30,90,40,50];
let position=2;
let newEl=2000;
for(let i=array.length-1;i>=0;i--){
    if(i>=position){
        array[i+1]=array[i];
    }
    if(i==position){
        array[i]=newEl;
    }
}

//Another method
// array.splice(position,0,newEl);

console.log(array);
