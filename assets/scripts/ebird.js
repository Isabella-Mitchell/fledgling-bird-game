//test code
//const baseURL = "https://api.ebird.org/v2/data/obs/geo/recent/";
//const apiKey = "/?key=u5345apoosps";

//original code
const baseURL = "https://api.ebird.org/v2/data/obs/";
const apiKey = "/recent/?key=u5345apoosps";


function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + apiKey);
    xhr.send();


    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function (key){
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {

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

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
    })
}
