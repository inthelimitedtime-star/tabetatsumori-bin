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
let lastShareText = "";

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

  const steps = [
    "注文を受け付けたつもりです 📱",
    "お店が調理しているつもりです 🍳",
    "配達員が向かっているつもりです 🛵",
    "玄関前に到着しない予定です 🚪"
  ];

  result.style.display = "block";
  result.innerHTML = `
    <div class="delivery-box">
      <div class="delivery-icon">🛵</div>
      <div id="deliveryText">${steps[0]}</div>
    </div>
  `;

  let stepIndex = 0;

  const interval = setInterval(() => {
    stepIndex++;

    const deliveryText = document.getElementById("deliveryText");

    if (stepIndex < steps.length) {
      deliveryText.innerHTML = steps[stepIndex];
    } else {
      clearInterval(interval);
      showFinalResult();
    }
  }, 1200);
}

function showFinalResult() {
  const result = document.getElementById("result");

  lastShareText = `食べたつもり便で、${totalPrice.toLocaleString()}円と${totalCal.toLocaleString()}kcalを守りました！`;

  result.innerHTML = `
    <div class="result-card">
      <div class="result-badge">配達されませんでした</div>
      <h2>食欲に勝利しました 🎉</h2>

      <div class="result-stats">
        <div>
          <span class="result-number">${totalPrice.toLocaleString()}</span>
          <span class="result-label">円守った</span>
        </div>
        <div>
          <span class="result-number">${totalCal.toLocaleString()}</span>
          <span class="result-label">kcal守った</span>
        </div>
      </div>

      <p class="result-message">
        注文しなかったあなた、えらい。<br>
        財布と胃袋が静かに拍手しています。
      </p>

      <button class="share-button" onclick="shareResult()">結果をシェアする</button>
    </div>
  `;
}

function shareResult() {
  const shareData = {
    title: "食べたつもり便",
    text: lastShareText,
    url: location.href
  };

  if (navigator.share) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(`${lastShareText}\n${location.href}`);
    alert("シェア文をコピーしました！");
  }
}
