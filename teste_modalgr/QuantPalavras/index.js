function contarPalavras(texto) {
    if (!texto.trim()) return `Quantidade de palavras: 0`;
    return `Quantidade de palavras: ${texto.trim().split(/\s+/).length}`;
  }
  
  const frase = "A ModalGR está criando soluções incríveis.";
  
  const quantidadePalavras = contarPalavras(frase);
  console.log(quantidadePalavras);