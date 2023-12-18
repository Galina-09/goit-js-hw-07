const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const hello = (event) => {
  if ((output.textContent = event.currentTarget.value.trim())) {
    event.currentTarget.value;
  } else "Anonymous";
};

input.addEventListener("input", hello);
