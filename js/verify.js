function verify() {
    // função para garantir que o usuário não irá para a próxima tela sem digitar um valor
    // func to ensure the user doesn't go to next screen without entering a value

    if(document.getElementById("valEnter").value==="") {    // validação || validation

        document.getElementById('btn').disabled = true;     // bloqueia o botão || blocks the button

    } else { 

        document.getElementById('btn').disabled = false;    // habilita o botão // enable the button

    }

}