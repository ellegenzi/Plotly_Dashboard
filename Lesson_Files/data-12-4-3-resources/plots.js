function init() {
    // The d3.select() method is used to select the dropdown menu (id of #selDataset), which is assigned
    // the variable "selector"
    var selector = d3.select("#selDataset");
  
    // The d3.json() method is used to read the data from samples.json.
    // The data from the entire JSON file is assigned the arbitrary argument name, data.
    d3.json("samples.json").then((data) => {
      console.log(data);

      // The variable, sampleNames, is assigned to the names array, which contains the ID numbers
      // of all the study participants.
      var sampleNames = data.names;
      // The forEach() method is called on the sampleNames array. For each element in the array, a dropdown
      // menu option is appended. The text of each dropdown menu option is the ID. Its value property is
      // also assigned the ID.
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  // The function buildMetadata() takes in sample, or an ID number, as its argument. That is, when a dropdown menu
  // option is selected, the ID number is passed in as sample.
  function buildMetadata(sample) {
    // Then d3.json() pulls in the entire dataset contained in samples.json. Once the dataset is read in, it is
    // referred to as data.
    d3.json("samples.json").then((data) => {
      // The metadata array in the dataset (data.metadata) is assigned the variable metadata.  
      var metadata = data.metadata;
      // Then the filter() method is called on the metadata array to filter for an object in the array whose id
      // property matches the ID number passed into buildMetadata() as sample. Recall that each object in the
      // metadata array contains information about one person.
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // Because the results of the filter() method are returned as an array, the first item in the
      // array (resultArray[0]) is selected and assigned the variable result.
      var result = resultArray[0];
      // The id of the Demographic Info panel is sample-metadata. The d3.select() method is used to select this <div>,
      // and the variable PANEL is assigned to it.
      var PANEL = d3.select("#sample-metadata");
  
      // PANEL.html("") ensures that the contents of the panel are cleared when another ID number is chosen from the
      // dropdown menu.
      PANEL.html("");
      // Finally, the append() and text() methods are chained to append a H6 heading to the panel and print the
      // location of the volunteer to the panel, respectively.
      PANEL.append("h6").text(`ID: ${result.id}`);
      PANEL.append("h6").text(`ETHNICITY: ${result.ethnicity}`);
      PANEL.append("h6").text(`GENDER: ${result.gender}`);
      PANEL.append("h6").text(`AGE: ${result.age}`);
      PANEL.append("h6").text(`LOCATION: ${result.location}`);
      PANEL.append("h6").text(`BBTYPE: ${result.bbtype}`);
      PANEL.append("h6").text(`WFREQ: ${result.wfreq}`);
    });
  }

// Takes in an argument, newSample, and logs it to the browser console. newSample refers to the value of the selected
// menu option. In index.html, onchange=optionChanged(this.value)passes the selected menu option's value to the
// optionChanged()function. This function gives this information the argument name newSample. In other words, 
// this.value and newSample are equivalent.
function optionChanged(newSample) {
    // When an option is selected from the menu, its value is printed to the browser console.
    // console.log(newSample);

    // The demographic information panel is populated with a specific volunteer's information.
    buildMetadata(newSample);
    // The volunteer's data is visualized in a separate div.
    // buildCharts(newSample);
}