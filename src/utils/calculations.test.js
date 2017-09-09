import {
  calcTotalNutrition,
  nutritionPerAmount,
  getNormalizedNutritionOfRecipe
} from './calculations.js'

describe('totalNutrition', () => {
  it('returns the same values if list contains one obj', () => {
    const nutritionA = {
      energy: 1,
      carbs: 2,
      fat: 3,
      protein: 0,
      fiber: 0
    }
    const list = [nutritionA]
    const total = calcTotalNutrition(list)

    expect(total).toEqual(nutritionA)
  })

  it('should return the sum of nutrition of 2 nutrition objects', () => {
    const nutritionA = {
      energy: 100,
      carbs: 200,
      fat: 300,
      protein: 400,
      fiber: 500
    }
    const nutritionB = {
      energy: 1,
      carbs: 2,
      fat: 3,
      protein: 4,
      fiber: 5
    }
    const expectedTotal = {
      energy: 101,
      carbs: 202,
      fat: 303,
      protein: 404,
      fiber: 505
    }
    const list = [nutritionA, nutritionB]
    const total = calcTotalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })

  it('should return the sum of nutrition of 5 nutrition objects', () => {
    const nutritionA = {
      energy: 10000,
      carbs: 20000,
      fat: 30000,
      protein: 40000,
      fiber: 50000
    }
    const nutritionB = {
      energy: 1000,
      carbs: 2000,
      fat: 3000,
      protein: 4000,
      fiber: 5000
    }
    const nutritionC = {
      energy: 100,
      carbs: 200,
      fat: 300,
      protein: 400,
      fiber: 500
    }
    const nutritionD = {
      energy: 10,
      carbs: 20,
      fat: 30,
      protein: 40,
      fiber: 50
    }
    const nutritionE = {
      energy: 1,
      carbs: 2,
      fat: 3,
      protein: 4,
      fiber: 5
    }
    const expectedTotal = {
      energy: 11111,
      carbs: 22222,
      fat: 33333,
      protein: 44444,
      fiber: 55555
    }
    const list = [nutritionA, nutritionB, nutritionC, nutritionD, nutritionE]
    const total = calcTotalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })

  it('should handle unset properties in single nutrition objects', () => {
    const nutritionA = {
      energy: 100,
      carbs: 200,
      fat: 300,
      protein: 400,
      fiber: 500
    }
    const nutritionB = {
      energy: 1,
      carbs: 2,
      fat: 3
    }
    const expectedTotal = {
      energy: 101,
      carbs: 202,
      fat: 303,
      protein: 400,
      fiber: 500
    }
    const list = [nutritionA, nutritionB]
    const total = calcTotalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })

  it('should add properties that are unset in all nutrition objects (with value 0)', () => {
    const nutritionA = {
      energy: 100,
      carbs: 200,
      fat: 300,
      protein: 400
    }
    const nutritionB = {
      energy: 1,
      carbs: 2,
      fat: 3
    }
    const expectedTotal = {
      energy: 101,
      carbs: 202,
      fat: 303,
      protein: 400,
      fiber: 0
    }
    const list = [nutritionA, nutritionB]
    const total = calcTotalNutrition(list)

    expect(total).toEqual(expectedTotal)
  })
})

describe('nutritionPerAmount', () => {
  it('should return correct nutrition', () => {
    const food = {
      nutritionPer: {
        value: 100,
        unit: 'g'
      },
      nutrition: {
        energy: 1,
        carbs: 2,
        fat: 3,
        protein: 4,
        fiber: 5
      }
    }
    const amount = {
      value: 200,
      unit: 'g'
    }
    const expectedNutrition = {
      energy: 2,
      carbs: 4,
      fat: 6,
      protein: 8,
      fiber: 10
    }
    expect(nutritionPerAmount({ food, amount })).toEqual(expectedNutrition)
  })

  it('should handle different units of the same type', () => {
    const food = {
      nutritionPer: {
        value: 100,
        unit: 'g'
      },
      nutrition: {
        energy: 1,
        carbs: 2,
        fat: 3,
        protein: 4,
        fiber: 5
      }
    }
    const amount = {
      value: 0.2,
      unit: 'kg'
    }
    const expectedNutrition = {
      energy: 2,
      carbs: 4,
      fat: 6,
      protein: 8,
      fiber: 10
    }
    expect(nutritionPerAmount({ food, amount })).toEqual(expectedNutrition)
  })
  it('should handle unset properties of nutrition object', () => {
    const food = {
      nutritionPer: {
        value: 100,
        unit: 'g'
      },
      nutrition: {
        energy: 1,
        carbs: 2,
        fat: 3
      }
    }
    const amount = {
      value: 0.2,
      unit: 'kg'
    }
    const expectedNutrition = {
      energy: 2,
      carbs: 4,
      fat: 6,
      protein: 0,
      fiber: 0
    }
    expect(nutritionPerAmount({ food, amount })).toEqual(expectedNutrition)
  })
})

describe('Nutrition calculation of ingredients', () => {
  it('should calculate nutrition from single ingredients', () => {
    const newFoodItem = {
      nutritionSource: 'CALCULATED_FROM_INGREDIENTS',
      name: 'Spinach soup',
      defaultMeasureUnits: ['dl'],
      recipe: {
        totalAmount: {
          value: 1,
          unit: 'dl'
        },
        ingredients: [
          {
            id: 2,
            amount: {
              value: 1,
              unit: 'dl'
            }
          }
        ]
      }
    }

    const expectedNutrition = {
      energy: 60,
      carbs: 6.5,
      fat: 3,
      protein: 1,
      fiber: 0.8
    }
    expect(getNormalizedNutritionOfRecipe(newFoodItem)).toEqual(
      expectedNutrition
    )
  })

  it('should calculate nutrition from single ingredients', () => {
    const newFoodItem = {
      nutritionSource: 'CALCULATED_FROM_INGREDIENTS',
      name: 'Spinach soup',
      defaultMeasureUnits: ['dl'],
      recipe: {
        totalAmount: {
          value: 2,
          unit: 'dl'
        },
        ingredients: [
          {
            id: 2,
            amount: {
              value: 1,
              unit: 'dl'
            }
          },
          {
            id: 2,
            amount: {
              value: 1,
              unit: 'dl'
            }
          }
        ]
      }
    }

    const expectedNutrition = {
      energy: 60,
      carbs: 6.5,
      fat: 3,
      protein: 1,
      fiber: 0.8
    }
    expect(getNormalizedNutritionOfRecipe(newFoodItem)).toEqual(
      expectedNutrition
    )
  })

  it('should calculate nutrition from list of ingredients', () => {
    const newFoodItem = {
      nutritionSource: 'CALCULATED_FROM_INGREDIENTS',
      name: 'Spinach soup',
      defaultMeasureUnits: ['dl'],
      recipe: {
        totalAmount: {
          value: 1000,
          unit: 'ml'
        },
        ingredients: [
          {
            id: 0,
            amount: {
              value: 3,
              unit: 'dl'
            }
          },
          {
            id: 1,
            amount: {
              value: 400,
              unit: 'g'
            }
          },
          {
            id: 2,
            amount: {
              value: 2,
              unit: 'dl'
            }
          },
          {
            id: 3,
            amount: {
              value: 220,
              unit: 'g'
            }
          }
        ]
      }
    }

    const expectedNutrition = {
      energy: 27.78,
      carbs: 3.186,
      fat: 0.822,
      protein: 1.2218,
      fiber: 1.0936
    }

    expect(getNormalizedNutritionOfRecipe(newFoodItem)).toEqual(
      expectedNutrition
    )
  })
})
