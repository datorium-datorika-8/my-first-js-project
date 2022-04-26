function Anna(){
    alert("Welcome to Datorium!");
}

function Jenifer(){
    let firstNumber = document.getElementById("FirstNumber").value;
    let secondNumber = document.getElementById("SecondNumber").value;
    let result = Number(firstNumber) + Number(secondNumber);
    alert("Aprēķina rezultāts ir: " + result)
}

function Calculate(){
    let firstNumber = document.getElementById("FirstNumber").value;
    let secondNumber = document.getElementById("SecondNumber").value;
    let operation = document.getElementById("Operation").value;    

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if(operation == "+"){
        result = firstNumber + secondNumber;
    }else if(operation == "-"){
        result = firstNumber - secondNumber;
    }else if(operation == "*"){
        result = firstNumber * secondNumber;
    }else if(operation == "/"){
        result = firstNumber / secondNumber;
    }

    alert("Aprēķina rezultāts ir: " + result)
}