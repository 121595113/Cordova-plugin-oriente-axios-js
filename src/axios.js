cordova.define("cordova-plugin-oriente-axios.axios", function (require, exports, module) {
let exec = require('cordova/exec');

exports.request = (options) => {
  let cloneOptions = Object.assign({}, options);
  let {
    url,
    method,
    params,
    data
  } = cloneOptions;
  delete cloneOptions.url;
  delete cloneOptions.method;
  delete cloneOptions.params;
  delete cloneOptions.data;
  method = method.toUpperCase();
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', [method || 'GET', url, method === 'GET' ? params : data, options]);
  })
}

exports.get = (url, params = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', ['GET', url, params, options]);
  })
}

exports.delete = (url, params = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', ['GET', url, params, options]);
  })
}

exports.head = (url, params = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', ['GET', url, params, options]);
  })
}

exports.post = (url, data = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', ['POST', url, data, options]);
  })
}

exports.put = (url, data = {}, options = {}) => {
  options.data = data;
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', ['POST', url, data, options]);
  })
}

exports.patch = (url, data = {}, options = {}) => {
  options.data = data;
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'CDVNetworking', 'sendRequest', ['POST', url, data, options]);
  })
}

exports.all = (iterable = []) => {
  return Promise.all(iterable);
}

exports.race = (iterable = []) => {
  return Promise.race(iterable);
}
})