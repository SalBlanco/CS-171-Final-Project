
// Set up margins
width = 500;
height = 500

// Load data which is average fg% and opp fg% from 2000-2022

let data = d3.csv("nba_1947_2022/Average FG.csv", d =>{
  d.avg_fg_percent = +d.avg_fg_percent
  d.avg_opp_fg_percent = +d.avg_opp_fg_percent
  return d
}).then(data => {
  console.log(data)

  data = data.sort((a, b) => a.avg_fg_percent - b.avg_fg_percent);

  Draw(data)
})

// Function to draw scatter plot 1
function Draw(data) {

  // Max values for fg%/opp fg%

  var max_fg = d3.max(data, function (d) {
    return d.avg_fg_percent
  });

  // Min and Max values for lifeExpectancyScale
  var max_opp_fg = d3.max(data, function (d) {
    return d.avg_opp_fg_percent
  });

  let padding = 100;

  // fg% scale
  let fgScale = d3.scaleLinear().domain([0.44, max_fg]).range([padding, width - padding])

  // opp fg% scale
  let oppfgScale = d3.scaleLinear().domain([0.44, max_opp_fg]).range([height - padding, padding])

  // let color = d3.scaleOrdinal(d3.schemeCategory10);
  // let region = [...new Set(data.map(c => c.team))];
  // color.domain(d.team)


  // Create SVG drawing area
  svg = d3.select("#chart-area")
    .append("svg")
    .attr("height", height)
    .attr("width", width)

  // Create circles/points for teams
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

  // Create axes
  let xAxis = d3.axisBottom().scale(fgScale).ticks(5)
  let yAxis = d3.axisLeft().scale(oppfgScale).ticks(5)

  // Create group for text and axes placement
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


//Scatter 2:

// create axes and scales (x-axis will be average points, y-axis will be average assists)

// these values will be averaged across a set number of years (2000-2022)

// draw in circles (points) each of which will represent a team)

// both visualizations will include a tooltip so users can hover over a point and see the following:
// team name, x-axis value, y-axis value


