<!DOCTYPE html>
<html>
<head>
	<title>Enerlogic Data Analyse</title>
	<!-- JavaScript Libraries -->
	<script src="javascript/RGraph/libraries/RGraph.common.core.js"></script>
	<script src="javascript/RGraph/libraries/RGraph.common.dynamic.js"></script>
	<script src="javascript/RGraph/libraries/RGraph.common.annotate.js"></script>
	<script src="javascript/RGraph/libraries/RGraph.common.context.js"></script>  
	<script src="javascript/RGraph/libraries/RGraph.common.effects.js"></script> 
	<script src="javascript/RGraph/libraries/RGraph.common.key.js"></script>       
	<script src="javascript/RGraph/libraries/RGraph.common.resizing.js"></script>  
	<script src="javascript/RGraph/libraries/RGraph.common.tooltips.js"></script>  
	<script src="javascript/RGraph/libraries/RGraph.common.zoom.js"></script>      
	<script src="javascript/RGraph/libraries/RGraph.pie.js"></script>
	<script src="javascript/RGraph/libraries/RGraph.bar.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
	<script src="javascript/graphs.js"></script>
	<!-- CSS Stylesheets -->
	<link rel="stylesheet" href="css/main.css"></script>
</head>
<body>
	<h1>Enerlogic Data Analyse</h1>
	<h4>Click on a chart to see the results</h4>
	<div id="leftsidebar">
		<?php include ('tabel.php'); ?>
		<div id="canvas2">
			<canvas id="staafgrafiekenergie" width="450" height="150">Your browser doesn't support the HTML5 Canvas element</canvas>
		</div>
		<div id="canvas3">
			<canvas id="staafgrafiekgas" width="450" height="150">Your browser doesn't support the HTML5 Canvas element</canvas>
		</div>
	</div>
	<div id="canvas1">
		<canvas id="myCanvas" width="640" height="640">Your browser doesn't support the HTML5 Canvas element</canvas>
	</div>
	<div id="rightsidebar">
		<h1>
			Selected City:
		</h1>
		<h1 id="title"></h1>
		<p id="sidebar-content"></p>
	</div>
</body>
</html>