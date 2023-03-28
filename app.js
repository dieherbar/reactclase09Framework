
let myApp = document.getElementById("myApp");

myApp.innerHTML = "Hello world";

myApp.innerHTML = myApp.innerHTML +  '<div id="reactApp"></div>';

const root = createRoot(document.getElementById("reactApp"));
root.render("<h1>Hello world from react</h1>");