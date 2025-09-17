// Depoimentos
const testimonials = [
  {
    name: "Alt Reformas",
    location: "São Paulo, SP",
    rating: 4.9,
    comment:
      "A Autopago transformou nosso negócio! Agora recebemos mensagens diariamente de clientes interessados, mandamos orçamentos constantemente e mantemos um fluxo sólido de obras fechadas.",
    image: "./img/depoimentos/logo da alt - no meio e cortado.png",
    roi: "+1800%",
    link: "https://altreformas.com/",
  },
  {
    name: "Studiomn",
    location: "São Paulo, SP",
    rating: 4.9,
    comment:
      "Graças à Autopago, consegui me destacar na internet, ficando à frente dos concorrentes. Recomendo muito o serviço!",
    image: "./img/depoimentos/studio.png",
    roi: "+3200%",
    link: "https://studiomn.com.br/",
  },
  {
    name: "Léo Cortes",
    location: "São Paulo, SP",
    rating: 4.8,
    comment:
      "O time da Autopago entende de estratégias digitais como ninguém. Eles realizam um trabalho transparente, eficiente e de alta qualidade!",
    image: "./img/depoimentos/logoLeo.png",
    roi: "+3200%",
    link: "https://maps.app.goo.gl/oVNzKVBQbxjcjqRh7?g_st=aw",
  },
  {
    name: "Reis",
    location: "São Paulo, SP",
    rating: 4.7,
    comment:
      "A Autopago posicionou minha empresa digitalmente de maneira estratégica, aumentando minha visibilidade e credibilidade em poucos dias.",
    image: "./img/depoimentos/logo tabacaria.png",
    roi: "+3200%",
    link: "https://maps.app.goo.gl/UtqTg23L4Y8dwykT9?g_st=aw",
  },
];

const altReformas = testimonials.find((t) => t.name === "Alt Reformas");
const otherTestimonials = testimonials.filter((t) => t.name !== "Alt Reformas");

const sortedTestimonials =
  window.innerWidth < 768
    ? [altReformas, ...otherTestimonials]
    : [otherTestimonials[0], altReformas, ...otherTestimonials.slice(1)];

// Initialize Swiper
const swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  rewind: false, // alternativa segura ao loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Generate testimonial slides
function generateTestimonials() {
  const swiperWrapper = document.querySelector(".swiper-wrapper-testimonials");

  sortedTestimonials.forEach((testimonial, index) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
           <div class=" flex flex-col relative p-8 border-2 border-gray-200 rounded-2xl hover:border-sky-500 transition-all mx-5 md:mx-4 lg:mx-0 ">
  <div class="flex items-center justify-between mb-8">
    <div class="   ">
     <img 
  src="${testimonial.image}" 
  alt="${testimonial.name}" 
  class="w-16 ${
    testimonial.name === "Alt Reformas" ? "rounded-none" : "rounded-full"
  }"
/>

    </div>

    <div>
      <h3 class="font-medium text-lg">${testimonial.name}</h3>
      <p class="text-gray-400">${testimonial.location}</p>
    </div>
 

  <div class="flex items-center gap-2 mb-4">
    <span class="font-medium">${testimonial.rating}</span>
    <img src="./img/depoimentos/star.png" alt="star" class="w-4 h-4">
  </div>
   </div>

  <p class="text-gray-600 mb-4">"${testimonial.comment}"</p>

  <div class="flex justify-between items-center text-sm">
  ${
    testimonial.name === "Alt Reformas"
      ? `
<div class="relative group" onclick="this.classList.toggle('show-tooltip')">
  <div class="bg-sky-50 text-sky-700 px-3 py-2 rounded-lg font-semibold border border-transparent group-hover:border-sky-700 transition-all duration-300 flex items-center space-x-2 cursor-default">
    <span>ROI: ${testimonial.roi}</span>
    <span class="bg-sky-200 text-sky-800 rounded-full px-2 py-0.5 text-xs font-bold">i</span>
  </div>

  <div class="absolute bottom-full left-3/4 transform -translate-x-1/2 mb-2 w-64 bg-white text-gray-700 text-sm border border-gray-300 rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none tooltip">
    ROI significa Retorno sobre o Investimento. No caso da Alt Reformas, o ROI foi de 18x — ou seja, a cada real investido, retornaram 18.
  </div>
</div>

  `
      : ""
  }

    <a href="${
      testimonial.link
    }" target="_blank" class="text-sky-600 font-medium hover:underline">
      Conheça a empresa
    </a>
  </div>
</div>
 `;

    swiperWrapper.appendChild(slide);
  });
}

// Call the function when the document is loaded
document.addEventListener("DOMContentLoaded", generateTestimonials);

// //icones home

function toggleTooltip(event, btn) {
  event.stopPropagation(); // impede que o clique afete o <a>
  const tooltip = btn.nextElementSibling;
  tooltip.classList.toggle("hidden");
}

// const icons = document.querySelectorAll(".social-icon");

// function animateOneIcon() {
//   // Escolhe um ícone aleatório
//   const randomIndex = Math.floor(Math.random() * icons.length);
//   const icon = icons[randomIndex];

//   // Aplica a animação
//   icon.classList.add("animate-bounce");

//   // Remove a animação após 1.2s
//   setTimeout(() => {
//     icon.classList.remove("animate-bounce");

//     // Espera 6 segundos antes de animar outro
//     setTimeout(animateOneIcon, 3000);
//   }, 1200);
// }

// // Inicia a sequência após o carregamento
// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(animateOneIcon, 2000); // espera inicial de 4s
// });

// secao do trafego pago

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#cards-container > div");
  const isDesktop = window.innerWidth >= 768;

  cards.forEach((card, index) => {
    if (isDesktop) {
      card.setAttribute("data-aos", "fade-right");
    } else {
      card.setAttribute(
        "data-aos",
        index % 2 === 0 ? "fade-left" : "fade-right"
      );
    }
  });
  // Seção imagem + texto
  const image = document.querySelector("#cards-container-2 img");
  const textBox = document.querySelector("#cards-container-2 div.bg-gray-100");

  if (isDesktop) {
    image.setAttribute("data-aos", "fade-right");
    textBox.setAttribute("data-aos", "fade-right");
  } else {
    image.setAttribute("data-aos", "fade-left");
    textBox.setAttribute("data-aos", "fade-right");
  }
});

//forms

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const errorDiv = document.getElementById("form-error");

  form.addEventListener("submit", function (e) {
    errorDiv.classList.add("hidden");
    errorDiv.textContent = "";

    const nome = document.getElementById("first-name").value.trim();
    const sobrenome = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    // Verificações básicas
    if (!nome || !sobrenome || !email || !mensagem) {
      e.preventDefault();
      errorDiv.textContent =
        "Por favor, preencha todos os campos obrigatórios.";
      errorDiv.classList.remove("hidden");
      return;
    }

    // Verificação de e-mail básico
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      e.preventDefault();
      errorDiv.textContent = "Insira um e-mail válido.";
      errorDiv.classList.remove("hidden");
      return;
    }

    // Se tudo estiver certo, o formulário será enviado normalmente
  });
});

//planos

function toggleTooltip(btn) {
  const tooltip = btn.nextElementSibling;
  const isVisible = tooltip.classList.contains("opacity-100");

  document.querySelectorAll(".tooltip").forEach((t) => {
    t.classList.remove("opacity-100", "pointer-events-auto");
    t.classList.add("opacity-0", "pointer-events-none");
  });

  if (!isVisible) {
    tooltip.classList.remove("opacity-0", "pointer-events-none");
    tooltip.classList.add("opacity-100", "pointer-events-auto");
  }
}

function showTooltip(btn) {
  if (window.innerWidth >= 640) {
    const tooltip = btn.nextElementSibling;
    tooltip.classList.remove("opacity-0", "pointer-events-none");
    tooltip.classList.add("opacity-100", "pointer-events-auto");
  }
}

function hideTooltip(btn) {
  if (window.innerWidth >= 640) {
    const tooltip = btn.nextElementSibling;
    tooltip.classList.remove("opacity-100", "pointer-events-auto");
    tooltip.classList.add("opacity-0", "pointer-events-none");
  }
}

//textos home
