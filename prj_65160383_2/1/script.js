const places = [
    { name: "Surin", images: ["img/place1_1.jpg", "img/place1_2.jpg", "img/place1_3.jpg", "img/place1_4.jpg"] },
    { name: "Chon Buri", images: ["img/place2_1.jpg", "img/place2_2.jpg", "img/place2_3.jpg", "img/place2_4.jpg"] },
    { name: "Rayong", images: ["img/place3_1.jpg", "img/place3_2.jpg", "img/place3_3.jpg", "img/place3_4.jpg"] }
  ];
  
  const placesList = document.getElementById("placesList");
  
  function displayPlaces(places) {
    placesList.innerHTML = "";
    places.forEach(place => {
      const placeCard = document.createElement("div");
      placeCard.classList.add("placeCard");
  
      const placeName = document.createElement("h2");
      placeName.textContent = place.name;
  
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("imageContainer");
      place.images.forEach(image => {
        const placeImage = document.createElement("img");
        placeImage.src = image;
        placeImage.alt = place.name;
        imageContainer.appendChild(placeImage);
      });
  
      placeCard.appendChild(placeName);
      placeCard.appendChild(imageContainer);
  
      placesList.appendChild(placeCard);
    });
  }
  
  // Initial display of places
  displayPlaces(places);
  
  // Search functionality
  document.getElementById("searchInput").addEventListener("input", function(event) {
    const searchValue = event.target.value.toLowerCase();
    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchValue));
    displayPlaces(filteredPlaces);
  });
  