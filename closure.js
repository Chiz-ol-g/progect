let i = 1;
let id;
let res;

function f() {
  if (i < 10) {
    res = `000${i}`;
  } else if (i >= 10 && i < 100) {
    res = `00${i}`;
  } else if (i >= 100 && i < 1000) {
    res = `0${i}`;
  } else {
    res = i;
  }
    i++;
  console.log(res);
}

id = setInterval(() => {
  if (i >= 9999) clearInterval(id);
  f();
}, 50);
