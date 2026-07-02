

let endereco = "https://api.groq.com/openai/v1/chat/completions"
let chave ="minha chave"

async function gerarCodigo() {


    let textarea = document.querySelector(".texto-pagina").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer << chave fica aqui>>
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "system",
                    "content": `Você é um designer web premiado e Programador. 
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

                    Regras de resposta:
                    - Responda SOMENTE com HTML e CSS puros
                    - Não use crases, markdown ou explicações
                    - Não use tags <img>

                    Identidade visual (capriche e surpreenda):
                    - Invente uma paleta de cores única que combine com a essência do negócio
                    - Escolha uma Google Font marcante via @import
                    - Use emojis grandes no lugar de imagens
                    - Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

                    Estrutura da página:
                    - Header com nome do negócio e menu
                    - Hero impactante com título, subtítulo e botão CTA
                    - Seção de diferenciais com emojis
                    - Depoimento de cliente
                    - Footer com contato

Todo o conteúdo em português, criativo e específico para o negócio.`
                },
                {
                    "role": "user",
                    "content": textarea
                }
            ]
        })
    })

    if (!resposta.ok) {
        console.error("Erro na requisição:", resposta.status, resposta.statusText)
        return
    }

    let dados = await resposta.json()
   let resultado = dados.choices[0].message.content

   let espacoCodigo = document.querySelector(".bloco-codigo")
   let espacoSite = document.querySelector(".bloco-site")

   espacoCodigo.textContent = resultado
   espacoSite.srcdoc = resultado
}

