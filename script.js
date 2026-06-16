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
let selectedFoods = [];
let lastShareText = "";
let isOrdering = false;
let currentOrderSaved = false;

const HISTORY_KEY = "tabetatsumoriHistory";
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

createHistoryArea();
renderHistory();

function addFood(index) {
  const food = foods[index];

  totalPrice += food.price;
  totalCal += food.cal;
  itemCount += 1;
  selectedFoods.push(`${food.emoji}${food.name}`);
  currentOrderSaved = false;

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

  if (isOrdering) return;

  if (totalPrice === 0) {
    result.style.display = "block";
    result.innerHTML = "まずは食べたいものを選んでね。";
    return;
  }

  isOrdering = true;

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
      isOrdering = false;
      showFinalResult();
    }
  }, 1200);
}

function showFinalResult() {
  const result = document.getElementById("result");

  lastShareText = `食べたつもり便で、${totalPrice.toLocaleString()}円と${totalCal.toLocaleString()}kcalを守りました！`;

  if (!currentOrderSaved) {
    saveHistory();
    currentOrderSaved = true;
  }

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

  renderHistory();
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

function createHistoryArea() {
  const app = document.querySelector(".app");

  const historySection = document.createElement("section");
  historySection.className = "history-section";
  historySection.innerHTML = `
    <div class="history-header">
      <div>
        <h2>我慢の履歴</h2>
        <p>このスマホに保存されます</p>
      </div>
      <button class="clear-history-button" onclick="clearHistory()">全消し</button>
    </div>

    <div id="historyList"></div>
  `;

  app.appendChild(historySection);
}

function getHistory() {
  const history = localStorage.getItem(HISTORY_KEY);
  return history ? JSON.parse(history) : [];
}

function saveHistory() {
  const history = getHistory();

  const newRecord = {
    id: Date.now(),
    date: new Date().toLocaleString("ja-JP", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }),
    price: totalPrice,
    cal: totalCal,
    count: itemCount,
    foods: selectedFoods
  };

  history.unshift(newRecord);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function renderHistory() {
  const historyList = document.getElementById("historyList");
  const history = getHistory();

  if (!historyList) return;

  if (history.length === 0) {
    historyList.innerHTML = `
      <div class="empty-history">
        まだ履歴はありません。<br>
        注文したつもりになると、ここに記録されます。
      </div>
    `;
    return;
  }

  historyList.innerHTML = history.map(record => `
    <div class="history-card">
      <div class="history-date">${record.date}</div>
      <div class="history-main">
        <strong>${record.price.toLocaleString()}円</strong>
        <span>${record.cal.toLocaleString()}kcal</span>
      </div>
      <div class="history-foods">
        ${record.foods.slice(0, 4).join(" / ")}
        ${record.foods.length > 4 ? " ほか" : ""}
      </div>
    </div>
  `).join("");
}

function clearHistory() {
  const ok = confirm("履歴を全部消しますか？");

  if (!ok) return;

  localStorage.removeItem(HISTORY_KEY);
  renderHistory();

  alert("履歴を全部消しました。");
}
