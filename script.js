
document.addEventListener("DOMContentLoaded", function() {
    // 1- Alterar o texto na seção "HOME"
    const homeText = document.querySelector('.hero-content h1');
    if (homeText) {
        homeText.textContent = "Bem–vindo ao Nosso Site";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 2- Alterar a imagem na classe "hero-content"
    const heroImage = document.querySelector('.hero-content img');
    if (heroImage) {
        heroImage.src = "assets/images/image.png";  // Substitua pelo caminho da nova imagem
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 3- Esconder o elemento com a classe "availability-content"
    const availabilityContent = document.querySelector('.availability-content');
    if (availabilityContent) {
        availabilityContent.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 4- Estilizar o parágrafo no rodapé
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) {
        footerParagraph.style.fontWeight = 'bold';
        footerParagraph.style.color = 'blue';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 5- Mover o elemento com a classe "find" pra agora ficar no hero
    const findElement = document.querySelector('.find');
    const heroElement = document.querySelector('.hero');
    if (findElement && heroElement) {
        heroElement.appendChild(findElement);  // Mover o "find" para dentro do "hero"
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 6- Adicionar comportamento ao link "Contact Us"
    const btnContact = document.querySelector('.find a');
    if (btnContact) {
        btnContact.id = 'btn-contact';  // Adiciona o ID ao link
        btnContact.addEventListener('click', function() {
            alert('O botão foi acionado!');
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 7- Adicionar nova opção no formulário "RENT"
    const selectElement = document.querySelector('form#rent select[name="location"]');
    if (selectElement) {
        const newOption = document.createElement('option');
        newOption.value = 'presidente-prudente';
        newOption.textContent = 'Presidente Prudente';
        selectElement.appendChild(newOption);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector('.navbar .navbar-list');
    
    if (navMenu) {
        const blogItem = Array.from(navMenu.querySelectorAll('li a')).find(a => a.textContent.trim().toLowerCase() === 'blog'.toLowerCase());
        
        if (blogItem) {
            // 9- Criar o item "ABOUT US"
            const aboutUsItem = document.createElement('li');
            aboutUsItem.textContent = 'ABOUT US';
            
            // Repetir a mesma classe dos outros itens
            aboutUsItem.classList.add('navbar-item');  // Classe para garantir que tenha o mesmo estilo
            
            // Inserir "ABOUT US" após o item "BLOG"
            navMenu.insertBefore(aboutUsItem, blogItem.parentElement.nextElementSibling);  // Inserir após "BLOG"
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 9- Validação do formulário de email no rodapé
    const emailInput = document.querySelector('footer input[type="text"]');
    const submitButton = document.querySelector('footer button');  // Selecionando o botão de envio

    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            const emailValue = emailInput.value.trim();

            // Validador de email
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            // Verificando se o campo de email está vazio
            if (emailValue === '') {
                event.preventDefault();  // Impede o envio do formulário
                console.log("Campo de email vazio!");  // Verifique se a condição está sendo acionada
                alert('O campo de email está vazio');
            }
            // Verificando se o email tem formato válido
            else if (!emailRegex.test(emailValue)) {
                event.preventDefault();  // Impede o envio do formulário
                console.log("Email inválido!");  // Verifica se a condição de email inválido está sendo acionada
                alert('O email informado não é válido');
            }
        });
    }
});
