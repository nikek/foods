import Decimal from 'decimal.js-light'

import allFoods from './allFoods.js'

// returns an object with all nutrition properties with value 0

function getEmptyNutritionObj() {
  return {
    energy: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    fiber: 0
  }
}

// Shallowly sums numeric values per key in objects.
// arguments: both `a` and `b` are flat objects with optional properties with numeric values
// returns: a single object containing all keys from both a and b, with summed value

function sumMerge(a, b) {
  const keys = Object.keys(Object.assign({}, a, b))

  return keys.reduce((sum, key) => {
    sum[key] = (a[key] || 0) + (b[key] || 0)
    return sum
  }, {})
}

export function calcTotalNutrition(listOfNutritionObjs) {
  return listOfNutritionObjs.reduce(sumMerge, getEmptyNutritionObj())
}

// UNITS

const unitInfo = {
  g: { group: 'weight', ratio: 1 },
  kg: { group: 'weight', ratio: 1000 },
  ml: { group: 'volume', ratio: 1 },
  cl: { group: 'volume', ratio: 10 },
  dl: { group: 'volume', ratio: 100 },
  l: { group: 'volume', ratio: 1000 }
}

function areSameUnitType(unitA, unitB) {
  return unitInfo[unitA].group === unitInfo[unitB].group
}

function nutritionMultiplier(nutrition, multi) {
  const m = new Decimal(multi)
  return Object.keys(nutrition).reduce((newNutrition, fact) => {
    newNutrition[fact] = m.mul(nutrition[fact]).toNumber()
    return newNutrition
  }, getEmptyNutritionObj())
}

export function nutritionPerAmount({ food, amount }) {
  return nutritionMultiplier(food.nutrition, calcFoodMultiplier(amount))
  // if (areSameUnitType(food.nutritionPer.unit, amount.unit)) {

  // } else if (food.density) {
  //   // TODO
  //   // we can convert between unit types
  // } else {
  //   // choose a different amount unit!
  // }
}

function calcFoodMultiplier(amount) {
  return new Decimal(amount.value)
    .mul(unitInfo[amount.unit].ratio)
    .div(100)
    .toNumber()
}

// Will have to look through a DB or something
function materializeFoodById(ingr) {
  return {
    food: allFoods[ingr.id],
    amount: ingr.amount
  }
}

function normalizeNutrition(nutrition, amount) {
  return nutritionMultiplier(nutrition, 1 / calcFoodMultiplier(amount))
}

export function getNormalizedNutritionOfRecipe(food) {
  if (food.nutritionSource === 'CALCULATED_FROM_INGREDIENTS') {
    // we may continue

    // Get nutrition for each food item in an array
    // by fetching the food data by ingredient id
    // and map it through nutritionPerAmount
    // reduce it down to a nutrition object by
    // summing together all ingredients by fact into
    const totalNutrition = food.recipe.ingredients
      .map(materializeFoodById)
      .map(nutritionPerAmount)
      .reduce(sumMerge, getEmptyNutritionObj())

    // Normalize nutrition
    return normalizeNutrition(totalNutrition, food.recipe.totalAmount)
  }
}
