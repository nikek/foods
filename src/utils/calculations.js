// returns an object with all nutrition properties with value 0

function getEmptyNutritionObj() {
  return {
    energi: 0,
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

export function totalNutrition(listOfNutritionObjs) {
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
  return Object.keys(nutrition).reduce((newNutrition, fact) => {
    newNutrition[fact] = nutrition[fact] * multi
    return newNutrition
  }, {})
}

export function nutritionPerAmount(food, amount) {
  if (areSameUnitType(food.nutritionPer.unit, amount.unit)) {
    const nutritionRatio =
      amount.value * unitInfo[amount.unit].ratio / food.nutritionPer.value

    return Object.assign(
      getEmptyNutritionObj(),
      nutritionMultiplier(food.nutrition, nutritionRatio)
    )
  } else if (food.density) {
    // TODO
    // we can convert between unit types
  } else {
    // choose a different amount unit!
  }
}
