window.onload = async () => {
	console.log('load');
	const q_el = document.getElementById('quote');
	const a_el = document.getElementById('author');
	const qlink = document.getElementById('qlink');

	const qreq = fetch('https://favqs.com/api/qotd');
	const json = await (await qreq).json();

	q_el.innerText = json.quote.body;
	a_el.innerText = json.quote.author;
	qlink.href = json.quote.url;
};
