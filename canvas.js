var canvas= document.querySelector('canvas');


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');


// c.fillStyle= "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle= "rgba(0, 0, 255, 0.5)";
// c.fillRect(200, 200, 100, 100);
// c.fillStyle= "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 100, 100, 100);
// c.fillStyle= "rgba(0, 0, 0, 0.5)";
// c.fillRect(100, 300, 100, 100);
// c.fillStyle= "rgba(255, 0, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);


// console.log(canvas)

// line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle="red"
// c.stroke();


// arc   /circle

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI*2, false);
// c.strokeStyle= "blue";
// c.stroke()

// for(var i= 0;i<10;i++){
//     var x= Math.random()*window.innerWidth;
//     var y= Math.random()*window.innerHeight;
    
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*2, false);
//     c.strokeStyle= "blue";
//     c.stroke()
// }

var mouse={
    x:undefined,
    y: undefined,
}
var maxRadius=40;
// var minRadius=10;
var colorArray=[
    '#330136',
    '#50A5A6',
    '#C2BAB8',
    '#E23F35',
    '#FF28DC',
    '#06D6A0',
    '#007369'

]

window.addEventListener('mousemove', function(event){
    mouse.x=event.x;
    mouse.y=event.y;
})

window.addEventListener('resize',function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    init();
})

function Circle(x, y, dx, dy, radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.minRadius=radius;
    this.radius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)]; 
    
    this.draw=function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
       
        // c.stroke()
        c.fillStyle=this.color;
        c.fill()
        // console.log(this)

    };
    this.update=function(){

        if(this.x+this.radius>innerWidth|| this.x-this.radius<0){
            this.dx=-this.dx
    
            }
            if (this.y+this.radius>innerHeight || this.y-this.radius<0) {
                this.dy=-this.dy
            }


            this.x +=this.dx;
            this.y +=this.dy;


            //interactivity
            if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
                if(this.radius< maxRadius){
                    this.radius+=1;

                }
            }else if(this.radius>this.minRadius){
                this.radius -=1
            }
            this.draw();  
               
                }
    }

    var circleArray=[];


function init(){
    for (var i = 0; i < 1200; i++) {
         var x=Math.random()*(innerWidth-radius*2)+radius;
        var y= Math.random()*(innerHeight-radius*2)+radius;
        var dx=(Math.random()-0.5)*2;
        var dy=(Math.random()-0.5)*2;
        var radius=Math.random()*3 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
console.log('jchbhbsac')
        
    }
}

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
    for (var j = 0; j < circleArray.length; j++) {
        circleArray[j].update();
        // console.log(circleArray[j])          
    }   
};

init();
animate()