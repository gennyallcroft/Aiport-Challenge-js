'use strict';

function Airport() {
}

Airport.prototype.planes = function() { return []; };

Airport.prototype.land = function(plane) {
  planes.push(plane)
}