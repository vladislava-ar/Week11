let a = document.getElementById('candlePrice').innerHTML;
let b = document.getElementById('mascaraPrice').innerHTML;
let c = document.getElementById('saltPrice').innerHTML;
let d = document.getElementById('lipstickPrice').innerHTML;
let count = 0.8*(+a + +b + +c + +d); 

function result() {
    let total = document.getElementById('total');
	total.textContent = count + ' руб.';
}