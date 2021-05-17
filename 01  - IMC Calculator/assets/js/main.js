const sendButton = document.getElementById('sendButton');
const nameInput = document.getElementById('nameInput');
const surnameInput = document.getElementById('surnameInput');
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const resultField = document.getElementById('resultField');
const h2Element = document.getElementById('h2Element');
let a = [];

const checkWeight = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (18.5 < imc < 24.9) {
    return 'Peso normal';
  } else if (18.5 < imc < 24.9) {
    return 'Sobrepeso';
  } else if (30 < imc < 34.9) {
    return 'Obesidade grau 1';
  } else if (35 < imc < 39.9) {
    return 'Obesidade grau 2';
  } else if (imc > 40) {
    return 'Obesidade grau 3';
  }
};

sendButton.addEventListener('click', () => {
  let obj = {};
  obj.nome = nameInput.value;
  obj.sobrenome = surnameInput.value;
  obj.peso = weightInput.value;
  obj.altura = heightInput.value;
  const IMC = (obj.peso / obj.altura ** 2).toFixed(2);
  h2Element.innerText = `Seu IMC é ${IMC} (${checkWeight(IMC)})`;
  resultField.style.backgroundColor = '#00FEC2';
  if (typeof weightInput.value !== 'number' || typeof heightInput.value !== 'number') {
    h2Element.innerText = `Altura Inválida`;
    resultField.style.backgroundColor = 'red';
    h2Element.style.color = 'white';
  }
});
