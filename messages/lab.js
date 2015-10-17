function parse(){
	var xhr = new XMLHttpRequest();
	var json;

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			console.log('You da man');
		}
	};

	xhr.open('GET', 'data.json', true);
	xhr.send();

}