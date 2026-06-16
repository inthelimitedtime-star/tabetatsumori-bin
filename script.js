const foods = [
  {
    name: "ラーメン",
    emoji: "🍜",
    price: 980,
    cal: 750,
    desc: "深夜に一番あぶないやつ"
  },
  {
    name: "ピザ",
    emoji: "🍕",
    price: 1680,
    cal: 1100,
    desc: "一切れのつもりが箱ごといく"
  },
  {
    name: "寿司",
    emoji: "🍣",
    price: 1480,
    cal: 650,
    desc: "今日は贅沢したつもり"
  },
  {
    name: "唐揚げ弁当",
    emoji: "🍱",
    price: 850,
    cal: 900,
    desc: "揚げ物欲をここで成仏"
  },
  {
    name: "焼肉",
    emoji: "🥩",
    price: 2400,
    cal: 1300,
    desc: "財布と胃袋を守る高火力メニュー"
  },
  {
    name: "スイーツ",
    emoji: "🍰",
    price: 720,
    cal: 480,
    desc: "甘い誘惑を見ただけで満足"
  }
];

let totalPrice = 0;
let totalCal = 0;
let itemCount = 0;

const menu = document.getElementById("menu");

foods.forEach((food, index) => {
  const div = document.createElement("div");
  div.className = "food";
  div.innerHTML = `
    <div class="food-top">
      <div class="food-emoji">${food.emoji}</div>
      <div class="food-info">
        <h3>${food.name}</h3>
        <p class="food-desc">${food.desc}</p>
      </div>
    </div>

    <div class="food-meta">
      <span>${food.price.toLocaleString()}円</span>
      <span>${food.cal.toLocaleString()}kcal</span>
    </div>

    <button onclick="addFood(${index})">カートに入れる</button>
  `;
  menu.appendChild(div);
});

function addFood(index) {
  const food = foods[index];

  totalPrice += food.price;
  totalCal += food.cal;
  itemCount += 1;

  document.getElementById("totalPrice").textContent = totalPrice.toLocaleString();
  document.getElementById("totalCal").textContent = totalCal.toLocaleString();

  const result = document.getElementById("result");
  result.style.display = "block";
  result.innerHTML = `
    ${food.emoji} ${food.name} を我慢リストに追加しました。<br>
    現在 ${itemCount}品、${totalPrice.toLocaleString()}円 と ${totalCal.toLocaleString()}kcal を守るチャンス！
  `;
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
    あなたは <span>${totalPrice.toLocaleString()}円</span> と
    <span>${totalCal.toLocaleString()}kcal</span> を守りました 🎉
  `;
}
