d3.json("samples.json").then(function(data){
    console.log(data);
});

/*
// Extract only the wfreq (weekly belly button washing frequency) of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sort wfreq in descneding order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Delete null values fro the sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});
*/

/*
The array's first element is an object, with four key-value pairs. Note the following:

The id key identifies the ID number.
The otu_ids property is an array of the ID numbers of all the bacteria found in this person's navel. OTU stands for Operational Taxonomic Unit, and here it means species or bacterial type. In this instance, there were 80 bacterial types with distinct ID numbers.
The sample_values array contains the corresponding species name for each bacterial ID number. Some bacterial species have different ID numbers, but are clumped together under the same otu_label.
*/

// Practice
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));

researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));

// Skill Drill
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
