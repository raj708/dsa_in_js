//Print spelling
// Input =234
// output =two three four
let str =["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
function printSpell(n){
    if(n==0){
        return;
    }
    printSpell(Math.floor(n/10));
    let res =n%10;
    console.log(str[res]);

}
printSpell(234);