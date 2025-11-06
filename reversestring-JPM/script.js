document.addEventListener('DOMContentLoaded', () => {
  const inputElem = document.getElementById('inputText');
  const btnInvert = document.getElementById('btnInvert');
  const outputElem = document.getElementById('outputText');

  function updateOutput(text) {
    const reversed = text.split('').reverse().join('');
    outputElem.textContent = reversed;
  }

  inputElem.addEventListener('input', () => {
    const text = inputElem.value;

    // Mostrar-ocultar el botón según longitud del texto
    if (text.length > 3) {
      btnInvert.style.display = 'inline-block';
    } else {
      btnInvert.style.display = 'none';
    }

    // Actualizar resultado en tiempo real
    updateOutput(text);
  });

  btnInvert.addEventListener('click', () => {
    const text = inputElem.value;
    updateOutput(text);
  });
});
