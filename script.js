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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
});