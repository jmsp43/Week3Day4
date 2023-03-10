//Homework Function Drills






// 1 . ) Write a function that outputs the sum of the first and the last index of an array.

// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6

const sumArray = function (arr) {
   for (i = 0; i < arr.length; i++){
      if (i === 0) {
         num1 = arr[i]
      }
      if (i === arr.length - 1) {
         num2 = arr[i]
      }
   }
   let sum = num1 + num2
   return sum
}
//console.log(sumArray([1, 2, 3, 4, 5]))












// 2. Write a JavaScript program to find the leap years in a given range of years. 

const leapYears = function (start, end) {
   let arrLeapYears = []
   for (let i = start; i <= end; i++){
      if ((i % 4 === 0 && i % 100 != 0) || i % 400 === 0) {
         arrLeapYears.push(i)
      }
   }
   console.log(arrLeapYears)
}
//leapYears(1985,2024)














// 3. Write a JavaScript function to sort the following array of objects by title value.
let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]

const sorting = function (array) {
   array.sort(function (title1, title2) {
      return title1.title.localeCompare(title2.title)
   })
   console.log(library)
}
//sorting(library)














 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
 // Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

const sumMixedData = function (arrMixedData) {
   let sum = 0
   for (let i = 0; i < arrMixedData.length; i++){
      if (typeof arrMixedData[i] === 'number') {
         sum += arrMixedData[i]
      }
   }
   return sum
}
const test = [2, "11", 3, "a2", false, 5, 7, 1]
const test2 = [2, 3, 0, 5, 7, 8, true, false]
//console.log(sumMixedData(test))












// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
//    drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
//   ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]


const sortDrinks = function (drinksArr) {

   drinksArr.sort(function (price1, price2){
      return price1.price - price2.price
   })
   console.log(drinksArr)
}

drinks = [
   { name: "B drink", price: 10 },
   { name: "K drink", price: 50 },
   { name: "Z drink", price: 20 },
   { name: "Q drink", price: 65 },
   { name: "Y drink", price: 1 }
]
//console.log(sortDrinks(drinks))
