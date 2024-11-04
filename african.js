document.querySelector(".fa-list").onclick = 
function() {
    document.querySelector(".menu").classList.toggle("show");
}

//agbada 
const products = [
      {
        image: "images/44.jpg",
        name: "SML-081",
        price: 10500000
      },
      {
        image: "images/36.jpg",
        name: "SML-084",
        price: 11500000
      },
      {
        image: "images/33.jpg",
        name: "SML-094",
        price: 12500000
      },
      {
        image: "images/43.jpg",
        name: "SML-073",
        price: 10500000
      },
      {
        image: "images/37.jpg",
        name: "SML-078",
        price: 11100000
      },
      {
        image: "images/48.jpg",
        name: "SML-070",
        price: 11500000
      },
      {
        image: "images/31.jpg",
        name: "SML-096",
        price: 10500000
      },
      {
        image: "images/47.jpg",
        name: "SML-083",
        price: 12500000
      },
      {
        image: "images/35.jpg",
        name: "SML-088",
        price: 10000000
      },
      {
        image: "images/32.jpg",
        name: "SML-089",
        price: 10500000
      },
      {
        image: "images/46.jpg",
        name: "SML-099",
        price: 13500000
      },
      {
        image: "images/38.jpg",
        name: "SML-075",
        price: 10000000
      },
      {
        image: "images/42.jpg",
        name: "SML-097",
        price: 10000000
      },
      {
        image: "images/39.jpg",
        name: "SML-087",
        price: 10500000
      },
      {
        image: "images/45.jpg",
        name: "SML-066",
        price: 10500000
      },
      {
        image: "images/49.jpg",
        name: "SML-067",
        price: 10000000
      },
]

let productsHTML = '';
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        //products === the array name,
        //product === array element which is an object. 
        productsHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-price">
                    N${(product.price / 100).toFixed(2)}
                </div>
                <div class="product-spacer"></div>
            </div>
        `
    }

document.getElementById('mycontainer').innerHTML = productsHTML;
