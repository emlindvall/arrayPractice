// Storing Arrays, Accessing Elements: Part 1
// 1. There are 5 elements in the array 
// 2. Integer 99 has an index position of 100
// 3. The value of the element in index position 3 is 90
// 4. The value of the element in index position 0 is 87
// 5. The index position of the last element in the array is 4




var goodFoods = ["pickles", "papadum", "pineapple pizza", "tom kha", "dolmades"];
var amountEaten = [2, 16, 4.5, 69, 420]
var wasItGood = [true, false, true, true, false]

//Pop method will remove the last element of the array, "dolmades"
goodFoods.pop();
console.log(goodFoods);

//Push method will replace the last element of the array 420 with element 3
amountEaten.push(3);
console.log(amountEaten);

//Unshift method will replace the last element of the array false with element true
wasItGood.unshift(true);
console.log(wasItGood);