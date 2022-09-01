export function mult(rows,cols) {
    let table=`<table style='color:red'>`;
    for(let i=0;i<rows;i++){
       table+=`<tr>`;
       for(let j=0; j<cols; j++){
        table+=`<td>${i*j}</td>`
       }
       table+=`</tr>`
    }
    return table;
  }
  
  document.body.innerHTML+=mult(10,10)
  