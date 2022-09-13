//Recurion -Recursion is a process of calling itself. A function that calls itself is called recursion

// function recursive(){
//     console.log("hi") //Infinite loop
//     recursive()
// }
// recursive()

/*3 step for recursion
1.Find Base case.
2.find relation between the problem and subproblem.
3.generalise the relation.*/

//Example
function printHello(n){
    //base case
    if(n==0){
        return;
    }
    console.log("Hello");
    //relation between problem and subproblem
    printHello(n-1);
}
printHello(5);
