
document.addEventListener("DOMContentLoaded", () => {
    const sound = new Audio("click.mp3");

    document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;

    e.preventDefault();

    sound.currentTime = 0;
    sound.play().catch(() => {});


    setTimeout(() => {
        window.location.href = link.href;
    }, 150); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".js-testimonials-slider", {
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
      el: ".js-testimonials-pagination",
      clickable: true
    },

    slidesPerView: 1,
    breakpoints: {
      767: {
        slidesPerView: 3
      }
    }
  });
});


const select = document.getElementById("mySelect");
const items = document.querySelectorAll(".item");

select.addEventListener("change", () => {
  const value = select.value;

  items.forEach(item => {
    if (item.id === value) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none";  
    }
  });
});

