/** @format */

// let slider1 = document.getElementById("slider1");

// let output1 = document.getElementById("output1");

// output1.innerHTML = slider1.value;
// slider1.oninput = function () {
//   output1.innerHTML = this.value;
// };

let slider = document.getElementsByTagName("input");

// console.log(slider);
Object.values(slider).forEach((element) => {
  element.addEventListener("change", function () {
    var x = this.value;
    var color = "linear-gradient(90deg , blue" + x + "%, green" + x + "%)";
    this.style.background = color;
  });
});
