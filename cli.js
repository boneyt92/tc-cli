#!/usr/bin/env node

var fs = require('fs');
var osf = require('child_process');
var pack = require('./package.json');
var filepath = __dirname + '/' + 'custom_paths.json';
var obj = require(filepath);



var args = process.argv;
//console.log("Hello Bony - " + args.length, args[2]);

if (args.length > 2) {
	
	var command = args[2];

	if (command == 'o') {
		
		var subcmd = args[3]; 
		var path = obj[subcmd];
		if (path != undefined) {
			var cmd = 'start "" "' + path + '"';
			osf.exec(cmd);	
		} else {
			console.log('Command Not Set');
		}
			
		
	}else if(command == 'a') {
		
		if(args[3] == '-h') {
			console.log('\nUsage tc add [command] [path]');
			console.log('\n[command] - custom command useed to invoke the path \n[path] - Path of the file/folder to execute\nUse Double Slashes in the path where single slashes exists');
			
		}else if(args.length != 5) {
			console.log('\nInvalid Arguments \nPlease Use the correct arguments\nUse tc add -h for help');	
		}else if (args.length == 5) {
			comd = args[3];
			path = args[4];
			obj[comd] = path;
			fs.writeFile(filepath, JSON.stringify(obj), 'utf8', callback);
		}
	}else if(command == 'view') {
		
		console.log('-----------------------------------------');
		console.log('Command \t\t Path\n');
		for (var key in obj) {				
			console.log(key ,':\t\t', obj[key]);				
		}
		console.log('-----------------------------------------');
			
	}else if(command == 'r') {
		
		var item = args[3];
		if (obj[item] != undefined) {
			delete obj[item];
			fs.writeFile(filepath, JSON.stringify(obj), 'utf8', callback);
		}else {
			console.log('Item Not Found');
			console.log('Please Use Help');
		}
			
	}else if(command == '-h') {		
		console.log('\nHelp Section. \n Update data here');		
	}else if(command == '-v' || command == '-V'|| command == '-Verion'|| command == '-version') {		
		console.log('\nTc Version:', pack.version);		
	}else {		
		console.log('\nCommand Not Found. Please Use Help');		
	}	

}else {	
console.log('\nTC Command Line Interface');	
console.log('\n Type tc -h for Help');	
}

function callback() {
}



//