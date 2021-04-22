const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    // console.log(response) -- this returns everything
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings) // this returns only the data
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

// Create A Constant to hold DOM Element Reference
const DOM_Elements = {
    racer_list: '.racer-list',
}


// Grabbing Form Data From a Submit Event
const form = document.querySelector('#racerDataForm')
console.log(form)


// Trying OnClick
form.addEventListener('submit', ( event ) => {
    // by default, a page will reload after a form is submitted
    // the event.preventDefault prevents that auto-reload
    event.preventDefault();

})


// Create the Racer Table HTML
const populateTable = ( position, givenName, familyName, nationality, sponsor, points, url ) => {

    const html = `<tr><td>${position}</td><td>${givenName}</td><td>${familyName}</td><td><a href="${url}" target="_blank">${givenName} ${familyName}</a></td><td>${nationality}</td><td>${sponsor}</td><td>${points}</td></tr>`;

  
    document.querySelector(DOM_Elements.racer_list).insertAdjacentHTML('beforeend', html)
}


// Function to Load the API Data and Display to HTML
const load_data = async () => {
    
    let season_year = document.getElementById('season').value
    let number_round = document.getElementById('round').value
    
    const racers = await getData(season_year, number_round);

    
    racers.forEach( element => populateTable(element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.points, element.Driver.url))
}


// Function to Clear the API Data from the HTML
const clear_data = () => {
    // the .innerHTML = '' means we are replacing what populated with the load_data function with a blank slate
    document.querySelector(DOM_Elements.racer_list).innerHTML = '';
    document.getElementById("racerDataForm").reset();
}

