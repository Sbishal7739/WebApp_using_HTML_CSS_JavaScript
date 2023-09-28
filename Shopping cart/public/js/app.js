const shop = document.getElementById('shop')
 

let busket = JSON.parse(localStorage.getItem("data")) || []


function generateShop() {
    return shop.innerHTML = shopItemsData.map((i) => {
        let { id, name, price, desc, img } = i
        // console.log(id);
        let search = busket.find((x) => x.id === `quantity-${id}`) || []
        // console.log(search.item);
        return `
        <div id=product-id-${id} class="item">
                <img src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quentity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id="quantity-${id}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
        </div>
        `;
    }).join("")
}
generateShop()

 


let increment = (id) => {
    let quantityElement = document.getElementById(`quantity-${id}`)
    let selectedItem = quantityElement.id
    let search = busket.find((x) => x.id === selectedItem)
    if (search === undefined) {
        busket.push({
            id: selectedItem,
            item: 1,
        })
    }
    else {
        search.item += 1
    }
    // console.log(busket);
    update(selectedItem)
    localStorage.setItem("data", JSON.stringify(busket))

}

let decrement = (id) => {
    let quantityElement = document.getElementById(`quantity-${id}`)
    let selectedItem = quantityElement.id
    let search = busket.find((x) => x.id === selectedItem)

    if(search === 0) return;

    else if (search === undefined) return;

    else {
        if(search !==0 ){
            search.item -= 1
        }
        else{
            return
        }
    }
    update(selectedItem)

    busket = busket.filter((x) => x.item !== 0)

    localStorage.setItem("data", JSON.stringify(busket)) 
}

let update = (id) => {
    let search = busket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    calculate()
    
}

let calculate = () => {
    let cartAmount = document.getElementById('cart-amount')
    let addItem = (busket.map((x) => x.item).reduce((i, j) => i + j, 0))
    cartAmount.innerHTML = addItem
}

calculate()

