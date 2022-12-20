const msgInput = document.querySelector('#message');
const encriptarBtn = document.querySelector('.encriptar');
const desencriptarBtn = document.querySelector('.desencriptar');
const copyBtn = document.querySelector('.copy');
const notFoundContainer = document.querySelector('.not-found');
const resultContainer = document.querySelector('.result');
const paragraph = document.querySelector('.result > p');

encriptarBtn.addEventListener('click', () => {
    let result = msgInput.value.trim();

    result = result.replace(/i/gi, 'imes');
    result = result.replace(/a/gi, 'ai');
    result = result.replace(/o/gi, 'ober');
    result = result.replace(/u/gi, 'ufat');

    showResult(result);
});

desencriptarBtn.addEventListener('click', () => {
    let result = msgInput.value.trim();

    result = result.replace(/enter/gi, 'e');
    result = result.replace(/imes/gi, 'i');
    result = result.replace(/ai/gi, 'a');
    result = result.replace(/ober/gi, 'o');
    result = result.replace(/ufat/gi, 'u');

    showResult(result);
});

function showResult(result) {
    paragraph.textContent = result;
    resultContainer.classList.remove('hidden');
    notFoundContainer.classList.add('hidden');
}

msgInput.addEventListener('input', (e) => {
    if (e.target.value.length === 0) {
        notFoundContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
    }
});

copyBtn.addEventListener('click', async (e) => {
    result = paragraph.innerHTML;
    await navigator.clipboard.writeText(result);
});
