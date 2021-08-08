const math = require('./add');
exports.exampleModule = function() {
  return math.add(2,2);
}