'use strict';

const STORAGE_KEY = 'tabetatsumori_mvp_v02';

const MENUS = [
  { id: 'ramen', name: 'ラーメン', emoji: '🍜', price: 980, cal: 750, category: 'ラーメン', desc: '深夜に一番あぶないやつ' },
  { id: 'pizza', name: 'ピザ', emoji: '🍕', price: 1680, cal: 1100, category: 'ファストフード', desc: '一切れのつもりが箱ごといく' },
  { id: 'sushi', name: '寿司', emoji: '🍣', price: 1480, cal: 650, category: '外食', desc: '今日は贅沢したつもり' },
  { id: 'karaage', name: '唐揚げ弁当', emoji: '🍱', price: 850, cal: 900, category: '弁当', desc: '揚げ物欲をここで成仏' },
  { id: 'yakiniku', name: '焼肉', emoji: '🥩', price: 2400, cal: 1300, category: '外食', desc: '財布と胃袋を守る高火力メニュー' },
  { id: 'sweets', name: 'コンビニスイーツ', emoji: '🍰', price: 420, cal: 330, category: 'スイーツ', desc: 'レジ横の甘い罠' },
  { id: 'cafe', name: 'カフェラテ', emoji: '☕', price: 480, cal: 220, category: 'ドリンク', desc: 'なんとなく買う一杯を今日は見送り' },
  { id: 'ubereats', name: 'Uber Eats', emoji: '🛵', price: 2300, cal: 1200, category: 'デリバリー', desc: '配達料まで守る大勝利' },
  { id: 'snack', name: '夜食セット', emoji: '🌙', price: 780, cal: 690, category: '夜食', desc: '寝る前の胃袋会議を閉会' },
  { id: 'burger', name: 'バーガーセット', emoji: '🍔', price: 950, cal: 880, category: 'ファストフード', desc: 'ポテトの誘惑ごと回避' }
];

const PRAISES = [
  'その一品、今日は未来の財布に預けました。',
  '食べてないのに達成感だけ届きました。',
  '誘惑に勝った。これはもう小さな優勝です。',
  '今日のあなた、食欲へのディフェンスが固い。',
  '胃袋は静かに、財布はにっこりしています。',
  '配達されなかったけど、成果はちゃんと届きました。'
];

const BADGES = [
  { id: 'first', icon: '🎉', name: '初注文したつもり', desc: '1回記録する', ok: s => s.history.length >= 1 },
  { id: 'three', icon: '🔥', name: '3回防衛', desc: '3回記録する', ok: s => s.history.length >= 3 },
  { id: 'week', icon: '📦', name: '7回配達キャンセル', desc: '7回記録する', ok: s => s.history.length >= 7 },
  { id: 'money5000', icon: '💰', name: '5,000円防衛', desc: '累計5,000円以上', ok: s => total(s.history).price >= 5000 },
  { id: 'money10000', icon: '👑', name: '1万円防衛', desc: '累計10,000円以上', ok: s => total(s.history).price >= 10000 },
  { id: 'streak3', icon: '📅', name: '3日連続', desc: '3日連続で記録', ok: s => streakInfo(s.history).current >= 3 },
  { id: 'favorite', icon: '⭐', name: 'お気に入り職人', desc: 'お気に入りを1件登録', ok: s => s.favorites.length >= 1 },
  { id: 'share', icon: '📣', name: '布教係', desc: 'シェアを1回使う', ok: s => s.usage.shareCount >= 1 || s.usage.imageShareCount >= 1 }
];

const DEFAULT_STATE = {
  history: [],
  favorites: [],
  recent: [],
  goalMonthly: 10000,
  notifications: false,
  usage: {
    launchCount: 0,
    orderCount: 0,
    shareCount: 0,
    imageShareCount: 0,
    premiumClickCount: 0,
    notificationClickCount: 0
  }
};

let state = loadState();
let cart = [];
let activeCategory = 'すべて';
let latestRecord = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? merge(structuredClone(DEFAULT_STATE), saved) : structuredClone(DEFAULT_STATE);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function merge(base, extra) {
  for (const key of Object.keys(extra || {})) {
    if (extra[key] && typeof extra[key] === 'object' && !Array.isArray(extra[key])) {
      base[key] = merge(base[key] || {}, extra[key]);
    } else {
      base[key] = extra[key];
    }
  }
  return base;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function yen(value) {
  return `${Number(value || 0).toLocaleString()}円`;
}

function kcal(value) {
  return `${Number(value || 0).toLocaleString()}kcal`;
}

function dateKey(date = new Date()) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function monthKey(date = new Date()) {
  return dateKey(date).slice(0, 7);
}

function total(records) {
  return records.reduce((sum, record) => {
    sum.price += Number(record.totalPrice || 0);
    sum.cal += Number(record.totalCal || 0);
    return sum;
  }, { price: 0, cal: 0 });
}

function escapeHtml(text) {
  return String(text).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function init() {
  state.usage.launchCount += 1;
  saveState();
  bindEvents();
  renderAll();
  showDailyNotificationIfNeeded();
}

function bindEvents() {
  $('#searchInput').addEventListener('input', renderMenus);
  $('#clearCartButton').addEventListener('click', clearCart);
  $('#orderButton').addEventListener('click', orderPretend);
  $('#resetButton').addEventListener('click', resetData);
  $('#editGoalButton').addEventListener('click', openGoalDialog);
  $('#saveGoalButton').addEventListener('click', saveGoal);
  $('#premiumButton').addEventListener('click', openPremium);
  $('#notifyButton').addEventListener('click', enableNotifications);
}

function renderAll() {
  renderCategories();
  renderMenus();
  renderRecentAndFavorites();
  renderCart();
  renderSummary();
  renderGoal();
  renderGraph();
  renderBadges();
  renderUsage();
  renderHistory();
}

function renderCategories() {
  const categories = ['すべて', ...new Set(MENUS.map(menu => menu.category))];
  $('#categoryRow').innerHTML = categories.map(category => `
    <button class="category-chip ${category === activeCategory ? 'active' : ''}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
  `).join('');

  $$('#categoryRow button').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderMenus();
    });
  });
}

function renderMenus() {
  const keyword = $('#searchInput').value.trim().toLowerCase();
  const filtered = MENUS.filter(menu => {
    const matchCategory = activeCategory === 'すべて' || menu.category === activeCategory;
    const text = `${menu.name} ${menu.category} ${menu.desc}`.toLowerCase();
    return matchCategory && text.includes(keyword);
  });

  if (!filtered.length) {
    $('#menuList').innerHTML = emptyState('🍽️', '該当メニューがありません', '検索ワードやカテゴリを変えてみてください。');
    return;
  }

  $('#menuList').innerHTML = filtered.map(menu => `
    <article class="menu-card">
      <div class="menu-emoji">${menu.emoji}</div>
      <div>
        <strong>${escapeHtml(menu.name)}</strong>
        <small>${escapeHtml(menu.category)} / ${yen(menu.price)} / ${kcal(menu.cal)}<br>${escapeHtml(menu.desc)}</small>
      </div>
      <div class="menu-actions">
        <button class="icon-button" type="button" data-add="${menu.id}" aria-label="追加">＋</button>
        <button class="icon-button" type="button" data-fav="${menu.id}" aria-label="お気に入り">${state.favorites.includes(menu.id) ? '★' : '☆'}</button>
      </div>
    </article>
  `).join('');

  $$('[data-add]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.add)));
  $$('[data-fav]').forEach(button => button.addEventListener('click', () => toggleFavorite(button.dataset.fav)));
}

function renderRecentAndFavorites() {
  renderChipList('#recentRow', '#recentBlock', state.recent, '最近使ったメニューはまだありません。');
  renderChipList('#favoriteRow', '#favoriteBlock', state.favorites, 'お気に入りはまだありません。');
}

function renderChipList(rowSelector, blockSelector, ids, emptyText) {
  const block = $(blockSelector);
  const row = $(rowSelector);
  if (!ids.length) {
    block.hidden = false;
    row.innerHTML = `<span class="hint">${emptyText}</span>`;
    return;
  }
  row.innerHTML = ids.map(id => {
    const menu = MENUS.find(item => item.id === id);
    if (!menu) return '';
    return `<button class="chip" type="button" data-chip-add="${menu.id}">${menu.emoji} ${escapeHtml(menu.name)}</button>`;
  }).join('');
  $$('[data-chip-add]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.chipAdd)));
}

function addToCart(id) {
  const menu = MENUS.find(item => item.id === id);
  if (!menu) return;
  cart.push({ ...menu, lineId: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}` });
  rememberRecent(id);
  renderRecentAndFavorites();
  renderCart();
}

function removeFromCart(lineId) {
  cart = cart.filter(item => item.lineId !== lineId);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function renderCart() {
  $('#cartCount').textContent = `${cart.length}品`;
  if (!cart.length) {
    $('#cartItems').className = 'cart-items empty';
    $('#cartItems').textContent = 'まだ選ばれていません。';
  } else {
    $('#cartItems').className = 'cart-items';
    $('#cartItems').innerHTML = cart.map(item => `
      <div class="cart-line">
        <span>${item.emoji} ${escapeHtml(item.name)}</span>
        <strong>${yen(item.price)}</strong>
        <button type="button" data-remove="${item.lineId}">×</button>
      </div>
    `).join('');
    $$('[data-remove]').forEach(button => button.addEventListener('click', () => removeFromCart(button.dataset.remove)));
  }

  const cartTotal = total(cart.map(item => ({ totalPrice: item.price, totalCal: item.cal })));
  $('#cartMoney').textContent = yen(cartTotal.price);
  $('#cartCal').textContent = kcal(cartTotal.cal);
}

function orderPretend() {
  if (!cart.length) {
    $('#resultSection').innerHTML = emptyState('🙈', 'まだ何も選んでいません', '食べたつもりにしたいメニューを追加してください。');
    location.hash = '#resultSection';
    return;
  }

  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
    date: new Date().toISOString(),
    dateKey: dateKey(),
    items: cart.map(item => ({ id: item.id, name: item.name, emoji: item.emoji, price: item.price, cal: item.cal, category: item.category })),
    totalPrice: cart.reduce((sum, item) => sum + item.price, 0),
    totalCal: cart.reduce((sum, item) => sum + item.cal, 0),
    praise: PRAISES[Math.floor(Math.random() * PRAISES.length)]
  };

  latestRecord = record;
  state.history.unshift(record);
  state.usage.orderCount += 1;
  saveState();
  clearCart();
  renderAll();
  renderResult(record);
  $('#resultSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderResult(record) {
  const names = record.items.map(item => item.name).join('、');
  $('#resultSection').innerHTML = `
    <div class="result-card order-animation">
      <div class="result-icon">✅</div>
      <p class="eyebrow">Order Complete</p>
      <h2>食べたつもり注文完了！</h2>
      <div class="result-stats">
        <div class="result-stat"><span>今回守った金額</span><strong>${yen(record.totalPrice)}</strong></div>
        <div class="result-stat"><span>今回避けたカロリー</span><strong>${kcal(record.totalCal)}</strong></div>
      </div>
      <p class="praise">${escapeHtml(record.praise)}</p>
      <p class="hint">${escapeHtml(names)} を食べたつもりで記録しました。</p>
      <div class="share-actions">
        <button class="secondary" type="button" id="shareX">Xでシェア</button>
        <button class="secondary" type="button" id="shareLine">LINEで送る</button>
        <button class="primary" type="button" id="shareImage">画像シェア</button>
        <button class="ghost" type="button" id="copyShare">文をコピー</button>
      </div>
    </div>
  `;
  $('#shareX').addEventListener('click', () => shareText('x', record));
  $('#shareLine').addEventListener('click', () => shareText('line', record));
  $('#shareImage').addEventListener('click', () => shareImage(record));
  $('#copyShare').addEventListener('click', () => copyShareText(record));
}

function shareTemplate(record) {
  return `今日は${record.items.map(item => item.name).join('、')}を食べたつもりで${yen(record.totalPrice)}守りました。\n${kcal(record.totalCal)}回避！\n#食べたつもり便`;
}

function shareText(type, record) {
  const text = shareTemplate(record);
  state.usage.shareCount += 1;
  saveState();
  renderBadges();
  renderUsage();

  if (type === 'x') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  } else {
    window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text)}`, '_blank', 'noopener');
  }
}

async function copyShareText(record) {
  await navigator.clipboard.writeText(shareTemplate(record));
  alert('シェア文をコピーしました。');
}

async function shareImage(record) {
  const canvas = $('#shareCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#fff7ed';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#fed7aa';
  ctx.beginPath();
  ctx.arc(920, 120, 260, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffedd5';
  ctx.beginPath();
  ctx.arc(120, 970, 300, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#1f2937';
  ctx.textAlign = 'center';
  ctx.font = 'bold 58px sans-serif';
  ctx.fillText('食べたつもり便', w / 2, 130);
  ctx.font = '120px sans-serif';
  ctx.fillText('📦', w / 2, 285);

  ctx.font = 'bold 64px sans-serif';
  ctx.fillText('本日の防衛結果', w / 2, 410);
  ctx.font = 'bold 52px sans-serif';
  ctx.fillText(`${yen(record.totalPrice)} 守った`, w / 2, 530);
  ctx.fillText(`${kcal(record.totalCal)} 回避`, w / 2, 610);

  ctx.font = '34px sans-serif';
  ctx.fillStyle = '#57534e';
  wrapText(ctx, record.items.map(item => item.name).join('、'), w / 2, 710, 850, 44);
  ctx.fillStyle = '#c2410c';
  ctx.font = 'bold 36px sans-serif';
  wrapText(ctx, record.praise, w / 2, 850, 840, 46);

  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  const file = new File([blob], 'tabetatsumori-result.png', { type: 'image/png' });
  state.usage.imageShareCount += 1;
  saveState();
  renderBadges();
  renderUsage();

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({ files: [file], title: '食べたつもり便', text: shareTemplate(record) });
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tabetatsumori-result.png';
    a.click();
    URL.revokeObjectURL(url);
  }
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = '';
  const chars = Array.from(text);
  for (const char of chars) {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, y);
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(item => item !== id);
  } else {
    state.favorites.unshift(id);
  }
  saveState();
  renderAll();
}

function rememberRecent(id) {
  state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, 6);
  saveState();
}

function renderSummary() {
  const today = dateKey();
  const month = monthKey();
  const todayTotal = total(state.history.filter(record => record.dateKey === today));
  const monthTotal = total(state.history.filter(record => record.dateKey.startsWith(month)));
  const allTotal = total(state.history);
  const streak = streakInfo(state.history);

  $('#todayMoney').textContent = yen(todayTotal.price);
  $('#todayCal').textContent = `${kcal(todayTotal.cal)} 回避`;
  $('#monthMoney').textContent = yen(monthTotal.price);
  $('#monthCal').textContent = `${kcal(monthTotal.cal)} 回避`;
  $('#totalMoney').textContent = yen(allTotal.price);
  $('#totalCal').textContent = `${kcal(allTotal.cal)} 回避`;
  $('#streakDays').textContent = `${streak.current}日`;
  $('#bestStreak').textContent = `最高 ${streak.best}日`;
}

function renderGoal() {
  const monthTotal = total(state.history.filter(record => record.dateKey.startsWith(monthKey()))).price;
  const goal = Number(state.goalMonthly || 10000);
  const rate = Math.min(100, Math.round((monthTotal / goal) * 100));
  $('#goalText').textContent = `${yen(monthTotal)} / ${yen(goal)}`;
  $('#goalRate').textContent = `${rate}%`;
  $('#goalBar').style.width = `${rate}%`;
  $('#goalHint').textContent = rate >= 100 ? '目標達成！これは普通に強い。' : `あと ${yen(Math.max(0, goal - monthTotal))} で達成です。`;
}

function openGoalDialog() {
  $('#goalInput').value = state.goalMonthly;
  $('#goalDialog').showModal();
}

function saveGoal() {
  const value = Number($('#goalInput').value);
  if (!value || value < 100) {
    alert('100円以上で入力してください。');
    return;
  }
  state.goalMonthly = value;
  saveState();
  $('#goalDialog').close();
  renderGoal();
}

function streakInfo(history) {
  const days = [...new Set(history.map(record => record.dateKey))].sort();
  if (!days.length) return { current: 0, best: 0 };
  const daySet = new Set(days);

  function addDays(key, amount) {
    const d = new Date(`${key}T00:00:00`);
    d.setDate(d.getDate() + amount);
    return dateKey(d);
  }

  let best = 1;
  let run = 1;
  for (let i = 1; i < days.length; i++) {
    if (addDays(days[i - 1], 1) === days[i]) run += 1;
    else run = 1;
    best = Math.max(best, run);
  }

  let start = dateKey();
  if (!daySet.has(start) && daySet.has(addDays(start, -1))) start = addDays(start, -1);
  let current = 0;
  while (daySet.has(addDays(start, -current))) current += 1;

  return { current, best };
}

function renderGraph() {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - index));
    const key = dateKey(d);
    const value = total(state.history.filter(record => record.dateKey === key)).price;
    return { key, label: `${d.getMonth() + 1}/${d.getDate()}`, value };
  });
  const max = Math.max(...days.map(day => day.value), 1);
  $('#barChart').innerHTML = days.map(day => `
    <div class="bar-item" title="${day.label} ${yen(day.value)}">
      <div class="bar" style="height:${Math.max(4, (day.value / max) * 120)}px"></div>
      <strong>${day.label}</strong>
      <span>${day.value ? yen(day.value) : '0'}</span>
    </div>
  `).join('');
}

function renderBadges() {
  $('#badgeGrid').innerHTML = BADGES.map(badge => {
    const unlocked = badge.ok(state);
    return `
      <div class="badge ${unlocked ? '' : 'locked'}">
        <strong>${badge.icon} ${escapeHtml(badge.name)}</strong>
        <small>${unlocked ? '獲得済み' : escapeHtml(badge.desc)}</small>
      </div>
    `;
  }).join('');
}

function renderUsage() {
  const usage = [
    ['起動回数', state.usage.launchCount],
    ['注文回数', state.usage.orderCount],
    ['シェア回数', state.usage.shareCount + state.usage.imageShareCount],
    ['有料導線クリック', state.usage.premiumClickCount]
  ];
  $('#usageGrid').innerHTML = usage.map(([label, value]) => `
    <div class="usage-card"><strong>${Number(value).toLocaleString()}</strong><small>${label}</small></div>
  `).join('');
}

function renderHistory() {
  if (!state.history.length) {
    $('#historyList').innerHTML = emptyState('📝', '履歴はまだありません', '注文したつもりをすると、ここに記録されます。');
    return;
  }

  $('#historyList').innerHTML = state.history.map(record => `
    <article class="history-card">
      <div>
        <strong>${record.items.map(item => `${item.emoji}${escapeHtml(item.name)}`).join('、')}</strong>
        <small>${new Date(record.date).toLocaleString('ja-JP', {
