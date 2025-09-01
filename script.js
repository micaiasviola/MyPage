// Função original para scroll
function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({
            behavior: 'smooth'
        });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column', 2);
});

// Configuração para o particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "onresize": {
                "enable": true
            }
        }
    },
    "retina_detect": true
});

// Lógica para a Janela Modal de Projetos
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const projectCards = document.querySelectorAll('.features .card');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    // Mapeamento dos projetos (você pode adicionar mais aqui)
    const projects = {
        'C Documentation': {
            image: './imgs/c_project_preview.png', // Substitua pelo caminho da sua imagem
            title: 'Projeto em C',
            description: 'Detalhes completos sobre o projeto em C. Focado em eficiência e manipulação de arquivos.',
            link: 'https://github.com/seu-usuario/seu-projeto-c'
        },
        'Projetos': {
            image: './imgs/python_project_preview.png', // Substitua pelo caminho da sua imagem
            title: 'Projeto em Python',
            description: 'Descrição completa sobre o projeto em Python. Desenvolvido com Django e Pandas.',
            link: 'https://github.com/seu-usuario/seu-projeto-python'
        },
        'JavaScript': {
            image: './imgs/js_project_preview.png', // Substitua pelo caminho da sua imagem
            title: 'Projeto em JavaScript',
            description: 'Descrição completa sobre o projeto em JavaScript. Interfaces dinâmicas usando React.',
            link: 'https://github.com/seu-usuario/seu-projeto-js'
        },
        'Meu GitHub': {
            image: './imgs/mysql_project_preview.png', // Substitua pelo caminho da sua imagem
            title: 'Projeto em MySQL',
            description: 'Descrição completa sobre o projeto em MySQL. Focado em otimização e modelagem de dados.',
            link: 'https://github.com/seu-usuario/seu-projeto-mysql'
        }
    };

    // Abre a modal ao clicar em um card
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const cardTitle = card.getAttribute('data-project');
            const projectData = projects[cardTitle];

            if (projectData) {
                modalImage.src = projectData.image;
                modalTitle.textContent = projectData.title;
                modalDescription.textContent = projectData.description;
                modalLink.href = projectData.link;
                modal.classList.add('show');
            }
        });
    });

    // Fecha a modal ao clicar no botão 'x' ou fora da janela
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});