function parse(){
	var xhr = new XMLHttpRequest();
	var json;

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			json = JSON.parse(xhr.responseText);
		}
	};

	xhr.open('GET', 'data.json', true);
	xhr.send();

	elem = document.getElementById("messages");
	
	for (count = 0; count < Object.keys(json).length; count++) {
			console.log(Object.keys(json[count]));
			elem.innerHTML += "<p> <h2>" + json[count]["content"] + "</h2>" + json[count]["username"] + "</p>";
	}
}