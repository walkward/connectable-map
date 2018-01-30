import * as d3 from 'd3'

// Setting up zoom with the mousewheel
function zooming () {
  connectView.g.attr('transform', d3.event.transform)
}

// Zoom in method
function zoomIn () {
  zoom.scaleBy(connectView.g, 1.1)
}

// Zoom out method
function zoomOut () {
  zoom.scaleBy(connectView.g, 0.9)
}

// Initialize the zoom and set the max/min zoom size
const zoom = d3.zoom()
  .scaleExtent([0.5, 8])
  .on('zoom', zooming)

module.exports = { zoom, zoomIn, zoomOut }
