//var queue = new QueueSimulator();

var init = function()
{
	//Start the policy selection menu with JQuery
	$(document).ready(function() {
		// $("#loading-bar").hide();
		loadingBar.style.display = 'none';

    	$('select').material_select();
		$('.collapsible').collapsible();
  	});
}
init();


var updateMetricsView = function(){
	$('#avg-system-time'	).html(	(metrics.T   || 0).toFixed(3) );
	$('#avg-system-time-1'	).html(	(metrics.T1  || 0).toFixed(3) );
	$('#avg-system-time-2'	).html(	(metrics.T2  || 0).toFixed(3) );
	$('#avg-wait-time'		).html(	(metrics.W   || 0).toFixed(3) );
	$('#avg-wait-time-1'	).html(	(metrics.W1  || 0).toFixed(3) );
	$('#avg-wait-time-2'	).html(	(metrics.W2  || 0).toFixed(3) );
	$('#avg-residual-time'	).html(	(metrics.Xr  || 0).toFixed(3) );
	$('#avg-residual-time-1').html(	(metrics.Xr1 || 0).toFixed(3) );
	$('#avg-residual-time-2').html(	(metrics.Xr2 || 0).toFixed(3) );
	$('#avg-service'		).html(	(metrics.X   || 0).toFixed(3) );
	$('#avg-service-1'		).html(	(metrics.X1  || 0).toFixed(3) );
	$('#avg-service-2'		).html(	(metrics.X2  || 0).toFixed(3) );
	$('#avg-pending-service').html(	(metrics.U   || 0).toFixed(3) );
	$('#avg-busy-time'		).html(	(metrics.B   || 0).toFixed(3) );
	$('#avg-clients-queue'	).html(	(metrics.N   || 0).toFixed(3) );
}

const startButton = document.querySelector('#start-button');
var startWithPolicy = function(value)
{
	switch(value){
		case 1:
			startScenario1();
			break;
		case 2:
			startScenario2();
		default:
			break;
	}
}
startButton.onclick = function() {
	resetChart();
	resetSimulator();

	simulationTime 	= eval($('#total-time').val());
	LAMBDA1 		= eval($('#lambda-1').val());
	LAMBDA2 		= eval($('#lambda-2').val());
	MU1 			= eval($('#mu-1').val());
	MU2 			= eval($('#mu-2').val());

	animSpeed = eval($('#sim-speed').val());
	simAnimation = $('#sim-animation').prop('checked');
	chartLimit = $('#chart-limit').prop('checked');
	useChart = $('#use-chart').prop('checked');
	policy = eval($('#policy-select').val());

	for(var i = 0; i < 100; i++)
	{
		startWithPolicy( policy );
		computeTotalMetrics();
		resetSimulator();
		// console.log("SOMATORIO: " , metricsSum);
	}

	getAverages(100);

	console.log("AVG:", metricsAvg);
	console.log("MIN:", metricsMin);
	console.log("MAX:", metricsMax);

	updateMetricsView();
}








