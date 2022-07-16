//Global variables storing URL and API_KEY for eBird API
const BASE_URL = "https://api.ebird.org/v2/data/obs/geo/recent?";
const API_KEY = "&key=u5345apoosps";

//Global variables for storing table elements
const tableBody = document.getElementById("tableBody");
const myTable = document.getElementById("my-table");

/**Variables for geocoding address function.
 * Store Lat and Lang to be passed into eBird function
 * */
let locationLat;
let locationLng;

/**
 * Resets the table, clearing data from eBird API.
 * */
function resetTable() {
    tableBody.innerHTML = "";
}

/**
 * Gets Data from eBird using REST API.
 * Requires user supplied distance radius and geocoded latitude and longtitute.
 * Returns error for a bad request.
 * */
function getEbirdData(lat, lng, dist, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", BASE_URL + "lat=" + lat + "&lng=" + lng + "&dist=" + dist + API_KEY);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        } else if (this.status > 200) {
            requestUserAlert.classList.remove("d-none");
            resetTable();
        }
    };
}

/**
 * Shows table on page which is hidden when the page first loads.
 * */
function showTable() {
    myTable.classList.remove("d-none");
}

/**
 * Populates table with data requesting from the eBird using an API.
 * Will show error the user if their search returns 0 results
 * */
function populateTableWithData(data) {
    resetTable();
    if (data.length === 0) {
        resultsUserAlert.classList.remove("d-none");
    } else {
        showTable();
        data.forEach(function (item) {
            let row = tableBody.insertRow();

            let birdNameCell = row.insertCell(0);
            let birdNameData = item.comName.toString();
            let birdNameDataTrunc = birdNameData.substring(0, 30);
            birdNameCell.innerHTML = birdNameDataTrunc;

            let locationObsCell = row.insertCell(1);
            let locationObsData = item.locName.toString();
            let locationObsDataTrunc = locationObsData.substring(0, 30);
            locationObsCell.innerHTML = locationObsDataTrunc;

            let numberObsCell = row.insertCell(2);
            let numberObsData = item.howMany;
            numberObsCell.innerHTML = numberObsData;

            let dateObsCell = row.insertCell(3);
            let dateObsData = item.obsDt.toString();
            let dateObsDataTrunc = dateObsData.substring(0, 30);
            dateObsCell.innerHTML = dateObsDataTrunc;
        });
    }
}

/**
 * Hides user alerts if any have appeared from their last input
 * */
function hideAlerts() {
    requestUserAlert.classList.add("d-none");
    addressUserAlert.classList.add("d-none");
    resultsUserAlert.classList.add("d-none");
}

/**
 * Passes user supplied distance radius and geocoded latitude and longtitute into eBird API
 * calls getEbirdData, which sends the API request to eBird
 * Once data is returned, the callback function populates the HTML table with table data
 * */
function passUserInputIntoEbirdAPI(lat, lng, distance) {
    hideAlerts();
    getEbirdData(lat, lng, distance, function (data) {
        populateTableWithData(data);
    });
}

/**
 * Uses Google Maps Geocoding Service to return coordinates for user entered address
 * Uses Maths Floor to round to 2 decimal places, required for the eBird API
 * Returns error if address is not recognised.
 * Calls passUserInputIntoEbirdAPI Function. Passes in Lat, Lang and Distance
 * */
function geocodeUserAddressInput(e) {
    //prevent actual submit
    e.preventDefault();

    let location = document.getElementById("location-input").value;
    axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: location,
                key: "AIzaSyBoEklUcMdWIgoqZw1hY09NGnBUW9hzTVQ",
            },
        })
        .then(function (response) {
            if (response.data.status != "ZERO_RESULTS") {
                locationLat = response.data.results[0].geometry.location.lat;
                locationLng = response.data.results[0].geometry.location.lng;
                locationLat = Math.floor(locationLat * 100) / 100;
                locationLng = Math.floor(locationLng * 100) / 100;
            } else {
                addressUserAlert.classList.remove("d-none");
                resetTable();
            }

            //distance
            let selectDistance = document.getElementById("distance-select");
            let distance = selectDistance.options[selectDistance.selectedIndex].value;

            //calls passUserInputIntoEbirdAPI function
            passUserInputIntoEbirdAPI(locationLat, locationLng, distance);

            //Outputs formatted address to page
            let formattedAddress = response.data.results[0].formatted_address;
            let addressEnteredBox = document.getElementById("address-entered-box");
            addressEnteredBox.classList.remove("d-none");
            document.getElementById("formatted-address").textContent = formattedAddress;
        })

        .catch(function (error) {
            console.log(error);
            addressUserAlert.classList.remove("d-none");
            resetTable();
        });
}

//User alerts in case something errors
let requestUserAlert = document.getElementById("alert-request-error");
let addressUserAlert = document.getElementById("alert-address-error");
let resultsUserAlert = document.getElementById("alert-results-error");

//Event listener for user pressing submit
let locationForm = document.getElementById("location-form");
locationForm.addEventListener("submit", geocodeUserAddressInput);
