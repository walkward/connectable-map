function ticked () {
  connectView.link.attr('x1', function (d) { return d.source.x })
    .attr('y1', function (d) { return d.source.y })
    .attr('x2', function (d) { return d.target.x })
    .attr('y2', function (d) { return d.target.y })

  connectView.node.attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
}

module.exports = ticked
