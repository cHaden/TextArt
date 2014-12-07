var canvas = new fabric.Canvas('canvas');

//start my code	
var palettes = [
	["225378","1695A3","ACF0F2","F3FFE2","EB7F00"]];
var startSquare = 100; //make this configurable later
var textHeight = startSquare/2;
var numberOfBlocks = 16; //make this configurable later

var red = 10; //for testing purposes only
var green = 10; //for testing purposes only
var blue = 10; //for testing purposes only
var incrementAmt = 10; //for testing purposes only

var currentStartX = 200;
var currentStartY = 200;

var currentEndX = currentStartX + startSquare;
var currentEndY = currentStartX + startSquare;

var name = "Arbitrary"; //make this configurable later

for(var i=1; i <= numberOfBlocks; i++){

	switch(i%4){
	case 1:
		var text = new fabric.Text(name,{
		    top : currentStartY-textHeight,
		    left : currentStartX,
		    width : currentEndX - currentStartX,
		    height : textHeight,
		    //fontFamily: 'Erica One',
		    fill : palettes[0][1]
		});

		if(text.getWidth() <= (currentEndX - currentStartX)){
			canvas.add(text);
			text.setFontFamily('Erica One');
		}

		var rect = new fabric.Rect({
		    top : currentStartY-textHeight,
		    left : currentStartX,
		    width : currentEndX - currentStartX,
		    height : textHeight,
		    fill : "rgb("+red+","+green+","+blue+")",
		    opacity: 0.4
		});

		canvas.add(rect);

		red += incrementAmt;
		green += incrementAmt;
		blue += incrementAmt;
		
		console.log(text);
		currentStartY = currentStartY-textHeight;
		break;

	case 2:	

		var rect = new fabric.Rect({
		    top : currentStartY,
		    left : currentEndX,
		    width : textHeight,
		    height : currentEndY-currentStartY+textHeight,
		    fill : "rgb("+red+","+green+","+blue+")",
		    opacity: 0.4
		});

		canvas.add(rect);

		var text = new fabric.Text(name,{
		    top : currentStartY,
		    left : currentEndX+textHeight,
		    angle: 90,
		    width : textHeight,
		    height : currentEndY-currentStartY+textHeight,
		    fontFamily: 'Passion One',
		    fill : "rgb("+red+","+green+","+blue+")"
		});

		canvas.add(text);
		red += incrementAmt;
		green += incrementAmt;
		blue += incrementAmt;

		console.log(text);
		currentEndX = currentEndX+textHeight;
		currentEndY = currentEndY+textHeight;
		break;

	case 3:

		var rect = new fabric.Rect({
		    top : currentEndY-textHeight,
		    left : currentStartX-textHeight,
		    width : currentEndX-currentStartX,
		    height : textHeight,
		    fill : "rgb("+red+","+green+","+blue+")",
		    opacity: 0.4
		});

		canvas.add(rect);

		var text = new fabric.Text(name,{
		    top : currentEndY,
		    left : currentStartX-textHeight,
		    angle: 180,
		    width : currentEndX-currentStartX,
		    height : textHeight,
		    fill : "rgb("+red+","+green+","+blue+")"

		});

		text.setLeft(currentStartX-textHeight+(currentEndX-currentStartX));
		canvas.add(text);
		red += incrementAmt;
		green += incrementAmt;
		blue += incrementAmt;

		console.log(text);
		currentStartX = currentStartX-textHeight;
		break;

	case 0:


		var text = new fabric.Text(name,{
		    top : currentStartY,
		    left : currentStartX,
		    angle: 270,
		    width : textHeight,
		    height : currentEndY-currentStartY-textHeight,
		    fill : "rgb("+red+","+green+","+blue+")"
		});

		var rect = new fabric.Rect({
		    top : currentStartY,
		    left : currentStartX,
		    width : textHeight,
		    height : currentEndY-currentStartY-textHeight,
		    fill : "rgb("+red+","+green+","+blue+")",
		    opacity: 0.4
		});


		canvas.add(rect);

		text.setTop(currentStartY+(currentEndY-currentStartY-textHeight));
		canvas.add(text);
		red += incrementAmt;
		green += incrementAmt;
		blue += incrementAmt;

		console.log(text);
		break;
	}
}


//this currently codes nothing. Need to come back through to make this functional and prettified
function getSliderValue(property) {
	document.getElementById(property).onchange = function() {
		numberOfBlocks = this.value;
	  canvas.renderAll();
	};
	}

	getSliderValue("Number of Blocks");


	canvas.renderAll();
