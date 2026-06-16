const foods = [
  { name: "ラーメン", price: 980, cal: 750 },
  { name: "ピザ", price: 1680, cal: 1100 },
  { name: "寿司", price: 1480, cal: 650 },
  { name: "唐揚げ弁当", price: 850, cal: 900 },
  { name: "焼肉", price: 2400, cal: 1300 },
  { name: "スイーツ", price: 720, cal: 480 }
];

let totalPrice = 0;
let totalCal = 0;

const menu = document.getElementById("menu");

foods.forEach(food => {
  const div = document.createElement("div");
  div.className = "food";
  div.innerHTML = `
    <h3>${food.name}</h3>
    <p>${food.price}円 / ${food.cal}kcal</p>
    <button onclick="addFood(${food.price}, ${food.cal})">カートに入れる</button>
  `;
  menu.appendChild(div);
});

function addFood(price, cal) {
  totalPrice += price;
  totalCal += cal;

  document.getElementById("totalPrice").textContent = totalPrice;
  document.getElementById("totalCal").textContent = totalCal;
}

function fakeOrder() {
  const result = document.getElementById("result");

  if (totalPrice === 0) {
    result.style.display = "block";
    result.innerHTML = "まずは食べたいものを選んでね。";
    return;
  }

  result.style.display = "block";
  result.innerHTML = `
    注文しませんでした！<br><br>
    あなたは <span>${totalPrice}円</span> と
    <span>${totalCal}kcal</span> を守りました 🎉
  `;
}
