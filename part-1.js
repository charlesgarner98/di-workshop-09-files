var fs = require('fs') //Require fs for file handling

var fileContents = fs.readFileSync('names.txt', 'utf-8') //Read text from file
console.log('-- File Content --')
console.log(fileContents)

var fileArray = fileContents.split('\r\n')
console.log('-- File Array --')
console.log(fileArray)

var reversedArray = fileArray.reverse()
console.log('-- Reversed Array --')
console.log(reversedArray)

var reversedContents = reversedArray.join('\r\n')
console.log('-- Reversed Content --')
console.log(reversedContents)
fs.writeFileSync('names-reversed.txt', reversedContents, 'utf-8')

console.log('-- Reversed Names --')
for (var name of fileArray) {
  var fileName = 'reversedNames/' + name + '.txt'
  var nameArray = name.split("")
  var reversedName = nameArray.reverse().join("")
  console.log('Reversed Name: ' + reversedName)
  fs.writeFileSync(fileName, reversedName, 'utf-8')
}
