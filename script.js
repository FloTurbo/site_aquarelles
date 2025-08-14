fetch('images.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById("gallery");

    images.forEach(image => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      // Création de l'image
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.caption + " – Aquarelle de Flo";
      img.title = image.caption + " – Les Aquarelles de Flo";
      img.loading = "lazy";
      img.onclick = () => openLightbox(img);

      // Création de la légende
      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = image.caption;

      // Assemblage
      item.appendChild(img);
      item.appendChild(caption);
      gallery.appendChild(item);
    });
  })
  .catch(error => {
    console.error("Erreur lors du chargement des images :", error);
  });

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt; // On reprend l'alt pour le lightbox
  lightbox.style.display = "flex";
}
