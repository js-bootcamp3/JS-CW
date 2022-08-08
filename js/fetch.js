import { displayData } from './render.js'
const baseURL = 'https://api.sampleapis.com/switch/games';

export const fetchGames = () => {
  fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));
}

export const getUrl = () => {
  console.log(baseURL)
}
