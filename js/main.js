var images = {},
		totalResources = 6,
		numResourcesLoaded = 0,
		fps = 30;

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