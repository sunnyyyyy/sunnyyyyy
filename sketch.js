var songIsplay=false
var amp
function preload(){
  song = loadSound("哆啦A夢主題曲-實現夢想的哆啦A夢.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
 
}

function draw() {
  background(220);
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  push()
    fill("#D3D3D3")
    translate(width/2,height/2)
    ellipse(0,0,400)  //臉
    fill("#E6C3C3")
    ellipse(0,10,150) //臉的斑紋
    fill("#E6C3C3")
    ellipse(-100,-230,100)//左耳
    fill("#E6C3C3")
    ellipse(100,-230,100)//右耳
    fill("#E60000")
    ellipse(0,0,50) //鼻子橢圓
    fill("#FFFFFF")
    ellipse(10,-8,15)
    //左眼
    fill("#FFFFFF")
    ellipse(-60,-60,100)
    fill("#000000")
    ellipse(-90+mouseX/20,-90+mouseY/20,20)
    noFill()
    //右眼
    fill("#FFFFFF")
    ellipse(60,-60,100)
    fill("#000000")
    ellipse(50+mouseX/50,-75+mouseY/50,20)
    
    fill("#000000")
    arc(0,100,200,100,0,180)
    fill(255)
    if(mouseIsPressed)
    {   //mouseIsPressed為true，代表有按下滑鼠
      arc(0,99,200,40,0,180)  
    }
    else
    {   //mouseIsPressed為false，代表沒有按下滑鼠
      arc(0,99,200,90,0,180)
    }
    
    
    
    noFill()
  pop()
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}







