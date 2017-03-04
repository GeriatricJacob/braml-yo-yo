var yo = require('yo-yo');
var braml = require('braml');
function bramlyo(string) {
  return yo(braml(string));
}
module.exports = bramlyo;
