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
    firstNumber=ans;
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
    secondNumber="";
    ans=res;

}
