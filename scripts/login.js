/* Desenvolva seu código aqui */
import { login } from './api.js';

const eventLogin = () => {
    const form = document.querySelector('form')
    const elements = [...form.elements]

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const body = {}

        elements.forEach((elm) => {
            if (elm.tagName === 'INPUT' && elm.value !== '') {
                body[elm.id] = elm.value
            }
        })

       await login(body)
    })

    console.log(elements);
}
eventLogin()












// ************spinner**********

// function search() {
//     const button = document.querySelector('.button-blue')
//     console.log(button);

//     button.addEventListener('click', () => {
//         button.innerHTML = ''

//         const img = document.createElement('img')
//         img.src = '../assets/spinner.png'
//         img.alt = 'spinner'
//         img.classList.add('loading');

//         button.appendChild(img)

//         getGit(button)

//     })
// }

// const getGit = (button) => {

//     const git = fetch('http://localhost:3333/', {
//         method: 'POST',
//         headers: {
//             "content-type": 'aplication/json'
//         }
//     })
//         .then(res => res.json)
//         .then(res => {
//             button.innerHTML = ''
//             button.innerText = 'Acessar'

          
//         })
//     return git
// }

// search()