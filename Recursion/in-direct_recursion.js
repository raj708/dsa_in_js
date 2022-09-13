//Indirect recursion
let money =100;
let totalApple =0;

function buyApple(x){
    if(x>0){
        console.log("I have", x, "RS", totalApple)
        buyMore(x);
    }
    else{
        console.log("I don't have more money", totalApple)
    }
}
function buyMore(x){
    totalApple++
    buyApple(x-10);
}
buyApple(money);

