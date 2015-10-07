// Replace this with your code...
function init () {
	var canvas = document.getElementById('game_canvas');
  	var ctx = canvas.getContext('2d');

	// Draw slice
	//ctx.drawImage(document.getElementById('source'),
    //33, 71, 104, 124, 21, 20, 87, 104);

  	// Draw frame
  	var background = new Image();
  	background.src = 'duckhunt-background.gif';
  	
  	background.onload = function () {
  		ctx.drawImage(background,0,0,256,240,0,0,512,480);
  	}
 	
}