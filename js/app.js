// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el") //using the DOM//strings
let countEl = document.getElementById("count-el") //using the DOM//strings
let count = 0

console.log(saveEl)

function increment() {
// Change this to use the plus equal technique you've learned
    count += 1
    //count = count + 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    let countStr = count + " - "
    // 1. Grab the save-el paragrah and store it in a variable called saveEl
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    //counter back to zero after saving.
    countEl.textContent = 0
    count = 0
}
console.log("Let's count people on the subway!")
// Google:
// innerText alternative mdn