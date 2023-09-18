const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");
  const contentPopup = modal.querySelector(".popup-content");
  let idInterval;
  let count = -1000;

  const modalAnimate = () => {
    idInterval = requestAnimationFrame(modalAnimate);

    if (count < -50) {
      count = count + 40;
      contentPopup.style.transform = `translateX(${count}px)`;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if(window.outerHeight > 768) {
        modalAnimate();
      }
      
    });
  });
  
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('.popup-close')) {
      modal.style.display = "none";
    }
  })


};

export default modal;
