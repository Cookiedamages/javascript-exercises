///---------1.--------///

const heyRed = document.createElement('p');
heyRed.setAttribute('style', 'color: red; background: black;');
heyRed.textContent = 'Hey I\'m red!';

document.body.appendChild(heyRed);

///---------2.--------///

const blueText = document.createElement('h3');
blueText.setAttribute('style', 'color: blue; background: green;');
blueText.textContent = 'I\'m a blue h3 element';

document.body.appendChild(blueText);

///---------3.--------///

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.setAttribute('style', 'background: pink; border: 2px solid black;');

container.appendChild(content);

///-----3.1----///

const content_h1 = document.createElement('h1');
content_h1.setAttribute('style', 'color: orange;');
content_h1.textContent = 'I\'m in a div';

content.appendChild(content_h1);

///-----3.2----///

const content_p = document.createElement('p');
content_p.textContent = 'ME TOO!';

content.appendChild(content_p);
