document.addEventListener('DOMContentLoaded', function() {
  console.log('Página carregada!');

  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");

  // Função para mover o botão "Não" dentro da tela de maneira aleatória
  function moveButton() {
    // Pega a posição do botão "Sim"
    const yesButtonRect = yesButton.getBoundingClientRect();
    
    // Área disponível na tela
    const maxX = window.innerWidth - noButton.offsetWidth; // Largura da tela - largura do botão "Não"
    const maxY = window.innerHeight - noButton.offsetHeight; // Altura da tela - altura do botão "Não"

    // Calcula a posição aleatória para o botão "Não" (dentro da área da tela)
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    console.log(`Movendo para X: ${randomX}, Y: ${randomY}`);

    // Move o botão "Não" para a posição aleatória
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  }

  // Chama a função moveButton a cada 100 milissegundos para mover o botão rapidamente
  setInterval(moveButton, 100);
});
