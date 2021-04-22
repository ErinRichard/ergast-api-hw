const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    // console.log(response) -- this returns everything
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings) // this returns only the data
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

function generate_table() {
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      let row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");
        let cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }