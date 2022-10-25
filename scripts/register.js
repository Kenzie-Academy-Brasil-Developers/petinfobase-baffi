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