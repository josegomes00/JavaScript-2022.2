const botao = document.querySelector("#send");

botao.addEventListener("click", function(e){

    e.preventDefault();
    const nome = document.querySelector("#nome");
    const nomeValue  = nome.value;

    const email = document.querySelector("#email");
    const emailValue = email.value;

    const idade = document.querySelector("#idade");
    var idadeValue = idade.value;
    idadeValue = parseInt(idadeValue)

    const maiorIdade = document.querySelector("#midade:checked");
    var maiorIdadeValue = maiorIdade.value;
    if (maiorIdadeValue === "true"){
        maiorIdadeValue = true
    }else if(maiorIdadeValue === "false"){
        maiorIdadeValue = false
    }

    if(idadeValue < 18 && maiorIdadeValue === true){
        maiorIdadeValue = "ERRO, USUÁRIO MENOR DE IDADE, MARCOU ERRADO NA CAIXINHA"
    }
    if(idadeValue >= 18 && maiorIdadeValue === false){
        maiorIdadeValue = "ERRO, USUÁRIO MAIOR DE IDADE, MARCOU ERRADO NA CAIXINHA"
    }

    const newsletter = document.querySelector("#newsletter");
    var newsletterValue;
    if (newsletter.checked){
        newsletterValue = true
    }else{
        newsletterValue =  false
    }

    const mensagem = document.querySelector("#mensagem")
    const mensagemValue = mensagem.value;

    var pessoaCadastrada ={
        nome: nomeValue,
        email: emailValue,
        idade: idadeValue,
        maiorIdade: maiorIdadeValue,
        newsletter: newsletterValue,
        mensagem: mensagemValue,
    }

    console.log("NOME: " + pessoaCadastrada.nome);
    console.log("E-MAIL: " + pessoaCadastrada.email);
    console.log("IDADE: " + pessoaCadastrada.idade)
    console.log("MAIOR DE IDADE: " + pessoaCadastrada.maiorIdade)
    console.log("DESEJA RECEBER NEWSLETTER: " + pessoaCadastrada.newsletter)
    console.log("MENSAGEM: " + pessoaCadastrada.mensagem);
    console.log("")

})
