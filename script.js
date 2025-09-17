let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}


setInterval(() => {
    moveSlide(1);
}, 4000);


showSlide(currentSlide);

  function enviarwhats() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const texto = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Gostaria de dizer: ${mensagem}`;
    const numero = "5568999008497"; 
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");

  }
