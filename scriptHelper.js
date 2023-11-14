// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatusDiv = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let readyToLaunch = true;

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required.");
    }
    
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level is missing or not a number");
    }

    if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Mass is missing or not a number");
    }

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`; 
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = "invisible";
        launchStatusDiv.style.color = 'green';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatusDiv.innerHTML = "Shuttle is Ready for Launch";
    }

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatusDiv.style.color = 'red';
        launchStatusDiv.innerHTML = "Shuttle Not Ready for Launch";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    
    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatusDiv.style.color = 'red';
        launchStatusDiv.innerHTML = "Shuttle Not Ready for Launch";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
 }
 
 async function myFetch() {
     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     let planetsJson = await planetsReturned.json();
     return planetsJson
 }
 
     //planetsReturned = await fetch().then( function(response) {
        // });
 
     //return planetsReturned;
 //}
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;