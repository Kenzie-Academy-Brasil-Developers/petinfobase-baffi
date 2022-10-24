/* Desenvolva seu código aqui */



const baseUrl = 'http://localhost:3333/'


async function login(body) {

    try {
        const request = await fetch(baseUrl + "login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify(body)
        })
        if (request.ok === true) {
            console.log(request);
            const response = await request.json();
            // toast("Sucesso!", "Login feito com sucesso");

            // localStorage.setItem("user", JSON.stringify(response));

            setTimeout(() => {
                window.location.replace("../pages/home/index.html")

            }, 4000)

        } else{
            toast("Erro!", "Senha esta incorreta");
        }


    } catch (err) {
        console.log(err);

    }
}

export {
    login
}

