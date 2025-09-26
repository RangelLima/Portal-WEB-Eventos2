// Modo escuro/claro
document.getElementById('toggleTheme').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// Botão "voltar ao topo"
const btnTop = document.getElementById('btnTop');
window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu mobile
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('active');
});

// Validar Formulário de Contato
function validarFormulario(event) {
  // Impede o envio padrão do formulário, permitindo a validação
  event.preventDefault(); 

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  
  // Verifica se os campos estão vazios
  if (nome === '' || mensagem === '') {
    alert('⚠️ Por favor, preencha todos os campos (Nome e Mensagem) para enviar o contato.');
    return false; // Validação falhou
  }

  // Se a validação passar (formulário preenchido)
  alert('✅ Mensagem enviada com sucesso! Em breve entraremos em contato.');

 // Limpar Campos
  document.getElementById('nome').value = '';
  document.getElementById('mensagem').value = '';
  
  return true; // Validação bem-sucedida
}

// Adiciona o event listener para a submissão do formulário
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', validarFormulario);
}

// Alternar a visibilidade dos detalhes do evento
function toggleDetails(eventId) {
    const eventCard = document.querySelector(`[data-event-id="${eventId}"]`);
    const details = eventCard.querySelector('.details');
    details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
}

