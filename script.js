// generate random 4 digit number
document.getElementById("generate_button").addEventListener("click", function(){
         const randomNumber = (Math.random()*10000+ "").split(".")[0];
          let randomNumberItem = '';
          if(randomNumber.length == 4){
              randomNumberItem = randomNumber;
          }
         document.getElementById("generate_input").value = randomNumberItem;
})

// click specific button 
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

buttons.forEach(function(button){
    button.addEventListener("click" , calculate);
})

function calculate(event){
    // current clicked value
    const clickedButtonValue = event.target.innerText;
    if(clickedButtonValue == "C"){
        display.value = "";
    }
    else if(display.value.length < 4){
        display.value += clickedButtonValue;
    }
}

// submit buttons click
function handleSubmit(){
    const generateInputValue = document.getElementById("generate_input").value;
    const calculateInputValue = document.querySelector(".display").value;
    if(generateInputValue == calculateInputValue){
        document.getElementById("success").style.display ="block";
        document.getElementById("warning").style.display ="none";
    }
    else if(generateInputValue !== calculateInputValue){
        document.getElementById("warning").style.display ="block";
        document.getElementById("success").style.display ="none";
    }
}