let = numero = 0;

function incrementar() {
	numero++;
	counter.textContent = numero;
}

function decrementar() {
	if (numero === 0) {
		return;
	}

	numero--;
	counter.textContent = numero;
}
