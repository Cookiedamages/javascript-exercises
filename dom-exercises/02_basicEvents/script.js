///--------Method 1----------///

//  <button onclick="alert('Hello World')">Click Me</button>

///--------Method 2----------///

//  <!-- the HTML file -->  //
//  <button id="btn">Click Me</button>

//  in the JavaScript file  //
//  const btn = document.querySelector('#btn');
//  btn.onclick = () => alert("Hello World");

///--------Method 3----------///                     <---- This on is the best solution

//  <!-- the HTML file -->  //
//  <button id="btn">Click Me Too</button>

//  the JavaScript file  //
//  const btn = document.querySelector('#btn');
//  btn.addEventListener('click', () => {
//    alert("Hello World");
//  });