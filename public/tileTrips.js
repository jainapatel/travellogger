window.onload = function () {
	$.get('http://localhost:3030/trips', {}, (resp, status, xhr) => {
		console.log(resp)
		for(trip of resp.data) {
			console.log(trip)
			let newTile = "" + 
			"<div class='tile card card-2'>\
			<h2 class='tripTitle'>" + trip.name + "</h2>\
			<p>" + trip.highlights + "</p>\
			<p> Start Date: " + trip.startDate + "</p>\
			<p> End Date: " + trip.endDate + "</p>\
			</div>\
			";

			$(".tile-container").append(newTile)
		}
	})						
}
