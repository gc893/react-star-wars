const baseURL = 'https://swapi.dev/api'

export function getStarships() {
    return fetch(`${baseURL}/starships`)
    .then(res => res.json())
}

export function getPilotDetail(url) {
    return fetch(url)
    .then(res => res.json())
}