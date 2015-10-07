function init () {
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext('2d');
    // get background
  	var background = new Image();
  	background.src = 'duckhunt-background.gif';
    //get birds
    var bird1 = new Image();
    bird1.src = 'duckhunt_various_sheet.png';
    var bird2 = new Image();
    bird2.src = 'duckhunt_various_sheet.png';
  	
  	background.onload = function () {
  		ctx.drawImage(background,0,0,256,240,0,0,512,480);
  	}
    
    bird1.onload = function () {
      ctx.drawImage(bird1,0,110,35,35,145,65,80,80);
    }
    bird2.onload = function () {
      ctx.drawImage(bird1,130,110,35,35,285,95,80,80);
    }
}