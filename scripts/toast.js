

export const toast = ( ) => { 
    const main = document.querySelector("main")

    const modalCheck = document.createElement("div")
    const divCheck = document.createElement("div")
    const img = document.createElement('img')
    const pdiv = document.createElement('p')
    const p = document.createElement('p')
    const a = document.createElement('a')
    
    modalCheck.classList.add("modal-check")
    divCheck.classList.add("div-check")
    img.classList.add('img-check')
    // img.src = '../../assets/check.svg'
    pdiv.classList.add('p-div-check')
    pdiv.innerText = 'Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:'
    a.innerText = 'Acessar página de login'
    a.href = "../../index.html"

    divCheck.append(img, pdiv)
    p.append(a)
    modalCheck.append(divCheck, p)
    main.append(modalCheck)    


}

export const toastErr = () => {

const input = document.getElementById('password')
const p = document.createElement('p')
p.classList.add('msgErroRegister')
p.innerText = 'Informaçoes invalidas'

input.append(p)
}



