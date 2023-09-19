const slaider = () => {
  const slaiderBlock = document.querySelector(".portfolio-content");
  const slaides = document.querySelectorAll(".portfolio-item");
  let dots = document.querySelectorAll(".dot");
  const portfolioDots = document.querySelector(".portfolio-dots");

  let currentSlide = 0;
  let interval;
  let taimerInterval = 2000;

  const addDot = () => {
    slaides.forEach((dot, index) => {
      const li = document.createElement("li");
      li.classList.add("dot");
      if (index == 0) {
        li.classList.add("dot-active");
      }
      portfolioDots.append(li);
    });
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlaid = () => {
    dots = document.querySelectorAll(".dot");
    prevSlide(slaides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;

    if (currentSlide >= slaides.length) {
      currentSlide = 0;
    }

    nextSlide(slaides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlaid = (timer = 1500) => {
    interval = setInterval(autoSlaid, timer);
  };

  const stopSlaid = () => {
    clearInterval(interval);
  };

  slaiderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slaides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slaides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slaides.length - 1;
    }

    nextSlide(slaides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  slaiderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlaid();
      }
    },
    true
  );
  slaiderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlaid(taimerInterval);
      }
    },
    true
  );
  addDot();
  startSlaid(taimerInterval);
};

export default slaider;
