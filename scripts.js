function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};
var xdata = [2, 3, 4, 203, 271,  301, 402, 502, 60201, 603102, 6040502, 606062]
var ydata = [1.07766801873, 1.26187323341, 1.32271113467, 1.52711495493, 1.46623688234, 1.4343222192, 1.49627675892, 1.34948500217, 3.24053856136, 5.00026151486, 3.1580724337, 5.00023965357]
var yregdata = [0.465674061838,0.795169692532,1.12466532323,1.45416095392,1.78365658461, 2.11315221531,2.442647846,2.77214347669, 3.10163910739, 3.43113473808, 3.76063036878, 	4.09012599947]
var trace2 = {
    x: range(1, xdata.length),
    y: yregdata,
    mode: 'lines',
    name: 'Regression Data',
    type: 'scatter',
    textfont: {
        family:  'Oswald, sans-serif'
    }
};

var tr = {
    y : ydata,
    x : range(1,xdata.length),
    mode: 'markers+text',
    type: 'scatter',
    name: 'Version Score',
    text: xdata,
    textposition: 'bottom center',
    textfont: {
        family:  'Oswald, sans-serif'
    },
    marker: { size: 8 }
};

var layout = {
    title : "Pinterest",
    xaxis: {
        autorange: true,
        showgrid: true,
        zeroline: false,
        showline: true,
        autotick: false,
        ticks: "",
        showticklabels: true
    },
    yaxis: {
        autorange: true,
        showgrid: true,
        zeroline: false,
        showline: true,
        autotick: true,
        ticks: "",
        showticklabels: true
    },
    textfont: {
        family:  'Oswald, sans-serif'
    }

};


var config = {
    modeBarButtonsToRemove: ['toImage', 'sendDataToCloud', 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'autoScale2d', 'resetScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian'],
    displaylogo: false,
    showTips: false
};
var data = [tr, trace2];

Plotly.newPlot('myDiv', data, layout, config)
//Plotly.newPlot('myDiv', tr, layout);