// Cursor personalizado
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, button, .botao-contato');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// Formulário de contato
const form = document.querySelector('.form-contato');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Houve um erro no envio. Tente novamente!');
        }
    });