const alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nume = '0123456789'

function getAlfa() {
    return alfa[Math.floor(Math.random() * alfa.length)]
}

function getNume() {
    return nume[Math.floor(Math.random() * nume.length)]
}

const charac = 8

function genPassword() {
    let password = ''
    for(i = 0; i < charac; i++) {
        password += getCharac()
    }
    return password
}

function getCharac() {
    let X = []
    X.push(getAlfa())
    X.push(getNume())

    X = X[Math.floor(Math.random() * X.length)]
    return X.toString()
}

console.log(genPassword())