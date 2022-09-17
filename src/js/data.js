import localStorage from 'local-storage'
import { forEach } from 'lodash'

export let teams = [
  {
    teamName: 'Enter Team Name',
    name: 'Actual Player\'s Name',
    instagram: '@ingragram tag',
    record: '0-0-0',
    ratingRank: 'Gold',
    rating: 780,
    overall: 'Great',
    icecream: 'Strawberry Shortcake'
  },
  {
    teamName: 'Enter Team Name 2',
    name: 'Actual Player\'s Name 2',
    instagram: '@ingragram_tag',
    record: '0-0-0',
    ratingRank: 'Bronze',
    rating: 780,
    overall: 'Poor',
    icecream: 'Vanilla'
  }
]

let defaultNotes = 'Draft Date: Tuesday Sept 1st @ 7:15PM EST\nReview the Draft Point System\nMoney is due XYZ'

let config = {
  countdownInSeconds: 45,
  leagueName: 'ENTER LEAGUE NAME',
  notes: defaultNotes,
  teams: teams
}

export function init () {
  // restore from local storage
  load()
}

export function save () {
  // save in local storage
  forEach(config, (value, key) => {
    console.log('setting', key, value)
    localStorage.set(key, value)
  })
}

export function load () {
  // save in local storage
  forEach(config, (value, key) => {
    config[key] = localStorage.get(key) || value
  })
}

export function loadByData (data) {
  config = data
}

export function clearLocalStorage () {
  localStorage.clear()
}

export function setConfig (key, val) {
  console.log('setting', key, val)
  config[key] = val
}

export function getConfigByKey (key) {
  return config[key]
}

export function copyToClipboard () {
  const text = JSON.stringify(config)
  navigator.clipboard.writeText(text)

  /* Alert the copied text */
  alert('Configuration Copied to clip board')
}
