export const MAPS = Object.freeze([
  { name: "Paris", targets: ["Viktor Novikov", "Dalia Margolis"] },
  { name: "Sapienza", targets: ["Silvio Caruso", "Francesca De Santis"] },
  { name: "Marrakesh", targets: ["Claus Hugo Strandberg", "Reza Zaydan"] },
  { name: "Bangkok", targets: ["Jordan Cross", "Ken Morgan"] },
  { name: "Colorado", targets: ["Sean Rose", "Penelope Graves", "Ezra Berg", "Maya Parvati"] },
  { name: "Hokkaido", targets: ["Erich Soders", "Yuki Yamazaki"] },
  { name: "Hawke's Bay", targets: ["Alma Reynard"] },
  { name: "Miami", targets: ["Robert Knox", "Sierra Knox"] },
  { name: "Santa Fortuna", targets: ["Rico Delgado", "Andrea Martinez", "Jorge Franco"] },
  { name: "Mumbai", targets: ["Vanya Shah", "Dawood Rangan", "The Maelstrom"] },
  { name: "Whittleton Creek", targets: ["Janus", "Nolan Cassidy"] },
  { name: "Isle of Sgàil", targets: ["Sophia Washington", "Zoe Washington"] },
  { name: "New York", targets: ["Athena Savalas"] },
  { name: "Haven Island", targets: ["Tyson Williams", "Ljudmila Vetrova", "Steven Bradley"] },
  { name: "Dubai", targets: ["Carl Ingram", "Marcus Stuyvesant"] },
  { name: "Dartmoor", targets: ["Alexa Carlisle"] },
  { name: "Berlin", targets: ["Agent Montgomery", "Agent Banner", "Agent Thames", "Agent Rhodes", "Agent Green", "Agent Chamberlin", "Agent Tremaine"] },
  { name: "Chongqing", targets: ["Hush", "Imogen Royce"] },
  { name: "Mendoza", targets: ["Tamara Vidal", "Don Archibald Yates"] },
  { name: "Carpathian Mountains", targets: ["Arthur Edwards"] },
  { name: "Ambrose Island", targets: ["Nole Crest", "Sinhi Venthain"] },
])

export const DIFFICULTIES = Object.freeze([
  "Casual",
  "Professional",
  "Master"
])

export const CHALLENGE_TYPE = Object.freeze({
  BOOLEAN: "boolean",
  NUMERICAL: "numerical"
})

export const CHALLENGES = Object.freeze([
  { name: "Suit Only", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "No Evidence", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "No Recordings", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "Never Spotted", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "No Bodies Found", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "Silent Assassin", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "No Disguise Changes", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "Target Only Kills", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "Silent Assassin, Suit Only", type: CHALLENGE_TYPE.BOOLEAN },
  { name: "Poison Kill(s)", type: CHALLENGE_TYPE.NUMERICAL },
  { name: "Accident Kill(s)", type: CHALLENGE_TYPE.NUMERICAL },
  { name: "Explosive Kill(s)", type: CHALLENGE_TYPE.NUMERICAL },
  { name: "Fiber Wire Kill(s)", type: CHALLENGE_TYPE.NUMERICAL },
])

export const WEAPON_CATEGORIES = Object.freeze([
  "Pistols",
  "Silenced Pistols",
  "Revolvers",
  "Submachine Guns",
  "Assault Rifles",
  "Shotguns",
  "Sniper Rifles",
  "Melee Weapons",
  "Explosives",
  "Poisons",
  "Tools",
])

export function _randomInt(max) {
  return Math.floor(Math.random() * max)
}

/**
 * @private for internal and testing
 */
export function _sample(array, n = 1, unique = true) {
  const result = []
  let i = 0
  while (result.length < n && i < array.length) {
    const item = array[_randomInt(array.length)]
    if (unique) {
      if (result.includes(item)) {
        i += 1
        continue
      }
    }

    result.push(item)
    i += 1
  }

  return unique ? Array.from(result) : result
}

export function randomMap() {
  return _sample(MAPS)[0]
}

export function randomDifficulty() {
  return _sample(DIFFICULTIES)[0]
}

const numericalChallenges = []
const nonNumericalChallenges = []
CHALLENGES.forEach(challenge => {
  if (challenge.type === CHALLENGE_TYPE.NUMERICAL) {
    numericalChallenges.push(challenge)
  } else {
    nonNumericalChallenges.push(challenge)
  }
})

export function randomChallenges(map, n) {
  const numerical = {}
  _sample(numericalChallenges, _randomInt(map.targets.length), false).forEach(challenge => {
    if (numerical[challenge]) {
      numerical[challenge].count += 1
    } else {
      numerical[challenge] = { ...challenge, count: 1 }
    }
  })

  const result = Object.entries(numerical).map(([_, challenge]) => challenge)
  if (result.length >= n) {
    return result
  }

  _sample(nonNumericalChallenges, n - result.length).forEach(c => result.push(c))
  return result
}

export function randomWeaponRestrictions(n) {
  return _sample(WEAPON_CATEGORIES, n)
}

const DEFAULT_OPTIONS = Object.freeze({
  challenges: 3,
  weapons: 0
})

export function randomScenario(options = DEFAULT_OPTIONS) {
  const nWeapons = options.weapons || DEFAULT_OPTIONS.weapons
  const nChallenges = options.challenges || DEFAULT_OPTIONS.challenges
  const map = randomMap()
  const difficulty = randomDifficulty()
  const challenges = randomChallenges(map, nChallenges).map(c => {
    if (c.type === CHALLENGE_TYPE.NUMERICAL) {
      return `${c.count} ${c.name}`
    } else {
      return c.name
    }
  })
  const weapons = nWeapons === 0 ? ['Any weapons'] : randomWeaponRestrictions(nWeapons)

  return { map, difficulty, challenges, weapons }
}

