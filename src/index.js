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
		    console.log('27-4 = ',module.default(27,12));
		});

	}
	return btn;
}


addToDom(addHeader());
addToDom(addDiv());
addToDom(addBtn());


