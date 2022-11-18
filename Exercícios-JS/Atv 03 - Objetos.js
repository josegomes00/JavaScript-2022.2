var usuario01 = {
    nome: 'José Gomes da Silva Filho',
    idade: 17,
    filiação: ['José Gomes da Silva', 'Vitória Régia Santos Lima Gomes da Silva'],
    endereço: {
        rua: 'Av. Mato Grosso',
        cidade: 'João Pessoa',
        estado: 'Paraíba'
    },
    dadosCompletos: function(){
        if (this.nome == '')
            return false;
        else if (this.idade == 0)
            return false;
        else if (this.filiação == '')
            return false;
        else if (this.endereço.rua == '')
            return false;
        else if (this.endereço.cidade == '')
            return false;
        else if (this.endereço.estado == '')
            return false;
        else
            return true;
    }
}

var usuario02 = {
    nome: 'Hellen Bianca Santos Lima Gomes da Silva',
    idade: 27,
    filiação: ['José Gomes da Silva', 'Vitória Régia Santos Lima Gomes da Silva'],
    endereço: {
        rua: 'Av. Mato Grosso',
        cidade: 'João Pessoa',
        estado: 'Paraíba'
    },
    dadosCompletos: function(){
        if (this.nome == '')
            return false;
        else if (this.idade == 0)
            return false;
        else if (this.filiação == '')
            return false;
        else if (this.endereço.rua == '')
            return false;
        else if (this.endereço.cidade == '')
            return false;
        else if (this.endereço.estado == '')
            return false;
        else
            return true;
    }
}

function imprimir(usuario01, usuario02){
    console.log('nome: ', usuario01.nome);
    console.log('idade: ', usuario01.idade);
    console.log('filiação: ', usuario01.filiação[0] + " e "+ usuario01.filiação[1]);
    console.log('endereço: ', usuario01.endereço.rua + ', ' + usuario01.endereço.cidade + ' - ' + usuario01.endereço.estado);
    console.log('Dados completos: ', usuario01.dadosCompletos());

    console.log('nome: ', usuario02.nome);
    console.log('idade: ', usuario02.idade);
    console.log('filiação: ', usuario02.filiação[0] + " e "+ usuario02.filiação[1]);
    console.log('endereço: ', usuario02.endereço.rua + ', ' + usuario02.endereço.cidade + ' - ' + usuario02.endereço.estado);
    console.log('Dados completos: ', usuario02.dadosCompletos());
}

imprimir(usuario01, usuario02);