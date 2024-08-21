const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]


// #region ice cream

function orderCookieDoe() {
  let CookieDoe = iceCream[0]
  CookieDoe.quantity += 1
  console.log(CookieDoe, '🍪', 'ordering cookie doe')

  drawTotal()
}

function orderVanilla() {
  let Vanilla = iceCream[1]
  Vanilla.quantity += 1
  console.log(Vanilla, '🍦', 'ordering vanilla')

  drawTotal()
}


function orderStrawberry() {
  let Strawberry = iceCream[2]
  Strawberry.quantity += 1
  console.log(Strawberry, '🍓', 'ordering strawberry')


  drawTotal()
}


function orderSprinkles() {
  let Sprinkles = iceCream[3]
  Sprinkles.quantity += 1
  console.log(Sprinkles, 'ordering sprinkles')

  drawTotal()
}


function orderChocolateChips() {
  let ChocolateChips = iceCream[4]
  ChocolateChips.quantity += 1
  console.log(ChocolateChips, '🍫', 'ordering chocolate chips')

  drawTotal()
}

function orderCookieChunks() {
  let CookieChunks = iceCream[5]
  CookieChunks.quantity += 1
  console.log(CookieChunks, '🍪🍪', 'ordering cookie chunks')

  drawTotal()
}
// #endregion





function calculateOrderTotal() {
  let orderTotal = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    orderTotal += item.price * item.quantity

  }
  console.log(orderTotal);

  return orderTotal
}

function drawTotal() {
  let orderElem = document.getElementById('order')
  console.log(orderElem);
  let orderContent = ''
  for (let i = 0; i < iceCream.length; i++) {
    console.log(i, iceCream[i])
    let item = iceCream[i];
    console.log(`${item.quantity}x ${item.name} $${item.price}`);
    if (item.quantity > 0) {
      orderContent += `<p>${item.quantity}x ${item.name}- $${(item.price * item.quantity).toFixed(2)} </p>`
    }
  }
  console.log(orderContent)
  orderElem.innerHTML = orderContent


  let customerTotal = calculateOrderTotal()
  console.log('You owe us', customerTotal);
  let totalElem = document.getElementById('total')
  totalElem.innerText = customerTotal.toFixed(2)

}