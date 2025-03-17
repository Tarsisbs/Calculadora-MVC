function somar(n1, n2){ 
    return {resultado: (n1 + n2)}
}

function subtrair(n1, n2){
    return {resultado: (n1 - n2)}
}

function multiplicar(n1, n2){
    return {resultado: (n1 * n2)}
}

function dividir(n1, n2){
    return {resultado: (n1 / n2)}
}

function potencia(n1, n2){
    return {resultado: Math.pow(n1, n2)}
}

export {somar, subtrair, multiplicar, dividir, potencia}