document.getElementById('reveal-sarcasm').addEventListener('click', function() {
    const sarcasmText = [
      
      "Lumud Zha: size = 2 inches."
    ];
    
    const randomIndex = Math.floor(Math.random() * sarcasmText.length);
    document.getElementById('sarcasm-text').textContent = sarcasmText[randomIndex];
  });
  