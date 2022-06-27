//From GMAPs youtube Tutorial - setting up event listener for event
var locationForm = document.getElementById('location-form');

//listen for submit
locationForm.addEventListener('submit', geocode);

//Variables for input 
    let locationLat;
    let locationLng;


    //From GMAPs youtube Tutorial - G Maps GeoCode function. Added in Maths Floor to round to 2 decimal places
//credit https://www.youtube.com/watch?v=pRiQeo17u6c


//eBird API code - from star wars walk through
const baseURL = "https://api.ebird.org/v2/data/obs/geo/recent?";
const apiKey = "&key=u5345apoosps";

//eBird function to get data - from star wars walk through
function getData(lat, lng, dist, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + "lat=" + lat + "&lng=" + lng + "&dist=" + dist + apiKey);
    xhr.send();


    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
        }
    };
}



//eBird builds table - from star wars walk through
function getTableHeaders(obj) {
    var tableHeaders = [];

    console.log("The comn name is", Object.keys(obj)[1]);
    console.log("The location is", Object.keys(obj)[4]);
    console.log("The observation date is", Object.keys(obj)[5]);
    console.log("How many", Object.keys(obj)[6]);

    //commented out - replaced with nicer words
    //tableHeaders.push(`<td>"${Object.keys(obj)[1]}"</td>`)
    //tableHeaders.push(`<td>${Object.keys(obj)[4]}</td>`)
    //tableHeaders.push(`<td>${Object.keys(obj)[5]}</td>`)
    //tableHeaders.push(`<td>${Object.keys(obj)[6]}</td>`)
    tableHeaders.push(`<td>Bird Observed (Common Name)</td>`)
    tableHeaders.push(`<td>Location Observed</td>`)
    tableHeaders.push(`<td>Date Observed</td>`)
    tableHeaders.push(`<td>How Many Observed</td>`)
    //commented out - makes table header for all columns
    //Object.keys(obj).forEach(function (key){
    //    tableHeaders.push(`<td>${key}</td>`);
    //});

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(lat, lng, distance) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(lat, lng, distance, function(data) {

        if (data.length > 100) {
            console.log("data length is greater than 100");
            //contine pagination
        }
        var tableRows = [];
        //delete console log below when ready
        console.dir(data);
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
            var dataRow = [];

            //console.log(item);
            //console.log(item.comName);

            var rowData = item.comName.toString();
            var truncatedData = rowData.substring(0, 30);
            dataRow.push(`<td>${truncatedData}</td>`);

            //Object.keys(item).forEach(function(key){
            //    var rowData = item[key].toString();
                //added below to check how to only pull out certain colomns
            //    console.log(rowData);
            //    var truncatedData = rowData.substring(0, 15);
            //    dataRow.push(`<td>${truncatedData}</td>`);
            //});
            //tableRows.push(`<tr>${dataRow}</tr>`);

            var rowData = item.locName.toString();
            var truncatedData = rowData.substring(0, 50);
            dataRow.push(`<td>${truncatedData}</td>`);
           

            var rowData = item.obsDt.toString();
            var truncatedData = rowData.substring(0, 30);
            dataRow.push(`<td>${truncatedData}</td>`);
           

            var rowData = item.howMany
            var truncatedData = rowData
            dataRow.push(`<td>${truncatedData}</td>`);

            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
    })
}

function geocode(e) {
    //prevent actual submit
        e.preventDefault();
    
        var location = document.getElementById('location-input').value;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params:{
                address: location,
                key:'AIzaSyBoEklUcMdWIgoqZw1hY09NGnBUW9hzTVQ'                    
            }
        })
        .then(function(response){
            locationLat = response.data.results[0].geometry.location.lat;
            locationLng = response.data.results[0].geometry.location.lng;
            console.log(response);
            console.log(response.data.results[0].formatted_address)
            console.log(locationLat);
            console.log(locationLng);
            locationLat = Math.floor(locationLat * 100) / 100
            locationLng = Math.floor(locationLng * 100) / 100
            console.log(locationLat);
            console.log(locationLng);
            //distance
            var selectDistance = document.getElementById('distance-select');
            var distance = selectDistance.options[selectDistance.selectedIndex].value;
            console.log("The selected distance is", distance); 
            writeToDocument(locationLat, locationLng, distance);
    

            //formatted address
            var formattedAddress = response.data.results[0].formatted_address
            var formattedAddressOutput = `
                <ul class="list-group">
                    <li class="list-group-item">${formattedAddress}</li>
                </ul>
            `;
    
            //geometry
            var lat = response.data.results[0].geometry.location.lat
            var lng = response.data.results[0].geometry.location.lng
            var geometryOutput = `
                <ul class="list-group">
                    <li class="list-group-item"><strong>Latitude</strong>:${lat}</li>
                    <li class="list-group-item"><strong>Longitude</strong>:${lng}</li>
                </ul>
            `;
    
            //output to app
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
            document.getElementById('geometry').innerHTML = geometryOutput;
        })
        
        .catch(function(error){
            console.log(error);
        })
    }