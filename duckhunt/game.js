function init () {
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext('2d');
    // get background
  	var background = new Image();
  	background.src = 'duckhunt-background.gif';
    //get birds
    var birds = new Image();
    birds.src = 'duckhunt_various_sheet.png';
    
  	background.onload = function () {
  		ctx.drawImage(background,0,0,256,240,0,0,512,480);
  	}
    
    birds.onload = function () {
      ctx.drawImage(birds,0,110,35,35,145,65,80,80);
      ctx.drawImage(birds,130,110,35,35,285,95,80,80);
    }
}
