// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el){
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Confirmation on form submit (does not block actual submit)
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', function(e){
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    setTimeout(()=>{
      btn.textContent = 'Fale Conosco';
      btn.disabled = false;
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = '✅ Mensagem enviada com sucesso! Obrigado por entrar em contato.';
      document.body.appendChild(toast);
      setTimeout(()=> toast.classList.add('visible'), 50);
      setTimeout(()=>{ toast.classList.remove('visible'); setTimeout(()=>toast.remove(),300)}, 4200);
    }, 800);
  });
}

// Optional: add "Ver Portfólio" smooth behavior to services
const verPortfolioBtn = document.getElementById('ver-portfolio');
if(verPortfolioBtn){
  verPortfolioBtn.addEventListener('click', (e)=>{
    setTimeout(()=> {
      const serv = document.getElementById('servicos');
      if(serv) serv.focus();
    }, 600);
  });
}
