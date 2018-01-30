import * as d3 from 'd3'

// Set the active element onclick
function mousedown () {
  d3.select('.active').classed('active', false)
  d3.select(this.parentElement).classed('active', true)
}

// Handle dragstarted event
function dragstarted (d) {
  if (!d3.event.active) connectView.simulation.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
}

// Handle dragged event
function dragged (d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
}

// Handle dragend event
function dragended (d) {
  if (!d3.event.active) connectView.simulation.alphaTarget(0)
  d.fx = null
  d.fy = null
}

module.exports = { mousedown, dragstarted, dragged, dragended }
