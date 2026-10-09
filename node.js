document.addEventListener("DOMContentLoaded", () => {
  const githubUrl = "https://github.com/vitorfonsecamo2009-wq";
  
  // Atualiza apenas os links direcionados ao perfil principal do GitHub
  document.querySelectorAll(".github-target").forEach(link => {
    link.href = githubUrl;
    link.target = "_blank";
  });

  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const themeIcon = themeToggleBtn.querySelector(".theme-icon");
      if (themeIcon) {
        themeIcon.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
      }
    });
  }

  const telefoneInput = document.getElementById("telefone");
  if (telefoneInput) {
    telefoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
      e.target.value = value;
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone") ? document.getElementById("telefone").value.trim() : "ok";
      const mensagem = document.getElementById("mensagem").value.trim();
      const errNome = document.getElementById("err-nome");
      const errEmail = document.getElementById("err-email");
      const errTelefone = document.getElementById("err-telefone");
      const errMensagem = document.getElementById("err-mensagem");
      if (errNome) errNome.style.display = nome ? "none" : "block";
      if (errEmail) errEmail.style.display = (email && email.includes("@")) ? "none" : "block";
      if (errTelefone) errTelefone.style.display = telefone.length >= 14 ? "none" : "block";
      if (errMensagem) errMensagem.style.display = mensagem ? "none" : "block";
      if (nome && email && email.includes("@") && telefone.length >= 14 && mensagem) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      }
    });
  }
  initTypewriter();
});

function initTypewriter() {
  const targetElement = document.getElementById("typing-text");
  if (!targetElement) return;
  const phrases = [
    "DESENVOLVEDOR BACKEND",
    "ENTUSIASTA EM TECNOLOGIA"
  ];
  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = true;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const delayAfterType = 2000;
  const delayAfterDelete = 500;
  
  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      targetElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      targetElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && charIndex === currentPhrase.length) {
      nextSpeed = delayAfterType;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      nextSpeed = delayAfterDelete;
    }
    setTimeout(typeLoop, nextSpeed);
  }
  setTimeout(typeLoop, delayAfterType);
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card, .skill-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;     
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale3d(1.03, 1.03, 1.03)`;
      card.style.transition = 'transform 0.1s ease-out';
      const shadowX = (centerX - x) / 8;
      const shadowY = (centerY - y) / 8;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 255, 136, 0.15), 0 10px 20px rgba(0, 0, 0, 0.3)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
      card.style.boxShadow = '';
      card.style.transition = 'transform 0.4s ease-out, box-shadow 0.4s ease-out';
    });
  });
});

const btnTop = document.createElement('button');
btnTop.innerHTML = '↑';
btnTop.id = 'back-to-top';
btnTop.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 18px;
  background-color: #00ff88;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  z-index: 1000;
  transition: opacity 0.3s;`;
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const infoRows = document.querySelectorAll('.info-row, .about-card p, [class*="info"]');
  infoRows.forEach(row => {
    row.style.transition = 'all 0.25s ease';
    row.style.padding = '4px 8px';
    row.style.borderRadius = '4px';

    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(0, 255, 136, 0.05)';
      row.style.borderLeft = '2px solid #00ff88';
      row.style.paddingLeft = '12px';
    });
    row.addEventListener('mouseleave', () => {
      row.style.background = 'transparent';
      row.style.borderLeft = '2px solid transparent';
      row.style.paddingLeft = '8px';
    });
  });
});