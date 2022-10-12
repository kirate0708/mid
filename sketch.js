function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); //設定背景是白的
  noFill() //不要填滿圖形的顏色
  rectMode(CENTER) //設定畫方框時，我輸入的座標會是方框的中心點

  x = (mouseX+mouseY)/(width+height)*2 //設計成只要滑鼠X軸和Y軸只要有增加，圖形就會變大，反之變小
  y = (mouseX+mouseY)/(width+height)*2 //讓圖形的線條大小會隨滑鼠的X軸和Y軸增加而變粗，反之變細

  for(var i=0;i<int(width/50);i++) //設定迴圈的數字，讓i不會大於畫面寬除以50 EX:畫面寬800，i最大到17
  {
    for(var f=0;f<int(height/50);f++) //設定迴圈的數字，讓f不會大於畫面高除以50 EX:畫面高800，f最大到17
  {

    strokeWeight(5*y) //套入變數y這樣線條大小就會依照滑鼠y軸產生變化

    stroke("#e76f51")
    //下面圖形大小的部分加入變數x，這樣圖形就會依照滑鼠X軸產生變化
    ellipse(50+(i*100),50+(f*100),50*x,100*x) 
    stroke("#1d3557")
    ellipse(50+(i*100),50+(f*100),100*x,50*x)
    stroke("#748cab")
    ellipse(50+(i*100),50+(f*100),30*x)
    stroke("#9c6644")
    rect(50+(i*100),50+(f*100),100*x)
  }
  }

}