
//Variable in which we will append data
var car_blocks = document.getElementById('cars');

//Static json.data Ajax call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    	var ourData = JSON.parse(xhr.responseText);
        renderData(ourData);
    }

}
xhr.open('GET', 'data.json', true);
xhr.send(null);

//Function which render json data into div with id cars
function renderData(data) {

	//An empty string in which we will store data 
	var carString = "";

	//Loop for passing through all data
	for (i = 0; i < data.cars.length; i++) {
		carString += '<div class="col-sm-4 car">';
		carString += '<a href="#">';
		carString += '<div class="face">';
		carString += '<img src="'+data.cars[i].image+'">';
		carString += '<p>'+data.cars[i].name+'</p>';
		carString += '</div>';
		carString +=  '<div class="back face center">';
    	carString +=  '<p>This is nice for exposing more information about an image.</p>';
  		carString += '</div>';
		carString += '</a>';
		carString += '</div>';
	}

	//Inserting data in HTML page
	car_blocks.insertAdjacentHTML('beforeend', carString);
}