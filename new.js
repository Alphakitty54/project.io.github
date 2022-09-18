const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="—Pngtree—restaurant logo template design restaurant_4161125.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="user.png" alt=""></a>
                <a href="#"><img src="cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="project.html" class="link">home</a></li>
            <li class="link-item"><a href="pizza.html" class="link">pizza</a></li>
            <li class="link-item"><a href="burger.html" class="link">burger</a></li>
            <li class="link-item"><a href="dessert.html" class="link">dessert</a></li>
            <li class="link-item"><a href="drink.html" class="link">drink</a></li>
        </ul>
    `;
}

createNav();