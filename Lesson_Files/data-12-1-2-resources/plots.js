/*var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
*/

/*var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini",
    "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke",
    "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var data = [trace];

var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent of Drinks Ordered"}
};
*/

/*var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini",
    "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke",
    "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var data = [trace];

var layout = {
    title: "'Pie' Chart"
};
*/

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };

var data = [trace1, trace2, trace3];

var layout = {
    title: "Scatter Plot",
    xaxis: {title: "X Axis Title Here"},
    yaxis: {title: "Y Axis Title Here"}
};

Plotly.newPlot("plotArea", data, layout);

// Practicing map() Method
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// With an arrow function
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);


var numbers = [0,2,4,6,8];
var plusfive = numbers.map(function(five){
    return five + 5;
});
console.log(plusfive);


var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);

// Practicing filter() Method
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var ess = words.filter((letter) => letter.startsWith("s"));

console.log(ess)

// Arrow function practice
// Return the ages in ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// Modified version
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);
/* Let's break down this code:
The variables a and b are replaced by anElement and anotherElement.
The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and anotherElement to 2.
The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
The sort()method compares another pair of elements in the array, for example 37 and 39.
Since 37 - 39 is a negative number, their ordering is kept.
The process is repeated until the array is sorted.
Appending reverse() to the above sorts the array in descending order. Try it in your browser console.
*/

// Now in descending order
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);


// Slice() practice
// Return the first two integers
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

// Return the first 3 words
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(0,3);
console.log(slice2);

// To slice to the end of an array, omit the second argument
// Return 'orangutan' and 'salamander'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );