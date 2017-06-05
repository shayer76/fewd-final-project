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
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it.
function drawDashboard() {


/******************************************/
// SUMMARY SECTION
/******************************************/
  // Create our data table.
  var data_summary = google.visualization.arrayToDataTable([
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
  var dashboard_summary = new google.visualization.Dashboard(
      document.getElementById('dashboard_summary'));

  // CHART 1
  // Create a range slider, passing some options
  var donutRangeSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'filter_summary_chart1',
    'options': {
      'filterColumnLabel': 'Donuts eaten'
    }
  });

  // Create a pie chart, passing some options
  var summary_chart1 = new google.visualization.ChartWrapper({
    'chartType': 'PieChart',
    'containerId': 'summary_chart1',
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
  dashboard_summary.bind(donutRangeSlider, summary_chart1);

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
