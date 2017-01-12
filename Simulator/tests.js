var metricsSum = {
	T : 0.0,
	T1: 0.0,
	T2: 0.0,
	W: 0.0,
	W1: 0.0,
	W2: 0.0,
	Xr: 0.0,
	Xr1: 0.0,
	Xr2: 0.0,
	X: 0.0,
	X1: 0.0,
	X2: 0.0,
	U: 0.0,
	B: 0.0,
	N: 0.0,
	Nq1: 0.0,
	Nq2: 0.0,
    RHO: 0.0
};

var metricsMax = {
	T : 0.0,
	T1: 0.0,
	T2: 0.0,
	W: 0.0,
	W1: 0.0,
	W2: 0.0,
	Xr: 0.0,
	Xr1: 0.0,
	Xr2: 0.0,
	X: 0.0,
	X1: 0.0,
	X2: 0.0,
	U: 0.0,
	B: 0.0,
	N: 0.0,
	Nq1: 0.0,
	Nq2: 0.0,
    RHO: 0.0
};

var metricsMin = {
	T : Infinity,
	T1: Infinity,
	T2: Infinity,
	W: Infinity,
	W1: Infinity,
	W2: Infinity,
	Xr: Infinity,
	Xr1: Infinity,
	Xr2: Infinity,
	X: Infinity,
	X1: Infinity,
	X2: Infinity,
	U: Infinity,
	B: Infinity,
	N: Infinity,
	Nq1: Infinity,
	Nq2: Infinity,
    RHO: Infinity
}

var metricsAvg = {
	T : 0.0,
	T1: 0.0,
	T2: 0.0,
	W: 0.0,
	W1: 0.0,
	W2: 0.0,
	Xr: 0.0,
	Xr1: 0.0,
	Xr2: 0.0,
	X: 0.0,
	X1: 0.0,
	X2: 0.0,
	U: 0.0,
	B: 0.0,
	N: 0.0,
	Nq1: 0.0,
	Nq2: 0.0,
    RHO: 0.0
}

var computeTotalMetrics = function() {
	metricsSum.T += metrics.T;
	metricsMax.T = Math.max(metricsMax.T, metrics.T);
	metricsMin.T = Math.min(metricsMin.T, metrics.T);

	metricsSum.T1 += metrics.T1;
	metricsMax.T1 = Math.max(metricsMax.T1, metrics.T1);
	metricsMin.T1 = Math.min(metricsMin.T1, metrics.T1);

	metricsSum.T2 += metrics.T2;
	metricsMax.T2 = Math.max(metricsMax.T2, metrics.T2);
	metricsMin.T2 = Math.min(metricsMin.T2, metrics.T2);

	metricsSum.W += metrics.W;
	metricsMax.W = Math.max(metricsMax.W, metrics.W);
	metricsMin.W = Math.min(metricsMin.W, metrics.W);

	metricsSum.W1 += metrics.W1;
	metricsMax.W1 = Math.max(metricsMax.W1, metrics.W1);
	metricsMin.W1 = Math.min(metricsMin.W1, metrics.W1);

	metricsSum.W2 += metrics.W2;
	metricsMax.W2 = Math.max(metricsMax.W2, metrics.W2);
	metricsMin.W2 = Math.min(metricsMin.W2, metrics.W2);

	metricsSum.Xr += metrics.Xr;
	metricsMax.Xr = Math.max(metricsMax.Xr, metrics.Xr);
	metricsMin.Xr = Math.min(metricsMin.Xr, metrics.Xr);

	metricsSum.Xr1 += metrics.Xr1;
	metricsMax.Xr1 = Math.max(metricsMax.Xr1, metrics.Xr1);
	metricsMin.Xr1 = Math.min(metricsMin.Xr1, metrics.Xr1);

	metricsSum.Xr2 += metrics.Xr2;
	metricsMax.Xr2 = Math.max(metricsMax.Xr2, metrics.Xr2);
	metricsMin.Xr2 = Math.min(metricsMin.Xr2, metrics.Xr2);

	metricsSum.X += metrics.X;
	metricsMax.X = Math.max(metricsMax.X, metrics.X);
	metricsMin.X = Math.min(metricsMin.X, metrics.X);

	metricsSum.X1 += metrics.X1;
	metricsMax.X1 = Math.max(metricsMax.X1, metrics.X1);
	metricsMin.X1 = Math.min(metricsMin.X1, metrics.X1);

	metricsSum.X2 += metrics.X2;
	metricsMax.X2 = Math.max(metricsMax.X2, metrics.X2);
	metricsMin.X2 = Math.min(metricsMin.X2, metrics.X2);

	metricsSum.B += metrics.B;
	metricsMax.B = Math.max(metricsMax.B, metrics.B);
	metricsMin.B = Math.min(metricsMin.B, metrics.B);

	metricsSum.U += metrics.U;
	metricsMax.U = Math.max(metricsMax.U, metrics.U);
	metricsMin.U = Math.min(metricsMin.U, metrics.U);

	metricsSum.N += metrics.N;
	metricsMax.N = Math.max(metricsMax.N, metrics.N);
	metricsMin.N = Math.min(metricsMin.N, metrics.N);

	metricsSum.Nq1 += metrics.Nq1;
	metricsMax.Nq1 = Math.max(metricsMax.Nq1, metrics.Nq1);
	metricsMin.Nq1 = Math.min(metricsMin.Nq1, metrics.Nq1);

	metricsSum.Nq2 += metrics.Nq2;
	metricsMax.Nq2 = Math.max(metricsMax.Nq2, metrics.Nq2);
	metricsMin.Nq2 = Math.min(metricsMin.Nq2, metrics.Nq2);

	metricsSum.RHO += metrics.RHO;
	metricsMax.RHO = Math.max(metricsMax.RHO, metrics.RHO);
	metricsMin.RHO = Math.min(metricsMin.RHO, metrics.RHO);
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




















