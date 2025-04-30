let cart = [];

function fetchProducts() {
  fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('products');
      data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `<strong>${item.name}</strong> -  ₹${item.price}<br>
          <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
          <button onclick='orderNow(${JSON.stringify(item)})'>Order Now</button>`;
        container.appendChild(div);
      });
    });
}

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function orderNow(item) {
  fetch('http://localhost:5000/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([item])
  })
  .then(res => res.json())
  .then(data => {
    if (data.order_id) {
      alert(`${data.message}\nOrder ID: ${data.order_id}\n\nUse this ID to check your order status.`);
    } else {
      alert(`Failed to place order`);
    }
  });
}

function renderCart() {
  const cartEl = document.getElementById('cart-list');
  cartEl.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - ₹${item.price}`;
    cartEl.appendChild(li);
    total += item.price;
  });
  document.getElementById('total').innerText = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  fetch('http://localhost:5000/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart)
  })
  .then(res => res.json())
  .then(data => {
    if (data.order_id) {
      alert(`${data.message}\nOrder ID: ${data.order_id}\n\nUse this ID to check your order status.`);
      cart = [];
      renderCart();
    } else {
      alert(`Failed to place order`);
    }
  });
}

function checkStatus() {
  const id = document.getElementById("order-id-input").value;
  if (!id) return alert("Enter Order ID!");
  fetch(`http://localhost:5000/status/${id}`)
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        document.getElementById("status-result").innerText = `Status: ${data.status}`;
      } else {
        document.getElementById("status-result").innerText = `${data.error}`;
      }
    });
}


fetchProducts();