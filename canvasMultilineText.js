function drawMultiLineText(context,textContent,fromX,fromY,width,height,font,drawBorder){
	if(typeof font == "undefined")
		font="10px sans-serif";
	if(typeof drawBorder == "undefined")
		drawBorder=false;
	
	var wordsArr=textContent.split(" ");
	var lineArr=[];
	var tmpString="";

	for(var i=0;i<wordsArr.length;i++)
		if(getWidth(tmpString + wordsArr[i], font) <= width){
			tmpString+=wordsArr[i]+" ";
			console.log(getWidth(tmpString, font));
			console.log(wordsArr[i]);
		}
		else{
			lineArr.push(tmpString);
			if(tmpString.split(" ").length==1)
				console.log("Long word detected");
			tmpString="";
			tmpString+=wordsArr[i];
		}
	console.log(wordsArr);
	context.font=font;
	var fontHeight=parseInt(font);
	for(var i=0;i<lineArr.length;i++)
		if(fontHeight*(i+1) <= height)
			context.fillText(lineArr[i],fromX,fontHeight*(i+1)+fromY);
	if(drawBorder){
		context.rect(fromX,fromY,width,height);
		context.stroke();
	}	

	function getWidth(text,font){
	var span=document.createElement("span");
	span.style.font=font;
	span.id="testSpan";
	span.style.position="absolute";
	span.style.top="-500px";
	span.style.left="-500px";
	changeText(span,text);
	document.body.appendChild(span);
	span=document.getElementById("testSpan");
	var spanWidth=span.offsetWidth;
	document.body.removeChild(span);
	return spanWidth;
	}
	
	function changeText(elem, changeVal) {
		if ((elem.textContent) && (typeof (elem.textContent) != "undefined")) {
			elem.textContent = changeVal;
		} else {
			elem.innerText = changeVal;
		}
	}
}