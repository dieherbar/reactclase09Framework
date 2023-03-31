//import { createRoot } from 'react-dom/client';
import Button from "./button.js";

// let myBoton = document.getElementById("abc");
// myBoton.innerHTML = Button;

let myApp = document.getElementById("myApp");

myApp.innerHTML = "Hello world en myApp";

myApp.innerHTML = myApp.innerHTML +  '<div id="reactApp"></div>';



let myReactApp = document.getElementById("reactApp")
 let root = ReactDOM.createRoot(myReactApp);
 root.render('Hello world from react');

//let myBoton = document.getElementById("abc");
root = ReactDOM.createRoot(document.getElementById("last"));
root.render(React.createElement(Button));