export default {
  0: {
    id: 0,
    name: 'Water',
    defaultMeasureUnits: ['dl'],
    nutritionPer: {
      value: 100,
      unit: 'ml'
    },
    nutrition: {
      energy: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      fiber: 0
    }
  },
  1: {
    id: 1,
    name: 'Spinach raw',
    defaultMeasureUnits: ['g'],
    nutritionPer: {
      value: 100,
      unit: 'g'
    },
    nutrition: {
      energy: 18,
      carbs: 0.7,
      fat: 0.5,
      protein: 1.9,
      fiber: 1.3
    }
  },
  2: {
    id: 2,
    name: 'iKaffe, Oatly',
    defaultMeasureUnits: ['dl'],
    nutritionPer: {
      value: 100,
      unit: 'ml'
    },
    nutrition: {
      energy: 60,
      carbs: 6.5,
      fat: 3,
      protein: 1,
      fiber: 0.8
    }
  },
  3: {
    id: 3,
    name: 'Yellow Onion',
    defaultMeasureUnits: ['g', 'pieces:onion:onions'],
    pieceAmount: {
      value: 110,
      unit: 'g'
    },
    nutritionPer: {
      value: 100,
      unit: 'g'
    },
    nutrition: {
      energy: 39,
      carbs: 7.3,
      fat: 0.1,
      protein: 1.19,
      fiber: 1.88
    }
  },
  4: {
    id: 4,
    name: 'Apple, Golden delicious',
    defaultMeasureUnits: ['g', 'pieces:apple:apples'],
    pieceAmount: {
      value: 120,
      unit: 'g'
    },
    nutritionPer: {
      value: 100,
      unit: 'g'
    },
    nutrition: {
      energy: 43,
      carbs: 9.4,
      fat: 0.05,
      protein: 0,
      fiber: 2.5
    }
  },
  123: {
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
    },
    nutritionPer: {
      value: 100,
      unit: 'ml'
    },
    nutrition: {
      energy: 27.78,
      carbs: 3.186,
      fat: 0.822,
      protein: 1.2218,
      fiber: 1.0936
    }
  }
}
