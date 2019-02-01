
// HINNAN LASKEMINEN

// Perusmaksu 100€
let pohja = 100

// Pianotyyppi: normaali +0€, flyygeli +250€
let pianoTyyppi = function () {
	let tyyppi = document.getElementsByName("piano");
	let hinta = 0;
	if(tyyppi[1].checked) {
		hinta = 250;
	} else {
		hinta = 0;
	}
	return hinta;
}

// Matkalasku on matka x 1€
let matkalasku = function() {
	a = document.getElementById("matka").value
	return a;
}

// Ykköskerros +0€, muut +50€
let kerrosOne = function() {
	let k1 = document.getElementById("kerros1").value;
	if(k1 == 1) {
		return 0;
	} else {
		return 50;
	}
}

let kerrosTwo = function() {
	let k2 = document.getElementById("kerros2").value;
	if(k2 == 1) {
		return 0;
	} else {
		return 50;
	}
}

// Hissi: jos yli 2 kerrosta, niin kerroksen hintavaikutus miinus 25€
let hissi1 = function() {
	let h1 = document.getElementById("hissi1").value;
	if(h1 == "Kyllä" && kerrosOne() > 25) {
		return -25;
	} else {
		return 0;
	}
}

let hissi2 = function() {
	let h2 = document.getElementById("hissi2").value;
	if(h2 == "Kyllä" && kerrosTwo() > 25) {
		return (-25);
	} else {
		return 0;
	}
}

// LASKE HINTA-NAPPI

let newAlert = function(message) {
	// Create div-element with .newElement class
	let newElement = document.createElement('div');
	newElement.className = 'newElement';
	newElement.appendChild(document.createTextNode(message));

	// Määritellään mihin vastausteksti asettuu
	let laskuri = document.querySelector('.laskuri');
	let newForm = document.querySelector('.newForm');
	laskuri.insertBefore(newElement, newForm);
}

// Kun nappia painetaan, tämä funktio aktivoituu.
let totalAlert = function() {
	let total = Number(pohja) + Number(pianoTyyppi()) + Number(matkalasku()) + Number(kerrosOne())
	+ Number(kerrosTwo()) + Number(hissi1()) + Number(hissi2());
	let message = 'Kuljetuksen hinta on ' + total + ' euroa (sis. alv).'

	if(document.querySelector('.newElement') == null) {
		return newAlert(message);		
	} else {
		return document.querySelector('.newElement').innerHTML = message
	}
}

// LÄHETÄ -NAPPI

let sendAlert = function() {
	let sendElement = document.createElement('div');
	sendElement.className = 'sendElement';
	sendElement.appendChild(document.createTextNode('Kiitos! Palataan asiaan.'));

	let newForm = document.querySelector('.newForm');
	let thankyou = document.querySelector('.thankyou')
	newForm.insertBefore(sendElement, thankyou);
}








