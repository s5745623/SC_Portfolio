window.onload = function () {

var chart = new CanvasJS.Chart("line_chart", {
  animationEnabled: true,
  backgroundColor: "rgba(255,255,255,0)",
   title: {
    text: "Changing dynamic of chatter",
    fontFamily: "tahoma",
    fontSize: 18,
  },
  axisX: {
    valueFormatString: "YY-MM" ,
    labelFontSize: 10,
    minimum: new Date(2014,9),
    maximum: new Date(2017,4),
  },
  axisY: {
    valueFormatString: "#%",
    gridThickness: 0.1,
    labelFontSize: 10,
    tickLength: 10
  },
  legend: {
    verticalAlign: "top",
    horizontalAlign: "right",
    // dockInsidePlotArea: true
  },
  toolTip: {
    shared: true,
    fontFamily: "tahoma",
    fontSize: 11,
  },
  data: [{
    name: "allEng",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(230, 25, 75,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.63 },
{ x: new Date(2014, 10), y: -0.92 },
{ x: new Date(2014, 11), y: 2.46 },
{ x: new Date(2014, 12), y: -0.2 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: 0.72 },
{ x: new Date(2015, 04), y: 0.28 },
{ x: new Date(2015, 05), y: 0.01 },
{ x: new Date(2015, 06), y: 0.13 },
{ x: new Date(2015, 07), y: -0.19 },
{ x: new Date(2015, 08), y: -0.04 },
{ x: new Date(2015, 09), y: 0.43 },
{ x: new Date(2015, 10), y: 2.77 },
{ x: new Date(2015, 11), y: -0.37 },
{ x: new Date(2015, 12), y: -0.46 },
{ x: new Date(2016, 01), y: -0.65 },
{ x: new Date(2016, 02), y: 1.67 },
{ x: new Date(2016, 03), y: -0.29 },
{ x: new Date(2016, 04), y: 0.03 },
{ x: new Date(2016, 05), y: 0.28 },
{ x: new Date(2016, 06), y: 0.1 },
{ x: new Date(2016, 07), y: -0.06 },
{ x: new Date(2016, 08), y: -0.25 },
{ x: new Date(2016, 09), y: 0.34 },
{ x: new Date(2016, 10), y: -0.28 },
{ x: new Date(2016, 11), y: 0.1 },
{ x: new Date(2016, 12), y: 0.1 },
{ x: new Date(2017, 01), y: -0.11 },
{ x: new Date(2017, 02), y: -0.03 },
{ x: new Date(2017, 03), y: 0.14 },
{ x: new Date(2017, 04), y: -0.77 },

    ]
  },
  {
    name: "posEng",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(60, 180, 75,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.74 },
{ x: new Date(2014, 10), y: -0.92 },
{ x: new Date(2014, 11), y: 1.89 },
{ x: new Date(2014, 12), y: -0.23 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: 0.62 },
{ x: new Date(2015, 04), y: 0.34 },
{ x: new Date(2015, 05), y: 0.04 },
{ x: new Date(2015, 06), y: 0.1 },
{ x: new Date(2015, 07), y: -0.13 },
{ x: new Date(2015, 08), y: -0.07 },
{ x: new Date(2015, 09), y: 0.19 },
{ x: new Date(2015, 10), y: 3.02 },
{ x: new Date(2015, 11), y: -0.34 },
{ x: new Date(2015, 12), y: -0.52 },
{ x: new Date(2016, 01), y: -0.65 },
{ x: new Date(2016, 02), y: 1.76 },
{ x: new Date(2016, 03), y: -0.39 },
{ x: new Date(2016, 04), y: -0.02 },
{ x: new Date(2016, 05), y: 0.46 },
{ x: new Date(2016, 06), y: 0.08 },
{ x: new Date(2016, 07), y: 0.03 },
{ x: new Date(2016, 08), y: -0.34 },
{ x: new Date(2016, 09), y: 0.3 },
{ x: new Date(2016, 10), y: -0.18 },
{ x: new Date(2016, 11), y: 0.01 },
{ x: new Date(2016, 12), y: 0.19 },
{ x: new Date(2017, 01), y: -0.18 },
{ x: new Date(2017, 02), y: 0.07 },
{ x: new Date(2017, 03), y: 0.24 },
{ x: new Date(2017, 04), y: -0.8 },


    ]
  },
  {
    name: "negEng",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(255, 225, 25,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.63 },
{ x: new Date(2014, 10), y: -0.92 },
{ x: new Date(2014, 11), y: 2.65 },
{ x: new Date(2014, 12), y: -0.2 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: 0.64 },
{ x: new Date(2015, 04), y: 0.22 },
{ x: new Date(2015, 05), y: 0.14 },
{ x: new Date(2015, 06), y: 0.07 },
{ x: new Date(2015, 07), y: -0.23 },
{ x: new Date(2015, 08), y: 0.05 },
{ x: new Date(2015, 09), y: 0.51 },
{ x: new Date(2015, 10), y: 2.54 },
{ x: new Date(2015, 11), y: -0.4 },
{ x: new Date(2015, 12), y: -0.44 },
{ x: new Date(2016, 01), y: -0.65 },
{ x: new Date(2016, 02), y: 1.74 },
{ x: new Date(2016, 03), y: -0.31 },
{ x: new Date(2016, 04), y: -0.02 },
{ x: new Date(2016, 05), y: 0.38 },
{ x: new Date(2016, 06), y: 0.19 },
{ x: new Date(2016, 07), y: -0.14 },
{ x: new Date(2016, 08), y: -0.21 },
{ x: new Date(2016, 09), y: 0.3 },
{ x: new Date(2016, 10), y: -0.34 },
{ x: new Date(2016, 11), y: 0.14 },
{ x: new Date(2016, 12), y: 0.08 },
{ x: new Date(2017, 01), y: -0.08 },
{ x: new Date(2017, 02), y: -0.12 },
{ x: new Date(2017, 03), y: 0.28 },
{ x: new Date(2017, 04), y: -0.79 },

    ]
  },
  {
    name: "allAra",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(0, 130, 200,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.0 },
{ x: new Date(2014, 10), y: 0.0 },
{ x: new Date(2014, 11), y: 0.0 },
{ x: new Date(2014, 12), y: 0.8 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: 0.41 },
{ x: new Date(2015, 04), y: -0.33 },
{ x: new Date(2015, 05), y: 0.18 },
{ x: new Date(2015, 06), y: 0.1 },
{ x: new Date(2015, 07), y: 0.15 },
{ x: new Date(2015, 08), y: -0.26 },
{ x: new Date(2015, 09), y: 0.09 },
{ x: new Date(2015, 10), y: -0.1 },
{ x: new Date(2015, 11), y: -0.24 },
{ x: new Date(2015, 12), y: -0.26 },
{ x: new Date(2016, 01), y: -0.23 },
{ x: new Date(2016, 02), y: 0.51 },
{ x: new Date(2016, 03), y: -0.27 },
{ x: new Date(2016, 04), y: 1.53 },
{ x: new Date(2016, 05), y: -0.21 },
{ x: new Date(2016, 06), y: -0.31 },
{ x: new Date(2016, 07), y: -0.29 },
{ x: new Date(2016, 08), y: -0.18 },
{ x: new Date(2016, 09), y: 0.55 },
{ x: new Date(2016, 10), y: -0.44 },
{ x: new Date(2016, 11), y: 0.31 },
{ x: new Date(2016, 12), y: 0.62 },
{ x: new Date(2017, 01), y: -0.55 },
{ x: new Date(2017, 02), y: -0.13 },
{ x: new Date(2017, 03), y: -0.19 },
{ x: new Date(2017, 04), y: -0.8 },

    ]
  },
  {
    name: "posAra",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(245, 130, 48,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.0 },
{ x: new Date(2014, 10), y: 0.0 },
{ x: new Date(2014, 11), y: 0.0 },
{ x: new Date(2014, 12), y: 1.22 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: -0.01 },
{ x: new Date(2015, 04), y: -0.14 },
{ x: new Date(2015, 05), y: 0.44 },
{ x: new Date(2015, 06), y: 0.0 },
{ x: new Date(2015, 07), y: -0.16 },
{ x: new Date(2015, 08), y: -0.33 },
{ x: new Date(2015, 09), y: 1.1 },
{ x: new Date(2015, 10), y: -0.29 },
{ x: new Date(2015, 11), y: -0.35 },
{ x: new Date(2015, 12), y: 0.09 },
{ x: new Date(2016, 01), y: -0.58 },
{ x: new Date(2016, 02), y: 0.66 },
{ x: new Date(2016, 03), y: 1.02 },
{ x: new Date(2016, 04), y: 1.82 },
{ x: new Date(2016, 05), y: -0.45 },
{ x: new Date(2016, 06), y: -0.59 },
{ x: new Date(2016, 07), y: -0.18 },
{ x: new Date(2016, 08), y: 0.49 },
{ x: new Date(2016, 09), y: 0.22 },
{ x: new Date(2016, 10), y: -0.65 },
{ x: new Date(2016, 11), y: -0.02 },
{ x: new Date(2016, 12), y: 0.93 },
{ x: new Date(2017, 01), y: -0.45 },
{ x: new Date(2017, 02), y: -0.17 },
{ x: new Date(2017, 03), y: -0.32 },
{ x: new Date(2017, 04), y: -0.75 },

    ]
  },
  {
    name: "negAra",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(145, 30, 180,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.0 },
{ x: new Date(2014, 10), y: 0.0 },
{ x: new Date(2014, 11), y: 0.0 },
{ x: new Date(2014, 12), y: 0.86 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: 0.14 },
{ x: new Date(2015, 04), y: 0.08 },
{ x: new Date(2015, 05), y: 0.3 },
{ x: new Date(2015, 06), y: 0.27 },
{ x: new Date(2015, 07), y: 0.81 },
{ x: new Date(2015, 08), y: -0.37 },
{ x: new Date(2015, 09), y: -0.16 },
{ x: new Date(2015, 10), y: -0.14 },
{ x: new Date(2015, 11), y: -0.18 },
{ x: new Date(2015, 12), y: -0.43 },
{ x: new Date(2016, 01), y: 0.83 },
{ x: new Date(2016, 02), y: 0.42 },
{ x: new Date(2016, 03), y: -0.8 },
{ x: new Date(2016, 04), y: 1.3 },
{ x: new Date(2016, 05), y: 0.12 },
{ x: new Date(2016, 06), y: -0.18 },
{ x: new Date(2016, 07), y: -0.25 },
{ x: new Date(2016, 08), y: -0.37 },
{ x: new Date(2016, 09), y: 0.9 },
{ x: new Date(2016, 10), y: -0.33 },
{ x: new Date(2016, 11), y: -0.17 },
{ x: new Date(2016, 12), y: 0.22 },
{ x: new Date(2017, 01), y: -0.22 },
{ x: new Date(2017, 02), y: -0.26 },
{ x: new Date(2017, 03), y: 0.16 },
{ x: new Date(2017, 04), y: -0.81 },

    ]
  },
  {
    name: "Death",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(70, 240, 240,0.5)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014, 09), y: 0.08 },
{ x: new Date(2014, 10), y: -0.16 },
{ x: new Date(2014, 11), y: 0.04 },
{ x: new Date(2014, 12), y: 0.0 },
{ x: new Date(2015, 01), y: 0.0 },
{ x: new Date(2015, 02), y: 0.0 },
{ x: new Date(2015, 03), y: 0.99 },
{ x: new Date(2015, 04), y: -0.46 },
{ x: new Date(2015, 05), y: 0.27 },
{ x: new Date(2015, 06), y: 0.26 },
{ x: new Date(2015, 07), y: 0.06 },
{ x: new Date(2015, 08), y: -0.23 },
{ x: new Date(2015, 09), y: -0.1 },
{ x: new Date(2015, 10), y: -0.2 },
{ x: new Date(2015, 11), y: 0.05 },
{ x: new Date(2015, 12), y: 0.29 },
{ x: new Date(2016, 01), y: -0.1 },
{ x: new Date(2016, 02), y: 0.11 },
{ x: new Date(2016, 03), y: -0.18 },
{ x: new Date(2016, 04), y: 0.08 },
{ x: new Date(2016, 05), y: 0.04 },
{ x: new Date(2016, 06), y: -0.04 },
{ x: new Date(2016, 07), y: 0.14 },
{ x: new Date(2016, 08), y: -0.38 },
{ x: new Date(2016, 09), y: 1.15 },
{ x: new Date(2016, 10), y: -0.17 },
{ x: new Date(2016, 11), y: -0.39 },
{ x: new Date(2016, 12), y: 0.08 },
{ x: new Date(2017, 01), y: -0.15 },
{ x: new Date(2017, 02), y: -1.0 },
{ x: new Date(2017, 03), y: 0.0 },
{ x: new Date(2017, 04), y: 0.0 },

    ]
  }]
});
chart.render();

}