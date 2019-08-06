<!DOCTYPE html>

<html>

	<head>

		<title>Drawing app</title>

		<link rel="stylesheet" type="text/css" href="./css.css?<?php echo rand(1,1000); ?>">

		<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
		<link rel="icon" href="./d logo.png">
	</head>

	<body>

		<?php 

	        if(!isset($_COOKIE['view'])){

	            setcookie("view","1",time()+(30*24*60*60),"/");

	            $view = 1;

	            echo '

	                <script>

	                    var xm1l = new XMLHttpRequest;

	                    xm1l.onreadystatechange = function(){

	                            if(this.status == 200 && this.readyState == 4){                                

	                                    console.log("");        }

	                    }

	                    xm1l.open("post","http://ahmedelswerkey.ezyro.com/views.php?t=shanta",true);

	                    xm1l.send();

	                </script>

	            ';

	        }

			if(!isset($_COOKIE['v']))

				if($_COOKIE['mouse'] == "true"){

					$ts = "m_s";

				}

				else {$ts = "k_s";} 

				echo "

				<div id='settings'>

					

					<button class='sElement $ts' id='mouse' onclick=\"check(this)\" title='Activate drawing with mouse'><i class='fas fa-mouse-pointer'></i></button>

					<button class='sElement $ts' id='key' onclick=\"check(this)\" title='Activate drawing with Keyboard'><i class='fas fa-keyboard'></i></button>

					

					<div class='sElement' id='info'>

						<i class='fas fa-info'></i>

					</div>

				</div>

						<div id='info_div' style='display:none'>

							Press the <span>D</span> key to draw<br><br> &nbsp; (for Keyboard mode) <br><br><center>--------</center><br> Select colors by <span>R</span> (red) - <span>G</span> (green) - <span>B</span> (blue) keys <br><br> &nbsp; (for both modes)

						</div>

				";

		 ?>

		<img id='img' src="./white_pen.png" style='width:3rem;transform:rotate(180deg)'>

		<canvas id='canvas'></canvas>

		<canvas id='canvas1'></canvas>

		<script type="text/javascript" src='./flow.js?<?php echo rand(1,1000); ?>'></script>

		<?php 

			if(isset($_COOKIE['mouse']))

				echo "<script>mouse = $_COOKIE[mouse];</script>"

			 ?>

	</body>

</html>