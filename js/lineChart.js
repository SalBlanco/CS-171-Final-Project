// Set up conventions
let height = 500;
let width = 500;
let margin = ({top: 50, right: 50, bottom: 50, left:50});
let padding = 100;

var formatTime = d3.timeFormat("%Y");
var parseTime = d3.timeParse(formatTime);

let data2 = d3.csv("data/Team Stats Per Game.csv", d => {
    d.season = parseTime(d.season)
    d.x2p_percent = +d.x2p_percent
    return d
}).then(data2 => {

    let svg = d3.select("#col2")
        .append("svg")
        .attr("height", height)
        .attr("width", width)

    let min_season = d3.min(data2, function (d) {
        return d.season
    })
    let max_season = d3.max(data2, function (d) {
        return d.season
    })
    let max_x2p_percent = d3.max(data2, function (d) {
        return d.x2p_percent
    })

    // Create xScale for seasons
    let xScale = d3.scaleTime()
        .domain([min_season, max_season])
        .range([padding, width - padding])

    // Create yScale for 2-point percentages
    let yScale = d3.scaleLinear()
        .domain([0, max_x2p_percent])
        .range([height - padding, padding])

    // Create xAxis using xScale
    let xAxis = d3.axisBottom().scale(xScale).tickFormat(formatTime)

    // Create yAxis using yScale
    let yAxis = d3.axisLeft().scale(yScale).ticks(5)

    let group = svg.append("g")
        .attr("class", "axes")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("x", 25)
        .attr("y", -3.5)
        .attr("transform", "rotate(90)");

    svg.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis)

    // Path for line graph
    let path = svg.append("path")
        .data(data2)
        .attr("class", "line")
        .attr("stroke", "black")
    })

    /* let svg2 = d3.select("#col2")
        .append("svg")
        .attr("height", height)
        .attr("width", width)

    let catAxis = d3.scalePoint()
        .domain(["", "Caravan", "Combination", "Tent"])
        .range([padding, width-padding])

    let hAxis = d3.scaleLinear()
        .domain([0, 110])
        .range([0, height])

    let perAxis = d3.scaleLinear()
        .domain([0, 1])
        .range([margin.top, height])

    let yAxis2 = d3.axisLeft().scale(perAxis).tickFormat(d3.format(".0%")).tickValues([.1, .2, .4, .6, .8, 1]);

    let xAxis2 = d3.axisBottom().scale(catAxis).ticks(4)

    let group2 = svg2.append("g")
        .attr("class", "axes")
        .attr("transform", "translate(0,"+(height-4.5*padding)+")")
        .call(xAxis2)
        .selectAll("text")
        .attr("x", 10)
        .attr("y", -8.5);

    svg2.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate("+padding+",10)")
        .call(yAxis2)

    let rects = svg2.selectAll("rect")
        .data(shelter)
        .enter()
        .append("rect")
        .attr("fill", "darkkhaki")
        .attr("height", (s) => hAxis(s.freq))
        .attr("width", 30)
        .attr("x", function(s, i){
            return catAxis(s.type)
        }) */
