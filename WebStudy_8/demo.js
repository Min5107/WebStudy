let productNameInputElement = document.querySelector("#product-name");
console.dir(productNameInputElement);
let remainingCharsElement = document.querySelector("#remaining-chars");
console.dir(remainingCharsElement);
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingChars;

  if (remainingChars < 10) {
    remainingCharsElement.style.color = "red";
    productNameInputElement.style.backgroundColor = "red";
  } else {
    productNameInputElement.style.backgroundColor = "white";
    remainingCharsElement.style.color = "rgb(0,120,50)";
  }
}
productNameInputElement.addEventListener("input", updateRemainingCharacters);
