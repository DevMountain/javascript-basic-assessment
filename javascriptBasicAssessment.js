// Make an object called bob
// bob has a height of 6ft
// bob has an age of 24
// bob has hair, that has style spikey, and color brown
// bob is not presidentOfTheUnitedStates
// bob likes apples, bananas, and cherries

var bob = {height:'6ft',
  age:24,
  hair:{style:'spikey', color:'brown'},
  presidentOfTheUnitedStates:false,
  likes:['apples', 'bananas', 'cherries']};

  // Write a function called addItem, that takes in an array, and adds the item to
  // the array.

  function addItem(arr, item){
     arr.push(item);
     return arr;
  }

// Write a function called removeItem, that takes in an array of strings, and a string.
// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed

function removeItem(arr, item){
  for(var i=0;i<arr.length;i++){
    if (arr[i] == item){
      arr.splice(i--,1);
    }
  }
  return arr;
}



// Write a function doubleTheFun that takes 1 parameter it doubles numbers, and
// repeats strings example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'

function doubleTheFun(i){
  var x = i*2;
  if(x) return x;
  return i + i;
}

// Write function getValueOfProperty that takes in an object, and the name of a property on the object
// return the value from the object that corisponds to the property

function getValueOfProperty(obj,prop){
  return obj[prop];
}

// Write a function that takes in a message and author parameter
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object

function makeChatMessage(message, author){
  return {message:message, author:author, timestamp:new Date()};
}

// Using the describer funtion and users array below. to create an array of desriptions of the users called descriptions.
var users = [{"eyeColor":"blue","name":{"first":"Herminia","last":"Le"},"company":"POLARIUM"},{"eyeColor":"green","name":{"first":"Josephine","last":"Watts"},"company":"VELOS"},{"eyeColor":"brown","name":{"first":"Noemi","last":"Frank"},"company":"ASSITIA"},{"eyeColor":"brown","name":{"first":"Murray","last":"Morales"},"company":"NEWCUBE"},{"eyeColor":"blue","name":{"first":"Richards","last":"Lester"},"company":"ZILLIDIUM"}];
function describer(person){
  return person.first + " " + person.last + " works at " + person.company + " and is superior to everyone because they have " + person.eyeColor + " eyes.";
}

var descriptions = users.map(describer);
