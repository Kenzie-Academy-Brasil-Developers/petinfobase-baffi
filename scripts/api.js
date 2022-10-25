/* Desenvolva seu código aqui */
import { getLocalStorage } from './localStorage.js'
import { toast } from './toast.js';



const baseUrl = 'http://localhost:3333/'


async function login(body) {

    try {
        const request = await fetch(`${baseUrl}login` , {

            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify(body)
        })
        const response = await request.json();

        if (request.ok) {

            localStorage.setItem("user", JSON.stringify(response.token));

            setTimeout(() => {
                window.location.assign("/petinfobase-baffi/pages/home/index.html")

            }, 4000)

        } else if (response.message) {
          
                let input = document.querySelectorAll('.inputErro')
                let p = document.getElementById('msgErr')
                p.classList.remove('hidden')
                input.forEach((elm) => {
                elm.classList.add('inputRed')
    
                })
            
        }

    } catch (err) {
        
        console.log(err);

    }
}


// ***********registro*****************

async function register(body) {

    try {
        const request = await fetch(baseUrl + 'users' + '/' + 'create', {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify(body)
        })

        if (request.ok === true) {
            toast()
            setTimeout(() => {
                window.location.assign("../../index.html")

            }, 4000)
        }

    } catch (err) {

        console.log(err);
    }

}

export {
    login,
    register
}

