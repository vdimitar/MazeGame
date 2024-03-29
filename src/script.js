import * as THREE from 'three';

var pi = 3.141592;
var deg = pi / 180;

// Constructor for the player
function player(x, y, z, rx, ry) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.rx = rx;
	this.ry = ry;
	this.vx = 3;
	this.vy = 5;
	this.vz = 3;
}

// Level array initialization
var mapArray = new Array();
var thingsArray = new Array();
var keysArray = new Array();
var startArray = new Array();
var finishArray = new Array();

const loader = new THREE.TextureLoader();
const wallTexture = loader.load('images/image1.jpg');
const scene = new THREE.Scene();
const wallMaterial = new THREE.MeshBasicMaterial({ map: wallTexture });

function createWall(x, y, z, rx, ry, rz, w, h, material) {
	const geometry = new THREE.BoxGeometry(w, h, 1);
	const mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set((rx * Math.PI) / 180, (ry * Math.PI) / 180, (rz * Math.PI) / 180);
	scene.add(mesh);
	collidableMeshList.push(mesh);
}

// 1. līmenis
var collidableMeshList = [];

mapArray[0] = [
		   //pamati
	       createWall(0, 0, 1000, 0, 180, 0, 2000, 200, wallMaterial),
		   createWall(0,0,-1000,0,0,0,2000,200,wallMaterial),
		   createWall(1000,0,0,0,-90,0,2000,200,wallMaterial),
		   createWall(-1000,0,0,0,90,0,2000,200,wallMaterial),
		   createWall(0,100,0,90,0,0,2000,2000,wallMaterial),
		   
		   //1
		   createWall(-700,0,-800,0,180,0,600,200,wallMaterial),
	       createWall(-700,0,-700,0,0,0,600,200,wallMaterial),
		   createWall(-400,0,-750,0,90,0,100,200,wallMaterial),
		   
		   //2
		   [100,0,-800,0,180,0,600,200,"#F0C0FF"],
		   [50,0,-700,0,0,0,500,200,"#F0C0FF"],
		   [400,0,-550,0,90,0,500,200,"#F0C0FF"],
		   [-200,0,-750,0,-90,0,100,200,"#F0C0FF"],
		   [300,0,-500,0,-90,0,400,200,"#F0C0FF"],
		   [350,0,-300,0,0,0,100,200,"#F0C0FF"],
		   
		   //3
		   [700,0,-800,0,180,0,200,200,"#F0C0FF"],
		   [700,0,500,0,0,0,200,200,"#F0C0FF"],
		   [700,0,-150,0,90,0,1100,200,"#F0C0FF"],
		   [600,0,-150,0,-90,0,1300,200,"#F0C0FF"],
		   [800,0,-750,0,90,0,100,200,"#F0C0FF"],
		   [800,0,450,0,90,0,100,200,"#F0C0FF"],
		   [750,0,400,0,180,0,100,200,"#F0C0FF"],
		   [750,0,-700,0,0,0,100,200,"#F0C0FF"],
		   
		   //4
		   [850,0,-100,0,180,0,300,200,"#F0C0FF"],
		   [850,0,0,0,0,0,300,200,"#F0C0FF"],
		   
		   //5
		   [400,0,300,0,90,0,800,200,"#F0C0FF"],
		   [300,0,300,0,-90,0,800,200,"#F0C0FF"],
		   [350,0,-100,0,180,0,100,200,"#F0C0FF"],
		   
		   //6
		   [400,0,800,0,0,0,800,200,"#F0C0FF"],
		   [450,0,700,0,180,0,700,200,"#F0C0FF"],
		   [800,0,750,0,90,0,100,200,"#F0C0FF"],
		   [100,0,550,0,90,0,300,200,"#F0C0FF"],
		   [0,0,650,0,-90,0,300,200,"#F0C0FF"],
		   [-100,0,500,0,0,0,200,200,"#F0C0FF"],
		   [-100,0,400,0,180,0,400,200,"#F0C0FF"],
		   [-200,0,750,0,90,0,500,200,"#F0C0FF"],
		   [-300,0,700,0,-90,0,600,200,"#F0C0FF"],
		   
		   //7
		   [100,0,-250,0,90,0,900,200,"#F0C0FF"],
		   [0,0,-300,0,-90,0,800,200,"#F0C0FF"],
		   [-350,0,200,0,0,0,900,200,"#F0C0FF"],
		   [-350,0,100,0,180,0,700,200,"#F0C0FF"],
		   [-700,0,-50,0,90,0,300,200,"#F0C0FF"],
		   [-800,0,0,0,-90,0,400,200,"#F0C0FF"],
		   [-750,0,-200,0,180,0,100,200,"#F0C0FF"],
		   
		   //8
		   [-500,0,600,0,90,0,800,200,"#F0C0FF"],
		   [-600,0,600,0,-90,0,800,200,"#F0C0FF"],
		   
		   //9
		   [-600,0,-500,0,180,0,800,200,"#F0C0FF"],
		   [-650,0,-400,0,0,0,700,200,"#F0C0FF"],
		   [-200,0,-300,0,90,0,400,200,"#F0C0FF"],
		   [-300,0,-300,0,-90,0,200,200,"#F0C0FF"],
		   [-350,0,-100,0,0,0,300,200,"#F0C0FF"],
		   [-400,0,-200,0,180,0,200,200,"#F0C0FF"],
		   [-500,0,-150,0,-90,0,100,200,"#F0C0FF"],
		   
		   //10
		   [-900,0,500,0,0,0,200,200,"#F0C0FF"],
		   [-900,0,400,0,180,0,200,200,"#F0C0FF"],
		   [-800,0,450,0,90,0,100,200,"#F0C0FF"]
		   ];

thingsArray[0] = [[900,50,-900,0,0,0,50,50,"#FFFF00"],
			  [-400,50,900,0,0,0,50,50,"#FFFF00"],
			  [-400,50,-300,0,0,0,50,50,"#FFFF00"]];
			  
keysArray[0] = [[-100,50,600,0,0,0,50,50,"#FF0000"]];	

startArray[0] = [[-900,0,-900,0,0]];

finishArray[0] = [[-900,50,900,0,0,0,50,50,"#00FFFF"]];

// 2. līmenis

mapArray[1] = [
		   //Pamati
		   [0,0,1200,0,180,0,2400,200,"#C0FFE0"],
		   [0,0,-1200,0,0,0,2400,200,"#C0FFE0"],
		   [1200,0,0,0,-90,0,2400,200,"#C0FFE0"],
		   [-1200,0,0,0,90,0,2400,200,"#C0FFE0"],
		   [0,100,0,90,0,0,2400,2400,"#EEEEEE"],
		   
		   //1
		   [1100,0,-800,0,180,0,200,200,"#C0FFE0"],
		   [1000,0,-900,0,90,0,200,200,"#C0FFE0"],
		   [850,0,-1000,0,180,0,300,200,"#C0FFE0"],
		   [700,0,-950,0,-90,0,100,200,"#C0FFE0"],
		   [800,0,-900,0,0,0,200,200,"#C0FFE0"],
		   [900,0,-700,0,-90,0,400,200,"#C0FFE0"],
		   [750,0,-500,0,180,0,300,200,"#C0FFE0"],
		   [600,0,-450,0,-90,0,100,200,"#C0FFE0"],
		   [800,0,-400,0,0,0,400,200,"#C0FFE0"],
		   [1000,0,-550,0,90,0,300,200,"#C0FFE0"],
		   [1100,0,-700,0,0,0,200,200,"#C0FFE0"],
		   
		   //2
		   [800,0,-200,0,180,0,800,200,"#C0FFE0"],
		   [400,0,-300,0,90,0,200,200,"#C0FFE0"],
		   [300,0,-400,0,180,0,200,200,"#C0FFE0"],
		   [200,0,-700,0,90,0,600,200,"#C0FFE0"],
		   [50,0,-1000,0,180,0,300,200,"#C0FFE0"],
		   [-100,0,-950,0,-90,0,100,200,"#C0FFE0"],
		   [0,0,-900,0,0,0,200,200,"#C0FFE0"],
		   [100,0,-600,0,-90,0,600,200,"#C0FFE0"],
		   [200,0,-300,0,0,0,200,200,"#C0FFE0"],
		   [300,0,-200,0,-90,0,200,200,"#C0FFE0"],
		   [750,0,-100,0,0,0,900,200,"#C0FFE0"],
		   
		   //3
		   [500,0,-950,0,90,0,500,200,"#C0FFE0"],
		   [450,0,-700,0,0,0,100,200,"#C0FFE0"],
		   [400,0,-950,0,-90,0,500,200,"#C0FFE0"],
		   
		   //4
		   [-700,0,-600,0,0,0,1000,200,"#C0FFE0"],
		   [-200,0,-500,0,-90,0,200,200,"#C0FFE0"],
		   [-300,0,-400,0,180,0,200,200,"#C0FFE0"],
		   [-400,0,-250,0,-90,0,300,200,"#C0FFE0"],
		   [-350,0,-100,0,0,0,100,200,"#C0FFE0"],
		   [-300,0,-200,0,90,0,200,200,"#C0FFE0"],
		   [-200,0,-300,0,0,0,200,200,"#C0FFE0"],
		   [-100,0,-500,0,90,0,400,200,"#C0FFE0"],
		   [-650,0,-700,0,180,0,1100,200,"#C0FFE0"],
		   
		   //5
		   [-300,0,-850,0,90,0,300,200,"#C0FFE0"],
		   [-350,0,-1000,0,180,0,100,200,"#C0FFE0"],
		   [-400,0,-850,0,-90,0,300,200,"#C0FFE0"],
		   
		   //6
		   [-600,0,-1050,0,90,0,300,200,"#C0FFE0"],
		   [-650,0,-900,0,0,0,100,200,"#C0FFE0"],
		   [-700,0,-1050,0,-90,0,300,200,"#C0FFE0"],
		   
		   //7
		   [-900,0,-850,0,90,0,300,200,"#C0FFE0"],
		   [-950,0,-1000,0,180,0,100,200,"#C0FFE0"],
		   [-1000,0,-850,0,-90,0,300,200,"#C0FFE0"],
		   
		   //8
		   [-600,0,-250,0,90,0,700,200,"#C0FFE0"],
		   [-650,0,100,0,0,0,100,200,"#C0FFE0"],
		   [-700,0,-250,0,-90,0,700,200,"#C0FFE0"],
		   
		   //9
		   [-900,0,-150,0,90,0,900,200,"#C0FFE0"],
		   [-500,0,300,0,180,0,800,200,"#C0FFE0"],
		   [-100,0,650,0,90,0,700,200,"#C0FFE0"],
		   [-300,0,1000,0,0,0,400,200,"#C0FFE0"],
		   [-500,0,950,0,-90,0,100,200,"#C0FFE0"],
		   [-350,0,900,0,180,0,300,200,"#C0FFE0"],
		   [-200,0,650,0,-90,0,500,200,"#C0FFE0"],
		   [-600,0,400,0,0,0,800,200,"#C0FFE0"],
		   [-1000,0,-100,0,-90,0,1000,200,"#C0FFE0"],
		   
		   //10
		   [-300,0,200,0,90,0,200,200,"#C0FFE0"],
		   [-350,0,100,0,180,0,100,200,"#C0FFE0"],
		   [-400,0,200,0,-90,0,200,200,"#C0FFE0"],
		   
		   //11
		   [-800,0,600,0,180,0,800,200,"#C0FFE0"],
		   [-400,0,650,0,90,0,100,200,"#C0FFE0"],
		   [-800,0,700,0,0,0,800,200,"#C0FFE0"],
		   
		   //12
		   [-700,0,1050,0,90,0,300,200,"#C0FFE0"],
		   [-850,0,900,0,180,0,300,200,"#C0FFE0"],
		   [-1000,0,950,0,-90,0,100,200,"#C0FFE0"],
		   [-900,0,1000,0,0,0,200,200,"#C0FFE0"],
		   [-800,0,1100,0,-90,0,200,200,"#C0FFE0"],
		   
		   //13
		   [1050,0,700,0,180,0,300,200,"#C0FFE0"],
		   [900,0,800,0,-90,0,200,200,"#C0FFE0"],
		   [550,0,900,0,180,0,700,200,"#C0FFE0"],
		   [200,0,650,0,90,0,500,200,"#C0FFE0"],
		   [300,0,400,0,0,0,200,200,"#C0FFE0"],
		   [400,0,300,0,90,0,200,200,"#C0FFE0"],
		   [550,0,200,0,0,0,300,200,"#C0FFE0"],
		   [700,0,150,0,90,0,100,200,"#C0FFE0"],
		   [500,0,100,0,180,0,400,200,"#C0FFE0"],
		   [300,0,200,0,-90,0,200,200,"#C0FFE0"],
		   [200,0,300,0,180,0,200,200,"#C0FFE0"],
		   [100,0,650,0,-90,0,700,200,"#C0FFE0"],
		   [550,0,1000,0,0,0,900,200,"#C0FFE0"],
		   [1000,0,900,0,90,0,200,200,"#C0FFE0"],
		   [1100,0,800,0,0,0,200,200,"#C0FFE0"],
		   
		   //14
		   [700,0,700,0,90,0,400,200,"#C0FFE0"],
		   [850,0,500,0,0,0,300,200,"#C0FFE0"],
		   [1000,0,300,0,90,0,400,200,"#C0FFE0"],
		   [950,0,100,0,180,0,100,200,"#C0FFE0"],
		   [900,0,250,0,-90,0,300,200,"#C0FFE0"],
		   [750,0,400,0,180,0,300,200,"#C0FFE0"],
		   [600,0,650,0,-90,0,500,200,"#C0FFE0"],
		   
		   //15
		   [500,0,600,0,180,0,200,200,"#C0FFE0"],
		   [400,0,650,0,-90,0,100,200,"#C0FFE0"],
		   [500,0,700,0,0,0,200,200,"#C0FFE0"]
		   ];

thingsArray[1] = [[1100,50,900,0,0,0,50,50,"#FFFF00"],
			  [500,50,800,0,0,0,50,50,"#FFFF00"],
			  [-800,50,-500,0,0,0,50,50,"#FFFF00"],
			  [-900,50,1100,0,0,0,50,50,"#FFFF00"],
			  [-1100,50,-800,0,0,0,50,50,"#FFFF00"]
			  ];
			  
keysArray[1] = [createWall(1100,50,-900,0,0,0,50,50,wallMaterial)];

startArray[1] = [[0,0,0,0,0]];

finishArray[1] = [createWall(-1100,50,-500,0,0,0,50,50,wallMaterial)];

// Mainīgu līmeņu inicializācija

var map = new Array();
var things = new Array();
var keys = new Array();
var start = new Array();
var finish = new Array();

// Vai taustiņš ir nospiests un vai pēle tiek kustināta?

var PressBack = 0;
var PressForward = 0;
var PressLeft = 0;
var PressRight = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;

// Pārējie mainīgie

var lock = false;
var onGround = false;
var container = document.getElementById("container");
var world = document.getElementById("world");
var g = 0.1;
var dx = 0;
var dy = 0;
var dz = 0;
var canlock = false; 
var sun = [0.48,0.8,0.36];

// Kursora stāvokļa apstrāde

document.addEventListener("pointerlockchange", (event)=>{
	lock = !lock;
});

// Pēles kursors

container.onclick = function(){
	if (!lock && canlock) container.requestPointerLock();
};

// Taustiņi

document.addEventListener("keydown", (event) =>{
	if (event.key == "a"){
		PressLeft = 1;
	}
	if (event.key == "w"){
		PressForward = 1;
	}
	if (event.key == "d"){
		PressRight = 1;
	}
	if (event.key == "s"){
		PressBack = 1;
	}
	if (event.keyCode == 32){
		PressUp = 1;
	}
});

// Taustiņi

document.addEventListener("keyup", (event) =>{
	if (event.key == "a"){
		PressLeft = 0;
	}
	if (event.key == "w"){
		PressForward = 0;
	}
	if (event.key == "d"){
		PressRight = 0;
	}
	if (event.key == "s"){
		PressBack = 0;
	}
	if (event.keyCode == 32){
		PressUp = 0;
	}
});

// Peles kustība

document.addEventListener("mousemove", (event)=>{
	MouseX = event.movementX;
	MouseY = event.movementY;
});

// Jauns objekts

var pawn = new player(0,0,0,0,0);

function update(){
	let drx = 0;
	let dry = 0;
	// Nobīdes mainīgie
	
	dx =   ((PressRight - PressLeft)*Math.cos(pawn.ry*deg) - (PressForward - PressBack)*Math.sin(pawn.ry*deg))*pawn.vx;
	dz = ( -(PressForward - PressBack)*Math.cos(pawn.ry*deg) - (PressRight - PressLeft)*Math.sin(pawn.ry*deg))*pawn.vz;
	dy = dy + g;
	if (onGround){
		dy = 0;
		if (PressUp){
			dy = - PressUp*pawn.vy;
			onGround = false;
		}
	};
	drx = MouseY;
	dry = - MouseX;
	
	// Peles pārvietošanās:
	
	MouseX = MouseY = 0;
	
	// Kolīzijas
	
	collision();
	
	// Nobīdes attiecībā uz koordinātēm
	
	pawn.x = pawn.x + dx;
	pawn.y = pawn.y + dy;
	pawn.z = pawn.z + dz;
	
	// Ja kursors ir aktīvs griešanās ir atļauta
	
	if (lock){
		pawn.rx = pawn.rx + drx;
		pawn.ry = pawn.ry + dry;
	};

	// Virtuālas realitātes koordināšu maiņa
	
	world.style.transform = 
	"translateZ(" + (600 - 0) + "px)" +
	"rotateX(" + (-pawn.rx) + "deg)" +
	"rotateY(" + (-pawn.ry) + "deg)" +
	"translate3d(" + (-pawn.x) + "px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
	
};

function CreateNewWorld(map){
	CreateSquares(map,"map",true);
}

function clearWorld(){
	world.innerHTML = "";
}

function collision(){
	
	onGround = false;
	
	for(let i = 0; i < map.length; i++){
		
		// Spēlētāja koordinātes cita koordināšu sistēmā (taisnstūra)
		
		let x0 = (pawn.x - map[i][0]);
		let y0 = (pawn.y - map[i][1]);
		let z0 = (pawn.z - map[i][2]);
		
		if ((x0**2 + y0**2 + z0**2 + dx**2 + dy**2 + dz**2) < (map[i][6]**2 + map[i][7]**2)){
		
			let x1 = x0 + dx;
			let y1 = y0 + dy;
			let z1 = z0 + dz;
		
			let point0 = coorTransform(x0,y0,z0,map[i][3],map[i][4],map[i][5]);
			let point1 = coorTransform(x1,y1,z1,map[i][3],map[i][4],map[i][5]);
			let normal = coorReTransform(0,0,1,map[i][3],map[i][4],map[i][5]);
		
			// Kolīzijas nosacījumi un darbības
		
			if (Math.abs(point1[0])<(map[i][6]+90)/2 && Math.abs(point1[1])<(map[i][7]+90)/2 && Math.abs(point1[2]) < 50){
				point1[2] = Math.sign(point0[2])*50;
				let point2 = coorReTransform(point1[0],point1[1],point1[2],map[i][3],map[i][4],map[i][5]);
				let point3 = coorReTransform(point1[0],point1[1],0,map[i][3],map[i][4],map[i][5]);
				dx = point2[0] - x0;
				dy = point2[1] - y0;
				dz = point2[2] - z0;
				if (Math.abs(normal[1]) > 0.8){
					if (point3[1] > point2[1]) onGround = true;
				}
				else dy = y1 - y0;
			}
			
		}
	};
}

function coorTransform(x0,y0,z0,rxc,ryc,rzc){
	let x1 =  x0;
	let y1 =  y0*Math.cos(rxc*deg) + z0*Math.sin(rxc*deg);
	let z1 = -y0*Math.sin(rxc*deg) + z0*Math.cos(rxc*deg);
	let x2 =  x1*Math.cos(ryc*deg) - z1*Math.sin(ryc*deg);
	let y2 =  y1;
	let z2 =  x1*Math.sin(ryc*deg) + z1*Math.cos(ryc*deg);
	let x3 =  x2*Math.cos(rzc*deg) + y2*Math.sin(rzc*deg);
 	let y3 = -x2*Math.sin(rzc*deg) + y2*Math.cos(rzc*deg);
	let z3 =  z2;
	return [x3,y3,z3];
}

function coorReTransform(x3,y3,z3,rxc,ryc,rzc){
	let x2 =  x3*Math.cos(rzc*deg) - y3*Math.sin(rzc*deg);
	let y2 =  x3*Math.sin(rzc*deg) + y3*Math.cos(rzc*deg);
	let z2 =  z3
	let x1 =  x2*Math.cos(ryc*deg) + z2*Math.sin(ryc*deg);
	let y1 =  y2;
	let z1 = -x2*Math.sin(ryc*deg) + z2*Math.cos(ryc*deg);
	let x0 =  x1;
	let y0 =  y1*Math.cos(rxc*deg) - z1*Math.sin(rxc*deg);
	let z0 =  y1*Math.sin(rxc*deg) + z1*Math.cos(rxc*deg);
	return [x0,y0,z0];
};

function CreateSquares(squares,string,havelight){
	for (let i = 0; i < squares.length; i++){
		
		// Taisnstūris
		
		let newElement = document.createElement("div");
		newElement.className = string + " square";
		newElement.id = string + i;
		newElement.style.width = squares[i][6] + "px";
		newElement.style.height = squares[i][7] + "px";
		
		// Apgaismojuma efekts
		
		if (havelight){
			let normal = coorReTransform(0,0,1,squares[i][3],squares[i][4],squares[i][5]);
			let light = -(normal[0]*sun[0] + normal[1]*sun[1] + normal[2]*sun[2]);
			if (light < 0){
				light = 0;
			};
			newElement.style.background = "linear-gradient(rgba(0,0,0," + (0.2 - light*0.2) + "),rgba(0,0,0," + (0.2 - light*0.2) + ")), " +  squares[i][8];
		}
		else{
			newElement.style.background = squares[i][8];
		}
		
		// Taisnstūra transformācija
		
		newElement.style.transform = "translate3d(" +
		(600 - squares[i][6]/2 + squares[i][0]) + "px," +
		(400 - squares[i][7]/2 + squares[i][1]) + "px," +
		(squares[i][2]) + "px)" +
		"rotateX(" + squares[i][3] + "deg)" +
		"rotateY(" + squares[i][4] + "deg)" +
		"rotateZ(" + squares[i][5] + "deg)";
		
		// Taisnstūra ievietošana world pasaulē
		
		world.append(newElement);
	}
}