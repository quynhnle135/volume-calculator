function calculateVolume() {
  const weights = parseFloat(document.getElementById("weights").value);
  const sets = parseInt(document.getElementById("sets").value);
  const reps = parseInt(document.getElementById("reps").value);

  let result = weights * sets * reps;
  document.getElementById("result").innerText = `Volume: ${result}`;
}
