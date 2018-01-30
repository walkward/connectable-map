import events from './events'
import * as d3 from 'd3'
import ticked from './ticked'

function restart () {
  // Apply the general update pattern to the links.
  connectView.link = connectView.link.data(connectView.links, function (d) { return d.source.id + '-' + d.target.id })
  connectView.link.exit().remove()
  connectView.link = connectView.link.enter().append('line')
    .attr('stroke-width', function (d) { return Math.sqrt(d.value) })
    .merge(connectView.link)

  // Apply the general update pattern to the nodes.
  connectView.node = connectView.node.data(connectView.nodes, function (d) { return d.id })
  connectView.node.exit().remove()
  connectView.node = connectView.node.enter().append('svg:g')
    .attr('class', 'node')
    .attr('data-node-id', function (d) { return d.id })
    .merge(connectView.node)

  // Creating circles for each node
  connectView.node.append('circle')
    .attr('r', 40)
    .on('mousedown', events.mousedown)
    .call(d3.drag()
      .on('start', events.dragstarted)
      .on('drag', events.dragged)
      .on('end', events.dragended))

  // Appending the title to each product
  connectView.node.append('svg:text')
    .attr('x', 0)
    .attr('y', 4)
    .attr('class', 'id')
    .text(function (d) { return d.id })

  // Update and restart the simulation.
  connectView.simulation.force('link').links(connectView.links)
  connectView.simulation.nodes(connectView.nodes).on('tick', ticked)
  // connectView.simulation.restart()
}

module.exports = restart
