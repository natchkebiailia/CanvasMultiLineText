How to use:
========  

<pre>drawMultiLineText(context,textContent,fromX,fromY,width,height,font,drawBorder)</pre>
<b>context</b> -> canvas 2d Context<br>
<b>textContent</b>  -> plaint text to write on canvas<br>
<b>fromX</b>  -> starting X point<br>
<b>fromxY</b>  -> starging Y point<br>
<b>width</b>  -> width of textBox<br>
<b>height</b>  -> height of textBox<br>
<b>font</b>  -> text font style (default: 10px sans-serif )<br>
<b>drawBorder</b>  -> textBox border (true or false, default: false)<br>

Examples of usage:
========

<pre>drawMultiLineText(ctx,plainText,700,0,100,380);</pre>
<br>
<pre>drawMultiLineText(ctx,plainText,280,30,350,300,"20px georgia");</pre>
<br>
<pre>drawMultiLineText(ctx,plainText,20,20,250,350,"15px georgia",false);</pre>
<br>
<pre>drawMultiLineText(ctx,plainText,20,400,700,200,"30px georgia",true);</pre>
Result:  
========  

![ScreenShot](https://raw.githubusercontent.com/natchkebiailia/CanvasMultiLineText/master/screenShot.PNG)
