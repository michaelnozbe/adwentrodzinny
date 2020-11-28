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
	let responseOK = true; //assumes we have 200 code, not 404
	fetch(URL+url)
	.then((response) => {
		if (!response.ok) responseOK = false;
		return response;
	})
	.then((response) => response.text())
	.then((responseText) => {
		createSpinner(true); //remove spinner
		if (responseOK) { //if NOT 404, then replace the site!
			let parser = new DOMParser();
			let fullHTML = parser.parseFromString (responseText, 'text/html');
			document.querySelector(where).innerHTML = fullHTML.querySelector('article').innerHTML; //get article
		}
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