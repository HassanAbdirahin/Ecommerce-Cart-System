const items = document.querySelectorAll('.product');
const cartContent = document.querySelector('#cart-content');

const prices = [];

function openCart() {
    document.getElementById("cart-container").classList.add('active');
    document.getElementById("cart-icon").style.display = 'none';
}

function closeCart() {
    document.getElementById("cart-container").classList.remove('active');
    document.getElementById("cart-icon").style.display = 'block';
}

function addToCart(e) {
    if (e.target.classList.contains('add-cart')) {
        const price = parseFloat(removeDollarSign(e.target.previousElementSibling.textContent));
        prices.push(price);
        console.log(prices);
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const img = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
    const title = e.target.previousElementSibling.previousElementSibling.textContent;
    const totalEl = document.getElementById('total');
    totalEl.textContent = `Total: ${sum(prices).toFixed(2)}`;
    cartItem.innerHTML = `
    <img src="${img.src}" alt="">
    <p>${title}</p>
    <p class="cart-price">$${price}</p>
    `
    cartContent.appendChild(cartItem);
        modal(title);

    }
}

function modal(item) {
    const modal = document.querySelector('.modal');
    modal.classList.add('purchased');
    modal.innerHTML = '';
    const text = document.createElement('p');
    text.textContent = `${item} was added to cart`;
    modal.appendChild(text);
    setTimeout(() => {
        modal.innerHTML = '';
        modal.classList.remove('purchased');
    }, 2000);
}


items.forEach((item) => {
    item.addEventListener("click", (e) => {
        addToCart(e);
        modal(e.target.previousElementSibling.previousElementSibling.textContent);
    });
});




function removeDollarSign(inputString) {
    return inputString.replace(/\$/g, '');
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return Math.round(total);
}

