async function getProducts() {
    return fetch("/debug/json").then((res) => res.json())
}

async function refreshSalts() {
    document.getElementById("datatable").innerHTML = ""
    const products = await getProducts();
    let counter = 0;
    let htmlString = `
        <tr>
    `

    products.forEach((item) => {
        if (counter < 10) {
            if (counter % 5 == 0) {
                htmlString += `
                </tr>
                <tr>
                `
            }
            htmlString += `
            <td>
                <img src="../static/images/vector/${(parseInt(item.fields.sha256sum, 16) % 22) + 1}.svg"/>
                <button class="delete-button" id="button_delete" onClick="deleteSalt('${item.fields.sha256sum}')">
                    Delete
                </button>
            </td>`
        }
        counter++
    })

    htmlString += "</tr>"
    document.getElementById("datatable").innerHTML = htmlString
    document.getElementById("salt_count").innerHTML = `You have ${products.length} salts in your database...`
}

refreshSalts()

function addSalts() {
    fetch("/create", {
        method: "POST",
        body: new FormData(document.querySelector('form'))
    }).then(refreshSalts)

    document.querySelector('form').reset()
}

document.getElementById("button_add").onclick = addSalts

function deleteSalt(hash) {
    fetch(`/delete/${hash}`, {
        method: "DELETE",
    }).then(refreshSalts);
}