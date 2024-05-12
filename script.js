// Ajustar o volume da música para 5%
var minhaMusica = document.getElementById("minhaMusica");
minhaMusica.volume = 0.05;

// Função para pausar ou reproduzir a música quando o botão for clicado
document.addEventListener("DOMContentLoaded", function() {
    var minhaMusica = document.getElementById("minhaMusica");
    minhaMusica.volume = 0.05;

    var botaoMusica = document.getElementById('botaoMusica');
    var iconeMusica = document.getElementById('iconeMusica');

    botaoMusica.addEventListener('click', function() {
        if (minhaMusica.paused) {
            minhaMusica.play();
            iconeMusica.classList.remove('fa-play');
            iconeMusica.classList.add('fa-pause');
        } else {
            minhaMusica.pause();
            iconeMusica.classList.remove('fa-pause');
            iconeMusica.classList.add('fa-play');
        }
    });
});

// Função para navegar suavemente para as seções da página ao clicar nos links do menu
document.addEventListener("DOMContentLoaded", function() {
    // Selecionar todos os links no menu
    const linksMenu = document.querySelectorAll('.menu-desktop a');

    // Adicionar um ouvinte de evento de clique a cada link
    linksMenu.forEach(link => {
        link.addEventListener('click', function(event) {
            // Impedir o comportamento padrão de clicar no link
            event.preventDefault();

            // Obter o ID da seção para a qual deseja rolar
            const targetId = this.getAttribute('href').substring(1);

            // Selecione a seção alvo
            const targetSection = document.getElementById(targetId);

            // Role suavemente até a seção alvo
            targetSection.scrollIntoView({ behavior: "smooth"});
        });
    });
});