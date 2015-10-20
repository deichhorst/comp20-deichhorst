function parse(){
	var xhr = new XMLHttpRequest();
	var json;
	
	xhr.open('GET', 'data.json', true);
	xhr.send();

	json = JSON.parse(xhr.responseText);
	
	elem = document.getElementById("messages");
	
	for (count = 0; count < json.length; count++) {
			elem.innerHTML += "<p> <h2>" + json[count]["content"] + "</h2>" + json[count]["username"] + "</p>";
	}
}