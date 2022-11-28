let spaghetti = 400;
let guanciale = 250;
let freshEggYolks = 6;
let pecorinoRomanoCheese = 50;
let rawBlackPepper = 4;

// 1. Cut the guanciale into 1cm layers, then into long strips
let slicedGuanciale = guanciale;
console.log("1. Guanciale cut into long strips:", slicedGuanciale);
// 2. Combine the egg yolks with the finely grated Pecorino Romano
let mixEggsAndCheese = freshEggYolks + pecorinoRomanoCheese;
console.log("2. Eggs and Cheese mixture:", mixEggsAndCheese);
// 3. Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and cheese mixture, set aside the rest.
let roastedBlackPepper = rawBlackPepper;
let mixEggsCheesePepper = mixEggsAndCheese + roastedBlackPepper * 0.25;
console.log("3. Eggs and Cheese, plus some Black Pepper:", mixEggsCheesePepper);
let leftRoastedBlackPepper = roastedBlackPepper - roastedBlackPepper * 0.25;
// 4. Brown the strips of guanciale for 3 minutes at medium heat, then 1 minuTe on high heat til crisp, then turn off the heat, take out the guanciale,
//leaving only the grease on the pan cool down.
let cookedGuanciale = slicedGuanciale;
console.log("4. Guanciale cooked:", cookedGuanciale);
// 5. Cook the pasta with a pinch of salt in the water (guanciale is already very salty)
let cookedPasta = spaghetti;
console.log("5. Cooked Pasta:", cookedPasta);
// 6. set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
let tablespoon = 14;
let reservedHotWater = 2 * tablespoon;
console.log("6. Reserved hot water:", reservedHotWater);
// 7. Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
// this will create a creamy sauce with the pasta starch contained in that water.
let creamySauce = guanciale + reservedHotWater;
console.log("7. Creamy Sauce:", creamySauce);
// 8. TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
let pastaAndSauce = creamySauce + cookedPasta;
console.log("8. Pasta and Creamy Sauce:", pastaAndSauce);
// 9. Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
// It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
let pastaWithMixEggsCheesePepper = pastaAndSauce + mixEggsCheesePepper;
console.log(
  "9. Adding the Eggs-Cheese-Pepper-Mixture to the Pasta:",
  pastaWithMixEggsCheesePepper
);

// 10. Add the remaining roasted black pepper and serve immediately.
let finalPasta = pastaWithMixEggsCheesePepper + leftRoastedBlackPepper;
console.log("\n10. The final dish ready to be served:", finalPasta);
