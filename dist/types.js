"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// numer
var total;
total = 0xff0;
// array (type[])
var items;
items = [1, 2, 3];
var num;
num = [1, 2, 3];
// tuple
var title;
title = [1, 'bar'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa)
var coisa;
coisa = [1, 'dois'];
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error('error');
}
// object
var cart;
cart = {
    key: 1
};
// Type Inference
var newmessage = "mensagem definida";
newmessage = "string nova";
window.addEventListener("click", function (e) {
    console.log(e.target);
    // console.log(e.foo)
});
