var images = {},
	totalResources = 6,
	numResourcesLoaded = 0,
	fps = 30,
	context = document.getElementById('canvas').getContext('2d'),
	charX = 245,
	charY = 185;

loadImage('leftArm');
loadImage('legs');
loadImage('torso');
loadImage('rightArm');
loadImage('head');
loadImage('hair');

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  };

  images[name].src = 'img/' + name + '.png';
}



function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}


function redraw() {

  var x = charX;
  var y = charY;

  context.width = context.width; // clears the canvas 
                      
  context.drawImage(images.leftArm, x + 40, y - 42);
  context.drawImage(images.legs, x, y);
  context.drawImage(images.torso, x, y - 50);
  context.drawImage(images.rightArm, x - 15, y - 42);
  context.drawImage(images.head, x - 10, y - 125);
  context.drawImage(images.hair, x - 37, y - 138);
}