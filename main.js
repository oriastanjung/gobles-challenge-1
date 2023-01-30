const cardBody = document.getElementById("targetObject");
const inputText = document.getElementById("inputHexa");
const inputColor = document.getElementById("inputColor");
const ubahLatar = () => {
  cardBody.style.backgroundColor = inputText.value;
};
const ubahLatarDariColor = (e) => {
  cardBody.style.backgroundColor = e.value;
};
