// inicia a função do pop-up com o click || init pop-up func with click
const submitClick = document.querySelector("#btn");
submitClick.addEventListener("click", () => initModal("modal"));

// inicia a função do pop-up com o enter || init pop up func with enter
const submitEnter = document.getElementById("valEnter");
submitEnter.addEventListener("keyup", (e) => { 
    if (e.key === "Enter" && document.getElementById("valEnter").value !== "") { 
        initModal("modal");
    }
});