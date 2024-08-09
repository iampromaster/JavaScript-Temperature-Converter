let celInput = document.querySelector(".celInput");
let farInput = document.querySelector(".farInput");

const celtofar = () => {
  let output = (parseFloat(celInput.value) * 9) / 5 + 32;
  farInput.value = parseFloat(output.toFixed(2));
};

const fartocel = () => {
  let output = ((parseFloat(farInput.value) - 32) * 5) / 9;
  celInput.value = parseFloat(output.toFixed(2));
};

celtofar()
