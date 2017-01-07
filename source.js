//Taxas de chegada e serviços dos clientes
var LAMBDA1 = 1/5;
var LAMBDA2 = 1/5;
var MU1 = 1;
var MU2 = 1;


//Variaveis nescessárias para rodar a simulação
var nextClient = 0;
var currentClient = 0;
var arrivalTime = 0;
var serviceTime = 0;
var totalTime = 0;

//Tempo total que da simulação 
const simulationTime = 100000;

const CLIENT_TYPE_0 = 0;	
const CLIENT_TYPE_1 = 1;	

//Arrays que guardam os tempos de chegada e saída dos clientes do sistema
var arrayArrivals=[];
var arrayServices=[];
var arrayArrivalsA=[];
var arrayServicesA=[];
var arrayArrivalsB=[];
var arrayServicesB=[];

//Array que guarda os tempos de serviços residuais do servidor quando um cliente chega no sistema 
var arrayResidualServicesA=[];
var arrayResidualServicesB=[];

//Array das filas (no caso FCFS sem distinção de classe só é utilizada a queueA)
var queueA = [];
var queueB = [];

//Array que armazena os tempos de serviço dos clientes
var ServiceTimesA = [];
var ServiceTimesB = [];

//Array que guarda o inicio e o fim dos períodos ocupados
var startOfBusyPeriod=[];
var endOfBusyPeriod=[];

//Array que guarda quantas pessoas se encontram no sistema a cada chegada
var numberOfClientsInQueue=[];

var nextClientType = function(){

	var rand = Math.random();
	var probabilityOfClient1 = LAMBDA1/(LAMBDA1 + LAMBDA2);

	if (rand < probabilityOfClient1) {
		return CLIENT_TYPE_0;
	}else{
		return CLIENT_TYPE_1;
	}
}

var nextPoisson = function(rate){
	return -Math.log(1.0 - Math.random()) / rate;
}

var nextEvent = function(){

	var nextArrival = arrivalTime;
    var nextService = serviceTime;

    // Arrival
    if(nextArrival == 0){

    	if (nextClientType() == CLIENT_TYPE_0) {
    		nextArrival = nextPoisson(LAMBDA1 + LAMBDA2);
    		nextClient = CLIENT_TYPE_0;
    	}else{
    		nextArrival = nextPoisson(LAMBDA1 + LAMBDA2);
    		nextClient = CLIENT_TYPE_1; 
    	}

    }else{
    	// Exit
    	if (queueA.length != 0) {
			if (queueA[0] == CLIENT_TYPE_0) {
				nextService = nextPoisson(MU1);
				ServiceTimesA.push(nextService);
			}else{
				nextService = nextPoisson(MU2);
				ServiceTimesB.push(nextService);
			}
    	}

    }
    

    if (queueA.length == 0) {

    	if (totalTime != 0) {
    		endOfBusyPeriod.push(totalTime);
    	}
    	startOfBusyPeriod.push(totalTime + nextArrival);
    	numberOfClientsInQueue.push(0);
    	queueA.push(nextClient);

    	if (nextClient == CLIENT_TYPE_0) {
    		arrayArrivalsA.push(totalTime + nextArrival);
    		arrayResidualServicesA.push(0);
    	}else{
			arrayArrivalsB.push(totalTime + nextArrival);
			arrayResidualServicesB.push(0);
    	}

    	//arrayArrivals.push(totalTime + nextArrival);
    	//arrayResidualServicesA.push(0);
    	if (nextClientType() == CLIENT_TYPE_0) {
    		arrivalTime = nextPoisson(LAMBDA1 + LAMBDA2);
    		totalTime += nextArrival;
    		nextClient = CLIENT_TYPE_0;
    	}else{
    		arrivalTime = nextPoisson(LAMBDA1 + LAMBDA2);
    		totalTime += nextArrival;
    		nextClient = CLIENT_TYPE_0; 
    	}

    }else{
    	if (nextArrival < nextService) {

    		numberOfClientsInQueue.push(queueA.length);
    		queueA.push(nextClient);

    		if (nextClient == CLIENT_TYPE_0) {
    			arrayArrivalsA.push(totalTime + nextArrival);
    			arrayResidualServicesA.push(nextService - nextArrival);
    		}else{
				arrayArrivalsB.push(totalTime + nextArrival);
				arrayResidualServicesB.push(nextService - nextArrival);
    		}
    		//arrayArrivals.push(totalTime + nextArrival);
    		//arrayResidualServicesA.push(nextService - nextArrival);
    		arrivalTime = 0;
    		totalTime += nextArrival;
    		serviceTime = nextService - nextArrival;
    	
    	}else{

			if (queueA[0] == CLIENT_TYPE_0){
				arrayServicesA.push(totalTime + nextService);
			}else{
				arrayServicesB.push(totalTime + nextService);
			}

    		queueA.splice(0, 1);
    		//arrayServices.push(totalTime + nextService);
    		serviceTime = 0;
    		arrivalTime = nextArrival - nextService;
    		totalTime += nextService;

    	}

    }

}


//###################################################################
//############################ CENARIO 2 ############################
//###################################################################


var nextEventCenario2 = function(){

	var nextArrival = arrivalTime;
    var nextService = serviceTime;

    // Arrival
    if(nextArrival == 0){

    	if (nextClientType() == CLIENT_TYPE_0) {
    		nextArrival = nextPoisson(LAMBDA1 + LAMBDA2);
    		nextClient = CLIENT_TYPE_0;
    	}else{
    		nextArrival = nextPoisson(LAMBDA1 + LAMBDA2);
    		nextClient = CLIENT_TYPE_1; 
    	}

    }else{
    	// Exit
    	if (queueA.length != 0) {
			nextService = nextPoisson(MU1);
			ServiceTimesA.push(nextService);
			currentClient = CLIENT_TYPE_0;
    	}else{
    		if (queueB.length != 0) {
    			nextService = nextPoisson(MU2);
    			ServiceTimesB.push(nextService);
    			currentClient = CLIENT_TYPE_1;
    		}
    	}

    }
    

    if (queueA.length == 0 && queueB.length == 0) {

    	if (totalTime != 0) {
    		endOfBusyPeriod.push(totalTime);
    	}
    	startOfBusyPeriod.push(totalTime + nextArrival);

    	numberOfClientsInQueue.push(0);
    	if(nextClient == CLIENT_TYPE_0){
	    	queueA.push(nextClient);
	    	arrayArrivalsA.push(totalTime + nextArrival);
	    	arrayResidualServicesA.push(0);
    	}else{
	    	queueB.push(nextClient);
	    	arrayArrivalsB.push(totalTime + nextArrival);
	    	arrayResidualServicesB.push(0);
    	}

    	if (nextClientType() == CLIENT_TYPE_0) {
    		arrivalTime = nextPoisson(LAMBDA1 + LAMBDA2);
    		totalTime += nextArrival;
    		nextClient = CLIENT_TYPE_0;
    	}else{
    		arrivalTime = nextPoisson(LAMBDA1 + LAMBDA2);
    		totalTime += nextArrival;
    		nextClient = CLIENT_TYPE_1; 
    	}

    }else{
    	if (nextArrival < nextService) {

    		numberOfClientsInQueue.push(queueA.length + queueB.length);
			if(nextClient == CLIENT_TYPE_0){
	    		queueA.push(nextClient);
    		    arrayArrivalsA.push(totalTime + nextArrival);
    		    arrayResidualServicesA.push(nextService - nextArrival);
    		}else{
	    		queueB.push(nextClient);
	    		arrayArrivalsB.push(totalTime + nextArrival);
    		    arrayResidualServicesB.push(nextService - nextArrival);
    		}
    		arrivalTime = 0;
    		totalTime += nextArrival;
    		serviceTime = nextService - nextArrival;
    	
    	}else{

    		if (currentClient == CLIENT_TYPE_0) {
				queueA.splice(0, 1);
    			arrayServicesA.push(totalTime + nextService);
    			serviceTime = 0;
    			arrivalTime = nextArrival - nextService;
    			totalTime += nextService;

    		}else{
    			queueB.splice(0, 1);
	    		arrayServicesB.push(totalTime + nextService);
    			serviceTime = 0;
    			arrivalTime = nextArrival - nextService;
    			totalTime += nextService;
    		}
    		
    	}

    }

}

//###################################################################
//######################## FIM DO CENARIO 2 #########################
//###################################################################

var calculateAverages = function(){

	var T = 0;
    var T1 = 0;
    var T2 = 0;

    for(var i = 0; i< arrayServicesA.length ; i++){
     	T1 += (arrayServicesA[i]  - arrayArrivalsA[i]);
    }
    T = T1;
    T1 = T1/arrayServicesA.length;

    //Tempo médio dos clientes tipo 1 no sistema
	console.log("E[T1]");
	console.log(T1);

    for(var i = 0; i< arrayServicesB.length ; i++){
     	T2 += (arrayServicesB[i]  - arrayArrivalsB[i]);
    }
    T += T2;
    T2 = T2/arrayServicesB.length;

    T = T/(arrayServicesA.length + arrayResidualServicesB.length);

    //Tempo médio dos clientes tipo 2 no sistema
	console.log("E[T2]");
	console.log(T2);


	//Tempo médio dos clientes no sistema
	console.log("E[T]");
	console.log(T);


	var W = 0;
	var W1 = 0;
	var W2 = 0;

	for(var i = 0; i< arrayServicesA.length; i++){
     	W1 += (arrayServicesA[i]  - (arrayArrivalsA[i] + ServiceTimesA[i]));
    }
    W = W1;

    for(var i = 0; i< arrayServicesB.length ; i++){
     	W2 += (arrayServicesB[i]  - (arrayArrivalsB[i] + ServiceTimesB[i]));
    }
    W += W2;

    W = W/(arrayServicesA.length + arrayServicesB.length);
    W1 = W1/(arrayServicesA.length);
    W2 = W2/(arrayServicesB.length);

	console.log("E[W1]");
	console.log(W1);

	console.log("E[W2]");
	console.log(W2);

	console.log("E[W]");
	console.log(W);


	var Xr = 0;
	var Xr1 = 0;
	var Xr2 = 0;

	for(var i = 0; i< arrayResidualServicesA.length ; i++){
     	Xr += (arrayResidualServicesA[i]);
    }
    Xr1 = Xr/(arrayResidualServicesA.length);


    for(var i = 0; i< arrayResidualServicesB.length ; i++){
     	Xr += (arrayResidualServicesB[i]);
     	Xr2 += (arrayResidualServicesB[i]);
    }
    Xr2 = Xr2/(arrayResidualServicesB.length);
    Xr = Xr/(arrayResidualServicesA.length + arrayResidualServicesB.length);

	console.log("E[Xr1]");
	console.log(Xr1);

	console.log("E[Xr2]");
	console.log(Xr2);

	console.log("E[Xr]");
	console.log(Xr);


	var X = 0;
	var X1 = 0;
	var X2 = 0;

	for(var i = 0; i< ServiceTimesA.length ; i++){
     	X += ServiceTimesA[i];
    }
    X1 = X/(ServiceTimesA.length);

	for(var i = 0; i< ServiceTimesB.length ; i++){
     	X 	+= ServiceTimesB[i];
     	X2 	+= ServiceTimesB[i];
    }
    X2 = X2/ServiceTimesB.length;

    X = X/(ServiceTimesA.length + ServiceTimesB.length);


	console.log("E[X1]");
	console.log(X1);

	console.log("E[X2]");
	console.log(X2);

	console.log("E[X]");
	console.log(X);


	var U = 0;
    for(var i = 0; i< numberOfClientsInQueue.length ; i++){
     	U += (numberOfClientsInQueue[i] * X);
    }
    U = U/numberOfClientsInQueue.length;

	console.log("E[U]");
	console.log(U);

	var B = 0;

	for(var i = 0; i< endOfBusyPeriod.length ; i++){
     	B += endOfBusyPeriod[i] - startOfBusyPeriod[i];
    }
    B = B/endOfBusyPeriod.length;

	console.log("E[B]");
	console.log(B);


	var N = 0;

	for(var i = 0; i< numberOfClientsInQueue.length ; i++){
     	N += numberOfClientsInQueue[i];
    }
    N = N/numberOfClientsInQueue.length;

	console.log("E[N]");
	console.log(N);

}


var main = function(){

//	while(totalTime < simulationTime){
//		nextEventCenario2();
//	}
//	calculateAveragesCenario2();

	while(totalTime < simulationTime){
		nextEvent();
	}
	calculateAverages();


}
main();