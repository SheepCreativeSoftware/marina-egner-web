const timeBefore = 500;
const timeForHeadlineCharacter = 150;
const timeForQuoteCharacter = 80;
const timeBetween = 500;

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


document.addEventListener('DOMContentLoaded', async () => {
	const headlineMainSpan = document.getElementById('headline-dynamic');
	const headlineQuoteSpan = document.getElementById('headline-quote-dynamic');
	const headlineBlinkSpan = document.getElementsByClassName('headline-blink');
	const headlineText = headlineMainSpan.dataset.text;
	const quoteText = headlineQuoteSpan.dataset.text;

	await wait(timeBefore);
	await typeText(headlineText, headlineMainSpan, timeForHeadlineCharacter);
	await wait(timeBetween);
	headlineBlinkSpan[0].classList.add('hidden');
	headlineBlinkSpan[1].classList.remove('hidden');
	await typeText(quoteText, headlineQuoteSpan, timeForQuoteCharacter);
});
