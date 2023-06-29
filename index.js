const btn = document.getElementById("btn")
const conselho = document.getElementById("conselho")
const descricao = document.querySelector("h2")

async function pegarUrl(){
    const url = "https://api.adviceslip.com/advice"
    const ds = await fetch(url)
    const json = await ds.json()
    const jason = json.slip
    return jason
}

async function pegarId() {
    const id = await pegarUrl()
    const id2 = id.id
    conselho.innerHTML = `A D V I C E # ${id2}`
}

async function pegarConselho(){
    const id = await pegarUrl()
    const advice = id.advice
    descricao.innerHTML = advice
}

function funcaoPrincipal() {
    pegarUrl()
    pegarId()
    pegarConselho()
}

btn.addEventListener("click", (d)=>{
    d.preventDefault()

    pegarUrl()
    pegarId()
    pegarConselho()
})

funcaoPrincipal()
