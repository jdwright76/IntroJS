var tableData = data;
var tbody = d3.select("tbody");

function tableBuild(d) {

    tbody.html("")
    console.log(d);

    d.forEach((dr) => {
        var row = tbody.append("tr");
        Object.entries(dr).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Assign the data from `data.js` to a descriptive variable
//var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(datam => datam.datetime === inputValue);

    tableBuild(filteredData);

});

tableBuild(tableData);