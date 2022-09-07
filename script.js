let animated=document.querySelector('.animated');
let reset = document.querySelector('.reset')
animated.addEventListener('click',()=>{
  document.querySelector('.move0').style.left='450px';
  document.querySelector('.move1').style.left='450px';
  document.querySelector('.move2').style.left='450px';
  document.querySelector('.move3').style.left='450px';
  document.querySelector('.move4').style.left='450px';
})
reset.addEventListener('click',()=>{
  document.querySelector('.move0').style.left='0px';
  document.querySelector('.move1').style.left='0px';
  document.querySelector('.move2').style.left='0px';
  document.querySelector('.move3').style.left='0px';
  document.querySelector('.move4').style.left='0px';
})