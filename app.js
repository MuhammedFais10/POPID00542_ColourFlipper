const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const colors = `rgb(${Random(256)}, ${Random(256)}, ${Random(256)})`;
  document.body.style.backgroundColor = colors;
});

function Random(num) {
  return Math.floor(Math.random() * (num + 1));
}
