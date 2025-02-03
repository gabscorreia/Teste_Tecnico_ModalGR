function Multa(dias, valor_multa){

    let multa = dias * valor_multa;
    if (multa < 1) multa = 1;

    return `O valor da multa para ${dias} dias de atraso é: R$${multa.toFixed(2)}`
}

console.log(Multa(1, 0.5));