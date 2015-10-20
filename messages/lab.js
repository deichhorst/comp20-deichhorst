function parse(){
	var xhr = new XMLHttpRequest();
	var json = 4;
	console.log('assigned variables');
	
	xhr.open('GET', 'data.json', true);
	xhr.send();

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
        	console.log('did stuff');
        	json = JSON.parse(xhr.responseText);
        	console.log('done parsing text');
    	}
    };
	//
	//elem = document.getElementById("messages");
	//for (count = 0; count < json.length; count++) {
	//		elem.innerHTML += "<p> <h2>" + json[count]["content"] + "</h2>" + json[count]["username"] + "</p>";
	//}
}