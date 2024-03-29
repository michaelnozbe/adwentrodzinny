const URL = "https://adwentrodzinny.pl/"; //my main domain

var disqus_shortname = "adwentrodzinny-pl";
var disqus_url = "";
var disqus_identifier = "";
var disqus_loaded = false;

function disqus() {
	if (!disqus_loaded)  {
		if (!disqus_url) {
			disqus_url = window.location.href;
			disqus_identifier = disqus_url;
		}
		disqus_loaded = true;
		var e = document.createElement("script");
		e.type = "text/javascript";
		e.async = true;
		e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
		(document.getElementsByTagName("head")[0] ||
		 document.getElementsByTagName("body")[0])
		.appendChild(e);
	}
}

function getToday () {
	//getting today's date in format of our blog posts: YYMMDD
	let date = new Date();
	let year = date.getFullYear();
	year = year.toString().slice(-2);
	let month = date.getMonth() + 1;
	month = month < 10 ? '0' + month : month;
	let day = date.getDate();
	day = day < 10 ? '0' + day : day;
	return year + month + day;
}

function getDay () {
	let where = '#page';
	document.querySelector(where).after(createSpinner()); //show spinner
	let post = getToday();
	//overriding date with test parameter "?d=YYMMDD"
	let params = new URLSearchParams(window.location.search);
	let to = params.get('d');
	if (to) post = to;
	
	disqus_url = URL + post + '/';
	disqus_identifier = disqus_url;
	
	getArticle(post, where);
}

// parsing through the list of this year's posts and adding links
function getList() {
	let today = getToday();
	let params = new URLSearchParams(window.location.search);
	let test = params.get('d');
	//getting all the headers to add links to them
	let divs = document.getElementsByTagName('h2');
	for (let div of divs) {
		let tekst = div.innerHTML;
		div.innerHTML = '<a href="/?d='+div.id+'">'+tekst+'</a>';
		if (test != 'test') { //if it's not a test, we only highlight past
			if (div.id == today) break;
		}
	}
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