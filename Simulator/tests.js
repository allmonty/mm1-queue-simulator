var resetCalculations = function() {
	metricsSum = {T : 0.0, T1: 0.0, T2: 0.0, W: 0.0, W1: 0.0, W2: 0.0, Xr: 0.0, Xr1: 0.0, Xr2: 0.0, X: 0.0, X1: 0.0, X2: 0.0, U: 0.0, B: 0.0, N: 0.0, Nq1: 0.0, Nq2: 0.0, RHO: 0.0 };
	metricsMax = {T : 0.0, T1: 0.0, T2: 0.0, W: 0.0, W1: 0.0, W2: 0.0, Xr: 0.0, Xr1: 0.0, Xr2: 0.0, X: 0.0, X1: 0.0, X2: 0.0, U: 0.0, B: 0.0, N: 0.0, Nq1: 0.0, Nq2: 0.0, RHO: 0.0 };
	metricsMin = {T : Infinity, T1: Infinity, T2: Infinity, W: Infinity, W1: Infinity, W2: Infinity, Xr: Infinity, Xr1: Infinity, Xr2: Infinity, X: Infinity, X1: Infinity, X2: Infinity, U: Infinity, B: Infinity, N: Infinity, Nq1: Infinity, Nq2: Infinity, RHO: Infinity };
	metricsAvg = {T : 0.0, T1: 0.0, T2: 0.0, W: 0.0, W1: 0.0, W2: 0.0, Xr: 0.0, Xr1: 0.0, Xr2: 0.0, X: 0.0, X1: 0.0, X2: 0.0, U: 0.0, B: 0.0, N: 0.0, Nq1: 0.0, Nq2: 0.0, RHO: 0.0 };
	metricsStandardDeviation = {T : 0.0, T1: 0.0, T2: 0.0, W: 0.0, W1: 0.0, W2: 0.0, Xr: 0.0, Xr1: 0.0, Xr2: 0.0, X: 0.0, X1: 0.0, X2: 0.0, U: 0.0, B: 0.0, N: 0.0, Nq1: 0.0, Nq2: 0.0, RHO: 0.0 };
	metricsArray = {T   : [], T1  : [], T2  : [], W   : [], W1  : [], W2  : [], Xr  : [], Xr1 : [], Xr2 : [], X   : [], X1  : [], X2  : [], U   : [], B   : [], N   : [], Nq1 : [], Nq2 : [], RHO : [] };
}

var metricsSum = {};
var metricsMax = {};
var metricsMin = {};
var metricsAvg = {};
var metricsStandardDeviation = {};
var metricsArray = {};

resetCalculations();

var computeTotalMetrics = function() {
	metricsSum.T += metrics.T;
	metricsMax.T = Math.max(metricsMax.T, metrics.T);
	metricsMin.T = Math.min(metricsMin.T, metrics.T);
	metricsArray.T.push(metrics.T);

	metricsSum.T1 += metrics.T1;
	metricsMax.T1 = Math.max(metricsMax.T1, metrics.T1);
	metricsMin.T1 = Math.min(metricsMin.T1, metrics.T1);
	metricsArray.T1.push(metrics.T1);

	metricsSum.T2 += metrics.T2;
	metricsMax.T2 = Math.max(metricsMax.T2, metrics.T2);
	metricsMin.T2 = Math.min(metricsMin.T2, metrics.T2);
	metricsArray.T2.push(metrics.T2);

	metricsSum.W += metrics.W;
	metricsMax.W = Math.max(metricsMax.W, metrics.W);
	metricsMin.W = Math.min(metricsMin.W, metrics.W);
	metricsArray.W.push(metrics.W);

	metricsSum.W1 += metrics.W1;
	metricsMax.W1 = Math.max(metricsMax.W1, metrics.W1);
	metricsMin.W1 = Math.min(metricsMin.W1, metrics.W1);
	metricsArray.W1.push(metrics.W1);

	metricsSum.W2 += metrics.W2;
	metricsMax.W2 = Math.max(metricsMax.W2, metrics.W2);
	metricsMin.W2 = Math.min(metricsMin.W2, metrics.W2);
	metricsArray.W2.push(metrics.W2);

	metricsSum.Xr += metrics.Xr;
	metricsMax.Xr = Math.max(metricsMax.Xr, metrics.Xr);
	metricsMin.Xr = Math.min(metricsMin.Xr, metrics.Xr);
	metricsArray.Xr.push(metrics.Xr);

	metricsSum.Xr1 += metrics.Xr1;
	metricsMax.Xr1 = Math.max(metricsMax.Xr1, metrics.Xr1);
	metricsMin.Xr1 = Math.min(metricsMin.Xr1, metrics.Xr1);
	metricsArray.Xr1.push(metrics.Xr1);

	metricsSum.Xr2 += metrics.Xr2;
	metricsMax.Xr2 = Math.max(metricsMax.Xr2, metrics.Xr2);
	metricsMin.Xr2 = Math.min(metricsMin.Xr2, metrics.Xr2);
	metricsArray.Xr2.push(metrics.Xr2);

	metricsSum.X += metrics.X;
	metricsMax.X = Math.max(metricsMax.X, metrics.X);
	metricsMin.X = Math.min(metricsMin.X, metrics.X);
	metricsArray.X.push(metrics.X);

	metricsSum.X1 += metrics.X1;
	metricsMax.X1 = Math.max(metricsMax.X1, metrics.X1);
	metricsMin.X1 = Math.min(metricsMin.X1, metrics.X1);
	metricsArray.X1.push(metrics.X1);

	metricsSum.X2 += metrics.X2;
	metricsMax.X2 = Math.max(metricsMax.X2, metrics.X2);
	metricsMin.X2 = Math.min(metricsMin.X2, metrics.X2);
	metricsArray.X2.push(metrics.X2);

	metricsSum.B += metrics.B;
	metricsMax.B = Math.max(metricsMax.B, metrics.B);
	metricsMin.B = Math.min(metricsMin.B, metrics.B);
	metricsArray.B.push(metrics.B);

	metricsSum.U += metrics.U;
	metricsMax.U = Math.max(metricsMax.U, metrics.U);
	metricsMin.U = Math.min(metricsMin.U, metrics.U);
	metricsArray.U.push(metrics.U);

	metricsSum.N += metrics.N;
	metricsMax.N = Math.max(metricsMax.N, metrics.N);
	metricsMin.N = Math.min(metricsMin.N, metrics.N);
	metricsArray.N.push(metrics.N);

	metricsSum.Nq1 += metrics.Nq1;
	metricsMax.Nq1 = Math.max(metricsMax.Nq1, metrics.Nq1);
	metricsMin.Nq1 = Math.min(metricsMin.Nq1, metrics.Nq1);
	metricsArray.Nq1.push(metrics.Nq1);

	metricsSum.Nq2 += metrics.Nq2;
	metricsMax.Nq2 = Math.max(metricsMax.Nq2, metrics.Nq2);
	metricsMin.Nq2 = Math.min(metricsMin.Nq2, metrics.Nq2);
	metricsArray.Nq2.push(metrics.Nq2);

	metricsSum.RHO += metrics.RHO;
	metricsMax.RHO = Math.max(metricsMax.RHO, metrics.RHO);
	metricsMin.RHO = Math.min(metricsMin.RHO, metrics.RHO);
	metricsArray.RHO.push(metrics.RHO);
}

var getAverages = function(total) {
	metricsAvg.T = metricsSum.T / total;
	metricsAvg.T1 = metricsSum.T1 / total;
	metricsAvg.T2 = metricsSum.T2 / total;
	metricsAvg.W = metricsSum.W / total;
	metricsAvg.W1 = metricsSum.W1 / total;
	metricsAvg.W2 = metricsSum.W2 / total;
	metricsAvg.Xr = metricsSum.Xr / total;
	metricsAvg.Xr1 = metricsSum.Xr1 / total;
	metricsAvg.Xr2 = metricsSum.Xr2 / total;
	metricsAvg.X = metricsSum.X / total;
	metricsAvg.X1 = metricsSum.X1 / total;
	metricsAvg.X2 = metricsSum.X2 / total;
	metricsAvg.B = metricsSum.B / total;
	metricsAvg.U = metricsSum.U / total;
	metricsAvg.N = metricsSum.N / total;
	metricsAvg.Nq1 = metricsSum.Nq1 / total;
	metricsAvg.Nq2 = metricsSum.Nq2 / total;
	metricsAvg.RHO = metricsSum.RHO / total;
}

var computeStandardDeviation = function(total) {

	metricsStandardDeviation.T = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.T += Math.pow( (metricsArray.T[i] - metricsAvg.T), 2 );
	}
	metricsStandardDeviation.T = Math.sqrt( metricsStandardDeviation.T / (total-1) );
	metricsStandardDeviation.T = 1.96 * (metricsStandardDeviation.T / 10);

	metricsStandardDeviation.T1 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.T1 += Math.pow( (metricsArray.T1[i] - metricsAvg.T1), 2 );
	}
	metricsStandardDeviation.T1 = Math.sqrt( metricsStandardDeviation.T1 / (total-1) );
	metricsStandardDeviation.T1 = 1.96 * (metricsStandardDeviation.T1 / 10);

	metricsStandardDeviation.T2 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.T2 += Math.pow( (metricsArray.T2[i] - metricsAvg.T2), 2 );
	}
	metricsStandardDeviation.T2 = Math.sqrt( metricsStandardDeviation.T2 / (total-1) );
	metricsStandardDeviation.T2 = 1.96 * (metricsStandardDeviation.T2 / 10);

	metricsStandardDeviation.W = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.W += Math.pow( (metricsArray.W[i] - metricsAvg.W), 2 );
	}
	metricsStandardDeviation.W = Math.sqrt( metricsStandardDeviation.W / (total-1) );
	metricsStandardDeviation.W = 1.96 * (metricsStandardDeviation.W / 10);

	metricsStandardDeviation.W1 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.W1 += Math.pow( (metricsArray.W1[i] - metricsAvg.W1), 2 );
	}
	metricsStandardDeviation.W1 = Math.sqrt( metricsStandardDeviation.W1 / (total-1) );
	metricsStandardDeviation.W1 = 1.96 * (metricsStandardDeviation.W1 / 10);

	metricsStandardDeviation.W2 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.W2 += Math.pow( (metricsArray.W2[i] - metricsAvg.W2), 2 );
	}
	metricsStandardDeviation.W2 = Math.sqrt( metricsStandardDeviation.W2 / (total-1) );
	metricsStandardDeviation.W2 = 1.96 * (metricsStandardDeviation.W2 / 10);

	metricsStandardDeviation.Xr = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.Xr += Math.pow( (metricsArray.Xr[i] - metricsAvg.Xr), 2 );
	}
	metricsStandardDeviation.Xr = Math.sqrt( metricsStandardDeviation.Xr / (total-1) );
	metricsStandardDeviation.Xr = 1.96 * (metricsStandardDeviation.Xr / 10);

	metricsStandardDeviation.Xr1 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.Xr1 += Math.pow( (metricsArray.Xr1[i] - metricsAvg.Xr1), 2 );
	}
	metricsStandardDeviation.Xr1 = Math.sqrt( metricsStandardDeviation.Xr1 / (total-1) );
	metricsStandardDeviation.Xr1 = 1.96 * (metricsStandardDeviation.Xr1 / 10);

	metricsStandardDeviation.Xr2 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.Xr2 += Math.pow( (metricsArray.Xr2[i] - metricsAvg.Xr2), 2 );
	}
	metricsStandardDeviation.Xr2 = Math.sqrt( metricsStandardDeviation.Xr2 / (total-1) );
	metricsStandardDeviation.Xr2 = 1.96 * (metricsStandardDeviation.Xr2 / 10);

	metricsStandardDeviation.X = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.X += Math.pow( (metricsArray.X[i] - metricsAvg.X), 2 );
	}
	metricsStandardDeviation.X = Math.sqrt( metricsStandardDeviation.X / (total-1) );
	metricsStandardDeviation.X = 1.96 * (metricsStandardDeviation.X / 10);

	metricsStandardDeviation.X1 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.X1 += Math.pow( (metricsArray.X1[i] - metricsAvg.X1), 2 );
	}
	metricsStandardDeviation.X1 = Math.sqrt( metricsStandardDeviation.X1 / (total-1) );
	metricsStandardDeviation.X1 = 1.96 * (metricsStandardDeviation.X1 / 10);

	metricsStandardDeviation.X2 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.X2 += Math.pow( (metricsArray.X2[i] - metricsAvg.X2), 2 );
	}
	metricsStandardDeviation.X2 = Math.sqrt( metricsStandardDeviation.X2 / (total-1) );
	metricsStandardDeviation.X2 = 1.96 * (metricsStandardDeviation.X2 / 10);

	metricsStandardDeviation.B = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.B += Math.pow( (metricsArray.B[i] - metricsAvg.B), 2 );
	}
	metricsStandardDeviation.B = Math.sqrt( metricsStandardDeviation.B / (total-1) );
	metricsStandardDeviation.B = 1.96 * (metricsStandardDeviation.B / 10);

	metricsStandardDeviation.U = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.U += Math.pow( (metricsArray.U[i] - metricsAvg.U), 2 );
	}
	metricsStandardDeviation.U = Math.sqrt( metricsStandardDeviation.U / (total-1) );
	metricsStandardDeviation.U = 1.96 * (metricsStandardDeviation.U / 10);

	metricsStandardDeviation.N = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.N += Math.pow( (metricsArray.N[i] - metricsAvg.N), 2 );
	}
	metricsStandardDeviation.N = Math.sqrt( metricsStandardDeviation.N / (total-1) );
	metricsStandardDeviation.N = 1.96 * (metricsStandardDeviation.N / 10);

	metricsStandardDeviation.Nq1 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.Nq1 += Math.pow( (metricsArray.Nq1[i] - metricsAvg.Nq1), 2 );
	}
	metricsStandardDeviation.Nq1 = Math.sqrt( metricsStandardDeviation.Nq1 / (total-1) );
	metricsStandardDeviation.Nq1 = 1.96 * (metricsStandardDeviation.Nq1 / 10);

	metricsStandardDeviation.Nq2 = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.Nq2 += Math.pow( (metricsArray.Nq2[i] - metricsAvg.Nq2), 2 );
	}
	metricsStandardDeviation.Nq2 = Math.sqrt( metricsStandardDeviation.Nq2 / (total-1) );
	metricsStandardDeviation.Nq2 = 1.96 * (metricsStandardDeviation.Nq2 / 10);

	metricsStandardDeviation.RHO = 0;
	for(var i = 0; i < total; i++) {
		metricsStandardDeviation.RHO += Math.pow( (metricsArray.RHO[i] - metricsAvg.RHO), 2 );
	}
	metricsStandardDeviation.RHO = Math.sqrt( metricsStandardDeviation.RHO / (total-1) );
	metricsStandardDeviation.RHO = 1.96 * (metricsStandardDeviation.RHO / 10);


}

var resetStandDeviation = function(){
	metricsArray.T = [];
	metricsStandardDeviation.T = 0;
}