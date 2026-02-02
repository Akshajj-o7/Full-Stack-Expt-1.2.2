const products = [
    { name: "Wireless Headphones", price: 129.99, category: "electronics" },
    { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
    { name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
    { name: "Denim Jeans", price: 59.99, category: "clothing" }
];

const productGrid = document.getElementById("productGrid");
const categorySelect = document.getElementById("category");

function displayProducts(list) {
    productGrid.innerHTML = "";

    list.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${p.name}</h3>
            <div class="price">$${p.price.toFixed(2)}</div>
            <span class="tag ${p.category}">${p.category}</span>
        `;

        productGrid.appendChild(card);
    });
}

categorySelect.addEventListener("change", () => {
    const value = categorySelect.value;
    if (value === "all") {
        displayProducts(products);
    } else {
        displayProducts(products.filter(p => p.category === value));
    }
});

displayProducts(products);
