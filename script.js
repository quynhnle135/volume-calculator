var result = 0;
function getWorkoutData() {
  var weights = parseFloat(document.getElementById("weights").value);
  var sets = parseInt(document.getElementById("sets").value);
  var reps = parseInt(document.getElementById("reps").value);
  return { weights, sets, reps };
}

function calculateVolume() {
  const { weights, reps, sets } = getWorkoutData();
  result += weights * reps * sets;
  document.getElementById("result").innerText = `Total Volume: ${result}`;
}
