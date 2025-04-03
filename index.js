console.log('funguju!');

/*Cílem bude, aby se po stisknutí klávesy žárovka na stránce rozsvítila (k elementu žárovky .bulb se přidá třída bulb--on, která pomocí CSS zařídí rozsvícení žárovky). Po té vylepšíte program tak, aby dalším stisknutím klávesy žárovka zase zhasla – a tak stále dokola.*/

const rozsvitit = () => {
  const zarovka = document.querySelector('.bulb');
  zarovka.classList.toggle('bulb--on');
}

document.addEventListener("keydown", rozsvitit)
