// HINNAN LASKEMINEN

// Perusmaksu
let perusmaksu = 100

// Pianon tyyppi
function hintaPianotyyppi() {
	let tyyppi = document.querySelector('input[name="piano"]:checked').value;

	if(tyyppi == 'piano') {
		return 0;
	} else {
		// Paljonko lisähintaa flyygelistä
		return 250
	}
}

// Matkalasku
function hintaMatka() {
	let matka = document.getElementById("matka").value
	// Paljonko hintaa per kilometri
	return matka * 1;
}

// Kerroksen hintavaikutus

// Hissin hintavaikutus
function hintaKerros1() {
	let hissi1 = document.getElementById("hissi1").value;
	let kerros1 = document.getElementById("kerros1").value;

	if(hissi1 == "Kyllä" && kerros1 > 1) {
		return 30;
	} else if(hissi1 == "Ei" && kerros1 == 2) {
		return 70;
	} else if(hissi1 == "Ei" && kerros1 >= 3) {
		return 100
	} else {
		return 0
	}
}

function hintaKerros2() {
	let hissi2 = document.getElementById("hissi2").value;
	let kerros2 = document.getElementById("kerros2").value;

	if(hissi2 == "Kyllä" && kerros2 > 1) {
		return 30;
	} else if(hissi2 == "Ei" && kerros2 == 2) {
		return 70;
	} else if(hissi2 == "Ei" && kerros2 >= 3) {
		return 100
	} else {
		return 0
	}
}

// VASTAUSTEKSTI

function getPrice() {
	let total = Number(perusmaksu) + Number(hintaPianotyyppi()) + Number(hintaMatka()) + Number(hintaKerros1())
	+ Number(hintaKerros2());

	return total;
}

function createDiv() {
	let newDiv = document.getElementById('new-div');

	newDiv.innerHTML= `
					<p class="hintateksti">Kuljetuksen hinta on ${getPrice()} euroa (sis. alv).</p>
					<div class="new-form">
						<h5>Haluatko tilata kuljetuksen pianolle?</h5>
						<p>Jätä puhelinnumero, niin otamme yhteyttä.</p>
						<form id="puhelin">
							<p>
								<label for="phone">Puhelin</label>
								<input type="tel" id="phone">
							</p>
							<p>
								<button type="button" id="tilaa" onclick="send()">Lähetä</button>
							</p>
						</form>
					</div>
					<div class="thankyou"></div>
		`
		
		newDiv.style.padding = "20px";
}






