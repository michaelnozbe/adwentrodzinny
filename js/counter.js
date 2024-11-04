let countDownDate = new Date("Dec 1, 2024 00:00:01").getTime();
let x = setInterval(function() { // Update the count down every 1 second
	let now = new Date().getTime();
	let distance = countDownDate - now;
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.querySelector("#counter").innerHTML = days + " dni " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.querySelector("#counter").innerHTML = "ADWENT!";
	}
}, 1000);
//How to embed the counter?
//<h2>Do adwentu jeszcze… <span id="counter" class="bold"></span></h2>
//<script type="text/javascript" src="{{ site.url }}/js/counter.js"></script>