var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

Plotly.d3.csv('../../Resources/crime_byhour.csv', (err, rows) => {
  var data = days.map(y => {
    var d = rows.filter(r => r.occurrencedayofweek == y)
    return {
      type: 'bar',
      name: y,
      x: d.map(r => r.occurrencehour),
      y: d.map(r => r.count)
		}
	})
	
	var layout = {
    title: "Hourly Criminal Incidences (Toronto: 2014-2018)",
    xaxis: { title: "Hour of the day" },
    yaxis: { title: "Crime Count" },
    paper_bgcolor: 'rgba(245,246,249,1)',
	  plot_bgcolor: 'rgba(245,246,249,1)',
	  width: 1440,
    height: 620
	};
	
	Plotly.newPlot('graph', data, layout)
})