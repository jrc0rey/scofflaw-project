console.log('good to go')

var width = 550;
var height = 550;

d3.json('/data/tickets.json', function(error,data){
	var svg = d3.select('.chart')
		.append('svg')
		.attr('height', height)
		.attr('width', width)
		.append('g')
		.attr('transform', 'translate('+ width / 2 + ',' + height / 2.3 + ')');

	var radiusScale = d3.scaleSqrt().domain([0,150]).range([20,70]);

	
	var simulation = d3.forceSimulation()
		.force('x', d3.forceX(0).strength(0.05))
		.force('y', d3.forceY(0).strength(0.05))
		.force('collide', d3.forceCollide(function(d){
			return radiusScale(d.Tickets) + .5;
		}));



	var circles = svg.selectAll('.times')
		.data(data)
		.enter().append('circle')
		.attr('class', 'times')
		.attr('r', function(d){
			return radiusScale(d.Tickets)
		})
		.attr('fill', function(d){
			if(d.Tickets < 30){
				return '#1D2731'
			}
			else{
				return '#CF6766'
			}
		});


	var labels = svg.selectAll('.time')
			.data(data)
			.enter()
			.append('text')
			.attr('class', 'time')
			.attr('text-anchor', 'middle')
			.attr('font-size', '9px')
			.attr('fill', function(d){
				if(d.Tickets < 30){
					return '#CF6766'
				}
				else{
					return '#1D2731'
				}
			})
			.text(function(d){
				return d.Time
			});

	

	simulation.nodes(data).on('tick', ticked);

	function ticked(){
		circles.attr('cx', function(d){
			return d.x
		})
		.attr('cy', function(d){
			return d.y
		});
		
		labels
  		.attr('x', function(d) {
    		return d.x ;
  		})
  		.attr('y', function(d) {
    		return d.y ;
  		});
	}
});
	

















