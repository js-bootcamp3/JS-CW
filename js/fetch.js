import { displayData } from './render.js'
const baseURL = 'https://api.sampleapis.com/switch/games';

const setDataStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data))
}

const getDataStorage = () => {
  const json = localStorage.getItem('data')
  return json ? JSON.parse(json) : null
}

export const fetchGames = () => {
  const cachedData = getDataStorage()
  if (cachedData) {
    displayData(cachedData)
  } else {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setDataStorage(data)
        displayData(data)
      })
  }
}
