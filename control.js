// Get the output element
let output = document.getElementById("resultat");

let firstNumber="";
let secondNumber="";
let operator="";
let ans="";








// Function to handle number button clicks
function appendNumber(number) {
    //let currentNumber= document.getElementById("resultat").textContent;
    
    if(operator=="" ){
        firstNumber+=number;
        console.log(firstNumber);
        
    }
    document.getElementById("resultat").textContent=firstNumber;

    if(operator!="" && ans==="")
    {
        secondNumber+=number;
    }
    document.getElementById("resultat").textContent+=operator+secondNumber;
    console.log(secondNumber);
    
   if(ans!=""){
    
    //operator="";
    secondNumber+=number;
    document.getElementById("resultat").textContent=firstNumber+operator+secondNumber;
   }
   


}

// Function to handle equals button click
function calculateResult() {
    
    if(operator=="+"){
        res=Number(firstNumber)+Number(secondNumber)
    }
    if(operator=="-"){
        res=Number(firstNumber)-Number(secondNumber)
    }
    if(operator=="X"){
        res=Number(firstNumber)*Number(secondNumber)
    }
    if(operator=="/"){
        res=Number(firstNumber)/Number(secondNumber)
    }
    document.getElementById("resultat").textContent=res;
    operator="";
    firstNumber=res;
    secondNumber="";
    

}












// Attach click event listeners to the number buttons
document.querySelectorAll(".number").forEach(function (button) {
    button.addEventListener("click", function () {
        appendNumber(button.textContent);
    });
});





// Attach click event listener to the equals button
document.querySelector("#equal").addEventListener("click", function () {
    calculateResult();
});





//Function to handle operator button clicks
function appendOperator(op) {
    operator=op;
    document.getElementById("resultat").textContent+=op;
}


//Attach click event listeners to the operator buttons
document.querySelectorAll(".operator").forEach(function (button) {
    button.addEventListener("click", function () {
        appendOperator(button.textContent);
    });
});



function clear(){
    document.getElementById("resultat").textContent="0";
    firstNumber="";
    secondNumber="";
    operator="";
    ans="";
}
document.querySelector("#clear").addEventListener("click", function () {
    clear();
});
