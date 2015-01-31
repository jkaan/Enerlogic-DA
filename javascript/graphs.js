window.onload = function() {
	createAlmerePieChart();
	createDenHaagPieChart();
	createEindhovenPieChart();
	createEnschedePieChart();
	createLeeuwardenPieChart();
	createMaastrichtPieChart();
	createEnergieStaafDiagram();
	createGasStaafDiagram();
}

function createAlmerePieChart() {
	var almerePieChart = new RGraph.Pie('myCanvas', [6006040.74450000, 682647.82000000]);
	almerePieChart.Set('chart.strokestyle', '#000000');
	almerePieChart.Set('chart.colors', ['#0D00FF', '#FCFF00']);
	almerePieChart.Set('chart.linewidth', 1);
	almerePieChart.Set('chart.radius', 18);
	// Positioning of this chart
	almerePieChart.Set('chart.centerx', 298);
	almerePieChart.Set('chart.centery', 270);
	almerePieChart.Set('chart.events.click', showAlmereContents);

	var factor = 1.5;

	almerePieChart.context.setTransform(factor,0,0,1,((almerePieChart.canvas.width * factor) - almerePieChart.canvas.width) * -0.5,0);
	RGraph.Effects.Pie.Implode(almerePieChart);

}

function createDenHaagPieChart() {
	var denHaagPieChart = new RGraph.Pie('myCanvas', [5223063.80933333, 1285195.16700000]);
	denHaagPieChart.Set('chart.strokestyle', '#000000');
	denHaagPieChart.Set('chart.colors', ['#0D00FF', '#FCFF00']);
	denHaagPieChart.Set('chart.linewidth', 1);
	denHaagPieChart.Set('chart.radius', 18);
	denHaagPieChart.Set('chart.shadow.color', '#000000');
	// Positioning of this chart
	denHaagPieChart.Set('chart.centerx', 240);
	denHaagPieChart.Set('chart.centery', 308);
	denHaagPieChart.Set('chart.events.click', showDenHaagContents);

	var factor = 1.5;

	denHaagPieChart.context.setTransform(factor,0,0,1,((denHaagPieChart.canvas.width * factor) - denHaagPieChart.canvas.width) * -0.5,0);
	RGraph.Effects.Pie.Implode(denHaagPieChart);
}

function createEindhovenPieChart() {
	var eindhovenPieChart = new RGraph.Pie('myCanvas', [18232480.33816667, 1748030.81700000]);
	eindhovenPieChart.Set('chart.strokestyle', '#000000');
	eindhovenPieChart.Set('chart.colors', ['#0D00FF', '#FCFF00']);
	eindhovenPieChart.Set('chart.linewidth', 1);
	eindhovenPieChart.Set('chart.radius', 18);
	// Positioning of this chart
	eindhovenPieChart.Set('chart.centerx', 312);
	eindhovenPieChart.Set('chart.centery', 400);
	eindhovenPieChart.Set('chart.events.click', showEindhovenContents);

	var factor = 1.5;
	eindhovenPieChart.context.setTransform(factor,0,0,1,((eindhovenPieChart.canvas.width * factor) - eindhovenPieChart.canvas.width) * -0.5,0);
	RGraph.Effects.Pie.Implode(eindhovenPieChart);
}

function createEnschedePieChart() {
	var enschedePieChart = new RGraph.Pie('myCanvas', [7621012.42400000, 795040.86100000]);
	enschedePieChart.Set('chart.strokestyle', '#000000');
	enschedePieChart.Set('chart.colors', ['#0D00FF', '#FCFF00']);
	enschedePieChart.Set('chart.linewidth', 1);
	enschedePieChart.Set('chart.radius', 18);
	// Positioning of this chart
	enschedePieChart.Set('chart.centerx', 398);
	enschedePieChart.Set('chart.centery', 285);
	enschedePieChart.Set('chart.events.click', showEnschedeContents);

	var factor = 1.5;
	enschedePieChart.context.setTransform(factor,0,0,1,((enschedePieChart.canvas.width * factor) - enschedePieChart.canvas.width) * -0.5,0);
	RGraph.Effects.Pie.Implode(enschedePieChart);
}

function createLeeuwardenPieChart() {
	var leeuwardenPieChart = new RGraph.Pie('myCanvas', [8026092.88433333, 1241594.47066667]);
	leeuwardenPieChart.Set('chart.strokestyle', '#000000');
	leeuwardenPieChart.Set('chart.colors', ['#0D00FF', '#FCFF00']);
	leeuwardenPieChart.Set('chart.linewidth', 1);
	leeuwardenPieChart.Set('chart.radius', 18);
	// Positioning of this chart
	leeuwardenPieChart.Set('chart.centerx', 332);
	leeuwardenPieChart.Set('chart.centery', 146);
	leeuwardenPieChart.Set('chart.events.click', showLeeuwardenContents);

	var factor = 1.5;
	leeuwardenPieChart.context.setTransform(factor,0,0,1,((leeuwardenPieChart.canvas.width * factor) - leeuwardenPieChart.canvas.width) * -0.5,0);
	RGraph.Effects.Pie.Implode(leeuwardenPieChart);
}

function createMaastrichtPieChart() {
	var maastrichtPieChart = new RGraph.Pie('myCanvas', [35034779.84500000, 854304.27000000]);
	maastrichtPieChart.Set('chart.strokestyle', '#000000');
	maastrichtPieChart.Set('chart.colors', ['#0D00FF', '#FCFF00']);
	maastrichtPieChart.Set('chart.linewidth', 1);
	maastrichtPieChart.Set('chart.radius', 18);
	// Positioning of this chart
	maastrichtPieChart.Set('chart.centerx', 325);
	maastrichtPieChart.Set('chart.centery', 488);
	maastrichtPieChart.Set('chart.events.click', showMaastrichtContents);

	var factor = 1.5;
	maastrichtPieChart.context.setTransform(factor,0,0,1,((maastrichtPieChart.canvas.width * factor) - maastrichtPieChart.canvas.width) * -0.5,0);
	RGraph.Effects.Pie.Implode(maastrichtPieChart);
}

function createEnergieStaafDiagram() {
	var energieStaafDiagram = new RGraph.Bar('staafgrafiekenergie', [30.797208192535, 10.357878493899, 83.421320275837, 48.009099249721, 83.548564871007, 287.003300087654]);
	energieStaafDiagram.Set('chart.labels', ['Almere', 'Den Haag', 'Eindhoven', 'Enschede', 'Leeuwarden', 'Maastricht']);
	energieStaafDiagram.Set('chart.gutter.left', 35);
	energieStaafDiagram.Set('chart.background.barcolor1', 'white');
	energieStaafDiagram.Set('chart.background.barcolor2', 'white');
	energieStaafDiagram.Set('chart.background.grid', true);
	energieStaafDiagram.Set('chart.colors', ['blue']);
	energieStaafDiagram.Set('chart.variant', '3d');
	energieStaafDiagram.Set('chart.title', 'Verbruik per inwoner - Energie');
	energieStaafDiagram.Set('chart.title.y', 40);
	energieStaafDiagram.Set('chart.title.x', 200);

	RGraph.Effects.jQuery.Expand(energieStaafDiagram, {bounce: true});
}

function createGasStaafDiagram() {
	var gasStaafDiagram = new RGraph.Bar('staafgrafiekgas', [3.500416985012, 2.548675617737, 7.997981400903, 5.008415349532, 12.924524755808, 6.998421164732]);
	gasStaafDiagram.Set('chart.labels', ['Almere', 'Den Haag', 'Eindhoven', 'Enschede', 'Leeuwarden', 'Maastricht']);
	gasStaafDiagram.Set('chart.gutter.left', 35);
	gasStaafDiagram.Set('chart.background.barcolor1', 'white');
	gasStaafDiagram.Set('chart.background.barcolor2', 'white');
	gasStaafDiagram.Set('chart.background.grid', true);
	gasStaafDiagram.Set('chart.colors', ['yellow']);
	gasStaafDiagram.Set('chart.variant', '3d');
	gasStaafDiagram.Set('chart.title', 'Verbruik per inwoner - Gas');
	gasStaafDiagram.Set('chart.title.y', 40);
	gasStaafDiagram.Set('chart.title.x', 200);
	
	RGraph.Effects.jQuery.Expand(gasStaafDiagram, {bounce: true});
}

function showAlmereContents() {
	$("#title").hide().html('<h1>Almere</h1>').show("slow");
	$("#sidebar-content").load('getResult.php?location=Almere');
}
function showDenHaagContents() {
	$("#title").hide().html('<h1>Den Haag</h1>').show("slow");
	$("#sidebar-content").load('getResult.php?location=Den%20Haag');
}

function showEindhovenContents() {
	$("#title").hide().html('<h1>Eindhoven</h1>').show("slow");
	$("#sidebar-content").load('getResult.php?location=Eindhoven');
}

function showEnschedeContents() {
	$("#title").hide().html('<h1>Enschede</h1>').show("slow");
	$("#sidebar-content").load('getResult.php?location=Enschede');
}

function showLeeuwardenContents() {
	$("#title").hide().html('<h1>Leeuwarden</h1>').show("slow");
	$("#sidebar-content").load('getResult.php?location=Leeuwarden');
}

function showMaastrichtContents() {
	$("#title").hide().html('<h1>Maastricht</h1>').show("slow");
	$("#sidebar-content").load('getResult.php?location=Maastricht');
}