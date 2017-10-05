import {addToDom} from './helper';
import add from './add';


function addHeader(){
	var header = document.createElement('h1');
	header.innerText = "Vanilla JS ftw";

	return header;
}
function addDiv(){
	var div = document.createElement('div');
	div.innerText = "The total of 56 and 82 is " + add(56,82);
	return div
}

function addBtn(){
	var btn = document.createElement('button');
	btn.innerText = "Click to subtract";
	btn.onclick = function(){
		console.log('Alas poor yorick, i knew him, Horatio!');
		//this makes an async call and returns a promise
		System.import('./subtract').then(function(module){
		    console.log('27-12 = ',module.default(27,12));
		});

	};
	return btn;
}

function addAnotherBtn(){
	var btn = document.createElement('button');
	btn.innerText="Divide something by zero";
	btn.onclick=function(){
		console.log("et tu, brute");

		System.import('./math').then(function(module){
			console.log('6/0 = ',module.divide(6,0));
		});
	};
	return btn;
}



addToDom(addHeader());
addToDom(addDiv());
addToDom(addBtn());
addToDom(addAnotherBtn());


