num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
num3 = document.getElementById("num3");
text = document.getElementById("text");
button = document.getElementById("btn");

button.addEventListener("click", () => {
    
  const Side1 = parseInt(num1.value);
  const Side2 = parseInt(num2.value);
  const Side3 = parseInt(num3.value);

  if (
    Side1 > 0 &&
    Side2 > 0 &&
    Side3 > 0 &&
    (Side1 + Side2 >= Side3 || Side1 + Side3 >= Side2 || Side2 + Side3 >= Side1)
  ) {
    if (Side1 == Side2 && Side2 == Side3) {
      text.innerText ="Equilateral";
    } else if (Side1 == Side2 || Side1 == Side3 || Side3 == Side2) {
      text.innerText ="isosceles";
    } else if (Side1 != Side2 && Side2 != Side3 && Side1 != Side3) {
      text.innerText ="scalene";
    } else if (
      Side1 + Side2 == Side3 ||
      Side1 + Side3 == Side2 ||
      Side2 + Side3 == Side1
    ) {
      text.innerText ="dig deeper";
    }
  } else {
    text.innerText ="invalid";
  }
  num1.value = "";
  num2.value = "";
  num3.value = "";
});
