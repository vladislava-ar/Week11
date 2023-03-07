const a = document.getElementById('candlePrice').innerHTML;
const b = document.getElementById('mascaraPrice').innerHTML;
const c = document.getElementById('saltPrice').innerHTML;
const d = document.getElementById('lipstickPrice').innerHTML;
const count = 0.8*(+a + +b + +c + +d); 

function getResult() {
    let total = document.getElementById('total');
	total.textContent = count + ' руб.';
}