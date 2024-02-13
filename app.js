// Pin Genarate
const generatePin = document.getElementById("generate_pin");
generatePin.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 9000 + 1000);
  console.log(randomNumber);

  // Random Pin
  const generatedNumber = document.getElementById("random_pin");

  generatedNumber.value = randomNumber;
});
