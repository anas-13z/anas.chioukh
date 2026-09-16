document.addEventListener('DOMContentLoaded', () => {

    // 1. Basculement Thème Sombre / Clair
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            document.body.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.body.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // 2. Filtre Dynamique des Projets (AP)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mettre à jour le bouton actif
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filtrer les cartes
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Gestionnaire du Formulaire de Contact
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        
        // Simulation d'un envoi réussi
        formStatus.style.color = '#38bdf8';
        formStatus.textContent = `Merci ${name}, votre message a bien été envoyé !`;

        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });
})
// 4. Gestionnaire de la Modale d'aperçu Document (iFrame)
const modal = document.getElementById('doc-modal');
const iframe = document.getElementById('doc-iframe');
const closeModalBtn = document.querySelector('.close-modal');
const previewBtns = document.querySelectorAll('.preview-btn');

previewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const docUrl = btn.getAttribute('data-doc');
        iframe.src = docUrl;
        modal.style.display = 'block';
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = ''; // Réinitialise l'iframe
});

// Fermer la modale si on clique en dehors de la fenêtre
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
    }
});