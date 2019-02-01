
// Price calculation

// Perusmaksu 100€
let pohja = 100

// Pianotyyppi: normaali +0, flyygeli +250
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

// Hissi: jos yli 2 kerrosta, niin hinta vaikutus miinus 40€

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




// What happens after clicking a button

let newAlert = function(message) {
	let newElement = document.createElement('div');
	newElement.className = 'newElement';
	newElement.appendChild(document.createTextNode(message));
	let laskuri = document.querySelector('.laskuri');
	let vastaus = document.querySelector('#vastaus');
	laskuri.insertBefore(newElement, vastaus);
}

let totalAlert = function() {
	let total = Number(pohja) + Number(pianoTyyppi()) + Number(matkalasku()) + Number(kerrosOne())
	+ Number(kerrosTwo()) + Number(hissi1()) + Number(hissi2());

	if(document.querySelector('.newElement') == null) {
		return newAlert('Kuljetuksen hinta on ' + total + ' euroa (sis. alv).');		
	} else {
		return document.querySelector('.newElement').innerHTML = 'Kuljetuksen hinta on ' + total + ' euroa.'
	}
}


// addEventListener

// let button = document.getElementById("nappi");

// button.addEventListener("click", function() {
// 	let total = function() {
// 	total = Number(pohja) + Number(pianoTyyppi()) + Number(matkalasku()) + Number(kerrosOne())
// 	+ Number(kerrosTwo()) + Number(hissi1()) + Number(hissi2());
// 	return total;
// }
	
// })
