import { productList } from '/products.js';

const productContainer = document.querySelector('.product-container');


// functions
function creatProduct(obj) {
    return `<div class="product-item">
            <img src=${obj.img} alt="">
            <div class="product-dtl">
                <header>
                    <h4${obj.title}</h4>
                    <h4>${obj.price}</h4>
                </header>
                <hr>
                <p>${obj.desc}</p>
            </div>
            </div>`;
}

// Event Listner

document.addEventListener('DOMContentLoaded', function () {

    let parse = new DOMParser();
    productList.forEach(item => {
        let productInnerHTML = creatProduct(item);
        let elem = parse.parseFromString(productInnerHTML, 'text/html');

        productContainer.append(elem.body.firstElementChild);
    });
});


