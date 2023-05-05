function performCalculation() {
 
  let input = document.getElementById("inputBox").value.trim();

 
  let numbers = input.split(" ");

 
  numbers = numbers.map(Number);

 
  let calculation = document.querySelector('input[name="calculation"]:checked').value;
  let output;
  switch (calculation) {
    case "sum":
      output = numbers.reduce((total, num) => total + num);
      break;
    case "average":
      output = numbers.reduce((total, num) => total + num) / numbers.length;
      break;
    case "max":
      output = Math.max(...numbers);
      break;
    case "min":
      output = Math.min(...numbers);
      break;
    default:
      output = "Please select a calculation";
  }


  document.getElementById("output").innerHTML = output;
}

