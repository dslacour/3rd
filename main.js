window.onload = () => {
  const modalTriggerElements = document.querySelectorAll(".trigger-modal");
  const modalElement = document.querySelector(".modal");
  const modalCloser = document.querySelector(".modal-closer");
  const videoElement = document.querySelector(".modal-video");

  modalCloser.addEventListener("click", () => {
    videoElement.paused = true;
    videoElement.src = "";
    modalElement.style.display = "none";
  });

  modalTriggerElements.forEach((modalTrigger) => {
    modalTrigger.addEventListener("click", (e) => {
      const {
        dataset: { path },
      } = modalTrigger;

      modalElement.style.display = "block";
      videoElement.src = path;
    });
  });
};
