const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let button = document.getElementById("button")
let clearButton = document.getElementById("clear-button")
let firstHexCode = document.getElementById("first-hex-code")
let firstColorBox = document.getElementById("first-color-box")
let secondColorBox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")
let thirdColorBox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}

button.addEventListener("click", function(){
    //For First Color Box
    let hexCodeForFirstBox = "#"

    for(let x = 0; x < 6; x++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
firstColorBox.style.backgroundColor = hexCodeForFirstBox
firstHexCode.textContent = hexCodeForFirstBox


let hexCodeForSecondBox = "#"

    for(let z = 0; z < 6; z++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
     secondColorBox.style.backgroundColor = hexCodeForSecondBox
 secondHexCode.textContent = hexCodeForSecondBox


 let hexCodeForThirdBox = "#"

    for(let y = 0; y < 6; y++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
     thirdColorBox.style.backgroundColor = hexCodeForThirdBox
 thirdHexCode.textContent = hexCodeForThirdBox
    })

    clearButton.addEventListener("click", function(){
        firstColorBox.style.backgroundColor = "#F5F5DC";
      secondColorBox.style.backgroundColor = "#F5F5DC";
      thirdColorBox.style.backgroundColor = "#F5F5DC";
      firstHexCode.textContent = "#F5F5DC";
      secondHexCode.textContent = "#F5F5DC";
      thirdHexCode.textContent = "#F5F5DC";

    })


    function copyHex(elementId, iconElement) {
      const hexCodeElement = document.getElementById(elementId);
      const textToCopy = hexCodeElement.textContent;
    
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Update tooltip text to "Copied!"
          const tooltip = iconElement.querySelector('.tooltip-text');
          const copyIcon = iconElement.querySelector('.copy-svg');
    
          if (tooltip && copyIcon) {
            tooltip.textContent = "Copied!";
            tooltip.classList.add("copied");
            // tooltip.style.fill= "#4caf50"; // Change copy icon to green
    
            // Reset tooltip text and icon color after 2 seconds
            setTimeout(() => {
              tooltip.textContent = "Copy";
              tooltip.classList.remove("copied");
              copyIcon.style.fill = "#333"; // Reset icon color
            }, 2000);
          }
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
    