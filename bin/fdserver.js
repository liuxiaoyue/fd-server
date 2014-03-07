#!/usr/bin/env node
var fds = require("../lib/fdServer.js");
var pkg = require('../package.json');
var program = require('commander');

program.version(pkg.version);

program.usage('[command]');

program.command("install").description("install the fd-server service").action(function() {
	fds({
		type: "install"
	});
});
program.command("start").description("start the fd-server server").action(function() {
	fds({
		type: "start"
	});
});
program.command("stop").description("stop the fd-server server").action(function() {
	fds({
		type: "stop"
	});
});
program.command("restart").description("restart the fd-server server").action(function() {
	fds({
		type: "restart"
	});
});
program.command("uninstall").description("uninstall the fd-server service").action(function() {
	fds({
		type: "removeService"
	});
});

program.option('-l, --log [path]', 'Set Log Path');
program.parse(process.argv);

if (program.log){
    fds({
		type: "setLogPath",
        options: program.log
	});
}else if (!program.args.length) {
    program.help();
}
