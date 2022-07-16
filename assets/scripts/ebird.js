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
 * Gets Data from eBird using REST API
 * Returns error for a bad request
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
  function loadTableData(data) {
    resetTable();
    if(data.length === 0){
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
  };

  function writeToDocument(lat, lng, distance) {
    requestUserAlert.classList.add("d-none");
    addressUserAlert.classList.add("d-none");
    resultsUserAlert.classList.add("d-none");
    
    getEbirdData(lat, lng, distance, function (data) {
        loadTableData(data);
    }
  )};
        

/**From "Google Geocode API & JavaScript Tutorial" on Youtube by Traversy Media
 *Added in Maths Floor to round to 2 decimal places
 *Calls Write to Document Function. Passes in Lat, Lang and Distance*/
function geocodeUserAddressInput(e) {
    //prevent actual submit
    e.preventDefault();

    let location = document.getElementById("location-input").value;
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: location,
                key: "AIzaSyBoEklUcMdWIgoqZw1hY09NGnBUW9hzTVQ",
            },
        })
        .then(function (response) {
            //console.log(response);
            if(response.data.status != "ZERO_RESULTS"){
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

            //calls writeToDocument function
            writeToDocument(locationLat, locationLng, distance);

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

//alerts
let requestUserAlert = document.getElementById("alert-request-error");
let addressUserAlert = document.getElementById("alert-address-error");
let resultsUserAlert = document.getElementById("alert-results-error");
let alerts = document.getElementsByClassName("alert");

//Setting up event listener for event
let locationForm = document.getElementById("location-form");
//listen for submit
locationForm.addEventListener("submit", geocodeUserAddressInput);
