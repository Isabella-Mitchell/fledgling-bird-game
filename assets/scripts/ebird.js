//From "Google Geocode API & JavaScript Tutorial" on Youtube by Traversy Media
//Setting up event listener for event
let locationForm = document.getElementById("location-form");
//listen for submit
locationForm.addEventListener("submit", geocode);

//Variables for input
let locationLat;
let locationLng;

//eBird API code - from star wars walk through
const baseURL = "https://api.ebird.org/v2/data/obs/geo/recent?";
const apiKey = "&key=u5345apoosps";

/** Gets Data using eBird API - from star wars walk through*/
function getData(lat, lng, dist, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + "lat=" + lat + "&lng=" + lng + "&dist=" + dist + apiKey);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
        console.log(this.readyState)
        console.log(this.status);
    };
}

/**Builds table headers - from Code Institute Star Wars API Tutorial
 *Edited to supply user-friendly table headers, for only certain object properties*/
function getTableHeaders() {
    var tableHeaders = [];
    tableHeaders.push(`<th>Bird Observed</th>`);
    tableHeaders.push(`<th>Location Observed</th>`);
    tableHeaders.push(`<th>No. Observed</th>`);
    tableHeaders.push(`<th>Date Observed</th>`);
    return `<tr>${tableHeaders}</tr>`;
}

/**Builds table rows using data from eBird API
 *Calls getData function. Passes in user supplied Lat, Lng, Distance and Callback function.*/
function writeToDocument(lat, lng, distance) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(lat, lng, distance, function (data) {
        var tableRows = [];
        //console.dir(data);
        var tableHeaders = getTableHeaders();

        data.forEach(function (item) {
            var dataRow = [];

            var rowData = item.comName.toString();
            var truncatedData = rowData.substring(0, 30);
            dataRow.push(`<td>${truncatedData}</td>`);

            var rowData = item.locName.toString();
            var truncatedData = rowData.substring(0, 30);
            dataRow.push(`<td>${truncatedData}</td>`);

            var rowData = item.howMany;
            var truncatedData = rowData;
            dataRow.push(`<td>${truncatedData}</td>`);

            var rowData = item.obsDt.toString();
            var truncatedData = rowData.substring(0, 30);
            dataRow.push(`<td>${truncatedData}</td>`);

            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
    });
}

/**From "Google Geocode API & JavaScript Tutorial" on Youtube by Traversy Media
 *Added in Maths Floor to round to 2 decimal places
 *Calls Write to Document Function. Passes in Lat, Lang and Distance*/
function geocode(e) {
    //prevent actual submit
    e.preventDefault();

    var location = document.getElementById("location-input").value;
    axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: location,
                key: "AIzaSyBoEklUcMdWIgoqZw1hY09NGnBUW9hzTVQ",
            },
        })
        .then(function (response) {
            console.log(response);
            if(response.data.status != "ZERO_RESULTS"){
                locationLat = response.data.results[0].geometry.location.lat;
                locationLng = response.data.results[0].geometry.location.lng;
                locationLat = Math.floor(locationLat * 100) / 100;
                locationLng = Math.floor(locationLng * 100) / 100;
            } else {
                alert("please enter a valid address");
            }


            //distance
            var selectDistance = document.getElementById("distance-select");
            var distance = selectDistance.options[selectDistance.selectedIndex].value;

            //calls writeToDocument function
            writeToDocument(locationLat, locationLng, distance);

            //Outputs formatted address to page
            var formattedAddress = response.data.results[0].formatted_address;
            var formattedAddressOutput = `
                <ul class="list-group">
                    <li class="list-group-item"><strong>Address Entered: </strong>${formattedAddress}</li>
                </ul>
            `;
            document.getElementById("formatted-address").innerHTML = formattedAddressOutput;
        })

        .catch(function (error) {
            console.log(error);
        });
}
