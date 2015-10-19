function parse(){
	var xhr = new XMLHttpRequest();
	var json;
	json = JSON.parse(xhr.responseText);
	
	xhr.open('GET', 'data.json', true);
	xhr.send();

	elem = document.getElementById("messages");
	
	for (count = 0; count < json.length; count++) {
			elem.innerHTML += "<p> <h2>" + json[count]["content"] + "</h2>" + json[count]["username"] + "</p>";
	}
}