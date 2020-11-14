const URL = "https://adwentrodzinny.pl/"; //my main domain

//getting the latest "now" post from "now" tag
function getDay () {
	let where = '#tutaj';
	document.querySelector(where).after(createSpinner()); //show spinner
	let date = new Date();
	let year = date.getFullYear();
	year = year.toString().slice(-2);
	let month = date.getMonth() + 1;
	month = month < 10 ? '0' + month : month;
	let day = date.getDate();
	day = day < 10 ? '0' + day : day;
	let post = year+month+day;
	//overriding date with test parameter
	let params = new URLSearchParams(window.location.search);
	let to = params.get('test');
	if (to) post = to;
	getArticle(post, where);
}

//fetching an article from the system
function getArticle (url, where) {
	fetch(URL+url)
	.then((response) => response.text())
	.then((responseText) => {
		let parser = new DOMParser();
		let fullHTML = parser.parseFromString (responseText, 'text/html');
		createSpinner(true); //remove spinner
		document.querySelector(where).innerHTML = fullHTML.querySelector('article').innerHTML; //get article
	})
	.catch((error) => {
		console.error(error)
	})
}

//shows a CSS spinner or removes it
function createSpinner (destroy=false) {
	let spinner = document.createElement('div');
	spinner.setAttribute('id','spinner');
	spinner.setAttribute('class','spinner');
	if (destroy) {
		document.querySelector("#spinner").remove();
	} else {
		return spinner;
	}
}