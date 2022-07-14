//Setting up event listener for event
let locationForm = document.getElementById("location-form");
//listen for submit
locationForm.addEventListener("submit", geocode);

//Variables for input
let locationLat;
let locationLng;

//alert
let userAlert = document.getElementById("alert");

//eBird API code - from star wars walk through
const BASE_URL = "https://api.ebird.org/v2/data/obs/geo/recent?";
const API_KEY = "&key=u5345apoosps";

/** Gets Data using eBird API - from star wars walk through*/
function getData(lat, lng, dist, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", BASE_URL + "lat=" + lat + "&lng=" + lng + "&dist=" + dist + API_KEY);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        } else if (this.status > 200) {
            userAlert.classList.remove("d-none");
        }
    };
}

function showTable() {
  let myTable = document.getElementById("my-table");
  myTable.classList.remove("d-none");
}
  
  function loadTableData(data) {
    const table = document.getElementById("tableBody");
    showTable();
    //console.log(data.length);
    //console.dir(data);
    if(data.length === 0){
        userAlert.classList.remove("d-none");
    } else {
      data.forEach(function (item) {
        let row = table.insertRow();

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
    userAlert.classList.add("d-none");
    
    getData(lat, lng, distance, function (data) {
        loadTableData(data);
    }
  )};
        

/**From "Google Geocode API & JavaScript Tutorial" on Youtube by Traversy Media
 *Added in Maths Floor to round to 2 decimal places
 *Calls Write to Document Function. Passes in Lat, Lang and Distance*/
function geocode(e) {
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
                userAlert.classList.remove("d-none");
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
            userAlert.classList.remove("d-none");
        });
}
