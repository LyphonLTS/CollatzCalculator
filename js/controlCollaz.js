// inicia a função de cálculo com o click || init Collaz calc func with click
const inputClick = document.querySelector("#btn");
inputClick.addEventListener("click", () => collazCalc());

// inicia a função de cálculo com o enter || init Collaz calc func with enter
const input = document.getElementById("valEnter");
input.addEventListener("keyup", (e) => { 
    if (e.key === "Enter") { 
        collazCalc();
    }
});