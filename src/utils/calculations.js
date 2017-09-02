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
