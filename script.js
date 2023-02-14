function guardaformulario(){
    var formCliente = new Object();

    formCliente.nome = document.getElementById("nome").value
    formCliente.sobrenome = document.getElementById("sobrenome").value
    formCliente.idade = document.getElementById("idade").value
    formCliente.estadocivil = document.getElementById("estadocivil").value
    formCliente.rg = document.getElementById("rg").value
    formCliente.cpf = document.getElementById("cpf").value
    formCliente.celular = document.getElementById("celular").value
    formCliente.endereço = document.getElementById("endereço").value


    var json = JSON.stringify("formCliente");
    document.getElementById("nomeimprimir").innerHTML = "<h2>Informações Cadastradas </h2><br>" +  "Nome: " + formCliente.nome;
    document.getElementById("sobrenomeimprimir").innerHTML = "Sobrenome: " + formCliente.sobrenome;
    document.getElementById("idadeimprimir").innerHTML = "Idade: " + formCliente.idade;
    document.getElementById("estadocivilimprimir").innerHTML = "Estado Civil: " + formCliente.estadocivil;
    document.getElementById("rgimprimir").innerHTML = "RG: " + formCliente.rg;
    document.getElementById("cpfimprimir").innerHTML = "CPF: " + formCliente.cpf;
    document.getElementById("celularimprimir").innerHTML = "Celular: " + formCliente.celular;
    document.getElementById("endereçoimprimir").innerHTML = "Endereço: " + formCliente.endereço;
    

    var json = JSON.stringify("formCliente");
    console.log(json);

    console.log(formCliente.valueOf())

}