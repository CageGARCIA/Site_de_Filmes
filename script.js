    const Sae = document.getElementById("sae");
    const Legenda = document.getElementById("legenda");

    Sae.addEventListener("click", () => {
        
        Legenda.style.display = "block";
        
        setTimeout(() => {
            Legenda.style.display = "none";
        }, 5000); 
    });

    const Nagi = document.getElementById("nagi");
    const Legenda1 = document.getElementById("legenda1");

    Nagi.addEventListener("click", () => {
        
        Legenda1.style.display = "block";
        
        setTimeout(() => {
            Legenda1.style.display = "none";
        }, 5000); 
    });

    const Rin = document.getElementById("rinnie");
    const Legenda2 = document.getElementById("legenda2");

    Rin.addEventListener("click", () => {
        
        Legenda2.style.display = "block";
        
        setTimeout(() => {
            Legenda2.style.display = "none";
        }, 5000); 
    });
