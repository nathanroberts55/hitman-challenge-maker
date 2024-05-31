import * as hitman from './hitman'
import { describe, expect, test } from 'vitest'

function doTimes(times, cb) {
  for (let i = 1; i < times; i += 1) {
    cb(i)
  }
}

describe("hitman", () => {
  describe("challenges", () => {
    test("challenges should be less than or equal to n", () => {
      doTimes(1_000, i => {
        for (const map of hitman.MAPS) {
          const challenges = hitman.randomChallenges(map, i)
          expect(challenges.length).toBeLessThanOrEqual(i)
        }
      })
    })

    test("numerical challenges should be <= targets", () => {
      doTimes(1_000, i => {
        const map = hitman.randomMap()
        const challenges = hitman.randomChallenges(map, i)
        const numerical = challenges.filter(challenge => challenge.type === 'numerical')
        expect(numerical.length).toBeLessThanOrEqual(map.targets.length)
      })
    })

    test("numerical challenges should be less than targets", () => {
      doTimes(1_000, i => {
        for (const map of hitman.MAPS) {
          const challenges = hitman.randomChallenges(map, i)
          const numerical = challenges.filter(challenge => challenge.type === 'numerical')
          expect(numerical.length).toBeLessThanOrEqual(map.targets.length)

          let kills = 0
          numerical.forEach(challenge => {
            kills += challenge.count
          })
          expect(kills).toBeLessThanOrEqual(map.targets.length)
        }
      })
    })
  })
})

