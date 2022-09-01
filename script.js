const rect = {
  x1:2,
  y1:-3,
  x2:5,
  y2:0
};
const rect1 = {
  x1:2,
  y1:-3,
  x2:5,
  y2:4
};
function a(obj){
  
  obj.x3=obj.x2;
  obj.x4=obj.x3;
  obj.y3=obj.y2;
  obj.y4=obj.y1
  
}
a(rect1);
console.log(rect1)