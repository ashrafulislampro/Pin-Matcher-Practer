// display generate random number pin
function getPin(){
    const randomNumber = Math.random() * 10000;
    const pinGenerate = (randomNumber + '').split('.')[0];
    if(pinGenerate.length === 4){
        return pinGenerate;
    }
    else{
        // console.log("when the random number is less then 4", pinGenerate);
        return getPin();
    }
}
function generatePin(){
    const generatePinInput = document.getElementById("generate_input");
    generatePinInput.value = getPin();
}

// typed pin calc-body display
const containerButtons = document.getElementById("calc_body");
containerButtons.addEventListener("click", function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        // handle BackPace button
        // handle clear button
        if(digit === "C"){
            document.getElementById("typed_pin").value = '';
        }
        else if(digit === "B"){
            const typedPin = document.getElementById("typed_pin");
            typedPin.value =typedPin.value.slice(0, - 1);
        }
    }
    else{
        const typedPin = document.getElementById("typed_pin");
        typedPin.value = typedPin.value + digit;
    }
})

// handle submit buttons
function handleSubmit(){
    const typedPin = document.getElementById("typed_pin").value;
    const generatePinInput = document.getElementById("generate_input").value;
    if(typedPin === generatePinInput){
       matchCodeReduce("block", "none");
    }
    else if(typedPin !== generatePinInput){
      matchCodeReduce("none", "block");
    }

}

function matchCodeReduce(correctPin, wrongPin){
        document.getElementById("success").style.display =correctPin;
        document.getElementById("warning").style.display =wrongPin;
}




// generate random 4 digit number
// document.getElementById("generate_button").addEventListener("click", function(){
//          const randomNumber = (Math.random()*10000+ "").split(".")[0];
//           let randomNumberItem = '';
//           if(randomNumber.length === 4){
//               randomNumberItem = randomNumber;
//           }
//          document.getElementById("generate_input").value = randomNumberItem;
// })


// click specific button 
// const buttons = document.querySelectorAll(".button");
// const display = document.querySelector(".display");

// buttons.forEach(function(button){
//     button.addEventListener("click" , calculate);
// })

// function calculate(event){
//     // current clicked value
//     const clickedButtonValue = event.target.innerText;
//     if(clickedButtonValue == "C"){
//         display.value = "";
//     }
//     else if(display.value.length < 4){
//         display.value += clickedButtonValue;
//     }
// }

// // submit buttons click
// function handleSubmit(){
//     const generateInputValue = document.getElementById("generate_input").value;
//     const calculateInputValue = document.querySelector(".display").value;
//     if(generateInputValue == calculateInputValue){
//         document.getElementById("success").style.display ="block";
//         document.getElementById("warning").style.display ="none";
//     }
//     else if(generateInputValue !== calculateInputValue){
//         document.getElementById("warning").style.display ="block";
//         document.getElementById("success").style.display ="none";
//     }
// }
