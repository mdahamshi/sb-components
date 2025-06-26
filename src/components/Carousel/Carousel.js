import "./Carousel.css";
export class Carousel {
  constructor(root, images = [], autoSlideDelay = 5000) {
    const rootContainer = document.createElement("div");
    rootContainer.classList.add("carousel");
    root.appendChild(rootContainer);
    this.root = rootContainer;
    this.images = images;
    this.autoSlideDelay = autoSlideDelay;
    this.currentSlide = 0;
    this.timer = null;

    this.buildCarousel();
    this.cacheElements();
    this.init();
  }

  buildCarousel() {
    this.root.innerHTML = "";

    const trackContainer = document.createElement("div");
    trackContainer.classList.add("carousel-track-container");

    const track = document.createElement("ul");
    track.classList.add("carousel-track");

    this.images.forEach((url) => {
      const li = document.createElement("li");
      li.classList.add("carousel-slide");

      const img = document.createElement("img");
      img.src = url;

      li.appendChild(img);
      track.appendChild(li);
    });

    trackContainer.appendChild(track);
    this.root.appendChild(trackContainer);

    const leftBtn = document.createElement("button");
    leftBtn.className = "carousel-button left";
    leftBtn.innerHTML = "&#10094;";

    const rightBtn = document.createElement("button");
    rightBtn.className = "carousel-button right";
    rightBtn.innerHTML = "&#10095;";

    this.root.appendChild(leftBtn);
    this.root.appendChild(rightBtn);

    const nav = document.createElement("div");
    nav.className = "carousel-nav";

    this.images.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "carousel-indicator";
      if (index === 0) dot.classList.add("current-slide");
      nav.appendChild(dot);
    });

    this.root.appendChild(nav);
  }

  cacheElements() {
    this.track = this.root.querySelector(".carousel-track");
    this.slides = Array.from(this.track.children);
    this.prevBtn = this.root.querySelector(".carousel-button.left");
    this.nextBtn = this.root.querySelector(".carousel-button.right");
    this.nav = this.root.querySelector(".carousel-nav");
    this.dots = Array.from(this.nav.children);
    this.slideWidth = this.slides[0].getBoundingClientRect().width;
  }

  init() {
    this.setSlidePositions();

    this.prevBtn.addEventListener("click", () =>
      this.moveToSlide(this.currentSlide - 1),
    );
    this.nextBtn.addEventListener("click", () =>
      this.moveToSlide(this.currentSlide + 1),
    );

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.moveToSlide(index));
    });

    this.startAutoSlide();

    this.root.addEventListener("mouseenter", () => this.stopAutoSlide());
    this.root.addEventListener("mouseleave", () => this.startAutoSlide());
  }

  setSlidePositions() {
    this.slideWidth = this.slides[0].getBoundingClientRect().width;
    this.slides.forEach((slide, i) => {
      slide.style.left = `${this.slideWidth * i}px`;
    });
  }

  moveToSlide(index) {
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;

    const amountToMove = -this.slideWidth * index;
    this.track.style.transform = `translateX(${amountToMove}px)`;

    this.dots[this.currentSlide].classList.remove("current-slide");
    this.dots[index].classList.add("current-slide");

    this.currentSlide = index;
  }

  startAutoSlide() {
    this.stopAutoSlide(); // prevent duplicates
    this.timer = setInterval(() => {
      this.moveToSlide(this.currentSlide + 1);
    }, this.autoSlideDelay);
  }

  stopAutoSlide() {
    clearInterval(this.timer);
  }
}
