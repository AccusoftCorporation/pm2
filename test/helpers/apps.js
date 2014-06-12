
var path = require('path');

var APPS = {};

APPS.forkPM2 = function() {
  var pm2 = require('child_process').fork('lib/Satan.js', [], {
    env : process.env
  });
  return pm2;
};

APPS.launchApp = function(ipm2, script, name, cb) {
  ipm2.rpc.prepare({
    pm_exec_path    : path.resolve(process.cwd(), 'test/fixtures/' + script),
    pm_err_log_path : path.resolve(process.cwd(), 'test/' + name + 'err.log'),
    pm_out_log_path : path.resolve(process.cwd(), 'test/' + name + '.log'),
    pm_pid_path     : path.resolve(process.cwd(), 'test/child'),
    exec_mode : 'cluster_mode',
    name : name
  }, cb);
};

APPS.launchAppFork = function(ipm2, script, name, cb) {
  ipm2.rpc.prepare({
    pm_exec_path    : path.resolve(process.cwd(), 'test/fixtures/' + script),
    pm_err_log_path : path.resolve(process.cwd(), 'test/errLogasdasd.log'),
    pm_out_log_path : path.resolve(process.cwd(), 'test/outLogasdasd.log'),
    pm_pid_path     : path.resolve(process.cwd(), 'test/child'),
    exec_mode : 'fork_mode',
    name : name
  }, cb);
};

module.exports = APPS;
