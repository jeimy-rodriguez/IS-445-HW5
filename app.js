/*function primeNum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // check if the numbers are in criteria
    if (num1 <= 2 || num1 >= 100 || num2 <= 2 || num2 >= 100){
    document.getElementById("message").innerHTML = "Invalid input, please try again.";
    }
    else if (num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
        calculatePrimeNum(num1,num2);
     
    }
}
function isPrime(num){
    var res = true;
    for (var i=2; i<=Math.ceil(num/2); i++){
        if((num%i)==0){
            res = false;
            break;
        }
    }
    return res;
}
function calculatePrimeNum(firstNum,secondNum){
    var NumArray = [];
    var sNum = 0;
    var bNum = 0;


    if (firstNum > secondNum){
        sNum = secondNum;
        bNum = firstNum;
    }
    else if (firstNum < secondNum){
        sNum = firstNum;
        bNum = secondNum;
    }

    console.log(sNum);
    console.log(bNum);

    while(sNum <= bNum){
        console.log("in while");

        console.log(isPrime(3));
        if(isPrime(sNum) == true){
            console.log(sNum);
            NumArray.push(sNum);
            sNum = sNum + 1;
        }
        else if (isPrime(sNum) == false){
            console.log(sNum);
            sNum = sNum + 1;
        }
    }
    console.log(NumArray);
    document.getElementById("primeNumumber").innerHTML = "There are " + NumArray.length +" prime numbers";
    document.getElementById("message").innterHTML = NumArray;
}*/ 

function primeNum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // check if the numbers are within criteria
    if (num1 <= 2 || num1 >= 100 || num2 <= 2 || num2 >= 100){
        document.getElementById("message").innerHTML = "Invalid input, please try again.";
    }
    else if (num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
        calculatePrimeNum(num1,num2);
    }
}
function isPrime(num){
    var res = true;
    for (var i=2; i<=Math.ceil(num/2); i++){
        if((num%i)==0){
            res = false;
            break;
        }
    }
    return res;
}
function calculatePrimeNum(firstNum,secondNum){
    var numArray = [];
    var sNum = 0;
    var bNum = 0;


    if (firstNum > secondNum){
        sNum = secondNum;
        bNum = firstNum;
    }
    else if (firstNum < secondNum){
        sNum = firstNum;
        bNum = secondNum;
    }

    console.log(sNum);
    console.log(bNum);

    while(sNum <= bNum){
        console.log("in while");

        console.log(isPrime(3));
        if(isPrime(sNum) == true){
            console.log(sNum);
            numArray.push(sNum);
            sNum = sNum + 1;
        }
        else if (isPrime(sNum) == false){
            console.log(sNum);
            sNum = sNum + 1;
        }
    }
    console.log(numArray);
    document.getElementById("primeNumber").innerHTML = "There are " + numArray.length +" prime numbers.";
    document.getElementById("message").innerHTML = numArray;
}