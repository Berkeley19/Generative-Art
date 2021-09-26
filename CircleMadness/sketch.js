var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 500);
  centerCanvas();
  noLoop()
}

function windowResized() {
  centerCanvas();
}

function draw() {    
  background(255);
  x=100
  y=250
  d=150
  drawTheCircle(x,y,d,true)
  for(let i = 0; i < 5; i++){
    drawTheCircle(x+(d/2)*i,y,d,true)
  }
  for(let i = 0; i < 5; i++){
    drawTheCircle(x+(d/2)*i,y-d,d,false)
  }
  // drawTheCircle(x-(d/2)*1,y,d,true)
  // drawTheCircle(x-(d/2)*2,y,d,true)
  // drawTheCircle(x,y-d,d,false)
  // drawTheCircle(x-d/2,y-d/2,d,false)
  // drawTheCircle(x+d/2,y-d/2,d,false)
}


function drawTheCircle(x,y,d,check){
  for(let i=0; i<10; i++){
      circle(x,y,d)
      noFill()
      d/=2
    if(check){
      y-=d/2
    }else{
      y+=d/2
    }
  }
}