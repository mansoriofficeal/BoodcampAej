// Fungsi untuk mengambil data makanan dari API berdasarkan kata kunci pencarian
function searchMeals(keyword) {
    // Bersihkan konten makanan sebelumnya
    document.getElementById("meal-container").innerHTML = "";
  
    // Buat request ke API menggunakan fetch
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => response.json())
      .then(data => {
        const meals = data.meals;
        if (meals) {
        meals.forEach(meal => {
        // Buat elemen div untuk menampilkan makanan
        const mealItem = document.createElement("div");
        mealItem.classList.add("meal-item");
              // Tambahkan gambar makanan
      const mealImage = document.createElement("img");
      mealImage.src = meal.strMealThumb;
      mealImage.alt = meal.strMeal;
      mealItem.appendChild(mealImage);

      // Tambahkan judul makanan
      const mealTitle = document.createElement("h3");
      mealTitle.textContent = meal.strMeal;
      mealItem.appendChild(mealTitle);

      // Tambahkan elemen makanan ke dalam container
      document.getElementById("meal-container").appendChild(mealItem);
    });
  } else {
    // Tampilkan pesan jika tidak ada hasil pencarian
    const noResult = document.createElement("p");
    noResult.textContent = "Tidak ada hasil pencarian.";
    document.getElementById("meal-container").appendChild(noResult);
  }
})
.catch(error => {
  console.log(error);
});
}

// Tangkap form pencarian saat disubmit
document.getElementById("search-form").addEventListener("submit", function(event) {
event.preventDefault(); // Mencegah refresh halaman

const keyword = document.getElementById("search-input").value;
searchMeals(keyword);
});