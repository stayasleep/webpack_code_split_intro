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


addToDom(addHeader());
addToDom(addDiv());


