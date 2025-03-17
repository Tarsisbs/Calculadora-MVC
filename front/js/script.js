// selecionando o botão
const btn_calcular = document.querySelector("#btn_calcular")
const res = document.querySelector('.res')

// adicionando evento ao botão
btn_calcular.addEventListener('click', async()=>{
    const opc = document.querySelector('.opc').value
    const n1 = document.querySelector('.n1').value
    const n2 = document.querySelector('.n2').value

    const options = {
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     method: "POST",
     body: JSON.stringify({opc, n1, n2})
     }

    const url = "http://localhost:3000/calc"

    const resp = await fetch(url, options)
    console.log(resp)

    const retorno = await resp.json()
    console.log(retorno)

    res.textContent = `O resultado é: ${retorno.resultado}`
})

// Realizar a requisição para o BackENd




