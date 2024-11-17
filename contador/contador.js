const span = document.getElementById("span");

let number = 0;

function increase() {
  number++;
  span.textContent = number;

  if (number > 0) {
    span.style.color = "green";
  }
}

function decrease() {
  number--;
  span.textContent = number;

  if (number < 0) {
    span.style.color = "red";
  }
}

function reset() {
  number = 0;
  span.textContent = number;
    span.style.color = "black";
}
