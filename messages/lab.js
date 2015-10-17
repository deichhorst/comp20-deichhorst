var xhr = new XMLHttpRequest();
var json;

nokokj;

xhr.onreadystatechange = function () {
	if(xhr.readyState === 4 && xhrhttp.status === 200)//good to go
		json = JSON.parse(xhr.responseText);
		console.log(json);
	}
};

xhr.open('GET', 'data.json', true);
xhr.send();