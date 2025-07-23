fetch('images.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById("gallery");
    images.forEach(image => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <img src="${image.src}" alt="${image.caption}" onclick="openLightbox(this)">
        <div class="caption">${image.caption}</div>
      `;
      gallery.appendChild(item);
    });
  });

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}