let result = 0;
let ul = document.createElement("ul");

function getWorkoutData() {
  var weights = parseFloat(document.getElementById("weights").value);
  var sets = parseInt(document.getElementById("sets").value);
  var reps = parseInt(document.getElementById("reps").value);
  var workout = document.getElementById("workout").value;
  return { weights, sets, reps, workout };
}

function calculateVolume() {
  const { weights, sets, reps, workout } = getWorkoutData();
  result += weights * reps * sets;
  document.getElementById("result").innerText = `Total Volume: ${result}`;
}

function displayInfo() {
  const { weights, sets, reps, workout } = getWorkoutData();
  let display = document.getElementById("display");

  if (display.children.length === 0) {
    display.appendChild(ul);
  }

  let workoutLi = document.createElement("li");
  let currentVolume = weights * reps * sets;
  workoutLi.textContent = `${workout} - ${currentVolume}`;
  ul.appendChild(workoutLi);
}
