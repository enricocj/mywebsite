document.addEventListener('DOMContentLoaded', function() {
    // Gestore clic per i link del menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', changeSection);
    });

    // Gestore clic per il bottone "Contattaci"
    document.querySelector('#cta-contatti').addEventListener('click', changeSection);

    function changeSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        showSection(targetId);
    }

    function showSection(targetId) {
        // Nascondi tutte le sezioni
        document.querySelectorAll('.container .section, .container .hero').forEach(section => {
            section.style.display = 'none';
        });

        // Mostra la sezione richiesta
        const targetSection = document.querySelector(targetId);
        if (targetId === '#home') {
            document.querySelector('.hero').style.display = 'flex'; // Per la hero section
        } else {
            document.querySelector('.hero').style.display = 'none'; // Nasconde la hero section per altre sezioni
            targetSection.style.display = 'block'; // Mostra la sezione richiesta
        }

        // Aggiorna l'highlight del menu, se presente
        document.querySelectorAll('nav ul li a').forEach(a => {
            a.classList.remove('nav-active');
            if(a.getAttribute('href') === targetId) {
                a.classList.add('nav-active');
            }
        });
    }
});
