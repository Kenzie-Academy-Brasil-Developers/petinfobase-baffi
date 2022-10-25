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

    
}
eventLogin()


// ************spinner**********

//  function search() {
//     const button = document.querySelector('.spinner')
//     console.log(button);

    
//         button.innerHTML = ''

//         const img = document.createElement('img')
//         img.src = './petinfobase-baffi/assets/spinner.png'
//         img.alt = 'spinner'
//         img.classList.add('loading');

//         button.appendChild(img)

//          postPet(button)

    
// }

//  const postPet  = (button) => {

//     const git =   fetch('http://localhost:3333/login', {
//         method: 'POST',
//         headers: {
//             "content-type": 'aplication/json'
//         }
//     })
//         .then(res => res.json)
//         .then(res => {
//             console.log(res);
//             button.innerHTML = ''
//             button.innerText = 'Acessar'

          
//         })
//     return git
// }

// search()

// ********validacao botao login************

function checkInputs(inputs) {
    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }
  var inputs = document.querySelectorAll("input");
  var button = document.querySelector(".buttonValid");
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });