var myFont;
var table;
var file, number = [];
var number = [];
var file, people = [];
var y = [];
var biolinks=[];
var names=[];
var biophoto=[]
var titles=[];
var locations=[];
var launchdates=[];
var careerdays=[];
var countrys=[];
var bios=[];
var twitters=[];
var a 
var astronauts = [];

function preload() {
	file = loadJSON('assets/people.json');
  myFont = loadFont('assets/Akkurat-Mono.otf');
  astro1 = loadImage('assets/astronauti/1.png');
  astro2 = loadImage('assets/astronauti/2.png');
  astro3 = loadImage('assets/astronauti/3.png');
  astro4 = loadImage('assets/astronauti/4.png');
  astro5 = loadImage('assets/astronauti/5.png');
  astro6 = loadImage('assets/astronauti/6.png');

}


function setup() {
    createCanvas(windowWidth, windowHeight)
    textFont(myFont);
    
    tasto()    
    
      biolinks.push(file.people[a].biolink);
      titles.push(file.people[a].title);
      names.push(file.people[a].name);
      locations.push(file.people[a].location);
      launchdates.push(file.people[a].launchdate);
      y.push(a*200);
      careerdays.push(file.people[a].careerdays);
      countrys.push(file.people[a].country);
      bios.push(file.people[a].bio);
      twitters.push(file.people[a].twitter); 
      biophoto.push(file.people[a].biophoto);
      number.push(file.number)
    
    for (var i = 0; i <  file.people.length; i++) {
	  
	   
	  var astroData = file.people[i]
	  var newAstronaut = new Astronaut(astroData.launchdate);
		astronauts.push(newAstronaut);
	}
      
      
}



function draw() {

   background(0);
   
   if(key === 1) {
     
      scheda(astro1)
     
   
     
   } else {
     noStroke()
     fill(0)
     rect(windowWidth/2-250,windowHeight/2-250,500,500) 
    
    for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
		astro.display();}
		
    main()   
 }
 
 
 
 
       if(key == 2) {
     
      scheda(astro2)}
      
       if(key == 3) {

      scheda(astro3)}
      
       if(key == 4) {

      scheda(astro4)}
      
       if(key == 5) {
     
      scheda(astro5)}
      
       if(key == 6) {
     
      scheda(astro6)}
    
}



function Astronaut(date) {
  
  this.launchDate = date;
  
  var daysInSpace = (Date.now() - Date.parse(this.launchDate))/1000 / 60 / 60 / 24;
  
	this.radius = daysInSpace/2;

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

	this.display = function() {
    noStroke()
    fill(27,150,255,200)
    //image(astro1,this.x-this.radius, this.y-this.radius,this.radius * 2,this.radius * 2)
    ellipse(this.x, this.y, this.radius * 2);
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
		
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
		
		}
	}
}





function main(){
push()

  translate(width/2,height/2)
  
  stroke(255)
  strokeWeight(5)
  line(-205,-200,-90,-200)
  line(205,200,90,200)
  
  noStroke()
  tx=-220
  ty=-135
  scale(0.95,1)
  fill(255)
  textSize(40);
  text('people in space right now',tx,ty-40,400,300);
  
  textSize(330);
  textAlign(CENTER)
  text(number,-17,170);
  fill(27,150,255)
  textSize(90);
  text(':',tx+230,ty+50);

pop()
}


function scheda(imm){
push()


  translate(width/2,height/2)
  noStroke()
  fill(0)
  rect(-250,-250,500,500)
  stroke(255)
  rect(-240,-240,480,480)
  strokeWeight(5)
  line(-205,-200,-90,-200)
  line(205,200,90,200)
  
  line(200,-210,170,-180)
  line(170,-210,200,-180)
  
  noFill()
  //ellipse(185,-195,50)
  
  noStroke()
  fill(27,150,255,200)
  ellipse(0,-65,140)
  image(imm,-30,-110,240,240)
  
  
  tx=-220
  ty=-135
  scale(0.95,1)
  fill(255)
  textSize(40);
    text(names,tx,ty-12);
  textSize(18);
    text(countrys,tx,ty+10);
    text(titles,tx,ty+27);
    text('launch date ',tx,ty+30,300, 1000);
    text(launchdates,tx,ty+47,300, 1000);
  textSize(13);
  fill(27,150,255)
  textLeading(11)
    text(bios,tx,ty+70,140, 1000);
  fill(255)
  textSize(60);
    text('in space for',tx,ty+274);
    text('110 days',tx,ty+336);
    
  fill(27,150,255)
    textSize(18);
    text('_follow',tx+360,ty+326)
  pop()

}


 function tasto(){
   if (key===1){a=1} else {a=0}

   if (key===2){a=2} else {a=0}
   
   
      
   

 }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}