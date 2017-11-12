document.addEventListener("DOMContentLoaded", ready);
function ready() {

var elem = document.querySelector('#targ');
console.log(elem);
elem.addEventListener("click", func1);
function func1() {
  console.log('111111');
}
//elem.removeEventListener("click", func1);
document.onclick = function(e) {
  console.log(e);
}

}
/*
console.log(this);
function run() {
  console.log(this);
}
run();
x = new run();
function (1) {
  console.log(this);
}*/
