var queue = new QueueSimulator();

var init = function()
{
	//Start the policy selection menu with JQuery
	$(document).ready(function() {
    	$('select').material_select();
		$('.collapsible').collapsible();
  	});
}
init();

var startWithPolicy = function(value)
{
	switch(value){
		case '1':
			startScenario1();
			break;
		case '2':
			startScenario2();
		default:
			break;
	}
}

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
startButton.onclick = function() {
	
	LAMBDA1 = eval($('#lambda-1').val());
	LAMBDA2 = eval($('#lambda-2').val());
	MU1 	= eval($('#mu-1').val());
	MU2 	= eval($('#mu-2').val());

	startWithPolicy( $('#policy-select').val() );

	updateMetricsView();
}








