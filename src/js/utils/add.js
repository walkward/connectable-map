import restart from './restart'

function add () {
  connectView.nodes.push({ id: 'd' })
  connectView.links.push({source: connectView.nodes[2], target: connectView.nodes[3]})
  restart()
}

module.exports = add
