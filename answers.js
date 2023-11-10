////////////////////////////////
// Easy Going
for (i=1; i<21; i++) {
    console.log(i)
}
////////////////////////////////


////////////////////////////////
// Get Even
for (i=0; i<201; i+=2) {
    console.log(i)
}
////////////////////////////////


////////////////////////////////
// Fizz Buzz
for (i=1; i<101; i++) {
    if (i%3===0 && i%5===0) {
       console.log("FizzBuzz")
    } else if (i%3===0) {
        console.log("Fizz")
    } else if (i%5===0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
////////////////////////////////


////////////////////////////////
// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 1
console.log(plantee)
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham city"
console.log(wolfy)
// Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins')
console.log(dart)
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = 'Gameboy'
console.log(wolfy)
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
const ninjas = ['Donatello','Leonardo','Raphael','Michaelangelo']
for  (const ninja of ninjas) {
    console.log(ninja.toUpperCase())
}
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////