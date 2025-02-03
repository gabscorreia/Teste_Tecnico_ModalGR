function separarVetores(vetor){

    let multiplos = vetor.filter(num=> num % 3 ==0);
    let naoMultiplo= vetor.filter(num=> num % 3 !=0);

    console.log("Números:", vetor);
    console.log("Múltiplos de 3:", multiplos);
    console.log("Não múltiplos:", naoMultiplo);
}   

let vetor = Array.from({length: 50}, () => Math.floor(Math.random() * 101));

separarVetores(vetor);
