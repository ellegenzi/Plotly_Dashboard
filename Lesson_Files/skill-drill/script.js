// Create an event listener that triggers a custom function every time a change takes place to the HTML element
// specified by SelectAll()
d3.selectAll("body").on("change", updatePage);

// Whenever there is a change to the HTML body, the updatePage() function is called
// (when an event occurs on the page, such as a selection of a dropdown menu option, the updatePage() function
// is triggered)
function updatePage() {
  
  // Select the dropdown menu  
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;

  // Whenever a dropdown menu option is selected, its value is assigned the variable selectedOption
  var selectedOption = dropdownMenu.value;

  // Each time updatePage() is triggered, the id value of the dropdown menu, as well as the value of the chosen
  // menu option, are printed to the console.
  console.log(dropdownMenuID);
  console.log(selectedOption);
};