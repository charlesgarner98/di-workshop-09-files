var fs = require('fs') //Require fs for file handling

var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8') //Read text from file
console.log('-- File Contents --')
console.log(fileContents)

var data = JSON.parse(fileContents) //Parse json code
console.log('-- Parsed Content --')
console.log(data)

console.log('-- Individual Items --')
var totalCost = 0
for (var item of data.basket) {
  if (item.name == 'Candles') {
    item.quantity = 10
  }
  console.log(item.name + ' | ' + item.quantity + ' | $' + item.price * item.quantity)
  totalCost += item.price * item.quantity
}
console.log('Total Cost | $' + totalCost)
//Save to file
var jsonString = JSON.stringify(data, null, 2)
console.log('-- JSON string --')
console.log(jsonString)
fs.writeFileSync('new-basket.json', jsonString, 'utf-8')
