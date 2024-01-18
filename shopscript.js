console.log(products)

let productsHTML = `<h2>Ninjago</h2>`

products.map(prud => {
    productsHTML +=
    `<article>
        <img src="website_images/PROD_${prud.imagefile}" alt="${prud.title}">
        <a href="#">${prud.category}</a>
        <h3>${prud.title}</h3>
        <span>Kr. ${prud.price},-</span>
        <button onclick="addToCart(${prud.prodid})">Legg i handlekurv</button>
    </article>`
})
// console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML

// Handlevogn funksjonalitet
document.getElementById("carttoggle").addEventListener("click", function(){
    const cart = document.getElementById("cart")
    cart.classList.toggle("show")
})


function addToCart(productid) {
    // console.log("addToCart kjører: " + productid)

    let exist = cart.findIndex(p => productid === p.product)
    console.log("Exists: " + exist)

    if(exist === -1) {
        cart.push({product: productid, quantity: 1})
    } else {
        cart[exist].quantity += 1
    }

    console.log(cart)
    updateCartDisplay()
}

function updateCartDisplay() {

    let cartCount = 0
    cart.map(p => cartCount  += p.quantity)
    document.getElementById("cartcount").innerHTML = cartCount

    let cartHTML = ""

    if(cart.length === 0) {
        cartHTML += "<li>Du har ingen produkter i handlevognen</li>"
    } else {
        cart.map((prod, index) => {
            let filterdProduct = products.filter(filterprod => prod.product === filterprod.prodid)
            console.log(filterdProduct)
            cartHTML += 
            `<li>
                <span class="title">${filterdProduct[0].title}</span>
                <span class="price">${filterdProduct[0].price},-</span>
                <span class="quantity">x${prod.quantity}</span>
                <span class="functions">
                    <button onclick="removeFromCart(${index})">X</button>
                </span>
            </li>`
        })
        cartHTML += `<li id="total"><span>Totalt: </span></li>`
    }
    document.getElementById("cartlist").innerHTML = cartHTML
}

function removeFromCart(index) {
    console.log("Removing" + index)

    if(cart[index].quantity > 1) {
        cart[index].quantity -= 1
    } else {
        cart.splice(index, 1)
    }
    updateCartDisplay()
}

updateCartDisplay()