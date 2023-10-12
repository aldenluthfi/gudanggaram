async function refreshProducts() {
    document.getElementById("product_table").innerHTML = ""

    const products = await getProducts()
    let htmlString = '<p>you have {{ salts.count }} salts in your database</p>'

    products.forEach((item) => {
        htmlString += `
            ${item.name}
        `
    })

    document.getElementById("product_table").innerHTML = htmlString
}

refreshProducts()

function addProduct() {
    fetch("{% url 'main:create' %}", {
        method: "POST",
        body: new FormData(document.querySelector('#form'))
    }).then(refreshProducts)

    document.getElementById("form").reset()
    return false
}

document.getElementById("button_add").onclick = addProduct