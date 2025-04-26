const products = [
    { name: "SAMSUNG M16 5G", category: "electronics", price: 11499, rating: 4.5, imageUrl: "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/D212311208_Category-page-hero._SX1035_QL85_FMpng_.png" }, // Placeholder image
    { name: "Victus by HP Laptop 15-fb0017ni AMD Ryzen 5 5600H", category: "electronics", price: 62490 , rating: 4.7, imageUrl: "https://img.evetech.co.za/repository/mobile/Laptop/ProImages/hp-victus-laptop-15-fb0017ni-15-gaming-laptop-1000px-v2-0003.webp" }, // Placeholder image
    { name: "The Adventures of Tom Sawyer - Mark Twain ", category: "books", price: 75, rating: 4.3, imageUrl: "https://m.media-amazon.com/images/I/71l6aEDzaFS._SL1500_.jpg" }, // Placeholder image
    { name: "SONY WH-CH1650 Wireless", category: "electronics", price: 149, rating: 4.2, imageUrl: "https://img.lazcdn.com/g/p/49306084c220d97b89e787f974f3d751.jpg_720x720q80.jpg" }, // Placeholder image
    { name: "Machine Tool Technology - Anurag Kumar", category: "books", price: 199, rating: 4.6, imageUrl: "https://m.media-amazon.com/images/I/81L6p+f4bxL.jpg" }, // Placeholder image
    { name: "Earpods", category: "electronics", price: 1499, rating: 4.2, imageUrl: "https://httpselectronicstore.com/cdn/shop/files/Mi_14.webp?v=1702967992&width=1445" }, // Placeholder image
    { name: "SAMSUNG IPS Borderless Flat 75Hz Monitor", category: "electronics", price: 8999, rating: 4.5, imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/bd/lf24t350fhwxxl/gallery/bd-t35f-lf24t350fhwxxl-467048291?$684_547_PNG$" }, // Placeholder image
    { name: "Portronics Toad 32 Wireless Optical Mouse", category: "electronics", price: 499, rating: 4.5, imageUrl: "Mouse.png" }, // Placeholder image
    { name: "BoAt Stone 358 Pro Portable Bluetooth Speaker with 14W boAt Signature Sound, RGB LED Design, 12 Hours Playback", category: "electronics", price: 1399, rating: 4.5, imageUrl: "Boat Speaker.png" }, // Placeholder image
    { name: "WHO AM I ? Michelle Rice- Gauvreau", category: "books", price: 149, rating: 4.6, imageUrl: "https://images-platform.99static.com//tRlzOL95K0z8vT7oPsjZhtjGHpw=/0x0:1470x1470/fit-in/500x500/99designs-contests-attachments/139/139757/attachment_139757373" }, // Placeholder image
    { name: "Python Programming Beginners Guide- Sundarrajan M ", category: "books", price: 350, rating: 4.6, imageUrl: "https://m.media-amazon.com/images/I/61ViPUXS8ZL._AC_UF1000,1000_QL80_.jpg" }, // Placeholder image
    { name: "The Java Programming Language - Ken Arnold (Author), James Gosling (Author), David Holmes (Author)", category: "books", price: 5460, rating: 4.6, imageUrl: "https://m.media-amazon.com/images/I/61Kg0j6ZHAL._AC_UF1000,1000_QL80_.jpg" }, // Placeholder image
    { name: " Coconut Wonder Multi Device Wireless Keyboard78 True Scissor Keys, 2.4g + 2(Bluetooth), Sleep Mode, Type C Rechargeable", category: "electronics", price: 1999, rating: 4.2, imageUrl: "Keyboard.png" }, // Placeholder image





];

function displayProducts(filteredProducts) {
    const list = document.getElementById("productList");
    list.innerHTML = ""; // Clear current list

    if (filteredProducts.length === 0) {
        // Display a message if no products are found
        const message = document.createElement("p");
        message.textContent = "No products found matching your criteria.";
        list.appendChild(message); // Append message to the list container
        return; // Exit the function
    }

    filteredProducts.forEach(p => {
        const li = document.createElement("li");
        li.classList.add('product-item'); // Add class for styling

        // --- Add Product Image ---
        const img = document.createElement('img');
        img.src = p.imageUrl;
        img.alt = p.name; // Add alt text for accessibility
        li.appendChild(img);

        // Create elements for name, price, and rating
        const nameElement = document.createElement('h3'); // Use h3 for product name
        nameElement.textContent = p.name;
        li.appendChild(nameElement);


        // Container for price and rating to place them side-by-side
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('product-details');


        const priceElement = document.createElement('p');
        priceElement.classList.add('product-price'); // Add class for price styling
        priceElement.textContent = `₹${p.price}`; // Display price
        detailsDiv.appendChild(priceElement);


        const ratingElement = document.createElement('p');
        ratingElement.classList.add('product-rating'); // Add class for rating styling
        ratingElement.innerHTML = `⭐${p.rating}`; // Use innerHTML for star icon
        detailsDiv.appendChild(ratingElement);

        // Append the details container to the list item
        li.appendChild(detailsDiv);


        // Append the list item to the product list
        list.appendChild(li);
    });
}

// Function to filter and sort products
function filterAndSort() {
    const category = document.getElementById("categoryFilter").value;
    const sort = document.getElementById("sort").value;

    let filtered = category === "all" ? products : products.filter(p => p.category === category);

    if (sort === "price") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    // 'default' sort does nothing, keeps original array order (or previous sort order)

    displayProducts(filtered);
}

// Add event listeners to filters and sort
document.getElementById("categoryFilter").onchange = filterAndSort;
document.getElementById("sort").onchange = filterAndSort;

// Initial load of products when the page loads
window.onload = () => displayProducts(products);