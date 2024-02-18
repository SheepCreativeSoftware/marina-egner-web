const timeBefore = 300;
const timeForNextCharacter = 50;
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
		const elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) reveals[index].classList.add("active");
	}
}

const zero = 0;
const next = 1;

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

		const headlineMainSpan = document.getElementsByClassName('headline-dynamic');
		const headlineBlinkSpan = document.getElementsByClassName('headline-blink');

		await wait(timeBefore);
		for (let index = 0; index < headlineMainSpan.length; index++) {
			const element = headlineMainSpan[index];
			const text = element.dataset.text;

			await typeText(text, element, timeForNextCharacter);
			await wait(timeBetween);

			if(index + next < headlineMainSpan.length) {
				headlineBlinkSpan[index].classList.add('hidden');
				headlineBlinkSpan[index + next].classList.remove('hidden');
			}
		}
	}
});


