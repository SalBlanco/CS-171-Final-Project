

// let formatDate = d3.timeFormat("%Y");
// let parseDate = d3.timeParse("%Y");
//
// let totals;
// let orig;
// let avg;
// let orig2;
//
// loadTeam();
// loadAverage();

// function loadAverage(){
//   d3.csv("nba_1947_2022/Average FG.csv", row =>{
//     row.avg_fg_percent = +row.avg_fg_percent
//     row.avg_opp_fg_percent = +row.avg_opp_fg_percent
//     return row
//   }).then(csv => {
//     avg = csv
//     orig2 = avg
//     console.log(avg)
//   })
// }
// function loadTeam(){
//   d3.csv("nba_1947_2022/Totals.csv", row => {
//     row.ast = +row.ast
//     row.blk = +row.blk
//     row.drb = +row.drb
//     row.fg = +row.fg
//     row.fg_percent = +row.fg_percent
//     row.fga = +row.fga
//     row.ft = +row.ft
//     row.ft_percent = +row.ft_percent
//     row.fta = +row.fta
//     row.g = +row.g
//     row.mp = +row.mp
//     row.orb = +row.orb
//     row.pf = +row.pf
//     row.pts = +row.pts
//     row.season = parseDate(row.season)
//     row.stl = +row.stl
//     row.tov = +row.tov
//     row.trb = +row.trb
//     row.x2p = +row.x2p
//     row.x2p_percent = +row.x2p_percent
//     row.x2pa = +row.x2pa
//     row.x3p = +row.x3p
//     row.x3p_percent = +row.x3p_percent
//     row.x3pa = +row.x3pa
//     row.opp_ast = +row.opp_ast
//     row.opp_blk = +row.opp_blk
//     row.opp_drb = +row.opp_drb
//     row.opp_fg = +row.opp_fg
//     row.opp_fg_percent = +row.opp_fg_percent
//     row.opp_fga = +row.opp_fga
//     row.opp_ft = +row.opp_ft
//     row.opp_ft_percent = +row.opp_ft_percent
//     row.opp_fta = +row.opp_fta
//     row.opp_mp = +row.opp_mp
//     row.opp_orb = +row.opp_orb
//     row.opp_pf = +row.opp_pf
//     row.opp_pts = +row.opp_pts
//     row.opp_stl = +row.opp_stl
//     row.opp_tov = +row.opp_tov
//     row.opp_trb = +row.opp_trb
//     row.opp_x2p = +row.opp_x2p
//     row.opp_x2p_percent = +row.opp_x2p_percent
//     row.opp_x2pa = +row.opp_x2pa
//     row.opp_x3p = +row.opp_x3p
//     row.opp_x3p_percent = +row.opp_x3p_percent
//     row.opp_x3pa = +row.opp_x3pa
//     return row
//   }).then(csv => {
//     totals = csv
//     orig = totals
//     // console.log(totals)
//
//   })
// }
//

// Draw Visualizations

// Create tooltips to filter through visualization

// Load CSV file
// function loadData() {
//   d3.csv("data/fifa-world-cup.csv", row => {
//     row.YEAR = parseDate(row.YEAR);
//     row.TEAMS = +row.TEAMS;
//     row.MATCHES = +row.MATCHES;
//     row.GOALS = +row.GOALS;
//     row.AVERAGE_GOALS = +row.AVERAGE_GOALS;
//     row.AVERAGE_ATTENDANCE = +row.AVERAGE_ATTENDANCE;
//     return row
//   }).then(csv => {
//
//     // Store csv data in global variable
//     data = csv;
//     orig = data;
//     console.log(data);
//
//     let lower = data.reduce((previous, current) => {
//       return current.YEAR < previous.YEAR ? current : previous;
//     })
//     let lower_year = parseInt(formatDate(lower.YEAR));
//
//     let upper = data.reduce((past, now) => {
//       return now.YEAR > past.YEAR ? now : past;
//     })
//     let upper_year = parseInt(formatDate(upper.YEAR))
//
//     noUiSlider.create(slider, {
//       start: [lower_year, upper_year],
//       connect: true,
//       step: 4,
//       tooltips: true,
//       format: {
//         from: function (val) {
//           return parseInt(val);
//         },
//         to: function (val) {
//           return parseInt(val);
//         }
//       },
//       range: {
//         "min": lower_year,
//         "max": upper_year
//       }
//     })
//
//     slider.noUiSlider.on("slide", function(val, button){
//       console.log(val);
//       let lower = new Date(val[0], 0);
//       let upper = new Date(val[1], 11);
//       data = orig.filter(timeline => {
//         return timeline.YEAR > lower && timeline.YEAR < upper
//       })
//       updateVisualization();
//     });
//
//     // Draw the visualization for the first time
//     updateVisualization();
//   });
// }
