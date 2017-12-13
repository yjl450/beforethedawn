var circles = [];

function onKeyDown(event) {
	if (keys[event.key]) {
		var maxPoint = new Point(view.size.width, view.size.height);
		var newCircle = new Path.Circle({
			center: maxPoint * Point.random(),
			radius: 500,
			fillColor: keys[event.key].color
		});
		circles.push(newCircle);
		keys[event.key].sound.play();
	}
}

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(0.9);
		if (circles[i].radius < 1) {
			circles.splice(i, 1);
		}
	}
}