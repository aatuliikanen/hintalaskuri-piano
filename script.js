// HINNAN LASKEMINEN

// Perusmaksu
let perusmaksu = 100

// Pianon tyyppi
let pianotyyppi = function () {
	let tyyppi = document.getElementsByName("piano");
	let hinta = 0;
	if(tyyppi[1].checked) {
		// Paljonko lisähintaa flyygelistä
		hinta = 250;
	} else {
		// Paljonko lisähintaa normaalipianosta
		hinta = 0;
	}
	return hinta;
}

// Matkalasku
let matkalasku = function() {
	a = document.getElementById("matka").value
	// Paljonko hintaa per kilometri
	return a * 1;
}

// Kerroksen hintavaikutus

let kerros1 = function() {
	let k1 = document.getElementById("kerros1").value;
	if(k1 == 1) {
		return 0;
	} else {
		return 50;
	}
}

let kerros2 = function() {
	let k2 = document.getElementById("kerros2").value;
	if(k2 == 1) {
		return 0;
	} else {
		return 50;
	}
}

// Hissin hintavaikutus
let hissi1 = function() {
	let h1 = document.getElementById("hissi1").value;
	if(h1 == "Kyllä" && kerros1() > 0) {
		// Jos 2 kerrosta tai enemmän, niin kerroksen hintavaikutus miinus x€
		return -25;
	} else {
		return 0;
	}
}

let hissi2 = function() {
	let h2 = document.getElementById("hissi2").value;
	if(h2 == "Kyllä" && kerros2() > 0) {
		return -25;
	} else {
		return 0;
	}
}

// LASKE HINTA -NAPPI

let priceAlert = function(message) {
	// Luo div-elementin, johon tulee message-teksti
	let newElement = document.createElement('div');
	newElement.className = 'newElement';
	newElement.appendChild(document.createTextNode(message));

	// Määritellään mihin vastausteksti asettuu
	let laskuri = document.querySelector('.laskuri');
	let sendForm = document.querySelector('.sendForm');
	laskuri.insertBefore(newElement, sendForm);
}

// Kun "Laske hinta" -nappia painetaan, niin tämä funktio aktivoituu.
let price = function() {
	let total = Number(perusmaksu) + Number(pianotyyppi()) + Number(matkalasku()) + Number(kerros1())
	+ Number(kerros2()) + Number(hissi1()) + Number(hissi2());
	let message = 'Kuljetuksen hinta on ' + total + ' euroa (sis. alv).'

	if(document.querySelector('.newElement') == null) {
		return priceAlert(message);		
	} else {
		return document.querySelector('.newElement').innerHTML = message;
	}
}

// LÄHETÄ -NAPPI

let sendAlert = function(message) {
	// Luo div-elementin, johon tulee message-teksti
	let sendElement = document.createElement('div');
	sendElement.className = 'sendElement';
	sendElement.appendChild(document.createTextNode(message));

	// Määritellään mihin vastausteksti asettuu
	let sendForm = document.querySelector('.sendForm');
	let thankyou = document.querySelector('.thankyou')
	sendForm.insertBefore(sendElement, thankyou);
}

let send = function() {
	let message = 'Kiitos! Otamme yhteyttä viimeistään seuraavana arkipäivänä.';
	let sendElement = document.querySelector('.sendElement')
	
	if(sendElement == null) {
		sendAlert(message);
	};
}






