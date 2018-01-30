import * as d3 from 'd3'
import restart from './utils/restart'
import remove from './utils/remove'
import add from './utils/add'
import zoom from './utils/zoom'

// Declaring the namespace
window.connectView = window.connectView || {}

// Assigning available methods
connectView.remove = remove
connectView.add = add
connectView.zoomIn = zoom.zoomIn
connectView.zoomOut = zoom.zoomOut

// Data used to build chart
connectView.nodes = [{id: 'a'}, {id: 'b'}, {id: 'c'}, {id: 'd'}, {id: 'e'}, {id: 'f'}]
connectView.links = [{source: connectView.nodes[0], target: connectView.nodes[1]},
  {source: connectView.nodes[1], target: connectView.nodes[2]},
  {source: connectView.nodes[2], target: connectView.nodes[0]},
  {source: connectView.nodes[3], target: connectView.nodes[4]},
  {source: connectView.nodes[4], target: connectView.nodes[0]}]

// Creating the initial SVG elements
const svg = d3.select('svg').call(zoom.zoom)
const width = +svg.attr('width')
const height = +svg.attr('height')
connectView.g = svg.append('g')
connectView.link = connectView.g.append('g').attr('class', 'links').selectAll('.link')
connectView.node = connectView.g.append('g').attr('class', 'nodes').selectAll('.node')

// Define the forces which repel and attract each node
connectView.simulation = d3.forceSimulation()
  .force('link', d3.forceLink(connectView.links))
  .force('collide', d3.forceCollide().radius(70))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(width / 2, height / 2))

restart()
