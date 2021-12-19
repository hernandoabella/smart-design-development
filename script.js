// contador

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;

		const increment = target / 200;

		if (count < target) {
			counter.innerText = `${Math.ceil(count + increment)}`;
			setTimeout(updateCounter, 10);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});


// sticky nav

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}