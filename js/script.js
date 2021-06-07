// Elementos
const passwordEl = document.getElementById('password')
const strenghtEl = document.getElementById('strenght')
const copyEl = document.getElementById('copy')
const passLengthEl = document.getElementById('passLength')
const includeMaiEl = document.getElementById('includeMai')
const includeMinEl = document.getElementById('includeMin')
const includeNumEl = document.getElementById('includeNum')
const includeSymEl = document.getElementById('includeSym')
const btnPasswordEl = document.getElementById('btnPassword')

// Determinando caracteres
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '@#$%_+-'

// Funções para pegar caractere
function getUpper() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLower() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumbe() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbo() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// Função para gerar a senha
function generatePassword() {
    let password = ''
    let len = passLengthEl.value

    for(i = 0; i < len; i++) {
        let x = generateX()
        password += x
    }

    passwordEl.innerText = password
}

// Função para adicionar um caractere que esteja marcado
function generateX() {
    const x = []
    if(includeMaiEl.checked) {
        x.push(getUpper())
    }
    if(includeMinEl.checked) {
        x.push(getLower())
    }
    if(includeNumEl.checked) {
        x.push(getNumbe())
    }
    if(includeSymEl.checked) {
        x.push(getSymbo())
    }

    return x[Math.floor(Math.random() * x.length)]
}

// Click para gerar senha
btnPasswordEl.addEventListener('click', generatePassword)

// Função para copiar para área de transferência
copyEl.addEventListener('click', () => {
    const txtArea = document.createElement('textarea')
    txtArea.value = password.innerText

    if(password.innerText == 0) { return }

    document.body.appendChild(txtArea)
    txtArea.select()
    document.execCommand('copy')
    txtArea.remove()

    alert('Senha copiada para área de transferência!')
})


// Função para o site carregar com uma checkbox marcada
window.onload = () => {
    const check = [includeMaiEl, includeMinEl, includeNumEl]
    const choosed = check[Math.floor(Math.random() * 3)]
    choosed.checked = true
    console.log(password.innerText)
}