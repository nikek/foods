import { totalNutrition } from './calculations.js'

describe('totalNutrition', () => {
  it('returns the same values if list contains one obj', () => {
    const nutritionA = {
      energi: 1,
      carbs: 2,
      fat: 3,
      protein: 0,
      fiber: 0
    }
    const list = [nutritionA]
    const total = totalNutrition(list)

    expect(total).toEqual(nutritionA)
  })

  it('should return the sum of nutrition of 2 nutrition objects', () => {
    const nutritionA = {
      energi: 100,
      carbs: 200,
      fat: 300,
      protein: 400,
      fiber: 500
    }
    const nutritionB = {
      energi: 1,
      carbs: 2,
      fat: 3,
      protein: 4,
      fiber: 5
    }
    const expectedTotal = {
      energi: 101,
      carbs: 202,
      fat: 303,
      protein: 404,
      fiber: 505
    }
    const list = [nutritionA, nutritionB]
    const total = totalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })

  it('should return the sum of nutrition of 5 nutrition objects', () => {
    const nutritionA = {
      energi: 10000,
      carbs: 20000,
      fat: 30000,
      protein: 40000,
      fiber: 50000
    }
    const nutritionB = {
      energi: 1000,
      carbs: 2000,
      fat: 3000,
      protein: 4000,
      fiber: 5000
    }
    const nutritionC = {
      energi: 100,
      carbs: 200,
      fat: 300,
      protein: 400,
      fiber: 500
    }
    const nutritionD = {
      energi: 10,
      carbs: 20,
      fat: 30,
      protein: 40,
      fiber: 50
    }
    const nutritionE = {
      energi: 1,
      carbs: 2,
      fat: 3,
      protein: 4,
      fiber: 5
    }
    const expectedTotal = {
      energi: 11111,
      carbs: 22222,
      fat: 33333,
      protein: 44444,
      fiber: 55555
    }
    const list = [nutritionA, nutritionB, nutritionC, nutritionD, nutritionE]
    const total = totalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })

  it('should handle unset properties in single nutrition objects', () => {
    const nutritionA = {
      energi: 100,
      carbs: 200,
      fat: 300,
      protein: 400,
      fiber: 500
    }
    const nutritionB = {
      energi: 1,
      carbs: 2,
      fat: 3
    }
    const expectedTotal = {
      energi: 101,
      carbs: 202,
      fat: 303,
      protein: 400,
      fiber: 500
    }
    const list = [nutritionA, nutritionB]
    const total = totalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })

  it('should add properties that are unset in all nutrition objects (with value 0)', () => {
    const nutritionA = {
      energi: 100,
      carbs: 200,
      fat: 300,
      protein: 400
    }
    const nutritionB = {
      energi: 1,
      carbs: 2,
      fat: 3
    }
    const expectedTotal = {
      energi: 101,
      carbs: 202,
      fat: 303,
      protein: 400,
      fiber: 0
    }
    const list = [nutritionA, nutritionB]
    const total = totalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })
})
