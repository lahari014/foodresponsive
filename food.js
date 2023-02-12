let home = document.getElementById("home");
let products = document.getElementById("products");
let contact = document.getElementById("contact");
let services = document.getElementById("services");
let about = document.getElementById("about");
home.onclick = function() {
    home.style.color = "#F99417";
    products.style.color = "black";
    services.style.color = "black";
    contact.style.color = "black";
    about.style.color = "black";
};
products.onclick = function() {
    products.style.color = "#F99417";
    home.style.color = "black";
    services.style.color = "black";
    contact.style.color = "black";
    about.style.color = "black";
};
services.onclick = function() {
    services.style.color = "#F99417";
    products.style.color = "black";
    home.style.color = "black";
    contact.style.color = "black";
    about.style.color = "black";
};
contact.onclick = function() {
    contact.style.color = "#F99417";
    products.style.color = "black";
    services.style.color = "black";
    home.style.color = "black";
    about.style.color = "black";
};
about.onclick = function() {
    about.style.color = "#F99417";
    products.style.color = "black";
    services.style.color = "black";
    contact.style.color = "black";
    home.style.color = "black";
};