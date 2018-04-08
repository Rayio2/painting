var flag=0;
var mouse=0;
var del = document.getElementById('delete');
var pen = document.getElementById('pen');
var erase = document.getElementById('erase');
var pencil = document.getElementById('pencil')
var tutorial = document.getElementById('tutorial');
var lastX,lastY,nowX,nowY;
var context = tutorial.getContext('2d');


tutorial.onmousedown=function(a){
    mouse=1;
    lastX=a.clientX-250;
    lastY=a.clientY-50;
  }
tutorial.onmouseup=function(){

    mouse=0;
  }
tutorial.onmousemove=function(paint){
    var x=paint.clientX
    var y=paint.clientY
    nowX=x-250;
    nowY=y-50;

    context.fillstyle='black'
    if(mouse===1)
    {
      
      if(flag===1)
      {
        drawline(lastX,lastY,nowX,nowY,1)
      }
      if(flag===2)
      {
        context.clearRect(paint.clientX-250,paint.clientY-50,20,20)
      }
      if(flag===3)
      {
        drawline(lastX,lastY,nowX,nowY,3)
      }
      lastX=nowX;
      lastY=nowY;
    }

    
}
del.onmousedown=function()
  {
    context.clearRect(0,0,1000,5000);
  }
pencil.onmousedown=function(){
    flag=1;
  }
erase.onmousedown=function()
  {
    flag=2;
  }
pen.onmousedown=function()
  {
    flag=3;
  }
function drawline(x1,y1,x2,y2,width)
{
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineWidth = width;
  context.lineTo(x2,y2);
  context.stroke();
  context.closePath();
}
