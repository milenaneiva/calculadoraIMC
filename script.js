function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let message = '';

    if (imc < 18.5) {
        message = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        message = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        message = 'Sobrepeso';
    } else {
        message = 'Obesidade';
    }

    document.getElementById('result').innerText = `Seu IMC é ${imc} (${message}).`;
}