let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')

let busket = JSON.parse(localStorage.getItem("data")) || []

let calculate = () => {
    let cartAmount = document.getElementById('cart-amount')
    let addItem = (busket.map((x) => x.item).reduce((i, j) => i + j, 0))
    cartAmount.innerHTML = addItem
}

calculate()


let generateCartItems = () => {
    if (busket.length !== 0) {
        return shoppingCart.innerHTML = busket.map((x) => {
            let { id, item } = x
            // selectId = document.getElementById(`quantity-${id}`)
            // console.log(id);
            let search = shopItemsData.find((y) => `quantity-${y.id}` === id)
            // console.log(search);
            return `
            <div class="cart-item">
                <img width=100 src="${search.img}">
                <div className="details">

                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.name}</P>
                            <p class="cart-item-price">$ ${search.price}</p>
                        </h4>
                        <i onclick="removeItem('${id}')" class="bi bi-x-lg"></i>
                    </div>

                    <div class="buttons new-btn">
                        <i onclick="decrement(${search.id})" class="bi bi-dash-lg"></i>
                        <div id="quantity-${search.id}" class="quantity">${item}</div>
                        <i onclick="increment(${search.id})" class="bi bi-plus-lg"></i>
                    </div>

                    <h3>$ ${item * search.price}</h3>
                </div>
            </div>
            `;
        }).join("")
    }
    else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="home-btn">Back to home</button>
        </a>
        `
    }
}

generateCartItems()

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
    generateCartItems()
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

    generateCartItems()

    localStorage.setItem("data", JSON.stringify(busket)) 
}

let update = (id) => {
    let search = busket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    calculate()
    totalAmount()
}


let removeItem = (id)=>{
    busket = busket.filter((x)=> x.id !== id)
    generateCartItems()
    localStorage.setItem("data", JSON.stringify(busket))
    calculate()
    totalAmount()
}

let clearCart = ()=>{
    busket=[]
    generateCartItems()
    localStorage.setItem("data", JSON.stringify(busket))
}

let totalAmount = (x)=>{
    if(busket.length !== 0){
        let amount = busket.map((x) =>{
            let {item, id} = x
            let search = shopItemsData.find((y) => `quantity-${y.id}` === id) || []
            return item * search.price
        })
        .reduce((x,y) => x + y, 0)
        label.innerHTML = `
        <h2>Total bill : $ ${amount}</h2>
        <button class="Checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear cart</button>
        `
    }
    else return
}

totalAmount()
