function getValue(button) {
	let output = document.getElementById('value');
	output.innerText = output.innerText + button;
}
document.getElementById('equation').addEventListener('click', function () {
	let history = document.getElementById('history-value');
	history.innerText = value.innerText;
	value.innerText = eval(value.innerText);


});
document.getElementById('clear').addEventListener('click', function () {
	value.innerText = '';
})