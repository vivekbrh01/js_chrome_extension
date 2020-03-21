"use strict";
//-------------------
//Primary code
//-------------------

let ul = document.querySelector('.list-wrapper');


function randomNumber(maxLength) {
    return Math.floor( Math.random() * maxLength ); 
}

const shuffled = data.sort( () => 0.5 - Math.random() );
let selected = shuffled.slice( 0, 3);

ul.innerHTML = selected.map( (displayShortcut) => {

    let generatedRandomNum = randomNumber(displayShortcut.shortcuts.length);

    let randomCommand = displayShortcut.shortcuts[generatedRandomNum];

    return `<li class="inner-container">
                <h6>${displayShortcut.category}</h6>
                <h2>${randomCommand.command}</h2>
                <p>${randomCommand.description}</p>
                </li>`;
	}).join(" ");

// -------------------
//  Future development
// ------------------- 

// Add refresh button
// Add google search-input
// Add search-input for commands
// Develop commands for windows and linux 
    