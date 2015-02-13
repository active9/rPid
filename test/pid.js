pid = require('../index.js')('./pidtest.pid');

console.log("PID",pid);
if (pid>-1) {
	console.log("PID TESTS: PASSED");
} else {
	console.log("PID TESTS: FAILED");
}