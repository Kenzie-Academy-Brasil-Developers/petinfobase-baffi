import { register } from "./api.js";

const eventRegister = () => {
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

       await register(body)
    })
}

eventRegister()


// ********validacao botao registro************

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
  var button = document.querySelector(".buttonRegister");
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });