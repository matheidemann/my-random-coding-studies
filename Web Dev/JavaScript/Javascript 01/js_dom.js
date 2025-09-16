// propriedades principais
console.log(window);
//console.dir(document)

// START - SELECTING ELEMENTS
// pega um elemento pelo seu ID
const my_btn = document.getElementById("btn");

// pega um elemento pelo sua class
const my_h1 = document.getElementsByClassName("title");
console.log(my_h1[0]);

// não funciona os métodos de array (forEach, por ex)
const my_li = document.getElementsByTagName("li");

// para acessar com o getElementsByTagName, é necessário usar o [], uma vez q ele retorna um HTMLCollection (array-like object)
// é possível transforma-lo em um array com o spread operator [...]
my_li[0].style.color = "red";

const better_li = [...my_li];
better_li.forEach(function (item) {
    console.log(item);
});

// na maioria dos casos vamos usar esses
// retorna um elemento, apenas a primeira ocorrência
document.querySelector(".number:last-child").style.color = "green";

// ele retorna um nodelist, todos as ocorrências
const my_li_nodelist = document.querySelectorAll(".number");

// END - SELECTING ELEMENTS
//
//
//
//
//
// START - CHILD, PARENT, SIBLINGS
// childs
const my_ul = document.querySelector("ul");
console.log(my_ul.childNodes);
console.log(my_ul.children);
console.log(my_ul.firstChild);
console.log(my_ul.lastChild);

// parent
console.log(my_ul.parentElement);
console.log(my_ul.parentElement.parentElement);

//siblings
console.log(better_li[0].nextSibling);
console.log(better_li[0].nextSibling.nextSibling);
console.log(better_li[4].previousSibling);
console.log(better_li[4].previousElementSibling);

// END - CHILD, PARENT, SIBLINGS
//
//
//
//
//
// START - OUTROS
// nodeValue & textContent
const title = document.querySelectorAll(".title");
console.log(title[0].firstChild.nodeValue);
console.log(title[0].textContent);

// getAttribute & setAttribute
const link = document.querySelectorAll(".link");
link[0].setAttribute("href", "www.youtube.com");

// classList className
title[0].className = "title red-color";
title[0].classList.add("white-text", "random");
title[0].classList.remove("random");
console.log(title[0].classList.contains("random"));

// createElement & createTextNode & appendChild
const body_div = document.createElement("div");
const some_text = document.createTextNode("a simple body div");
body_div.appendChild(some_text);
document.body.appendChild(body_div);
body_div.classList.add("red-color");

// insertBefore
document.body.insertBefore(body_div, title[0]);

// replaceChild
const new_body_div = document.createElement("newdiv");
const new_text = document.createTextNode("the new text is here");
new_body_div.appendChild(new_text);
document.body.replaceChild(new_body_div, body_div);

// prepend & innerText
const heading = document.createElement("h2");
heading.innerText = "hello there <3";
title[0].prepend(heading);

// remove && removeChild
better_li[2].remove(); // <- third
my_ul.removeChild(better_li[1]); // <- second

// innerHTML & textContent
console.log(title[0].textContent);
console.log(title[0].innerHTML);
title[0].innerHTML = "frango frito";
title[0].innerHTML = `<h2 class='zikinha'>KORIMGA HAHAHA</h2>`;

// END - OUTROS
//
//
//
//
//
// START - EVENTS
const btn2 = document.querySelector("#btn2");

// addEventListener - (event,  callback func)
// não invoque a callback func direto, ou ela vai rodar antes do evento
btn2.addEventListener("click", function () {
    console.log("you clicked me");
    btn2.classList.add("red-color");
});

function myAlert() {
    alert("Hello world!");
}

btn2.addEventListener("click", myAlert);

// DOMContentLoaded - quando todo DOM é carregado, esse evento trigga
window.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada com sucesso.");
});

// DOMContentLoaded - quando TUDO carrega, esse evento trigga
window.addEventListener("load", function () {
    console.log("Página 100% carregada com sucesso.");
});

// scroll
window.addEventListener("scroll", function () {
    console.log("Scrolled!");
    console.log(window.scrollY);
    console.log(window.scrollX);
});

// resize
window.addEventListener("resize", function () {
    console.log("resizando...");
});

// mouse events
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("mousedown", function () {
    console.log("mousedown");
    btn3.classList.add("red-color");
});

btn3.addEventListener("mouseup", function () {
    console.log("mouseup");
    btn3.classList.remove("red-color");
});

btn3.addEventListener("mouseenter", function () {
    console.log("mouseenter");
    btn3.classList.add("white-text");
});

btn3.addEventListener("mouseleave", function () {
    console.log("mouseleave");
    btn3.classList.remove("white-text");
});

// key inputs
const my_input = document.querySelector("#myinput");

my_input.addEventListener("keypress", function () {
    console.log("you pressed a key");
});

my_input.addEventListener("keydown", function () {
    console.log("keydown");
    console.log(my_input.value);
});

my_input.addEventListener("keyup", function () {
    console.log("keyup");
    console.log(my_input.value);
});

// event object as arg
const my_submit1 = document.querySelector("#submit1");
my_submit1.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.currentTarget); // o elemento que o event handler está attached
    console.log(e.target); // o elemento q vc está clicando
    console.log(e.type); // event type
});

// event propagation, bubbling, capturing
// preventpropagation = cancela o comportamento do evento se espalhar para outros elementos
// bubbling = de parent em parent até o objeto window
// capture = do objeto root até o target
const list_container = document.querySelector(".listcontainer");
const mylist = document.querySelector(".mylist");
const link1 = document.querySelector(".link");

function showBubbling(e) {
    console.log("currentTarget", e.currentTarget);
    console.log("target", e.target);
}

function stopPropagation(e) {
    console.log("you cliked on: ", e.target);
    e.stopPropagation();
}

mylist.addEventListener("click", stopPropagation);
list_container.addEventListener("click", showBubbling, { capture: true });

// Web Storage
localStorage.setItem("name", "john");
sessionStorage.setItem("name", "john");
const local_storage_name = localStorage.getItem("name");
console.log(local_storage_name);
localStorage.removeItem("name");
localStorage.clear();

// use array to localStorage
// JSON.stringify & JSON.parse
const people = ["marcos", "mateus", "marcelo"];
localStorage.setItem("people", JSON.stringify(people));
console.log(JSON.parse(localStorage.getItem("people"))[1]);

// setTimeout - roda uma vez
function sayHello(name, age) {
    alert(`Hello! I am ${name} and I am ${age} years old.`);
}

setTimeout(sayHello, 1000, "Matheus", "25");

const my_timeout = setTimeout(sayHello, 1000, "Peste", "20");
clearTimeout(my_timeout);

// setInterval - roda toda vez
function showCapybara() {
    console.log("capybara");
}

const my_interval = setInterval(showCapybara, 2000);
clearInterval(my_interval);

// Dimensões
// innerHeight - altura da window
console.log(window.innerHeight);

// innerWidth  - largura da window
console.log(window.innerWidth);

// getBoudingClientRect - retorna um DOMRect object, provendo informações sobre o tamanho de um elemento e sua posição relativa na viewport
const my_box = document.querySelector(".box");
console.log(my_box.getBoundingClientRect());
