<template>
  <div>
    <header>
      <h1>Tourism Application</h1>
      <input type="text" v-model="searchInput" placeholder="Search for a place...">
    </header>
  
    <div id="placesList">
      <div v-for="place in filteredPlaces" :key="place.name" class="placeCard">
        <h2>{{ place.name }}</h2>
        <div class="imageContainer">
          <img v-for="(image, index) in place.images" :src="image" :alt="`${place.name} Image ${index + 1}`" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        { name: "Surin", images: ["src/assets/img/place1_1.jpg", "src/assets/img/place1_2.jpg", "src/assets/img/place1_3.jpg", "src/assets/img/place1_4.jpg"] },
        { name: "Chon Buri", images: ["src/assets/img/place2_1.jpg", "src/assets/img/place2_2.jpg", "src/assets/img/place2_3.jpg", "src/assets/img/place2_4.jpg"] },
        { name: "Rayong", images: ["src/assets/img/place3_1.jpg", "src/assets/img/place3_2.jpg", "src/assets/img/place3_3.jpg", "src/assets/img/place3_4.jpg"] }
      ],
      searchInput: ""
    };
  },
  computed: {
    filteredPlaces() {
      return this.places.filter(place => place.name.toLowerCase().includes(this.searchInput.toLowerCase()));
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

h1 {
  margin: 0;
}

h2 {
  color: #000000;
}

#placesList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.placeCard {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.placeCard:hover {
  transform: translateY(-5px);
}

.placeCard h2 {
  margin-top: 0;
}

.placeCard img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

#searchInput {
  padding: 10px;
  margin: 20px auto;
  width: 80%;
  display: block;
}
</style>
