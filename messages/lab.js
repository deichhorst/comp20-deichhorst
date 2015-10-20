function parse(){
	var xhr = new XMLHttpRequest();
	var json;
	
	xhr.open('GET', 'data.json', true);
	xhr.send();

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
	        json = JSON.parse(xhr.responseText);
        	console.log(json.length);
        	elem = document.getElementById("messages");

			elem.innerHTML += "<p> <h2>" + json[0]["content"] + 
			"</h2>" + json[0]["username"] + "</p>";
			elem.innerHTML += "<p> <h2>" + json[1]["content"] + 
			"</h2>" + json[1]["username"] + "</p>";
    	}
    };
	

}