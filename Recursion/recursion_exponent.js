//1.find a^b using recursion
function findPow(a,b){
    //base case
    if(b==0){
        return 1;
    }
    return a*findPow(a,b-1)}
console.log(findPow(2,0));

//2.find exponent (2^5)
function exp(n){
    //base case
    if(n==0){
        return 1;
    }
    let newNum=exp(n/2)
    //odd number

    if(n & 1==1){
        return 2*newNum*newNum;
    }
    else{
        return newNum*newNum;
    }
}
console.log(exp(5))