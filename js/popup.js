function initModal(modalID){
    // função para iniciar o pop-up || function to init pop-up

    // recebe o valor do DOM || recive the value from DOM
    const modal = document.getElementById(modalID);

    if(modal){                              // condicional para verificar a integridade do valor || if to verify the integrity of value
        modal.classList.add("mostrar");     // exibe o pop-up || display pop-up

        modal.addEventListener("click", (e) => {    // verifica os eventos || verify the events

            // eventos fora da tela ou no botão de fechar end the modal || events out of modal or in exit button end modal
            if(e.target.id == modalID || e.target.id == "close") {      // verifica || verify

                modal.classList.remove("mostrar");                      // fecha || close

            }

        });
    }
}