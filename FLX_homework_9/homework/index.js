const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function findTypes (...arguments) {
  let arr = [];

  for (let i = 0; i < arguments.length; i++) {
    arr[i] = typeof arguments[i];
  }
  
  return arr;
}

findTypes('number');
findTypes(null, 5, "hello");

function executeforEach (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    fn(el);
  }
}

executeforEach([1,2,3], function(el) {
  console.log(el);
});

function mapArray (arr, fn) {
  let newArray = [];
  
	executeforEach(arr, el => newArray.push(fn(el)));
  
  return newArray;
}

mapArray([2, 5, 8], function(el) { 
  return el + 3;
});

function filterArray (arr, fn) {
  let newArray = [];
  
	executeforEach(arr, el => {
		if (fn(el)) {
      newArray.push(el);
    }
	});
    
  return newArray;
}

filterArray([2, 5, 8], function(el) { 
  return el > 3; 
});

function getAmountOfAdultPeople(data) {
  return filterArray(data, el => el.age > 18).length;
}

getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers (data) {
  return mapArray(filterArray(data, el => el.age > 18 
    && el.favoriteFruit === 'banana' 
    && el.eyeColor === 'green'), el => el.name);
}

getGreenAdultBananaLovers(data);

function keys(object) {
  let newArray = [];
  
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      newArray.push(key);
    }
  }

  return newArray;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(object) {
  let newArray = [];
  
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      newArray.push(object[key]);
    }
  }
  
  return newArray;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const MMM = months[date.getMonth()];
  
	return 'Date: ' + date.getDate() + ' of ' + MMM + ', ' + date.getFullYear();
} 

showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
  return date.getFullYear() % 2 === 0;
}

isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
  return (date.getMonth() + 1) % 2 === 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'));