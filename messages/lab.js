function parse(){
	var xhr = new XMLHttpRequest();
	var json;

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			json = xhr.responseText;
			console.log(json);
		}
	};

	xhr.open('GET', 'data.json', true);
	xhr.send();

}