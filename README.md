# Plotly_Dashboard: Module 12 Challenge

## Overview of Project

### Background and Purpose

Roza is a biological researcher in a prominent microbiology laboratory. Many bacterial species are not well-studied, and many more remain unknown to science. Roza's role is to discover and document these bacteria. In particular, Roza is interested in bacterial species that have ability to synthesize proteins that taste like beef. Her lab has partnered with Improbable Beef, a food startup, to research candidate species. Labs across the country have had success in synthesizing meat from algae, fungi, and micro-organisms found on plant roots. However, Improbable Beef is still searching for the elusive bacteria that will provide the perfect taste. Roza has a hypothesis, that there's a micro-organism that can supply the next best taste and she believes it can be found quite close to home from bacteria found on the human body. Here's what Roza knows so far: the human body is a source of thousands of types of bacteria and different parts of the body harbor different species. Bacteria found in the gut are not the same species that are found on a person's eyelashes, for example. Furthermore, between individuals, the bacterial species may vary, even in the same location. Roza hypothesizes that the ideal bacteria species to make synthetic beef may be found in the belly button, or at least in someone's belly button. To test her hypothesis, Roza has sampled the navels of people across the country to identify bacterial species that colonize our belly buttons. Each person's identity is anonymous. They've instead been assigned an ID number. Now, Roza wants to build a dashboard that both her research participants and fellow researchers can access. Those who participated in the study will be able to visit a website and select their ID numbers to see which bacterial species live in their navels.

View the Belly Button Biodiversity Dashboard [here](https://ellegenzi.github.io/Plotly_Dashboard/).

### Resources

- Data Sources: samples.json
- Software: Visual Studio Code 1.68.1

## Procedure

### Deliverable 1

Using your knowledge of JavaScript, Plotly, and D3.js, create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.

### Deliverable 2

Using your knowledge of JavaScript, Plotly, and D3.js, create a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:

+ The otu_ids as the x-axis values.
+ The sample_values as the y-axis values.
+ The sample_values as the marker size.
+ The otu_ids as the marker colors.
+ The otu_labels as the hover-text values.

### Deliverable 3

Using your knowledge of JavaScript, Plotly, and D3.js, create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.

### Deliverable 4

Use your knowledge of HTML and Bootstrap to customize the webpage for your dashboard.
