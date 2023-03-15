// Adicionando a class laoading qndo clicar

function loading (event) {
    const button = event.currentTarget;
    button.classList.add('loading');
    button.innerHTML = `
        <i class="ph-circle-notch"></i>
        ${button.textContent}
    `;
}