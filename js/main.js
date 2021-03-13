function initMap() {
	const uluru = { lat: 62.6705236, lng: 131.1628421 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
	center: uluru,
	});
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}