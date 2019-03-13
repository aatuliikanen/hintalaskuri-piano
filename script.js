// HINNAN LASKEMINEN

// Perusmaksu
let perusmaksu = 150;

// Pianon tyyppi
function hintaPianotyyppi() {
	let tyyppi = document.querySelector('input[name="pianotyyppi"]:checked').value;

	if(tyyppi === 'piano') {
		return 0;
	} else if(tyyppi == 'flyygeli'){
		return 250
	} else {
		return 0;
	}
}

// Etäisyys

function hintaDistance1() {
	let distance1 = document.getElementById('distance-1').value;

	if(distance1 === 'alle-30') {
		return 0;
	} else if(distance1 === 'alle-60') {
		return 50;
	} else if(distance1 === 'alle-90') {
		return 100;
	}
}

function hintaDistance2() {
	let distance2 = document.getElementById('distance-2').value;

	if(distance2 === 'alle-30') {
		return 0;
	} else if(distance2 === 'alle-60') {
		return 50;
	} else if(distance2 === 'alle-90') {
		return 100;
	}
}

// Kerroksen hintavaikutus

function hintaKerros1() {
	let kerros1 = document.getElementById('portaat-1').value;

	if(kerros1 === 'ei') {
		return 0;
	} else if(kerros1 === '1-2') {
		return 50;
	} else if(kerros1 === '3-4') {
		return 70;
	} else if(kerros1 === 'yli-5') {
		return 100;
	}
}

function hintaKerros2() {
	let kerros2 = document.getElementById('portaat-2').value;

	if(kerros2 === 'ei') {
		return 0;
	} else if(kerros2 === '1-2') {
		return 50;
	} else if(kerros2 === '3-4') {
		return 70;
	} else if(kerros2 === 'yli-5') {
		return 100;
	}
}

// KOKONAISHINTA

function laskeHinta() {
	let total = Number(perusmaksu) + Number(hintaPianotyyppi()) + Number(hintaDistance1()) + Number(hintaDistance2())
	+ Number(hintaKerros1()) + Number(hintaKerros2());

	return Math.round(total);
}

function createDiv() {
	let newDiv = document.getElementById('new-div');

	newDiv.innerHTML= `
		<p>Kuljetuksen hinta on ${laskeHinta()} euroa. Hinta sisältää arvonlisäveron 24%.</p>
		<p>Työn sisältö</p>
		<ul>
		  <li>Pianon suojaus</li>
		  <li>Hellävarainen kuljetus</li>
		  <li>Pianon asettelu haluttuun paikkaan</li>
		</ul>
		<h4>Tilaa pianon muutto</h4>
		<p>Valitse muuttopäivä ja jätä yhteystietosi. Saat tilauksesta
		vahvistuksen sähköpostiisi.</p>
		<p>
			<label>Muuttopäivä
			<input type="text" name="muuttopäivä">
			</label>
		</p>
		<p>
			<label>Kommentit
			<textarea name="kommentti" rows="3"></textarea>
			</label>
		</p>
		<h5>Yhteystiedot</h5>
		<p>
			<label>Nimi
			<input type="text" name="nimi">
			</label>
		</p>
		<p>
			<label>Osoite (lähtöpaikka)
			<input type="text" name="osoite">
			</label>
		</p>
		<p>
			<label>Postinumero
			<input type="number" name="postinumero">
			</label>
		</p>
		<p>
			<label>Paikkakunta
			<input type="text" name="paikkakunta">
			</label>
		</p>
		<p>
			<label>Puhelinnumero
				<input type="number" name="Puhelinnumero">
			</label>
		</p>
		<p>
			<label>Sähköposti
			<input type="email" name="sahkoposti">
			</label>
		</p>
		<h5>Muuttokohteen osoite</h5>
		<p>
			<label>Osoite
			<input type="text" name="osoite">
			</label>
		</p>
		<p>
			<label>Postinumero
			<input type="number" name="postinumero">
			</label>
		</p>
		<p>
			<label>Paikkakunta
			<input type="text" name="paikkakunta">
			</label>
		</p>
		<p>
			<button type="submit">Tilaa</button>
		</p>
		<p>Valitettavasti emme muuta oikeasti pianoasi. Valitan.</p>
		`
		
		newDiv.style.padding = "20px";
}






