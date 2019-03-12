"use strict";

const userWeight = document.querySelector("#weight");
const userHeight = document.querySelector("#height");
const userResult = document.querySelector("#userBmi");
const form = document.querySelector("#form");
const picChange = document.querySelector("#picInfo");

// EventListener

form.addEventListener("submit", function(e) {
  const height100 = userHeight.value / 100;
  let bmi = userWeight.value / (height100 * height100);
  bmi = bmi.toFixed(1);
  if (bmi >= 30) {
    userResult.innerHTML = bmi;
    document.getElementById("obese").style.color = "red";
    document.getElementById("obese").style.fontSize = "20px";
    picChange.setAttribute(
      "style",
      "background: url('./images/obese.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  } else if (bmi >= 25 && bmi <= 29.9) {
    userResult.innerHTML = bmi;
    document.getElementById("overweight").style.color = "#751d21";
    document.getElementById("overweight").style.fontSize = "20px";
    picChange.setAttribute(
      "style",
      "background: url('./images/overweight.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    userResult.innerHTML = bmi;
    document.getElementById("normal").style.color = "green";
    document.getElementById("normal").style.fontSize = "20px";
    picChange.setAttribute(
      "style",
      "background: url('./images/normal.jpg') no-repeat center/contain; background-color: #fdfdfd; width:100%;"
    );
  } else {
    userResult.innerHTML = bmi;
    document.getElementById("underweight").style.color = "#e87a14";
    document.getElementById("underweight").style.fontSize = "20px";
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
