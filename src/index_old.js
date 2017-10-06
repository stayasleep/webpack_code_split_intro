// import {addToDom} from './helper';
// import add from './add';
// import './style.css';
// import logo from './chinch.jpg';
// import jchinch from './jas.jpg';
//
// const addHeader = () => {
// 	var header = document.createElement('h1');
// 	header.innerText = "Vanilla JS is the best JS";
// 	header.classList.add('main-header');
//
// 	return header;
// };
// function addDiv(text){
// 	var div = document.createElement('div');
// 	div.innerText = text;
// 	return div
// }
//
// function addBtn(){
// 	var btn = document.createElement('button');
// 	btn.innerText = "Click to subtract";
// 	btn.onclick = function(){
// 		console.log('Alas poor yorick, i knew him, Horatio!');
// 		//this makes an async call and returns a promise
// 		System.import('./subtract').then(function(module){
// 		    console.log('27-12 = ',module.default(27,12));
// 		});
//
// 	};
// 	return btn;
// }
//
// function addAnotherBtn(){
// 	var btn = document.createElement('button');
// 	btn.innerText="Divide something by zero";
// 	btn.onclick=function(){
// 		console.log("et tu, brute");
//
// 		System.import('./math').then(function(module){
// 			console.log('6/0 = ',module.divide(6,0));
//
// 			addToDom(addDiv('6/0 = '+ module.divide(6,0)));
// 		});
// 	};
// 	return btn;
// }
//
// function addImg(src, className){
//     var img = new Image();
//     img.src = src;
//     if(className){
//         img.classList.add(className);
//     }
//
//     return img;
// }
//
//
// addToDom(addHeader());
// addToDom(addImg(jchinch));
// addToDom(addDiv("total of 56+82 = "+ add(56,82)));
// addToDom(addBtn());
// addToDom(addAnotherBtn());
// addToDom(addImg(logo,'fix-to-bottom'));
//
//
//
