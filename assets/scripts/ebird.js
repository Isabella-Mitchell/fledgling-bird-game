//From "Google Geocode API & JavaScript Tutorial" on Youtube by Traversy Media
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
            userAlert.classList.add("d-none");
        } else if (this.status > 200) {
            userAlert.classList.remove("d-none");
        }
    };
}

/**Builds table headers - from Code Institute Star Wars API Tutorial
 *Edited to supply user-friendly table headers, for only certain object properties*/
function getTableHeaders() {
    let tableHeaders = [];
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
        let tableHeaders = getTableHeaders();

        data.forEach(function (item) {
            let dataRow = [];

            let rowData1 = item.comName.toString();
            let truncatedData1 = rowData1.substring(0, 30);
            dataRow.push(`<td>${truncatedData1}</td>`);

            let rowData2 = item.locName.toString();
            let truncatedData2 = rowData2.substring(0, 30);
            dataRow.push(`<td>${truncatedData2}</td>`);

            let rowData3 = item.howMany;
            let truncatedData3 = rowData3;
            dataRow.push(`<td>${truncatedData3}</td>`);

            let rowData4 = item.obsDt.toString();
            let truncatedData4 = rowData4.substring(0, 30);
            dataRow.push(`<td>${truncatedData4}</td>`);

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

    let location = document.getElementById("location-input").value;
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
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
