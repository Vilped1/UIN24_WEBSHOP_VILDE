console.log(products)

let productsHTML = `<h2>Ninjago</h2>`

products.map(prud => {
    productsHTML +=
    `<article>
        <img src="website_images/PROD_${prud.imagefile}" alt="${prud.title}">
        <a href="#">${prud.category}</a>
        <h3>${prud.title}</h3>
        <span>Kr. ${prud.price},-</span>
        <button>Legg i handlekurv</button>
    </article>`
})
console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML