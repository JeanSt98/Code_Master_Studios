document.addEventListener("DOMContentLoaded", function (e) {
    ConveyThis_Initializer.init({
      api_key: "pub_b65164c1a6cf3c91ec570d194dcf4f8f",
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
        const nameA = a.querySelector(".producto__nombre").textContent.toLowerCase(); // Get name, convert to lowercase for case-insensitive sorting
        const nameB = b.querySelector(".producto__nombre").textContent.toLowerCase();
        comparisonValue = nameA.localeCompare(nameB); // Use localeCompare for proper letter sorting
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