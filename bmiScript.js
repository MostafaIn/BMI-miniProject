"use strict";

const userWeight = document.querySelector("#weight");
const userHeight = document.querySelector("#height");
const userResult = document.querySelector("#userBmi");
const form = document.querySelector("#form");
const picChange = document.querySelector("#picInfo");
const obese = document.querySelector("#obese");
const overweight = document.querySelector("#overweight");
const normal = document.querySelector("#normal");
const underweight = document.querySelector("#underweight");
const yourBMI = document.querySelector("#userBmi");

function colorChange() {
  obese.style.color = "white";
  overweight.style.color = "white";
  normal.style.color = "white";
  underweight.style.color = "white";
}

// EventListener

form.addEventListener("submit", function(e) {
  const height100 = userHeight.value / 100;
  let bmi = userWeight.value / (height100 * height100);
  bmi = bmi.toFixed(1);
  colorChange();
  if (bmi >= 30) {
    userResult.innerHTML = bmi;
    obese.style.color = "red";
    yourBMI.style.color = "red";
    picChange.setAttribute(
      "style",
      "background: url('./images/obese.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  } else if (bmi >= 25 && bmi <= 29.9) {
    userResult.innerHTML = bmi;
    overweight.style.color = "#751d21";
    yourBMI.style.color = "#751d21";
    picChange.setAttribute(
      "style",
      "background: url('./images/overweight.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    userResult.innerHTML = bmi;
    normal.style.color = "green";
    picChange.setAttribute(
      "style",
      "background: url('./images/normal.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  } else {
    userResult.innerHTML = bmi;
    underweight.style.color = "#e87a14";
    yourBMI.style.color = "#e87a14";
    picChange.setAttribute(
      "style",
      "background: url('./images/underweight.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  }
  userWeight.value = "";
  userHeight.value = "";
  userWeight.focus();

  e.preventDefault();
});


