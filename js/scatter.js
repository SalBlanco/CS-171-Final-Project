// We will be using two scatter plots

// Scatter 1:

// create axes and scales (x-axis will be field goal percentage, y-axis will be opponent field goal percentage)

// these values will be averaged across a set number of years (2000-2022)

// draw in circles (points) each of which will represent a team

//Scatter 2:

// create axes and scales (x-axis will be average points away, y-axis will be average assists away)

// these values will be averaged across a set number of years (2000-2022)

// draw in circles (points) each of which will represent a team)

// both visualizations will include a tooltip so users can hover over a point and see the following:
// team name, x-axis value, y-axis value

// Set up margins
width = 500;
height = 500
// Load data
let data = d3.csv("nba_1947_2022/Average FG.csv", d =>{
  d.avg_fg_percent = +d.avg_fg_percent
  d.avg_opp_fg_percent = +d.avg_opp_fg_percent
  return d
}).then(data => {
  console.log(data)

  data = data.sort((a, b) => a.avg_fg_percent - b.avg_fg_percent);

  Draw(data)
})

function Draw(data) {
  // Min and Max values for incomeScale
  var max_fg = d3.max(data, function (d) {
    return d.avg_fg_percent
  });
  var min_fg = d3.min(data, function (d) {
    return d.avg_fg_percent
  });
  // Min and Max values for lifeExpectancyScale
  var max_opp_fg = d3.max(data, function (d) {
    return d.avg_opp_fg_percent
  });
  var min_opp_fg = d3.min(data, function (d) {
    return d.avg_opp_fg_percent
  });

  let padding = 100;
  // incomeScale
  let fgScale = d3.scaleLinear().domain([0.44, max_fg]).range([padding, width - padding])
  // console.log(incomeScale(5000))

  let oppfgScale = d3.scaleLinear().domain([0.44, max_opp_fg]).range([height - padding, padding])
  // console.log(lifeExpectancyScale(68))

  // let popScale = d3.scaleLinear().domain([min_pop, max_pop]).range([4, 30])

  // let color = d3.scaleOrdinal(d3.schemeCategory10);
  // let region = [...new Set(data.map(c => c.team))];
  // color.domain(d.team)


  svg = d3.select("#chart-area")
    .append("svg")
    .attr("height", height)
    .attr("width", width)

  let circles = svg.selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("cx", function (d) {
      return fgScale(d.avg_fg_percent)
    })
    .attr("cy", function (d) {
      return oppfgScale(d.avg_opp_fg_percent)
    })
    .attr("r", 4)
    .attr("fill", "red")
    .attr("stroke", "black")
    .attr("fill-opacity", 0.5)

  let xAxis = d3.axisBottom().scale(fgScale).ticks(5)
  let yAxis = d3.axisLeft().scale(oppfgScale).ticks(5)

  let group = svg.append("g")
    .attr("class", "axes")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);

  svg.append("g")
    .attr("class", "yaxis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis)

  svg.append("text")
    .attr("x", 300)
    .attr("y", 450)
    .attr("font-size", "smaller")
    .attr("text-anchor", "end")
    .text("Field Goal Percentage")

  svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", -2 * padding)
    .attr("y", padding - 50)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .attr("font-size", "smaller")
    .text("Opponent Field Goal Percentage")
}

// Add Tooltip which will show team name, fg%, opp fg%

