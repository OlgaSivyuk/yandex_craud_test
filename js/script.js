document.addEventListener("DOMContentLoaded", function() {
    const slideContainer = document.querySelector('.players__slide-content');
    const slides = document.querySelectorAll('.players__card');
    const totalSlides = slides.length;
    const visibleSlides = 3; // Количество видимых слайдов
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;
    
    function showSlide(index) {
      const slidePosition = -index * slideWidth;
      slideContainer.style.transform = `translateX(${slidePosition}px)`;
      currentIndex = index;
      updateCounter();
      updateButtons();
    }
    
    function nextSlide() {
      if (currentIndex + visibleSlides < totalSlides) {
        showSlide(currentIndex + 1);
      } else {
        showSlide(0);
      }
    }
    
    function prevSlide() {
      if (currentIndex > 0) {
        showSlide(currentIndex - 1);
      } else {
        showSlide(totalSlides - visibleSlides);
      }
    }
    
    function updateCounter() {
      const currentSlideEnd = currentIndex + visibleSlides <= totalSlides ? currentIndex + visibleSlides : totalSlides;
      document.querySelector('.players__current-number').textContent = `${currentSlideEnd} / ${totalSlides}`;
    }
    
    function updateButtons() {
      const prevButton = document.querySelector('.players__button.prev');
      const nextButton = document.querySelector('.players__button.next');
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex + visibleSlides >= totalSlides;
    }
    
    document.querySelector('.players__button.prev').addEventListener('click', prevSlide);
    document.querySelector('.players__button.next').addEventListener('click', nextSlide);
    
    // Автоматическое переключение каждые 4 секунды
    setInterval(nextSlide, 4000);
    
    // Инициализация
    updateCounter();
    updateButtons();
  });
  