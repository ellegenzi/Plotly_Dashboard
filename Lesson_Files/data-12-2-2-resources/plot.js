console.log(cityGrowths);

// Sort the cities in descending order of population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log(sortedCities);

// Select only the top five cities in terms of growth
var topFiveCities = sortedCities.slice(0,5);

console.log(topFiveCities);

// Create separate arrays for the city names and their population growth
// parse(Int) converts strings into integers
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityGrowths);

// Use Plotly to create a bar chart with these arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

/* Here's what's happening in this code:

The trace specifies the type of graph as a bar chart as well as defines the x- and y-axis data.
The variable data encloses trace in an array to meet Plotly's format requirement.
The variable layout is assigned to an object that specifies the chart's title and axis labels.
Finally, the graph is rendered with Plotly.newPlot().
*/

// Skill Drill - repeat for the top seven cities
var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

console.log(topSevenCityGrowths);

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
