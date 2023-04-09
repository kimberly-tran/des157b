(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner1 = document.querySelector('#banner1');
    const banner2 = document.querySelector('#banner2');
    const sections = document.querySelectorAll('section')  // use query selector all instead of making a separate variable for each section (although, if you have a separate variable, don't need a for loop in the event listener)
    let mode = 'dark';  // variable sets the mode, so we can switch later

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner1.className = 'hidden';
            banner2.className = 'showing';
            button.className = 'switch';
            button.innerHTML = "back to earth";
            // loops through the HTML collection / array of sections to change each one
            for (const section of sections) {
                section.className = 'switch';
            }
            // flips the mode
            mode = 'light';
        } else { //mode isn't dark, so mode is light
            body.removeAttribute('class');
            banner2.className = 'hidden';
            banner1.className = 'showing';
            button.removeAttribute('class');
            button.innerHTML = "leave earth";
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()