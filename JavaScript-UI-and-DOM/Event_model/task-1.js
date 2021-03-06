/*Create a function that takes an id or DOM element and:

If an id is provided, select the element
Finds all elements with class button or content within the provided element
Change the content of all .button elements with "hide"
When a .button is clicked:
Find the topmost .content element, that is before another .button and:
If the .content is visible:
Hide the .content
Change the content of the .button to "show"
If the .content is hidden:
Show the .content
Change the content of the .button to "hide"
If there isn't a .content element after the clicked .button and before other .button, do nothing
Throws if:
The provided DOM element is non-existant
The id is either not a string or does not select any DOM element*/

function solve() {
    return function(selector) {

        var element;

        if (typeof selector === 'string') {
            element = document.getElementById(selector);
        } else if (selector instanceof HTMLElement) {
            element = selector;
        } else {
            throw new Error('Invalid input');
        }

        var allButtons = element.getElementsByClassName('button');
        buttonsLength = allButtons.length;

        for (var i = 0; len = allButtons.length, i < len; i += 1) {
            var currButton = allButtons[i];

            currButton.innerHTML = 'hide';
            currButton.addEventListener('click', onButtonClick);
        }

        function onButtonClick(ev) {
            var clickedButton = ev.target;
            var nextContent = clickedButton.nextSibling;

            while (nextContent.className !== 'content') {
                nextContent = nextContent.nextElementSibling;
            }

            if (!nextContent) {
                return;
            }

            if (nextContent.style.display === 'none') {
                nextContent.style.display = '';
                clickedButton.innerHTML = 'hide';
            } else {
                nextContent.style.display = 'none';
                clickedButton.innerHTML = 'show';
            }
        }

    };
}
