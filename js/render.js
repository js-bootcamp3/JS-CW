// developers: ['Lucid Sheep Games']
// genre: ['Party']
// id: 1
// name: "#Breakforcist Battle"
// publishers: ['Lucid Sheep Games']
// releaseDates:
// Australia: "April 12, 2018"
// Europe: "April 12, 2018"
// Japan: "Unreleased"
// NorthAmerica: "April 12, 2018"
const container = document.getElementById("data")
const genre = document.getElementById("genre").value

export function displayData(data) {
  let result = ''

  console.log('data', data)

  data.forEach(item => {
    result += `
    <div class="row">
      <div class="item">${item.name}</div>
      <div class="item">${item.genre.join(', ')}</div>
      <div class="item">${item.publishers.join(', ')}</div>
    </div>
    `
  });
  container.innerHTML = result
}