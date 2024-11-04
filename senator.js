document.querySelector(".fa-list").onclick = 
function() {
    document.querySelector(".menu").classList.toggle("show");
}

//agbada 
const products = [
      {
        image: "images/20.jpg",
        name: "SML-049",
        price: 17000000
      },
      {
        image: "images/21.jpg",
        name: "SML-054",
        price: 16500000
      },
      {
        image: "images/22.jpg",
        name: "SML-048",
        price: 16500000
      },
      {
        image: "images/23.jpg",
        name: "SML-055",
        price: 16500000
      },
      {
        image: "images/24.jpg",
        name: "SML-064",
        price: 16500000
      },
      {
        image: "images/10.jpeg",
        name: "SML-062",
        price: 15000000
      },
      {
        image: "images/25.jpg",
        name: "SML-056",
        price: 15000000
      },
      {
        image: "images/14.jpeg",
        name: "SML-068",
        price: 14000000
      },
      {
        image: "images/15.jpeg",
        name: "SML-049",
        price: 15000000
      },
      {
        image: "images/17.jpg",
        name: "SML-051",
        price: 15000000
      },
      {
        image: "images/16.jpeg",
        name: "SML-063",
        price: 13500000
      },
      {
        image: "images/18.jpg",
        name: "SML-065",
        price: 14500000
      },
      {
        image: "images/19.jpg",
        name: "SML-069",
        price: 18500000
      },
      {
        image: "images/senator.jpg",
        name: "SML-061",
        price: 18500000
      },
      {
        image: "images/13.jpeg",
        name: "SML-074",
        price: 16500000
      },
      {
        image: "images/11.jpeg",
        name: "SML-071",
        price: 16500000
      },
      {
        image: "images/12.jpeg",
        name: "SML-072",
        price: 13500000
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
