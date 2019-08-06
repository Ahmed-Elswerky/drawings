

function $i(id){

	return document.getElementById(id);

}





function check(e){

	var oppo,s;

	

	if(e.classList.contains("m_s")){

		s = "m_s";

		oppo = "k_s"; 

		$i('key').classList.remove(s);

		$i('key').classList.add(oppo);

		$i('mouse').classList.remove(s);

		$i('mouse').classList.add(oppo);

		document.cookie = 'mouse=false; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/';

		mouse = false;

	}

	else if(e.classList.contains("k_s")){

		s = "k_s";

		oppo = "m_s"; 

		$i('mouse').classList.remove(s);

		$i('mouse').classList.add(oppo);

		$i('key').classList.remove(s);

		$i('key').classList.add(oppo);

		document.cookie = 'mouse=true; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/';

		mouse = true;

		console.log("asdasd");

	}

}



var can,cont,cont1,mouse=false,moused=false,initial = 0;

var kb_l = false,kb_u = false,kb_r = false,kb_b = false,ks = false;

var pixels = 20,time = 1,x=25,y=25,w,h,lw=0.7,c='white',speed=2;



window.onload = function(){



	$i("info").addEventListener("mouseover",function(){$i("info_div").style.display = "block";});

	$i("info").addEventListener("mouseleave",function(){$i("info_div").style.display = "none";});

	$i("info_div").addEventListener("mouseover",function(){$i("info_div").style.display = "block";});

	$i("info_div").addEventListener("mouseleave",function(){$i("info_div").style.display = "none";});



	// $i("mouse").addEventListener("click",function(){check(this)});

	// $i("key").addEventListener("click",function(){check(this)});



	w = window.innerWidth;

	h = window.innerHeight;

	can = $i("canvas");

	can.width = w;

	can.height = h;

	$i("canvas1").width = w;

	$i("canvas1").height = h;

	cont = can.getContext("2d");

	cont1 = $i("canvas1").getContext("2d")

	cont1.fillStyle = "black";

	cont1.fillRect(0,0,$i("canvas1").width,$i("canvas1").height);

	// cont.fillStyle = "black";

	// cont.fillRect(0,0,can.width,can.height);

	cont.fillStyle=c;

	cont.fillRect(x,y,5,5);

	// cont.rotate(180);



	document.body.addEventListener('mousedown',function(event){

		if(mouse){

			moused = true;

			console.log("d");

			cont1.beginPath();



		    cont1.moveTo(event.clientX,event.clientY);

		    cont1.strokeStyle = c;



		    cont1.lineWidth = lw;

		}

	});

	document.body.addEventListener("mousemove",function(event){

		if(moused){

			// if(initial < 1)

				// var intervo = setInterval(function(){

					cont1.lineTo(event.clientX,event.clientY);

				    cont1.stroke();

				    // if(!moused || !mouse){

				    	// initial = 0;

				    	// clearInterval(intervo);

				    	// console.log('mouseup ' + moused + " " + mouse);

				    // }

				// },10);



			// mouse_draw(event.clientX,event.clientY);

			// console.log("moving and drawing");

			// console.log("m");

			initial++;

		}

	});

	document.body.addEventListener('mouseup',function(event){

		if(mouse){

			moused  = false;

			console.log('u');

			initial = 0;

		    cont1.closePath();



		}

	});

	document.body.addEventListener('mouseleave',function(event){

		// if(mouse)

			// moused = false;



	});



	document.body.addEventListener('keydown',function(event){

		console.log("keydown");

		switch(event.keyCode){

			case 37:kb_l = true;break;

			case 38:kb_u = true;break;

			case 39:kb_r = true;break;

			case 40:kb_b = true;break;

			case 68:ks = true;break;

			case 87:c='white';cont.fillStyle=c;

	cont.fillRect(x,y,5,5);break;

			case 71:c='green';cont.fillStyle=c;

	cont.fillRect(x,y,5,5);break;

			case 82:c='red';cont.fillStyle=c;

	cont.fillRect(x,y,5,5);break;

			case 66:c='blue';cont.fillStyle=c;

	cont.fillRect(x,y,5,5);break;

			case 89:c='yellow';cont.fillStyle=c;

	cont.fillRect(x,y,5,5);break;

			defualt:break;

		}

		move(event);

	});



	document.body.addEventListener('keyup',function(event){

		switch(event.keyCode){

			case 37:kb_l = false;break;

			case 38:kb_u = false;break;

			case 39:kb_r = false;break;

			case 40:kb_b = false;break;

			case 68:ks = false;break;

			defualt:break;

		}

	});



}



function move(event){

	if(!mouse){

		var KC = event.keyCode;

		console.log(KC);

		switch(KC){

			case 37:left();break;

			case 38:up();break;

			case 39:right();break;

			case 40:down();break;

			case 68:draw();break;

			default:break;

		}

	}

}

var coord = $i("img").getBoundingClientRect();

function left(){

	var interv = setInterval(function(){

		if(x>2)

			x-= speed;

		cont.clearRect(0,0,can.width,can.height);

		cont.fillStyle=c;

		cont.fillRect(x,y,5,5);

		if(!kb_l)

			clearInterval(interv);

	},5);

}



function up(){

	var interv = setInterval(function(){

		if(y>2)

			y -= speed;

		cont.clearRect(0,0,can.width,can.height);

		cont.fillStyle=c;

		cont.fillRect(x,y,5,5);

		if(!kb_u)

			clearInterval(interv);

	},5);

}



function right(){

	var interv = setInterval(function(){

		if(x < (w-3))

			x += speed;

		cont.clearRect(0,0,can.width,can.height);

		cont.fillStyle=c;

		cont.fillRect(x,y,5,5);

		if(!kb_r)

			clearInterval(interv);

	},5);

}



function down(){

	var interv = setInterval(function(){

		if(y < (h-3))

			y += speed;

		cont.clearRect(0,0,can.width,can.height);

		cont.fillStyle=c;

		cont.fillRect(x,y,5,5);

		if(!kb_b)

			clearInterval(interv);

	},5);

}



function draw() {

    cont1.beginPath();

    cont1.moveTo(x,y);

	var d_interv = setInterval(function(){

	    if(kb_l || kb_u || kb_r || kb_b){

			cont1.lineTo(x,y);

		}

	    cont1.strokeStyle = c;

	    cont1.lineWidth = lw;

	    cont1.stroke();

		if(!ks){

		    cont1.closePath();

		    clearInterval(d_interv);

		}

	},5);

}



/////////////////////////////////////////////////////////////



function mouse_draw(X,Y){

	x = X;

	y = Y;

	cont1.beginPath();

    cont1.moveTo(x,y);

	var d_interv = setInterval(function(){

		if(initial > 0){

			cont1.lineTo(x,y);

			console.log("ddawdawd");

		}

	    cont1.strokeStyle = c;

	    cont1.lineWidth = lw;

	    cont1.stroke();

		if(!moused){

		    cont1.closePath();

		    clearInterval(d_interv);

		}

		console.log(x," ",y);

	},5);

}