function parse(){
	var xhr = new XMLHttpRequest();
	var json;
	
	xhr.open('GET', 'data.json', true);
	xhr.send();

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
	        json = JSON.parse(xhr.responseText);
        	elem = document.getElementById("messages");

        	for (count = 0; count < json.length; count++) {
				elem.innerHTML += "<p>" + json[count]["content"] + "   -" + json[count]["username"] + "</p>";
    		}
    	}
    };
	

}