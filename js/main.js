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

//load in images
function loadImage (item) {
	images[item] = new Image();
	images[item].onLoad = function () {
		resourceLoaded();
	};
	images[item].src = 'img/' + name + '.png';
}

//load our resources and redraw..
function resourceLoaded() {
	numResourcesLoaded += 1;
	if (numResourcesLoaded === totalResources) {
		setInterval(redraw, 1000 / fps);
	}
}

//redraw canvas..
function redraw() {
	var x = charX,
		y = charY;
		
}


