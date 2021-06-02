import { productList } from '/products.js';

const productContainer = document.querySelector('.product-container');
const filterBtn = document.querySelector('.filter-btn');


// functions
function creatProduct(obj) {
    return `<div class="product-item">
            <img src=${obj.img} alt="">
            <div class="product-dtl">
                <header>
                    <h4>${obj.title}</h4>
                    <h4>${obj.price}</h4>
                </header>
                <hr>
                <p>${obj.desc}</p>
            </div>
            </div>`;
}

function appendProductList(productArr) {

    productContainer.innerHTML = '';
    let parse = new DOMParser();
    productArr.forEach(item => {
        let productInnerHTML = creatProduct(item);
        let elem = parse.parseFromString(productInnerHTML, 'text/html');

        productContainer.append(elem.body.firstElementChild);
    });
}

function addFilterBtn(products) {


    let categoryArr = ['all'];
    products.forEach(function (product) {
        if (!categoryArr.includes(product.category)) {
            categoryArr.push(product.category);
        }
    });

    categoryArr.forEach(function (category) {
        const btn = document.createElement('button');
        btn.textContent = category;
        filterBtn.append(btn);
    });


}

// Event Listner

document.addEventListener('DOMContentLoaded', function () {
    appendProductList(productList);
    addFilterBtn(productList);
});

filterBtn.addEventListener('click', function (event) {

    if (event.target.tagName == 'BUTTON') {
        const products = productList.filter(function (item) {
            return event.target.textContent == 'all' ? item : event.target.textContent == item.category;
        });
        appendProductList(products);
    }
});
