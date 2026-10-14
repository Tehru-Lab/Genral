// 1. Select elements (you already did this)
let result = document.getElementById("R");
let match = document.getElementById("B");
let me = document.getElementById("M");
let you = document.getElementById("Y");

let BMI = document.getElementById("BMI");
let calc = document.getElementById("C");
let height = document.getElementById("H");
let weight = document.getElementById("W");

// 2. Listen for the button click
match.addEventListener("click", () => {
  // 3. Read values from the inputs
  let name1 = me.value.trim();
  let name2 = you.value.trim();

  // 4. Validation - both must be filled
  if (name1 === "" || name2 === "") {
    result.textContent = "⚠️ Please enter both names!";
    return; // stop the function here
  }

  // 5. Generate a random love percentage (1 to 100)
  let percentage = Math.floor(Math.random() * 100) + 1;

  // 6. Show result with names
  result.textContent = `${name1} ❤️ ${name2} = ${percentage}%`;

  // 7. Optional: clear inputs after matching
  me.value = "";
  you.value = "";
});
// 1. Listen for the button click
// 2. Read values from the inputs
// 3. Validation - both must be filled
// 4. Generate a random love percentage (1 to 100)
// 5. Show result with names
// 6. Optional: clear inputs after matching

calc.addEventListener("click", () => {
  let value1 = height.value.trim();
  let value2 = weight.value.trim();

  if (value1 === "") BMI.textContent = "Please enter your Height";
  else if (value2 === "") {
    BMI.textContent = " Please enter your Weight";
  }

  let BMIValue = value1 / Math.pow(value2, 2);
  BMIValue = Math.round(BMIValue);

  BMI.textContent = `Your BMI is : ${BMIValue}`;

  value1.value = "";
  value2.value = "";
});
