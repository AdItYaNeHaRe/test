let heading = document.querySelector("h1");
let button = document.querySelector("button");

let changeColor = () => {
  return (heading.style.color = "red");
};
button.addEventListener("click", changeColor);
