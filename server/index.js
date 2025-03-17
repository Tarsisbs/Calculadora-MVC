import express from 'express'
import cors from 'cors'
import mensagemInicial from './model/hello.js';
import { somar, subtrair, multiplicar, dividir, potencia } from './model/calc.js';

const app = express()

app.use(cors({
    origin: '*'
}));

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/msg', function (req, res) {
    const retorno = mensagemInicial()
    res.send(retorno)
})


app.post('/calc', (req, res)=>{
    const opc = req.body.opc
    const n1 = parseInt(req.body.n1)
    const n2 = parseInt(req.body.n2)
    console.log(opc)
    console.log(n1)
    console.log(n2)

    switch (opc) {
        case "+":
            const respSomar = somar(n1, n2)
            res.send(respSomar)
            break;
        case "-":
            const respSubtrair = subtrair(n1, n2)
            res.send(respSubtrair)
            break;
        case "*":
            const respMultiplicar = multiplicar(n1, n2)
            res.send(respMultiplicar)
            break;
        case "/":
            const respDividir = dividir(n1, n2)
            res.send(respDividir)
            break;

        case "^":
            const respPotencia = potencia(n1, n2)
            res.send(respPotencia)
            break;
    
        default:
            const erro = {err: "Operação não definida"}
            res.send(erro )
            break;
    }


    const retorno = {opc, n1, n2}
    res.send(retorno)

})

const port = 3000

app.listen(port, () =>{
     console.log(`Operando na porta ${port}`)
} )

