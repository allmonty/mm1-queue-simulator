

var LAMBDA1 = 1/5;
var LAMBDA2 = 1/5;
var MU1 = 1;
var MU2 = 1;

var arrivalTime = 0;
var serviceTime = 0;
var totalTime = 0;

const simulationTime = 10000;

var arrayArrivals=[];
var arrayServices=[];

var queueA = [];
var queueB = [];

var nextClientType = function(rate1, rate2){

	var rand = Math.random();
	var probabilityOfClient1 = rate1/(rate1 + rate2);

	if (rand < probabilityOfClient1) {
		return 0;

	}else{
		return 1;
	}
}

var nextPoisson = function(rate){
	return -Math.log(1.0 - Math.random()) / rate;
}

var nextEvent = function(){

	var nextArrival = arrivalTime;
    var nextService = serviceTime;
    var typeClient = 0;

    // Arrival
    if(nextArrival == 0){

    	if (nextClientType() == 0) {
    		nextArrival = nextPoisson(LAMBDA1 + LAMBDA2);
    		typeClient = 0;
    	}else{
    		nextArrival = nextPoisson(LAMBDA1 + LAMBDA2);
    		typeClient = 1; 
    	}

    }else{
    	// Exit
    	if (queueA.length != 0) {
			if (queueA[0] == 0) {
				nextService = nextPoisson(MU1);
			}else{
				nextService = nextPoisson(MU2);
			}
    	}

    }
    

    if (queueA.length == 0) {

    	queueA.push(typeClient);
    	arrayArrivals.push(totalTime + nextArrival);
    	if (nextClientType() == 0) {
    		arrivalTime = nextPoisson(LAMBDA1 + LAMBDA2);
    		totalTime += nextArrival;
    		typeClient = 0;
    	}else{
    		arrivalTime = nextPoisson(LAMBDA1 + LAMBDA2);
    		totalTime += nextArrival;
    		typeClient = 1; 
    	}

    }else{
    	if (nextArrival < nextService) {

    		queueA.push(typeClient);
    		arrayArrivals.push(totalTime + nextArrival);
    		arrivalTime = 0;
    		totalTime += nextArrival;
    		serviceTime = nextService - nextArrival;
    	
    	}else{

    		queueA.splice(0, 1);
    		arrayServices.push(totalTime + nextService);
    		serviceTime = 0;
    		arrivalTime = nextArrival - nextService;
    		totalTime += nextService;

    	}

    }

}

var calculateAverages = function(){


    var X = 0;

    for(var i = 0; i< arrayServices.length ; i++){
     	X += (arrayServices[i]  - arrayArrivals[i]);
    }
    X = X/arrayServices.length;


	console.log(X);
}

var main = function(){

	while(totalTime < simulationTime){
		nextEvent();
	}
	calculateAverages();
}
main();