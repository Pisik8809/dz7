document.addEventListener("DOMContentLoaded", ready);
function ready() {
 document.body.addEventListener("click", getTarget);
 function getTarget(e) {
    var target = event.target.getBoundingClientRect();
    console.log(target);
  }
  var car = document.getElementsByClassName('car')[0];
  car.addEventListener('click', carMove);
  function carMove() {
   if(event.target.hasAttribute('driver1')) {
     car.style.position = 'absolute';
     car.style.left = 400 +'px';
     console.log(car.style.left);
   }
   else if(event.target.hasAttribute('driver2')) {
     car.style.position = 'absolute';
     car.style.left = 700 +'px';
     console.log(car.style.left);
   }
   function cancel() {
     car.style.transform = 'rotateY(180deg)';
     car.style.left = 10 +'px';
   }
   setTimeout(cancel, 3500);
   function reset() {
     car.style.transform = 'rotateY(0deg)';
   }
   setTimeout(reset, 5000);
 }
}
