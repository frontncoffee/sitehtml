// Gerador do ano atual pro Footer
// Obtém o elemento com o ID "anoatual"
var spanAnoAtual = document.getElementById("anoatual");

// Obtém o ano atual
var anoAtual = new Date().getFullYear();

// Define o texto do elemento com o ano atual
spanAnoAtual.textContent = anoAtual;


//Comportamento do botao UP
var upButton = document.getElementById("upbtn");

// Adiciona um ouvinte de evento para detectar o scroll
window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Se o scroll for maior que 100px, torna o botão visível, caso contrário, o torna invisível
    if (scrollPosition > 200) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
});

// Adiciona um ouvinte de evento para rolar até o topo ao clicar no botão
upButton.addEventListener("click", function () {
    // Rola suavemente até o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//menu target
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    // Verifica se a seção existe antes de rolar até ela
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}