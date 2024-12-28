let latitudeElement = document.getElementById("latitude");
let longitudeElement = document.getElementById("longitude");
let loadButton = document.getElementById("load");
let showButton = document.getElementById("show");

let latitude = 0;
let longitude = 0;

loadButton.addEventListener("click", function() {
    const params = new URLSearchParams(window.location.search);
    latitude = params.get("lat");
    longitude = params.get("lng");

    latitudeElement.innerHTML = "Latitude: " + latitude;
    longitudeElement.innerHTML = "Longitude: " + longitude;
});

showButton.addEventListener("click", function() {
    if (latitude && longitude) {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, "_blank");
    } else {
        alert("No coordinates in the URL. Please load coordinates first.");
    }
});