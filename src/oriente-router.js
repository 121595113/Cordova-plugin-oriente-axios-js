cordova.define("cordova-plugin-oriente-router.router", function (require, exports, module) {
let exec = require('cordova/exec');
let utils = require('cordova/utils');

exports.push = function (location, success = null, error = null) {
  let url = location.path.replace(/^(\/@|@)/,'');
  let query = location.query;
  let options = {};
  if (utils.typeName(arguments[1]) === 'Object') {
    options = arguments[1];
    success = arguments[2] || null;
    error = arguments[3] || null;
  }
  exec(success, error, 'CDVNavigator', 'routeToPage', [url, query, options]);
};

exports.isNative = function(url = '') {
  return /^\/@.*:/.test(url)
}

})