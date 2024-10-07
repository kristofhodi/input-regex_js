let txt = "ehsnldgsljehws45dhsdes5fse42asfdsg"

let firstfive = txt.slice(0, 5)
console.log(firstfive)

let threeto8 = txt.substring(2, 9)
console.log(threeto8)

let fivetoend = txt.slice(4)
console.log(fivetoend)

let fivesixchrlong = txt.slice(4, 12)
console.log(fivesixchrlong)

let uppercase = txt.toUpperCase()
console.log(uppercase)

let result = ""
for(let i=1; i < txt.length; i++) {
    if (i%2 === 1) {
        result += txt[i].toUpperCase();
    } else {
        result += txt[i]
    }
}
console.log(result)

let etoE = txt.replace("e", "E")
console.log(etoE)

let splite = txt.split('e')
console.log(splite)