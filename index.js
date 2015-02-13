/*
 * rPid - Pid file reader
 */

var fs = require('fs'),
    path = require('path');

module.exports = function(pidfile) {
	pidfile = path.resolve(pidfile);
	var pid = -1;
	if (fs.existsSync(pidfile)) {
		pid = fs.readFileSync(pidfile);
		return pid.toString();
	}
	return -1;
}