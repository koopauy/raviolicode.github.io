var w = 400,
    h = 400;

//Data
var d = [
    [{
        axis: "Front End",
        value: 0.75
    }, {
        axis: "Agile Coaching",
        value: 0.50
    }, {
        axis: "Back End",
        value: 0.97

    }, {
        axis: "Dev Ops",
        value: 0.40
    }, {
        axis: "Software Engineering",
        value: 0.80
    }, {
        axis: "Performance / Optimization",
        value: 0.65
    }]
];

//Options for the Radar chart, other than default
var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 300,
    color: d3.scale.ordinal().range(["#de5b28"])
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#skills-graph", d, mycfg);

