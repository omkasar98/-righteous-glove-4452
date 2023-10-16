// API endpoint to fetch product data
const apiEndpoint = 'https://boaitandbaits-backend.onrender.com/cart';
  var product_id=null;
// Function to fetch product data from API
async function fetchProducts() {
  try {
    const response = await fetch(apiEndpoint);
    const products = await response.json();
    console.log(products)
    return products;
  } catch (error) {
    console.error(error);
  }
}

// Function to generate product card HTML
function generateProductCard(product) {
    product_id=`${product.id}`;
  return `
    <div class="product-card">
     <div class="img"> <img src="${product.image}" alt="${product.name}"></div>
      <div class="product-details">
       <div class="name"> <h3>${product.name}</h3></div>
       <div class="desc"> <p>${product.classification}</p></div>
      <div class="price">  <p>Price: $${product.price}</p></div>
      <div class="btn_btn"><button class="btn"  onclick="removeFromCart(${product.id})">Remove from cart</button></div>
      </div>
    </div>
  `;
}


// Function to remove a product from the cart
async function removeFromCart(productId) {
  try {
    const response = await fetch(apiEndpoint + '/' + productId, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to remove product from cart.');
    }

    const products = await fetchProducts();
    renderProductCards(products);
    generateSummaryList(products);
  } catch (error) {
    console.error(error);
  }
}

// Function to generate summary list HTML
function generateSummaryList(products) {
  const summaryList = document.getElementById('summary-list');
  summaryList.innerHTML = '';

  let totalPrice = 0;

  products.forEach(product => {
    const listItem = document.createElement('div');
    listItem.textContent = `${product.name}: $${Number(product.price).toFixed(2)}`;
    summaryList.appendChild(listItem);

    totalPrice += Number(product.price);
});


  const totalItem = document.createElement('h4');
  totalItem.textContent = `Order Total: $${totalPrice}`;
  summaryList.appendChild(totalItem);
}

// Function to render product cards on the page
function renderProductCards(products) {
  const productCards = document.getElementById('product-cards');
  productCards.innerHTML = '';

  products.forEach(product => {
    const cardHTML = generateProductCard(product);
    productCards.innerHTML += cardHTML;
  });
}

// Fetch products from API and render them on the page
fetchProducts()
  .then(products => {
    renderProductCards(products);
    generateSummaryList(products);
  })
  .catch(error => console.error(error));
