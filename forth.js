let ball = document.getElementsByClassName("ball");
let timer = document.getElementById("timer");
ball[0].style.backgroundColor = 'red';
let t = [6,2,5];
let judge = true;


function shift(order,color) {
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      ball[order].style.backgroundColor = 'grey';
      ball[(order+1)%3].style.backgroundColor = color;
      timer.style.color = color;
      timer.innerHTML = t[(order+1)%3];
      resolve();
    },t[order]*1000);
  })
}

async function asyncfn() {
  do {
    await shift(0,'green');
    await shift(1,'yellow');
    await shift(2,'red');
  }while(1);
};

setInterval(() => {
  if (timer.innerHTML != 1) {timer.innerHTML--;}
  // timer.innerHTML--;
},1000);

asyncfn();