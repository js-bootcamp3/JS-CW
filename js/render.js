export function displayData(data) {
  document.getElementById("data").innerHTML = JSON.stringify(data, null, 2);
}
