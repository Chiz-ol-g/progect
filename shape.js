class Shape{
    constructor(side, color){
       // this.name=name;
        this.side=side;
        this.color=color
    }
    static fill=1.1;
    static left =0;
    static top =0;
    draw(parent){
        let div=document.createElement('div');
        div.style.position=`absolute`;
        div.style.width=this.side+'px';
        div.style.height=this.side+'px';
        div.style.border=`1px solid black`;
        div.style.backgroundColor=this.color;
        div.style.opacity=Shape.fill-=0.002;
       
        div.style.marginLeft=Shape.left+'px';
        div.style.marginTop=Shape.top+'px';
        parent.append(div)
    }
    static brash(){
        Shape.fill=1.1
    }
}

let res = document.querySelector('#block')
let brash = document.querySelector('#fill')
let mode=0;

window.addEventListener('mousedown', ()=>{
  mode=1;
})  
window.addEventListener('mouseup', ()=>{
    mode=0;
  })  
window.addEventListener('mousemove', (e)=>{
    if(mode==1){
        Shape.left=e.clientX;
        Shape.top=e.clientY;
        let rec = new Shape(20, "red");
  
    rec.draw(res)
    }
  }) 
brash.onclick=()=>{
    Shape.brash()
}