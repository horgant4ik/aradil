document.addEventListener('DOMContentLoaded', function () {
    const catalogContainer = document.getElementById('catalog-container');
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    
    const books = [
        { id: 1, title: 'Гарри Поттер и Узник азкобана', author: 'Джоан Роулинг', price: 99.99, image: 'book1.jpeg' },
        { id: 2, title: 'Байцовский клуб', author: 'Чак Паланик', price: 76.99, image: 'book2.jpg' },
        { id: 3, title: 'Игра престолов', author: 'Джордж Р.Р. Мартин', price: 51.99, image: 'book3.png' },
        { id: 4, title: 'Зелёная миля', author: 'Стивен Кинг', price: 67.99, image: 'book4.png' },
        { id: 5, title: 'Робинг гуд', author: 'Дюма Александр', price: 24.99, image: 'book5.png' },
        { id: 6, title: 'Сумерки', author: 'Стефани Майер', price: 13.99, image: 'book6.png' },

    ];

    loadCatalog();

    function loadCatalog() {
        catalogContainer.innerHTML = '';
        books.forEach(book => {
            const bookElement = createBookElement(book);
            catalogContainer.appendChild(bookElement);
        });
    }

    function createBookElement(book) {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${book.id}">Добавить в карзину</button>
        `;

        const addToCartBtn = bookElement.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => addToCart(book));

        return bookElement;
    }

    function addToCart(book) {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${book.title}</span>
            <span>$${book.price.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(cartItem);

        updateTotal();
    }

    function updateTotal() {
        const cartItems = document.querySelectorAll('#cart-items li');
        let total = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('span:last-child').textContent.slice(1));
            total += price;
        });

        totalElement.textContent = `Общая цена: $${total.toFixed(2)}`;
    }
});
