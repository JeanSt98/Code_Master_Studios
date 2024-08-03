document.addEventListener("DOMContentLoaded", function (e) {
    ConveyThis_Initializer.init({
      api_key: process.env.CONVEY_THIS_API_KEY,
    });
  });
// Order Products
  const sortOptions = document.getElementById("sortOptions");
  const productList = document.getElementById("productList");
  
  sortOptions.addEventListener("change", function() {
    const selectedOption = this.value;
  
    const products = Array.from(productList.getElementsByClassName("producto"));
  
    products.sort((a, b) => {
      let comparisonValue;
  
      if (selectedOption === "asc") {
        // Sort by product name (ascending)
        const priceB = parseFloat(b.querySelector(".producto__precio").dataset.price);
        const priceA = parseFloat(a.querySelector(".producto__precio").dataset.price);
        comparisonValue = priceA - priceB;
      } else if (selectedOption === "desc") {
        // Sort by price (descending)
        const priceA = parseFloat(a.querySelector(".producto__precio").dataset.price);
        const priceB = parseFloat(b.querySelector(".producto__precio").dataset.price);
        comparisonValue = priceB - priceA;
      } else {
        // Default sorting: A to Z (ascending) by product name
        const nameA = a.querySelector(".producto__nombre").textContent.toLowerCase();
        const nameB = b.querySelector(".producto__nombre").textContent.toLowerCase();
        comparisonValue = nameA.localeCompare(nameB);
      }
  
      return comparisonValue;
    });
  
    productList.innerHTML = ""; // Clear existing products
    products.forEach(product => productList.appendChild(product));
  });