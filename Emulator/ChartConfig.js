const ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'E[T]',
            data: [],
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            pointRadius: 0
        }, 
        {
            label: 'E[W]',
            data: [],
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1,
            pointRadius: 0
        },
        {
            label: 'E[U]',
            data: [],
            backgroundColor: 'rgba(255, 0, 255, 0.2)',
            borderColor: 'rgba(255, 0, 255, 1)',
            borderWidth: 1,
            pointRadius: 0
        },
        {
            label: 'E[N]',
            data: [],
            backgroundColor: 'rgba(200, 200, 50, 0.2)', 
            borderColor: 'rgba(200, 200, 50, 1)',
            borderWidth: 1,
            pointRadius: 0
        }, 
        {
            label: 'E[B]',
            data: [],
            backgroundColor: 'rgba(24, 24, 124, 0.2)', 
            borderColor: 'rgba(24, 24, 124, 1)',
            borderWidth: 1,
            pointRadius: 0
        }]
    },
    options: {
        width: 100,
        height: 100,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    beginAtZero:true
                }
            }], 
            xAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var updateChart = function(datasetIndex, newData) {
    const dataLength = chart.config.data.datasets[datasetIndex].data.length;

    if(newData != "NaN"  ) {
        chart.config.data.datasets[datasetIndex].data.push(newData);
    }
    else {
        chart.config.data.datasets[datasetIndex].data.push(0);  
    }

    // if(chart.config.data.datasets[datasetIndex].length > 200){
    //     chart.config.data.datasets[datasetIndex].splice(0, 1);
    // }
}

var updateChartView = function(){
    chart.update();
}

var insertInChart = function(){

    updateChart(0, metrics.T);
    updateChart(1, metrics.W);
    updateChart(2, metrics.U);
    updateChart(3, metrics.N);
    updateChart(4, metrics.B);
    
    chart.data.labels.push("");
    // if(chart.data.labels.length > 200) {
    //     chart.data.labels.splice(0, 1);
    // }
}

var resetChart = function() {
    chart.data.labels = [];

    for(var datasetIdx in chart.config.data.datasets) {
        chart.config.data.datasets[datasetIdx].data = [];
    }

    chart.update();
}






















