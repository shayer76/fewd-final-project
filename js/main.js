// FEWD Final Project


/*
PSEUDO-CODE
------------------------------
When a nav button is clicked 
  - check if the nav menu is already seen
  - if the nav can be seen then hide the nav bar
  - else show the nav bar


*/

$(document).ready( function(){
console.log('it works');
// when a nav button is clicked 2



// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a chart,
// passes in the data and draws it.
function drawDashboard() {


/******************************************/
// SUMMARY SECTION
/******************************************/
  // Create our data table.
  var data_summary = google.visualization.arrayToDataTable([
	['Month', 'Turnover', 'Attendance'],
	[new Date(2016, 05, 01), 15000, 1250],
	[new Date(2016, 06, 01), 11000, 917],
	[new Date(2016, 07, 01), 9000, 550],
	[new Date(2016, 08, 01), 12000, 1000],
	[new Date(2016, 09, 01), 14000, 1167],
	[new Date(2016, 10, 01), 14500, 1408],
	[new Date(2016, 11, 01), 13500, 1125],
	[new Date(2016, 12, 01), 16500, 1075],
	[new Date(2017, 01, 01), 15500, 1592],
	[new Date(2017, 02, 01), 10000, 833],
	[new Date(2017, 03, 01), 6000, 500],
	[new Date(2017, 04, 01), 7000, 583]
  ]);

  // Create a dashboard.
  var dashboard_summary = new google.visualization.Dashboard(
      document.getElementById('dashboard_summary'));

  // CHART 1
  // Create a range slider, passing some options
  var chart1RangeSelector = new google.visualization.ControlWrapper({
    'controlType': 'DateRangeFilter',
    'containerId': 'filter_summary_chart1',
    'options': {
      'filterColumnLabel': 'Month'
    }
  });

  // Create a chart, passing some options
  var summary_chart1 = new google.visualization.ChartWrapper({
    'chartType': 'ColumnChart',
    'containerId': 'summary_chart1',
    'options': {
      'width': 600,
      'height': 300,
      'pieSliceText': 'value',
      'legend': 'right',
      'seriesType': 'bars',
      'series': {1: {type: 'line', targetAxisIndex: 1}}
    }
  });

  // Establish dependencies, declaring that 'filter' drives 'summary_chart',
  // so that the charts will only display entries that are let through
  // given the chosen slider range.
  dashboard_summary.bind(chart1RangeSelector, summary_chart1);

  // Draw the dashboard.
  dashboard_summary.draw(data_summary);

/******************************************/
// TURNOVER SECTION
/******************************************/
  // Create our data table.
  var data_turnover = google.visualization.arrayToDataTable([
    ['Name', 'Donuts eaten'],
    ['Michael' , 5],
    ['Elisa', 7],
    ['Robert', 3],
    ['John', 2],
    ['Jessica', 6],
    ['Aaron', 1],
    ['Margareth', 8]
  ]);

  // Create a dashboard.
  var dashboard_turnover = new google.visualization.Dashboard(
      document.getElementById('dashboard_turnover'));

  // CHART 1
  // Create a range slider, passing some options
  var donutRangeSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'filter_turnover_chart1',
    'options': {
      'filterColumnLabel': 'Donuts eaten'
    }
  });

  // Create a pie chart, passing some options
  var turnover_chart1 = new google.visualization.ChartWrapper({
    'chartType': 'PieChart',
    'containerId': 'turnover_chart1',
    'options': {
      'width': 300,
      'height': 300,
      'pieSliceText': 'value',
      'legend': 'right'
    }
  });

  // Establish dependencies, declaring that 'filter' drives 'pieChart',
  // so that the pie chart will only display entries that are let through
  // given the chosen slider range.
  dashboard_turnover.bind(donutRangeSlider, turnover_chart1);

  // Draw the dashboard.
  dashboard_turnover.draw(data_turnover);

/******************************************/
// ATTENDANCE SECTION
/******************************************/
  // Create our data table.
  var data_attendance = google.visualization.arrayToDataTable([
    ['Name', 'Donuts eaten'],
    ['Michael' , 5],
    ['Elisa', 7],
    ['Robert', 3],
    ['John', 2],
    ['Jessica', 6],
    ['Aaron', 1],
    ['Margareth', 8]
  ]);

  // Create a dashboard.
  var dashboard_attendance = new google.visualization.Dashboard(
      document.getElementById('dashboard_attendance'));

  // CHART 1
  // Create a range slider, passing some options
  var donutRangeSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'filter_attendance_chart1',
    'options': {
      'filterColumnLabel': 'Donuts eaten'
    }
  });

  // Create a pie chart, passing some options
  var attendance_chart1 = new google.visualization.ChartWrapper({
    'chartType': 'PieChart',
    'containerId': 'attendance_chart1',
    'options': {
      'width': 300,
      'height': 300,
      'pieSliceText': 'value',
      'legend': 'right'
    }
  });

  // Establish dependencies, declaring that 'filter' drives 'pieChart',
  // so that the pie chart will only display entries that are let through
  // given the chosen slider range.
  dashboard_attendance.bind(donutRangeSlider, attendance_chart1);

  // Draw the dashboard.
  dashboard_attendance.draw(data_attendance);


}


});
