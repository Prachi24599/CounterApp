const value = document.querySelector(".value");

function increment() {
  //let val = Number(value.textContent);
  let val = parseInt(value.innerText);
  val++;
  value.textContent = val;
}

const decrement = () => {
  //let val = Number(value.textContent);
  let val = parseInt(value.innerText);
  val--;
  value.textContent = val;
};
