(function () {
  console.clear();

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sharp');
        entry.target.classList.remove('blurry');
      } else {
        entry.target.classList.add('blurry');
        entry.target.classList.remove('sharp');
      }
    });
  };

  const options = {
    threshold: 1
  };

  const observer = new IntersectionObserver(callback, options);

  const listItemElements = document.querySelectorAll('.list-item');

  listItemElements.forEach(element => {
    element.classList.add('blurry');
    observer.observe(element);
  });
})();


// Get the trigger-modal element
const triggerModal = document.querySelector('.trigger-modal');

// Add a click event listener to the trigger-modal element
triggerModal.addEventListener('click', () => {
  // Get the video id from the data-video-id attribute
  const videoId = triggerModal.getAttribute('data-video-id');

  // Create the YouTube video URL with the video id
  const videoUrl = `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0`;

  // Create a div to hold the iframe
  const modal = document.createElement('div');
  modal.classList.add('fullscreen-modal');

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('close');
  closeButton.innerHTML = 'X';

  // Create the iframe
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('allowfullscreen', '');

  // Add the iframe and close button to the modal
  modal.appendChild(closeButton);
  modal.appendChild(iframe);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to the close button
  closeButton.addEventListener('click', () => {
    // Remove the modal from the page
    document.body.removeChild(modal);
  });
});


