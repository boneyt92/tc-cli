#!/usr/bin/env node

var osf = require('child_process');

var args = process.argv;
//console.log("Hello Bony - " + args.length, args[2]);

if (args.length > 2) {
	
	var command = args[2];
	var folder = args[3];

	if (command == 'o') {
		
		if (folder == 'box') {
			osf.exec('start "" "D:\\CSync\\Box Sync"');
		} else if (folder == 'nppws') {
			osf.exec('start "" "D:\\CSync\\Box Sync\\NppWorkspace"');
		} else if (folder == 'p') {
			osf.exec('start "" "D:\\Projects"');
		}else if (folder == 'downloads') {
			osf.exec('start "" "C:\\Users\\bothomas.TYCOFS\\Downloads"');
		}else {
			console.log('Sorry Command Not Found');
		}
	}else if(command == '-h') {
		
		console.log('\nHelp Section. \n Update data here');
		
	}

}
else {
	
console.log('\nTC Command Line Interface');	
console.log('\n Type tc -h for Help');	
	
}



//