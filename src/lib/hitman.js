// TODO(dylhack): Add thumbnails
const MAPS = Object.freeze([
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
])

const DIFFICULTIES = Object.freeze([
  "Casual",
  "Professional",
  "Master"
])

const CHALLENGES = Object.freeze([
  { name: "Silent Assassin", type: "boolean" },
  { name: "Suit Only", type: "boolean" },
  { name: "Sniper Assassin", type: "boolean" },
  { name: "No Evidence", type: "boolean" },
  { name: "Silent Assassin, Suit Only", type: "boolean" },
  { name: "No Recordings", type: "boolean" },
  { name: "Never Spotted", type: "boolean" },
  { name: "No Bodies Found", type: "boolean" },
  { name: "No Disguise Changes", type: "boolean" },
  { name: "Poison Kill(s)", type: "numerical" },
  { name: "Accident Kill(s)", type: "numerical" },
  { name: "Explosive Kill(s)", type: "numerical" },
  { name: "Target Only Kill(s)", type: "numerical" },
  { name: "Fiber Wire Kill(s)", type: "numerical" },
])

const WEAPON_CATEGORIES = Object.freeze([
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

function sample(array, n = 1) {
  if (n > array.length) throw new Error('Sample size exceeds array length')

  const result = new Set()
  while (result.size < n) {
    result.add(array[Math.floor(Math.random() * array.length)])
  }

  return Array.from(result)
}

export function randomMap() {
  return sample(MAPS, 1)
}

export function randomDifficulty() {
  return sample(DIFFICULTIES, 1)
}

const numericalChallenges = []
const nonNumericalChallenges = []
CHALLENGES.forEach(challenge => {
  if (challenge.type === 'numerical') {
    numericalChallenges.push(challenge)
  } else {
    nonNumericalChallenges.push(challenge)
  }
})
export function randomChallenges(n) {
  if (n === 1) {
    return sample(CHALLENGES, n)
  }

  return [
    ...sample(nonNumericalChallenges, n - 1),
    sample(numericalChallenges)[0],
  ]
}

export function randomWeaponRestrictions(n) {
  return sample(WEAPON_CATEGORIES, n)
}

export function describe(map, challenge) {
  let description = ''

  switch (challenge.type) {
    case "boolean":
      description = challenge.name
      break
    case "numerical":
      let i = Math.floor(Math.random() * map.targets.length)
      if (i === 0) i++
      description = `${i} ${challenge.name}`
      break
    default:
      throw new Error('Invalid challenge type')
  }

  return description
}

const DEFAULT_OPTIONS = Object.freeze({
  challenges: 3,
  weapons: 0
})

export function randomScenario(options) {
  const nWeapons = options.weapons || DEFAULT_OPTIONS.weapons
  const nChallenges = options.challenges || DEFAULT_OPTIONS.challenges
  const map = randomMap()[0]
  const difficulty = randomDifficulty()[0]
  const challenges = randomChallenges(nChallenges).map(challenge => describe(map, challenge))
  const weapons = nWeapons === 0 ? ['Any weapons'] : randomWeaponRestrictions(nWeapons)

  return { map, difficulty, challenges, weapons }
}

