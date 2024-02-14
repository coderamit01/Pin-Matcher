// Pin Genarate
const generatePin = document.getElementById("generate_pin");
generatePin.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 9000 + 1000);

  // Random Pin
  const generatedNumber = document.getElementById("random_pin");

  generatedNumber.value = randomNumber;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;

    const typedNumber = document.getElementById("typed_number");
    const previousNumber = typedNumber.value;

    if (isNaN(number)) {
      if (number === "C") {
        typedNumber.value = "";
      } else if (number === "X") {
        const digits = previousNumber.split("");
        digits.pop();

        const remainDigits = digits.join("");
        typedNumber.value = remainDigits;
      }
    } else {
      const newTypedNumber = previousNumber + number;
      typedNumber.value = newTypedNumber;
    }
  });

const matchedValue = document.getElementById("match_btn");
matchedValue.addEventListener("click", function () {
  const randomNumber = document.getElementById("random_pin").value;
  const typedNumber = document.getElementById("typed_number").value;

  const pinSuccessMessage = document.getElementById("success");
  const pinFailedMessage = document.getElementById("failed");

  // console.log("hello");
  if (typedNumber == isNaN && typedNumber == undefined && typedNumber == "") {
    console.log("hello");
  } else {
    if (randomNumber === typedNumber) {
      pinSuccessMessage.style.display = "block";
      pinFailedMessage.style.display = "none";
    } else {
      pinSuccessMessage.style.display = "none";
      pinFailedMessage.style.display = "block";
    }
  }

  document.getElementById("random_pin").value = "";
  document.getElementById("typed_number").value = "";
});
