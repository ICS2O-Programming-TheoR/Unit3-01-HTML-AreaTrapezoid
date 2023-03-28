// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);
  let height = parseFloat(document.getElementById("height").value);
  
  //This is the math for the first part of the formula
  let result = (sideA + sideB) * height
  let resultRounded = result.toFixed(2)
  
  //This is the math for the second part of the formula
  let finalResult = resultRounded / 2
  let finalResultRounded = finalResult.toFixed(2)
  
  //The result
  document.getElementById('area-info').innerHTML = "The total are of the trapezoid is " + (finalResultRounded) + "cm<sup>2</sup>."
}