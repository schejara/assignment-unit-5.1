console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let me = {
  firstName : 'Shobha',
  lastName : 'Chejara',
  hasSiblings : true,
  shoeCount : 4,
  favThreeFoods : ['Pizza','Vegrice','Pasta']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName +' '+ me.lastName;
console.log('My full name is ',fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

  let myFirstFood = me.favThreeFoods[0];
  console.log('The first value in favorite food is ',myFirstFood);
  let lastFoodPosition = me.favThreeFoods.length-1;  
  let myLastFood = me.favThreeFoods[lastFoodPosition];
  console.log('The last value in favorite food is ',myLastFood);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

let myCurrentShoeCount = me.shoeCount;
console.log('My current shoe count is ',myCurrentShoeCount);
 
 let add = me.shoeCount += 1;
 console.log('Added one new shoe in shoe property ',add);
console.log('Updated shoe count ',me);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
 me.favoriteColor ='Pink';
console.log('Added new property favorite color in object ',me);
