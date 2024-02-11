const timeBefore = 300;
const timeForHeadlineCharacter = 50;
const timeForQuoteCharacter = 50;
const timeBetween = 200;

const wait = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time)
	});
};

const typeText = async (text, element, time) => {
	for(const character of text) {
		element.innerText += character
		await wait(time);
	}
}

const reveal = () => {
	const reveals = document.querySelectorAll(".reveal");

	for (var index = 0; index < reveals.length; index++) {
		const windowHeight = window.innerHeight;
		const elementTop = reveals[index].getBoundingClientRect().top;
		const elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) reveals[index].classList.add("active");
		else reveals[index].classList.remove("active");
	}
}

const zero = 0;
document.addEventListener('DOMContentLoaded', async () => {
	const copyright = document.getElementById('copyright')
	copyright.innerText = copyright.innerText.replace('2023', '2023-'+new Date().getFullYear());

	const navBarElement = document.getElementById('nav-bar');
	window.addEventListener('scroll', function() {
		if(window.scrollY > 70) navBarElement.classList.add('nav-on-scroll');
		else navBarElement.classList.remove('nav-on-scroll');
		reveal();
	});

	if(document.getElementsByClassName('not-start').length === zero) {
		const headlineMainHiSpan = document.getElementById('headline-dynamic-accent');
		const headlineMainSpan = document.getElementById('headline-dynamic-normal');
		const headlineQuoteSpan = document.getElementById('headline-quote-dynamic');
		const headlineBlinkSpan = document.getElementsByClassName('headline-blink');
		const headlineHiText = headlineMainHiSpan.dataset.text;
		const headlineText = headlineMainSpan.dataset.text;
		const quoteText = headlineQuoteSpan.dataset.text;

		await wait(timeBefore);
		await typeText(headlineHiText, headlineMainHiSpan, timeForHeadlineCharacter);
		await wait(timeBetween);
		headlineBlinkSpan[0].classList.add('hidden');
		headlineBlinkSpan[1].classList.remove('hidden');
		await typeText(headlineText, headlineMainSpan, timeForHeadlineCharacter);
		await wait(timeBetween);
		headlineBlinkSpan[1].classList.add('hidden');
		headlineBlinkSpan[2].classList.remove('hidden');
		await typeText(quoteText, headlineQuoteSpan, timeForQuoteCharacter);
	}
});


