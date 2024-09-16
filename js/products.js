const status = document.querySelector('#status');
const galleryElement = document.getElementsByClassName('gallery')[0];
const productMasyv = [
    {
        name: "Куртка",
        price: "50$"
    },
    {
        name: "Шапка",
        price: "20$"
    },
    {
        name: "Штани",
        price: "60$"
    },
    {
        name: "Сорочка",
        price: "40$"
    },
    {
        name: "Футболка",
        price: "35$"
    },
    {
        name: "Сорочка",
        price: "40$"
    },
    {
        name: "Футболка",
        price: "35$"
    }
];

const imageUrl = 'https://placehold.co/140x180?text=car+image+placeholder';

for (let i = 0; i < productMasyv.length; ++i) {
    const product = productMasyv[i];

    // СТВОРЕННЯ ОСНОВНОГО ЕЛЕМЕНТА ПРОДУКТ
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    galleryElement.appendChild(productElement);

    // creating container elements
    const productSectionsElement = document.createElement('div');
    productSectionsElement.classList.add('product-sections');
    productElement.appendChild(productSectionsElement);

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageUrl);
    productSectionsElement.appendChild(imageElement);

    const titleElement = document.createElement('div');
    titleElement.classList.add('name');
    titleElement.innerHTML = product.name;
    productSectionsElement.appendChild(titleElement);

    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.innerHTML = product.price;
    productSectionsElement.appendChild(priceElement);
}

const productElements = document.getElementsByClassName('product');
for (let i = 0; i < productElements.length; ++i) {
    const product = productElements[i];
    product.addEventListener('click', (evt => {
        console.log('focused product');
        const name = product.querySelector('.name').innerText;
        status.innerHTML = 'You selected:' + name;
    }));
}

fetch('http://localhost:8080/price/calculate')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// const form = document.querySelector(".containerLogIn");
// const formButtons = document.querySelectorAll(".formButton");
// const formExit = document.querySelectorAll(".formbuttonExit");
// formButtons.forEach((el)=> {
//     el.addEventListener('click', (e) => {
//         form.classList.add('open');
//
//         event.preventDefault()
//     });
// });
// formExit.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         form.classList.remove('open')
//         event.preventDefault()
//     });
// });
