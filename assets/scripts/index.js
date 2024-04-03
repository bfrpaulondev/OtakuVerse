// Adiciona um evento de clique ao botão "Explore Agora" no banner principal
document.querySelector('.banner-content .btn').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Scroll suave para a seção de produtos em destaque
    document.querySelector('.featured-products').scrollIntoView({
        behavior: 'smooth'
    });
});

// Adiciona um evento de clique aos botões "Ver Detalhes" dos produtos em destaque
document.querySelectorAll('.featured-products .btn-primary-card').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        // Lógica para mostrar os detalhes do produto, como abrir uma janela modal
        alert('Detalhes do produto serão exibidos aqui.');
    });
});

// Adiciona validação ao formulário de contato
document.querySelector('.contact form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    // Lógica de validação do formulário (exemplo simples)
    let nome = document.querySelector('.contact input[type="text"]').value;
    let email = document.querySelector('.contact input[type="email"]').value;
    let mensagem = document.querySelector('.contact textarea').value;

    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Lógica para enviar os dados do formulário para o servidor
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor (por exemplo, usando AJAX)
    }
});

