import * as d3 from 'd3'
import _ from 'lodash'

import restart from './restart'

/**
 * Delete the selected node
 */
function remove () {
  // Prompt user to select node if they haven't already
  if (document.querySelector('g.active') === null) window.alert('Please select a product to remove.')

  // Get the active node's id
  var nodeId = d3.select('.active').attr('data-node-id')

  // Filter through nodes and remove the selected objects
  connectView.links = _.filter(connectView.links, function (i) { return i.source.id !== nodeId && i.target.id !== nodeId })
  connectView.nodes = _.filter(connectView.nodes, function (i) { return i.id !== nodeId })
  restart()
}

module.exports = remove
