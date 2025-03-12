document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
  
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
  
    // Função para mover o botão "Não" dentro de uma área ao redor do botão "Sim"
    function moveButton() {
      // Pega a posição do botão "Sim"
      const yesButtonRect = yesButton.getBoundingClientRect();
      
      // Definindo uma área de movimento para o botão "Não" em torno do botão "Sim"
      const movementArea = 100; // A área ao redor do botão "Sim" onde o botão "Não" pode se mover (em pixels)
  
      // Garante que o botão "Não" não ultrapasse os limites da tela
      const maxX = yesButtonRect.left + movementArea;
      const minX = yesButtonRect.left - movementArea;
      const maxY = yesButtonRect.top + movementArea;
      const minY = yesButtonRect.top - movementArea;
  
      // Calcula posições aleatórias dentro da área ao redor do botão "Sim"
      const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
      const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
  
      // Garante que o botão "Não" não ultrapasse os limites da tela
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      const safeX = Math.min(Math.max(randomX, 0), windowWidth - noButton.offsetWidth);
      const safeY = Math.min(Math.max(randomY, 0), windowHeight - noButton.offsetHeight);
  
      console.log(`Movendo para X: ${safeX}, Y: ${safeY}`);
  
      // Move o botão "Não" para a posição aleatória calculada
      noButton.style.left = safeX + "px";
      noButton.style.top = safeY + "px";
    }
  
    // Chama a função moveButton a cada 100 milissegundos para mover o botão rapidamente
    setInterval(moveButton, 100);
  });
  