const inputTexto = document.querySelector('.text-input');
const message = document.querySelector('.message');
const notFoundBox = document.querySelector('.not-found-message-box');
const foundBox = document.querySelector('.found-message-box');
const buttonCopy = document.querySelector('.copy');

let matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function btnEncrypt() {
  const encryptedText = encrypt(inputTexto.value);
  message.innerHTML = encryptedText;
  notFoundBox.style.display = "none";
  foundBox.style.display = "flex";
  buttonCopy.style.display = "block";
}

function btnDecrypt() {
  const decryptedText = decrypt(inputTexto.value);
  message.innerHTML = decryptedText;
  notFoundBox.style.display = "none";
  foundBox.style.display = "flex";
  buttonCopy.style.display = "block";
}

function encrypt(string) {
  string = String(string).toLocaleLowerCase();
  string = String(string).split("").map(letter => {
    const letraEncriptada = matrizCodigo.find(el => el[0] === letter);
    return letraEncriptada ? letraEncriptada[1] : letter;
  });

  return string.join('');
}

function decrypt(stringDescriptografada) {
  stringDescriptografada = String(stringDescriptografada).toLocaleLowerCase();

  matrizCodigo.forEach(el => {
    console.log(`inclui ${el[1]}? ${stringDescriptografada.includes(el[1]) ? "sim" : "não"}`)
    if (stringDescriptografada.includes(el[1])) {
      stringDescriptografada = String(stringDescriptografada).replaceAll(el[1], el[0]);
    }
  })

  return stringDescriptografada;
}

function copy() {
  navigator.clipboard.writeText(message.innerHTML);
}
