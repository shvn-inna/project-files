async function getResponce() {
    let responce = await fetch("tours.json")
    console.log("responce:\n", responce, "\n /responce: \n")
    let content = await responce.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 9)
    console.log("content.slice(0, 9)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <div class="tosee__item" style="margin-bottom: 3%">
            <div class="tosee__image">
                <img src=${content[key].image} height="300px">
            </div>
            <p class="tosee__header">${content[key].tour_name}</p>
            <p class="tosee__text">${content[key].tour_descr}</p>
            <p class="card-text"><b>${content[key].price} р.</b></p>
            <p class="card-text">${content[key].tour_date}</p>
            <input type="hidden" name= "vendor_code" value=${content[key].tour_date}>
            <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </div>
                `
    }
}
getResponce()