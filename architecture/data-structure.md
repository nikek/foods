# Data structure

## food

information about
### Nutrition info
Actual nutrition per 100g or 100ml.
Default measurements for this food.
If the food can be split into pieces or standard servings, what is the ratio of 100g or 100ml

### Meta
ID
Name, different languages?
Type of food regarding how nutrition was calculated
  example: enum
  ATOM - this has no ingredients and has its own nutritional facts (eg. spinach)
  SELFSET - it has ingredients, but has its own nutritional facts (eg. )
  CALCULATED - it has ingredients and nutritional facts come from combining these.

### Ingredients
What does this food consist of.




```js
foods: [{
  id: 1,
  name: "Spinach raw",
  defaultMeasureUnits: ["g"],
  nutritionPer: {
    value: 100,
    unit: "g"
  },
  nutrition: {
    energy: 18,
    carbs: 0.7,
    fat: 0.5,
    protein: 1.9,
    fiber: 1.3
  }
},
{
  id: 2,
  name: "iKaffe, Oatly",
  defaultMeasureUnits: ["dl"],
  nutritionPer: {
    value: 100, 
    unit: "ml",
  }
  nutrition: {
    energy: 60,
    carbs: 6.5,
    fat: 3,
    protein: 1,
    fiber: 0.8,
  }
},
{
  id: 3,
  name: "Yellow Onion",
  defaultMeasureUnits: ["g", "pieces:onion:onions"],
  pieceRatio: 1.1,
  nutritionPer: {
    value: 100,
    unit: "g"
  },
  nutrition: {
    energi: 39,
    carbs: 7.3,
    fat: 0.1,
    protein: 1.19,
    fiber: 1.88
  }
}]
```



## Meal

```js
meals: [
  {
    id: 321,
    name: "Spinach soup",
    defaultMeasureUnits: ["g", "pieces:onion:onions"],
    ingredients: [
      {
        id: 1,
        amount: {
          value: 400,
          unit: "g"
        }
      },
      {
        id: 2,
        amount: {
          value: 5,
          unit: "dl"
        }
      },
      {
        id: 3,
        amount: {
          value: 2,
          unit: "pieces"
        }
      }
    ]
  }
]

```











```js
{
  id: uuid,,
  name: "Spinach",
  nutrition: {
    calories: 23,
    Livsmedelsnummer: 360,
    energy:18,
    Kolhydrater (g) 0.7
    Fett (g) 0.5
    Protein (g) 1.9
    Fiberr (g) 1.3
    Vatten (g) 94
    Alkohol (g) 0
    Aska (g) 1.6
    Monosackarider (g) 0.2
    Disackarider (g) 0.1
    Sackaros (g) 0.1
    Fullkorn totalt (g) 0
    Sockerarter (g) 
    Summa mättade fettsyror (g) 0.06
    Fettsyra 4:0-10:0 (g) 0
    Laurinsyra C12:0 (g) 0
    Myristinsyra C14:0 (g) 0
    Palmitinsyra C16:0 (g) 0.05
    Stearinsyra C18:0 (g) 0
    Arakidinsyra C20:0 (g) 0
    Summa enkelomättade fettsyror (g) 0.03
    Palmitoljesyra C16:1 (g) 0.01
    Oljesyra C18:1 (g) 0.02
    Summa fleromättade fettsyror (g) 0.29
    Linolsyra C18:2 (g) 0.05
    Linolensyra C18:3 (g) 0.21
    Arakidonsyra C20:4 (g) 0
    EPA (C20:5) (g) 0
    DPA (C22:5) (g) 0
    DHA (C22:6) (g) 0
    Kolesterol (mg) 0
    Retinol (µg) 0
    Vitamin A (µg) 275
    β-Karoten (µg) 3300
    Vitamin D (µg) 0
    Vitamin E (mg) 2.9
    Vitamin K (µg) 
    Tiamin (mg) 0.1
    Riboflavin (mg) 0.28
    Vitamin C (mg) 46
    Niacin (mg) 0.9
    Niacinekvivalenter (mg) 1.22
    Vitamin B6 (mg) 0.2
    Vitamin B12 (µg) 0
    Folat (µg) 194
    Fosfor (mg) 30
    Jod (µg) 1
    Järn (mg) 2
    Kalcium (mg) 93
    Kalium (mg) 560
    Koppar (mg) 0.11
    Magnesium (mg) 79
    Natrium (mg) 6
    Salt (g) 0.02
    Selen (µg) 0.5
    Zink (mg) 0.9
    Avfall (skal etc.) (%) 5
  }

}

```