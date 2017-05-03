console.log('working')

var width = 450;
var height = 450;

d3.json('/data/tickets.json', function(error,data){
	var svg = d3.select('.chart')
		.append('svg')
		.attr('height', height)
		.attr('width', width)
		.append('g')
		.attr('transform', 'translate(0,0)')

	
	var simulation = d3.forceSimulation()
		.force('x', d3.forceX(width / 2).strength(0.03))
		.force('y', d3.forceY(height / 2).strength(0.03))
		.force('collide', d3.forceCollide(13))



	var circles = svg.selectAll('.times')
		.data(data)
		.enter().append('circle')
		.attr('class', 'times')
		.attr('r', 13)
		.attr('fill', 'white')

	simulation.nodes(data)
		.on('tick', ticked)

	function ticked(){
		circles.attr('cx', function(d){
			return d.x
		})
		.attr('cy', function(d){
			return d.y
		})
	}

})
	




// canvas.selectAll('rect')
// 			.data(d)
// 			.enter()
// 			.append('rect')
// 			.attr('width', 20)
// 			.attr('height', function(d){
// 				return d.Tickets * 15;
// 			})
// 			.attr('x', function(d,i){
// 				return i * 30
// 			})
// 			.attr('fill', 'black')


// 		// canvas.selectAll('text')
// 		// 	.data(d)
// 		// 	.enter()
// 		// 	.append('text')
// 		// 	.attr('fill', 'white')
// 		// 	.attr('y', function (d,i){
// 		// 		return i * 80 + 25
// 		// 	})
// 		// 	.attr ('x', 5)
// 		// 	.text(function (d){
// 		// 		return 'Time:' + d.Time;
// 		// 	})

// })















