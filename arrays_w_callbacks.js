
//Every 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Determine if every number is greater than or equal to 0
function numcheck(nums) {
    for(let i=0; i<nums.length; i++) {
        if(nums[i] >= 0) {

           console.log(nums[i]+' true');
            
        }
        else {
            console.log( nums[i]+' false');
        }
       
    }
   
}
numcheck(nums);

//determine if every word shorter than 8 characters

function wordcheck(panagram) {
    for(let i=0; i<panagram.length; i++){
        if(panagram[i].length < 8) {
            console.log(panagram[i] + ' true');
        }
        else {
            console.log(panagram[i] + ' false');
    }
}
}

wordcheck(panagram);


// filter the array for numbers less than 4

const result = nums.filter(nums => nums <  4);

console.log(result);

//filter words that have an even length

function findEvenLength(panagram) {

    return panagram.filter(panagram => {
      return (typeof panagram === 'string' && panagram.length % 2 === 0)
    })
  
  }

  console.log(findEvenLength(panagram))

// Find
// Find the first value divisible by 5

function findDivisibleByFive(nums, number) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % number == 0 && nums[i] != 0) {
            console.log(nums[i]);
            break;
        }
    }
}

findDivisibleByFive(nums, 5);

// find the first word that is longer than 5 characters

function findWordLongerThanFive(panagram) {
    for(let i = 0; i < panagram.length; i++) {
        if(panagram[i].length > 5) {
            console.log(panagram[i]);
            break;
        } else {
            console.log("No word found longer than 5 characters.")
            break;
        }
    }
}
findWordLongerThanFive(panagram);

//Find Index
//find the index of the first number that is divisible by 3

for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 3 === 0){
       console.log('Index of the first number that is divisible by 3 is '+  nums.indexOf(nums[i]));
       break;
    }
}

//find the index of the first word that is less than 2 characters long

for(let i = 0; i < panagram.length; i++) {
    if(panagram[i].length < 2){
       console.log('Index of the first word that is less than 2 char is '+  panagram.indexOf(panagram[i]));
       break;
    } else {
        console.log("No word found that is less than 2 char.");
        break;
    }
}

//For Each
//console.log each value of the nums array multiplied by 3

    nums.forEach(function(nums) {
       const times3 = nums * 3;
        console.log(times3);
   });
    
//console.log each word with an exclamation point at the end of it

panagram.forEach(function(panagram) {
    console.log(panagram + '!');
});

//Thought Questions

//What happened to the original array?

nums.forEach(function(nums) {
    console.log(nums);
});

panagram.forEach(function(panagram) {
    console.log(panagram);
})

//Ans There is no change in original Array.

//Can you store the values from a forEach method in a new array?

const newNums = [];

nums.forEach((value, index) => newNums[index] = value);

console.log(newNums);

const newPanagram = [];

panagram.forEach((value, index) => newPanagram[index] = value);

console.log(newPanagram);

//Ans Yes value can store in new Array using forEach method.

//Map

//make a new array of each number multiplied by 100

let newArray = nums.map((num) => num * 100);
console.log(newArray);


//make a new array of all the words in all uppercase

let newWordArray = panagram.map((e) => e.toUpperCase());
console.log(newWordArray);


//Thought Questions

//What happened to the original array?

console.log(nums);
console.log(panagram);

//Answer There is nothing change in original array.

//Can you store the values from a map method in a new array?

//Answer .map() Method does not change the original array. It will always return a new array. so yes value can store in new array using map method.

//Some
//Find out if some numbers are divisible by 7

function findDivisibleBy(nums, number) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % number == 0 && nums[i] != 0) {
            console.log(nums[i]);
            
        }
    }
}

findDivisibleBy(nums, 7);

//Find out if some words have the letter a in them   

    // panagram.forEach((panagram) => {
    //     console.log(`Check: ${panagram} : ${checkWord('a', panagram)}`);
    // });

    let substr = /a/
    let found = substr.test(panagram)
    if(found){
        console.log('Substring found !!')
    } else {
        console.log('Substring not found !!')
    }
         
    

// Reduce
//Add all the numbers in the array together using the reduce method

let sum = nums.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);

//concatenate all the words using reduce

let concateWords = panagram.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(concateWords);

//Thought Questions

//What happened to the original array?

//Sort
//Try to sort without any arguments, do you get what you'd expect with the numbers array?

let sortNumbers = nums.sort();
console.log(sortNumbers);

//Try to sort without any arguments, do you get what you'd expect with the words array?

let sortWords = panagram.sort();
console.log(sortWords);

//Sort the numbers in ascending order
       
 // Sort elements using compare method
 nums.sort(function(a, b){
    return a - b});
  
 console.log("After sorting in Ascending order");
      
 // Print sorted Numeric array
 console.log(nums);        

//Sort the numbers in descending order

nums.sort(function(a, b){
    return b - a});
  
 console.log("After sorting in descending order");
      
 // Print sorted Numeric array
 console.log(nums);    

//Sort the words in ascending order

    panagram.sort

 console.log('Sort the words in ascending order:');

for (const element of panagram) {
  console.log(element);
}   

//Sort the words in descending order

panagram.sort((a, b) => (a > b ? -1 : 1));

console.log("Sort the words in descending order:")
for (const element of panagram) {
    console.log(element);
  }   


//Thought Questions

//What happened to the original array?

console.log(panagram);

//Answer got new Array and element in array got in descending order.

//Array Methods Challenge Problems
//isPanagram
//Using the following array - test whether each letter a-z (case insensitive) is used at least once

const oldpanagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

function containsAnyLetters(oldpanagram) {
    return /[a-z]/i.test(oldpanagram);
  }
  
  console.log(containsAnyLetters(oldpanagram)); // 

//Working with data

const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]

    //filter for products with a price that is less than 10, using the array below:

    const productPriceLessthan10 = products.filter((value) => {
        
       let price = ((value.price< 10));
        return price;
    });
    console.log(productPriceLessthan10);

     //sort alphabetically by product name

     products.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      
      console.log(products);