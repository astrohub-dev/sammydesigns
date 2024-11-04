document.querySelector(".fa-list").onclick = 
function() {
    document.querySelector(".menu").classList.toggle("show");
}

//agbada 
const products = [
    {
        image: "images/Agbada.jpeg",
        name: "SML-014",
        price: 15000000
      },
      {
        image: "images/dynamic-img-1.jpeg",
        name: "SML-019",
        price: 16500000
      },
      {
        image: "images/dynamic-img-2.jpeg",
        name: "SML-022",
        price: 13500000
      },
      {
        image: "images/dynamic-img-3.jpeg",
        name: "SML-026",
        price: 15000000
      },
      {
        image: "images/1.jpeg",
        name: "SML-028",
        price: 14000000
      },
      {
        image: "images/2.jpeg",
        name: "SML-029",
        price: 15000000
      },
      {
        image: "images/3.jpeg",
        name: "SML-031",
        price: 13500000
      },
      {
        image: "images/4.jpeg",
        name: "SML-034",
        price: 15000000
      },
      {
        image: "images/5.jpeg",
        name: "SML-035",
        price: 14500000
      },
      {
        image: "images/6.jpeg",
        name: "SML-039",
        price: 18500000
      },
      {
        image: "images/7.jpeg",
        name: "SML-040",
        price: 17000000
      },
      {
        image: "images/8.jpeg",
        name: "SML-044",
        price: 16500000
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
