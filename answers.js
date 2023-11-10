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
//Console log: the index of Titanic
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
for (const favMovie of favMovies) {
    if (favMovie === "Titanic"){
        console.log(favMovie)
    }
}
// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log(favMovies.sort())
//Use the method pop
console.log(favMovies.pop())
//push "Guardians of the Galaxy"
favMovies.push('Guardian of the Galaxy')
console.log(favMovies)
//push "Guardians of the Galaxy"
const reversed = favMovies.reverse()
console.log(reversed)
//Use the shift method
const firstElement = favMovies.shift()
console.log(firstElement)
//unshift
favMovies.unshift("There will be blood")
console.log(favMovies)
//splice "Django Unchained" and add "Avatar" 
for (i=0;i<favMovies.length;i++) {
    if (favMovies[i]==="Django Unchained"){
        favMovies.splice(i,1,"Avatar")
    }
    console.log(favMovies)
}
//slice the last half of the array
//store the value of your slice in a variable, console.log it 
const theMiddle = Math.round((favMovies.length-1)/2)
const lastHalf=favMovies.slice(theMiddle)
console.log(lastHalf)
//console.log the index of "Fast and Furious" 
const indexFF = favMovies.indexOf('Fast and Furious')
console.log(indexFF)
//We removed it from the array, what value do we get when we look for the index of something that is not in the array?
favMovies.splice(indexFF, 1)
console.log(favMovies.indexOf('Fast and Furious'))
//we get -1 for the 'Fast and furous index value'
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