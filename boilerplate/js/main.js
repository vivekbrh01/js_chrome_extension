// You js goes here

{/* <li class="inner-container">
    <h6>General</h6>
    <h2>⇧⌘P, F1</h2>
    <p>Show Command Palette</p>
</li>

<li class="inner-container">
    <h6>Basic editing</h6>
    <h2>⌥↓ / ⌥↑</h2>
    <p>Move line down/up</p>
</li>

<li class="inner-container">
    <h6>Multi-cursor and selection</h6>
    <h2>⌥ + click</h2>
    <p>Insert cursor</p>
</li> */}
"use strict";
// -------------------
//Primary code
// -------------------

let ul = document.querySelector('.list-wrapper');


function randomNumber(maxLength) {
    return Math.floor( Math.random() * maxLength ); 
}

ul.innerHTML = data.map(displayShortcuts => {

    let generatedRandomNum = randomNumber(displayShortcuts.shortcuts.length);

    let randomCommand = displayShortcuts.shortcuts[generatedRandomNum];

    return `<li class="inner-container">
        <h6>${displayShortcuts.category}</h6>
        <h2>${randomCommand.command}</h2>
        <p>${randomCommand.description}</p>
    </li>`
}).join(" ");



// -------------------
//  Future development
// ------------------- 




// -------------------
//  Methods 
// -------------------

// Display only 3 categories out of 13
// Make display height 80vh
// Add refresh button



// let ul = document.querySelector('.list-wrapper');

// function randomCategory( categoryLength ) {
//     let arr = Array.from(data);

//     console.log(arr);
    
//     let newCategory = Object.entries(data);

//     console.log(newCategory);

//     return Math.floor( Math.random() * categoryLength );
// }



// ul.innerHTML = data.map( displayShortcuts => {

//     let generatedRandomNum = randomCategory(displayShortcuts.shortcuts.length);

//     let randomCommand = displayShortcuts.shortcuts[generatedRandomNum];

//     return `<li class="inner-container">
//         <h6>${displayShortcuts.category}</h6>
//         <h2>${randomCommand.command}</h2>
//         <p>${randomCommand.description}</p>
//     </li>`
// }).join(" ");
    