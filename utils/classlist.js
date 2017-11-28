'use strict';

exports.__esModule = true;
exports.splitClass = splitClass;
exports.filterClass = filterClass;
function splitClass(str) {
  return str.replace(/ {1,}/g, ',').split(',');
}

function filterClass(str, cls) {
  return splitClass(str).filter(function (match) {
    return match !== cls && match !== '';
  }).join(' ');
}