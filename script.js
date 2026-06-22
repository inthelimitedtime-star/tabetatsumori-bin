function menu(...items) {
  return items.map(([name, price]) => ({ name, price }));
}

const CATEGORIES = [
  {
    category: "ファストフード",
    icon: "🍟",
    stores: [
      {
        name: "パクっとキッチン",
        items: menu(
          ["ごちそうスマッシュバーガー", 980],
          ["サクサクチキンバスケット", 880],
          ["ほくほくポテトBOX", 520],
          ["てりやきミートサンド", 760],
          ["ナゲットパーティーセット", 690]
        )
      },
      {
        name: "スピードミール88",
        items: menu(
          ["ダブルミートサンド", 920],
          ["スパイシーチキンロール", 820],
          ["やみつきペッパーポテト", 560],
          ["チーズドッグプレート", 780],
          ["バニラシェイク気分", 480]
        )
      },
      {
        name: "モグモグステーション",
        items: menu(
          ["特盛ジャンクプレート", 1180],
          ["ガーリックチキンBOX", 890],
          ["チーズポテト山盛り", 650],
          ["ミートパイセット", 760],
          ["甘辛チキンナゲット", 680]
        )
      }
    ]
  },

  {
    category: "ハンバーガー",
    icon: "🍔",
    stores: [
      {
        name: "バーガースタンド橙",
        items: menu(
          ["橙クラシックバーガー", 1080],
          ["炙りチーズバーガー", 1180],
          ["アボカドベーコンバーガー", 1280],
          ["オニオンリングバスケット", 620],
          ["自家製レモンスカッシュ", 520]
        )
      },
      {
        name: "ミートラボ横丁",
        items: menu(
          ["極厚パティバーガー", 1380],
          ["月見てりたまバーガー", 1160],
          ["黒こしょうチキンバーガー", 980],
          ["ガーリックポテト", 580],
          ["濃厚ミルクシェイク", 560]
        )
      },
      {
        name: "バンズ研究所",
        items: menu(
          ["ふわバンズチーズバーガー", 1080],
          ["はちみつベーコンバーガー", 1260],
          ["スモーキーBBQバーガー", 1320],
          ["チリチーズポテト", 690],
          ["コーラフロート", 540]
        )
      }
    ]
  },

  {
    category: "ラーメン",
    icon: "🍜",
    stores: [
      {
        name: "麺処しろうず",
        items: menu(
          ["白だし豚骨らぁ麺", 980],
          ["辛赤味噌らぁ麺", 1060],
          ["炙りチャーシュー麺", 1280],
          ["ひとくち餃子", 480],
          ["焼豚めし", 520]
        )
      },
      {
        name: "らぁ麺 風雲堂",
        items: menu(
          ["濃厚鶏白湯そば", 1080],
          ["魚介しょうゆらぁ麺", 960],
          ["背脂ねぎらぁ麺", 1050],
          ["半熟味玉トッピング", 180],
          ["特製炒飯", 620]
        )
      },
      {
        name: "麺屋こがね",
        items: menu(
          ["黄金味噌ラーメン", 1020],
          ["焦がし醤油ラーメン", 980],
          ["肉盛りつけ麺", 1240],
          ["にんにく餃子", 460],
          ["ねぎ塩チャーシュー丼", 580]
        )
      }
    ]
  },

  {
    category: "寿司",
    icon: "🍣",
    stores: [
      {
        name: "すし湊まる",
        items: menu(
          ["まぐろ三昧セット", 1480],
          ["炙りサーモン握り", 1280],
          ["海鮮ちらし重", 1380],
          ["えび天巻き", 920],
          ["茶碗蒸し", 360]
        )
      },
      {
        name: "鮨うたげ",
        items: menu(
          ["特上にぎり盛り", 1980],
          ["とろサーモンづくし", 1380],
          ["ねぎとろ巻き", 780],
          ["いくら小丼", 980],
          ["あおさ味噌汁", 260]
        )
      },
      {
        name: "海町すし便",
        items: menu(
          ["海町にぎり10貫", 1580],
          ["まぐろ赤身セット", 1180],
          ["穴子一本握り", 980],
          ["サーモン親子ちらし", 1480],
          ["玉子焼き", 420]
        )
      }
    ]
  },

  {
    category: "カレー",
    icon: "🍛",
    stores: [
      {
        name: "カレー工房スパイス月",
        items: menu(
          ["王道ビーフカレー", 980],
          ["サクサクロースカツカレー", 1260],
          ["彩り野菜カレー", 1050],
          ["チーズまみれカレー", 1120],
          ["タンドリーチキンカレー", 1180]
        )
      },
      {
        name: "ごろっと煮込みカレー屋",
        items: menu(
          ["とろ旨ポークカレー", 960],
          ["海老フライカレー", 1280],
          ["ほうれん草チキンカレー", 1080],
          ["温玉カレー", 920],
          ["旨辛キーマカレー", 1060]
        )
      },
      {
        name: "スパイス食堂まる雲",
        items: menu(
          ["濃厚バターチキンカレー", 1150],
          ["黒ごまビーフカレー", 1180],
          ["なすとひき肉のカレー", 980],
          ["三種あいがけカレー", 1380],
          ["チーズナン気分", 520]
        )
      }
    ]
  },

  {
    category: "日本風カレー",
    icon: "🥄",
    stores: [
      {
        name: "和だし咖喱 あかり",
        items: menu(
          ["和風牛すじカレー", 1080],
          ["だし香るカツカレー", 1260],
          ["とろ玉カレー丼", 960],
          ["甘辛そぼろカレー", 920],
          ["きのこ和風カレー", 980]
        )
      },
      {
        name: "おうち咖喱日和",
        items: menu(
          ["昔ながらの家カレー", 880],
          ["しょうが焼きカレー", 1120],
          ["ハンバーグカレー", 1180],
          ["コロッケカレー", 920],
          ["やさしい甘口カレー", 850]
        )
      },
      {
        name: "カレー亭こむぎ",
        items: menu(
          ["給食風ポークカレー", 860],
          ["和牛すじ煮込みカレー", 1280],
          ["からあげカレー", 1080],
          ["半熟卵のせカレー", 980],
          ["福神漬け大盛り", 120]
        )
      }
    ]
  },

  {
    category: "ピザ",
    icon: "🍕",
    stores: [
      {
        name: "ピッツァ空と窯",
        items: menu(
          ["王道マルゲリータ", 1480],
          ["照り焼きチキンピザ", 1680],
          ["4種チーズの濃厚ピザ", 1780],
          ["海の幸トマトピザ", 1880],
          ["フライドポテト", 520]
        )
      },
      {
        name: "まるっとピザ研究所",
        items: menu(
          ["ペパロニスマイル", 1580],
          ["コーンマヨベーコン", 1480],
          ["たっぷりソーセージピザ", 1720],
          ["バジル香るピザ", 1660],
          ["ハニーチーズピザ", 1740]
        )
      },
      {
        name: "夜ふかしピザ便",
        items: menu(
          ["深夜のミートピザ", 1690],
          ["チリトマトピザ", 1580],
          ["もち明太ピザ", 1620],
          ["ポテマヨピザ", 1480],
          ["チキンナゲット", 640]
        )
      }
    ]
  },

  {
    category: "中華料理",
    icon: "🥟",
    stores: [
      {
        name: "中華食堂 龍々",
        items: menu(
          ["肉汁焼き餃子", 520],
          ["黄金炒飯", 850],
          ["ふわとろ天津飯", 920],
          ["本格麻婆豆腐", 980],
          ["油淋鶏", 1050]
        )
      },
      {
        name: "上海ダイニング紅福",
        items: menu(
          ["海老炒飯", 980],
          ["黒酢酢豚", 1120],
          ["四川風麻婆丼", 960],
          ["小籠包", 680],
          ["鶏から香味ソース", 980]
        )
      },
      {
        name: "町中華まんぷく楼",
        items: menu(
          ["にんにく餃子定食", 920],
          ["チャーシュー炒飯", 980],
          ["回鍋肉丼", 960],
          ["えびチリ", 1180],
          ["春巻きセット", 560]
        )
      }
    ]
  },

  {
    category: "韓国料理",
    icon: "🌶️",
    stores: [
      {
        name: "ソウル屋台ハヌル",
        items: menu(
          ["ヤンニョムチキン", 1180],
          ["石焼きビビンバ", 1080],
          ["チーズトッポギ", 890],
          ["カルビキンパ", 860],
          ["スンドゥブ", 980]
        )
      },
      {
        name: "韓ごはんモグモグ亭",
        items: menu(
          ["ハニーバターチキン", 1160],
          ["プルコギ丼", 1080],
          ["韓国風海苔巻き", 820],
          ["チーズボール", 620],
          ["キムチチャーハン", 920]
        )
      },
      {
        name: "チキンとキンパの店",
        items: menu(
          ["甘辛チキンBOX", 1280],
          ["チーズキンパ", 920],
          ["旨辛ラッポッキ", 980],
          ["ナムルビビンバ", 960],
          ["韓国のりポテト", 540]
        )
      }
    ]
  },

  {
    category: "和食",
    icon: "🍱",
    stores: [
      {
        name: "ごはん処 いろは",
        items: menu(
          ["しょうが焼き定食", 1080],
          ["鯖の塩焼き定食", 1120],
          ["鶏の黒酢あん定食", 1180],
          ["だし巻き玉子", 480],
          ["豚汁", 360]
        )
      },
      {
        name: "和み食堂こまち",
        items: menu(
          ["チキン南蛮定食", 1160],
          ["から揚げ定食", 1050],
          ["鮭の西京焼き定食", 1240],
          ["肉じゃが小鉢", 420],
          ["五目炊き込みご飯", 520]
        )
      },
      {
        name: "定食屋まる福",
        items: menu(
          ["とんかつ定食", 1180],
          ["味噌カツ定食", 1260],
          ["ぶり照り焼き定食", 1280],
          ["茶碗蒸し", 380],
          ["ごはん大盛り", 120]
        )
      }
    ]
  },

  {
    category: "弁当",
    icon: "🍱",
    stores: [
      {
        name: "できたて弁当ひなた",
        items: menu(
          ["のりから弁当", 780],
          ["チキン南蛮弁当", 920],
          ["しょうが焼き弁当", 880],
          ["ハンバーグ弁当", 960],
          ["幕の内弁当", 1080]
        )
      },
      {
        name: "おべんとうキッチン福まる",
        items: menu(
          ["唐揚げたっぷり弁当", 920],
          ["牛焼肉弁当", 980],
          ["さば味噌弁当", 860],
          ["そぼろ二色弁当", 780],
          ["ミックスフライ弁当", 960]
        )
      },
      {
        name: "弁当茶屋のんびり",
        items: menu(
          ["だし巻き弁当", 820],
          ["照り焼きチキン弁当", 890],
          ["豚キムチ弁当", 920],
          ["鮭のり弁当", 860],
          ["おかず盛り合わせ", 760]
        )
      }
    ]
  },

  {
    category: "焼肉",
    icon: "🥩",
    stores: [
      {
        name: "焼肉どんどこ亭",
        items: menu(
          ["カルビ焼肉弁当", 1280],
          ["ハラミ焼肉弁当", 1380],
          ["ねぎ塩牛タン弁当", 1580],
          ["焼肉ビビンバ", 1120],
          ["キムチ盛り", 420]
        )
      },
      {
        name: "炙り肉屋 火ノ丸",
        items: menu(
          ["特選ロース弁当", 1480],
          ["スタミナ焼肉丼", 1180],
          ["にんにくカルビ弁当", 1360],
          ["牛ホルモン焼き", 980],
          ["ナムル3種盛り", 480]
        )
      },
      {
        name: "肉めし山小屋",
        items: menu(
          ["牛カルビ重", 1180],
          ["豚トロ塩だれ丼", 980],
          ["焼肉ミックス弁当", 1480],
          ["チョレギサラダ", 580],
          ["温玉ビビンバ", 1080]
        )
      }
    ]
  },

  {
    category: "焼き鳥",
    icon: "🍢",
    stores: [
      {
        name: "炭火やきとり鳥あかり",
        items: menu(
          ["もも串", 220],
          ["ねぎま串", 240],
          ["つくね串", 260],
          ["かわ串", 220],
          ["焼き鳥丼", 920]
        )
      },
      {
        name: "やきとり日和すずめ",
        items: menu(
          ["塩おまかせ5本盛り", 980],
          ["たれおまかせ5本盛り", 980],
          ["レバー串", 230],
          ["ぼんじり串", 260],
          ["チキン南蛮", 780]
        )
      },
      {
        name: "串焼き満月",
        items: menu(
          ["月見つくね串", 320],
          ["砂肝串", 220],
          ["せせり串", 280],
          ["焼き鳥重", 980],
          ["山盛りキャベツ", 360]
        )
      }
    ]
  },

  {
    category: "鶏料理",
    icon: "🍗",
    stores: [
      {
        name: "鶏うま本舗",
        items: menu(
          ["特製から揚げ弁当", 920],
          ["油淋鶏弁当", 980],
          ["チキン南蛮弁当", 1050],
          ["塩こうじから揚げ", 780],
          ["親子丼", 860]
        )
      },
      {
        name: "からあげ研究会",
        items: menu(
          ["醤油からあげBOX", 820],
          ["旨塩からあげBOX", 820],
          ["甘だれチキン弁当", 960],
          ["スパイシーチキン弁当", 980],
          ["山盛りポテト", 560]
        )
      },
      {
        name: "チキン食堂こけこっこ",
        items: menu(
          ["グリルチキンプレート", 1080],
          ["照り焼きチキン丼", 920],
          ["鶏天弁当", 980],
          ["手羽からBOX", 880],
          ["鶏そぼろ丼", 780]
        )
      }
    ]
  },

  {
    category: "パスタ",
    icon: "🍝",
    stores: [
      {
        name: "パスタ食堂アルデンテ",
        items: menu(
          ["濃厚カルボナーラ", 1180],
          ["王道ミートソース", 1080],
          ["海老のトマトクリーム", 1280],
          ["きのこバターしょうゆ", 1060],
          ["ガーリックトースト", 420]
        )
      },
      {
        name: "洋麺キッチンsora",
        items: menu(
          ["明太クリームパスタ", 1160],
          ["ペペロンチーノ", 980],
          ["ナポリタン", 1050],
          ["和風ツナおろしパスタ", 1080],
          ["ミニサラダ", 380]
        )
      },
      {
        name: "くるくるパスタ亭",
        items: menu(
          ["ベーコントマトパスタ", 1080],
          ["あさりバター醤油パスタ", 1180],
          ["チーズミートパスタ", 1200],
          ["ジェノベーゼ", 1150],
          ["スープセット", 420]
        )
      }
    ]
  },

  {
    category: "カフェ",
    icon: "☕",
    stores: [
      {
        name: "カフェ日だまり",
        items: menu(
          ["カフェラテ", 560],
          ["ハニートースト", 780],
          ["たまごサンド", 720],
          ["キャラメルミルク", 620],
          ["ベイクドチーズケーキ", 580]
        )
      },
      {
        name: "珈琲と風の店",
        items: menu(
          ["深煎りブレンド", 520],
          ["アイスカフェオレ", 560],
          ["厚切りバタートースト", 680],
          ["ナポリタン", 980],
          ["クラシックプリン", 520]
        )
      },
      {
        name: "午後のテーブル",
        items: menu(
          ["ミックスサンド", 760],
          ["チキンと野菜のラップ", 820],
          ["抹茶ミルクラテ", 620],
          ["チョコブラウニー", 540],
          ["アイスティー", 480]
        )
      }
    ]
  },

  {
    category: "スイーツ",
    icon: "🍰",
    stores: [
      {
        name: "甘味ラボしゅがー",
        items: menu(
          ["もちもちリングドーナツ", 360],
          ["生クリームシュー", 420],
          ["ふわふわロールケーキ", 580],
          ["濃厚チョコタルト", 620],
          ["ミルクプリン", 420]
        )
      },
      {
        name: "おやつの森",
        items: menu(
          ["いちごショート", 620],
          ["ダブルチーズケーキ", 680],
          ["カスタードエクレア", 460],
          ["しっとりフィナンシェ", 320],
          ["バニラソフト", 480]
        )
      },
      {
        name: "砂糖日和",
        items: menu(
          ["ふわとろパンケーキ", 980],
          ["チョコバナナクレープ", 720],
          ["いちごミルクパフェ", 860],
          ["焼きたてワッフル", 760],
          ["なめらか杏仁", 420]
        )
      }
    ]
  },

  {
    category: "デザート",
    icon: "🍨",
    stores: [
      {
        name: "デザート工房ミルミル",
        items: menu(
          ["とろけるプリン", 460],
          ["ごほうびクレープ", 760],
          ["チョコバナナパフェ", 880],
          ["いちごワッフル", 820],
          ["マンゴー杏仁", 520]
        )
      },
      {
        name: "しあわせ甘味店",
        items: menu(
          ["黒みつきなこパンケーキ", 920],
          ["抹茶あんみつ", 780],
          ["白玉ぜんざい", 680],
          ["いちごミルクかき氷", 760],
          ["キャラメルワッフル", 790]
        )
      },
      {
        name: "夜のデザート便",
        items: menu(
          ["深夜のチョコパフェ", 920],
          ["ほろ苦コーヒーゼリー", 560],
          ["ミルクレープ", 680],
          ["ベリータルト", 720],
          ["アイス盛り合わせ", 640]
        )
      }
    ]
  },

  {
    category: "コーヒーとお茶",
    icon: "🍵",
    stores: [
      {
        name: "豆と茶ひとやすみ",
        items: menu(
          ["本日のコーヒー", 480],
          ["抹茶ラテ", 620],
          ["ほうじ茶ラテ", 620],
          ["アイスティー", 460],
          ["あんバタースコーン", 520]
        )
      },
      {
        name: "茶房ブレンド",
        items: menu(
          ["深煎りアイスコーヒー", 520],
          ["ロイヤルミルクティー", 580],
          ["黒糖きなこラテ", 640],
          ["たまごサンド", 720],
          ["自家製ガトーショコラ", 560]
        )
      },
      {
        name: "珈琲小屋まめ助",
        items: menu(
          ["まめ助ブレンド", 500],
          ["カフェモカ", 620],
          ["ゆず茶", 560],
          ["抹茶フィナンシェ", 360],
          ["ホットサンド", 780]
        )
      }
    ]
  },

  {
    category: "丼もの",
    icon: "🍚",
    stores: [
      {
        name: "どんぶり食堂まんぷく",
        items: menu(
          ["特盛牛カルビ丼", 980],
          ["温玉豚しょうが丼", 880],
          ["ねぎ塩チキン丼", 860],
          ["とろ玉そぼろ丼", 780],
          ["からあげマヨ丼", 920]
        )
      },
      {
        name: "丼丸キッチン",
        items: menu(
          ["炙りチャーシュー丼", 960],
          ["海老天たまご丼", 1080],
          ["ピリ辛スタミナ丼", 980],
          ["鶏そぼろ三色丼", 840],
          ["大盛りごはんのつもり", 150]
        )
      },
      {
        name: "米と肉の店こめ太郎",
        items: menu(
          ["ローストビーフ丼", 1280],
          ["味噌カツ丼", 1120],
          ["チーズハンバーグ丼", 1180],
          ["焼き鳥親子丼", 980],
          ["明太マヨ鶏丼", 920]
        )
      }
    ]
  }
];

let selectedCategoryIndex = null;
let selectedStoreIndex = null;
let cart = [];
let latestOrder = null;
let acceptTimers = [];

const homeScreen = document.getElementById("homeScreen");
const storeScreen = document.getElementById("storeScreen");
const itemScreen = document.getElementById("itemScreen");
const searchScreen = document.getElementById("searchScreen");
const cartScreen = document.getElementById("cartScreen");
const acceptingScreen = document.getElementById("acceptingScreen");
const resultScreen = document.getElementById("resultScreen");
const accountScreen = document.getElementById("accountScreen");

const categoryList = document.getElementById("categoryList");
const storeList = document.getElementById("storeList");
const itemList = document.getElementById("itemList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("searchResults");
const checkoutList = document.getElementById("checkoutList");

const storeTitle = document.getElementById("storeTitle");
const itemTitle = document.getElementById("itemTitle");

const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutDelivery = document.getElementById("checkoutDelivery");
const checkoutService = document.getElementById("checkoutService");
const checkoutTotal = document.getElementById("checkoutTotal");
const cartCount = document.getElementById("cartCount");

const acceptStatus = document.getElementById("acceptStatus");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const accountNameDisplay = document.getElementById("accountNameDisplay");
const accountNameInput = document.getElementById("accountNameInput");
const saveAccountName = document.getElementById("saveAccountName");
const accountTodaySaved = document.getElementById("accountTodaySaved");
const accountMonthSaved = document.getElementById("accountMonthSaved");
const accountTotalSaved = document.getElementById("accountTotalSaved");
const orderHistoryList = document.getElementById("orderHistoryList");
const monthlyChart = document.getElementById("monthlyChart");
const totalChart = document.getElementById("totalChart");
const resetAccountData = document.getElementById("resetAccountData");

const backToCategories = document.getElementById("backToCategories");
const backToStores = document.getElementById("backToStores");
const confirmOrder = document.getElementById("confirmOrder");
const continueShopping = document.getElementById("continueShopping");
const clearCart = document.getElementById("clearCart");
const resultHome = document.getElementById("resultHome");
const resultAccount = document.getElementById("resultAccount");

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getMonthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getMonthLabel(monthKey) {
  const [, month] = monthKey.split("-");
  return `${Number(month)}月`;
}

function formatYen(num) {
  return `¥${Number(num).toLocaleString()}`;
}

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem("tsumoriCart") || "[]");
  } catch {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem("tsumoriCart", JSON.stringify(cart));
  updateCartCount();
}

function getMonthlySavings() {
  try {
    return JSON.parse(localStorage.getItem("monthlySavings") || "{}");
  } catch {
    return {};
  }
}

function saveMonthlySavings(data) {
  localStorage.setItem("monthlySavings", JSON.stringify(data));
}

function getOrderHistory() {
  try {
    return JSON.parse(localStorage.getItem("orderHistory") || "[]");
  } catch {
    return [];
  }
}

function saveOrderHistory(history) {
  localStorage.setItem("orderHistory", JSON.stringify(history.slice(0, 30)));
}

function loadSavings() {
  const today = getTodayString();
  const savedDate = localStorage.getItem("savedDate");

  if (savedDate !== today) {
    localStorage.setItem("savedDate", today);
    localStorage.setItem("todaySaved", "0");
  }

  renderAccount();
}

function addSavings(amount) {
  const todaySaved = Number(localStorage.getItem("todaySaved") || 0) + amount;
  const totalSaved = Number(localStorage.getItem("totalSaved") || 0) + amount;
  const monthKey = getMonthKey();
  const monthlySavings = getMonthlySavings();

  monthlySavings[monthKey] = Number(monthlySavings[monthKey] || 0) + amount;

  localStorage.setItem("todaySaved", String(todaySaved));
  localStorage.setItem("totalSaved", String(totalSaved));
  saveMonthlySavings(monthlySavings);

  renderAccount();
}

function addOrderHistory(order) {
  const history = getOrderHistory();

  history.unshift(order);
  saveOrderHistory(history);
}

function renderAccountName() {
  const name = localStorage.getItem("accountName") || "ゲストさん";

  accountNameDisplay.textContent = name;
  accountNameInput.value = name;
}

function renderAccount() {
  const todaySaved = Number(localStorage.getItem("todaySaved") || 0);
  const totalSaved = Number(localStorage.getItem("totalSaved") || 0);
  const monthKey = getMonthKey();
  const monthlySavings = getMonthlySavings();
  const monthSaved = Number(monthlySavings[monthKey] || 0);

  accountTodaySaved.textContent = formatYen(todaySaved);
  accountMonthSaved.textContent = formatYen(monthSaved);
  accountTotalSaved.textContent = formatYen(totalSaved);

  renderAccountName();
  renderOrderHistory();
  renderCharts();
}

function renderOrderHistory() {
  const history = getOrderHistory();

  orderHistoryList.innerHTML = "";

  if (history.length === 0) {
    orderHistoryList.innerHTML = `
      <div class="empty-state">
        <strong>注文履歴はまだありません</strong>
        <p>食べたつもり注文をすると、ここに記録されます。</p>
      </div>
    `;
    return;
  }

  history.slice(0, 5).forEach((order) => {
    const item = document.createElement("div");
    item.className = "history-item";

    item.innerHTML = `
      <div>
        <strong>${order.items.length}品を食べたつもり</strong>
        <span>${order.dateText}</span>
      </div>
      <em>${formatYen(order.total)}</em>
    `;

    orderHistoryList.appendChild(item);
  });
}

function getLastSixMonths() {
  const months = [];
  const now = new Date();

  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(getMonthKey(d));
  }

  return months;
}

function renderCharts() {
  const monthlySavings = getMonthlySavings();
  const months = getLastSixMonths();

  const monthlyData = months.map((month) => ({
    key: month,
    label: getMonthLabel(month),
    value: Number(monthlySavings[month] || 0)
  }));

  const maxMonthValue = Math.max(...monthlyData.map((item) => item.value), 1);

  monthlyChart.innerHTML = "";

  monthlyData.forEach((item) => {
    const percent = item.value === 0 ? 3 : Math.max(8, Math.round((item.value / maxMonthValue) * 100));
    const col = document.createElement("div");
    col.className = "chart-col";

    col.innerHTML = `
      <div class="chart-value">${item.value > 0 ? formatYen(item.value) : "¥0"}</div>
      <div class="chart-bar-wrap">
        <div class="chart-bar" style="height:${percent}%"></div>
      </div>
      <div class="chart-label">${item.label}</div>
    `;

    monthlyChart.appendChild(col);
  });

  let runningTotal = 0;
  const totalData = monthlyData.map((item) => {
    runningTotal += item.value;
    return {
      label: item.label,
      value: runningTotal
    };
  });

  const maxTotalValue = Math.max(...totalData.map((item) => item.value), 1);

  totalChart.innerHTML = "";

  totalData.forEach((item) => {
    const percent = item.value === 0 ? 3 : Math.max(8, Math.round((item.value / maxTotalValue) * 100));
    const row = document.createElement("div");
    row.className = "line-row";

    row.innerHTML = `
      <div class="line-row-label">${item.label}</div>
      <div class="line-track">
        <div class="line-fill" style="width:${percent}%"></div>
      </div>
      <div class="line-value">${formatYen(item.value)}</div>
    `;

    totalChart.appendChild(row);
  });
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function getStoreCount() {
  const stores = new Set(cart.map((item) => item.store));
  return stores.size;
}

function getDeliveryFee() {
  if (cart.length === 0) return 0;
  return getStoreCount() * 100;
}

function getServiceFee() {
  const subtotal = getCartSubtotal();
  return Math.round(subtotal * 0.07);
}

function getCartTotal() {
  return getCartSubtotal() + getDeliveryFee() + getServiceFee();
}

function updateCartCount() {
  const count = cart.length;

  cartCount.textContent = count;

  if (count === 0) {
    cartCount.classList.add("hidden");
  } else {
    cartCount.classList.remove("hidden");
  }
}

function clearAcceptTimers() {
  acceptTimers.forEach((timer) => clearTimeout(timer));
  acceptTimers = [];
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.remove("active");
  });

  const targetName = ["store", "item", "result", "accepting"].includes(name) ? "home" : name;
  const navButton = document.querySelector(`.nav-item[data-target="${targetName}"]`);

  if (navButton) {
    navButton.classList.add("active");
  }
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  if (name === "home") homeScreen.classList.add("active");
  if (name === "store") storeScreen.classList.add("active");
  if (name === "item") itemScreen.classList.add("active");
  if (name === "search") searchScreen.classList.add("active");
  if (name === "cart") cartScreen.classList.add("active");
  if (name === "accepting") acceptingScreen.classList.add("active");
  if (name === "result") resultScreen.classList.add("active");
  if (name === "account") accountScreen.classList.add("active");

  setActiveNav(name);

  if (name === "cart") renderCart();
  if (name === "account") renderAccount();
  if (name === "search") renderSearch(searchInput.value);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderCategories() {
  categoryList.innerHTML = "";

  CATEGORIES.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    button.dataset.index = index;

    const itemCount = category.stores.reduce((sum, store) => sum + store.items.length, 0);

    button.innerHTML = `
      <span class="category-icon">${category.icon}</span>
      <span class="category-name">${category.category}</span>
      <span class="category-count">${category.stores.length}店舗・${itemCount}商品</span>
    `;

    categoryList.appendChild(button);
  });
}

function renderStores() {
  const category = CATEGORIES[selectedCategoryIndex];

  storeTitle.textContent = `${category.category}のお店`;
  storeList.innerHTML = "";

  category.stores.forEach((store, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "store-card";
    button.dataset.index = index;

    button.innerHTML = `
      <div class="store-card-top">
        <div>
          <strong>${store.name}</strong>
          <span>${store.items.length}件の商品・配達料 ¥100 のつもり</span>
        </div>
        <div class="store-badge">15-25分</div>
      </div>
    `;

    storeList.appendChild(button);
  });
}

function renderItems() {
  const category = CATEGORIES[selectedCategoryIndex];
  const store = category.stores[selectedStoreIndex];

  itemTitle.textContent = store.name;
  itemList.innerHTML = "";

  store.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "item-card";
    button.dataset.index = index;

    button.innerHTML = `
      <div class="item-left">
        <div class="item-thumb">${category.icon}</div>
        <div>
          <span class="item-name">${item.name}</span>
          <span class="item-store">タップでカートに追加</span>
        </div>
      </div>
      <strong class="item-price">${formatYen(item.price)}</strong>
    `;

    itemList.appendChild(button);
  });
}

function addToCart(categoryIndex, storeIndex, itemIndex) {
  const category = CATEGORIES[categoryIndex];
  const store = category.stores[storeIndex];
  const item = store.items[itemIndex];

  selectedCategoryIndex = categoryIndex;
  selectedStoreIndex = storeIndex;

  cart.push({
    id: `${Date.now()}-${Math.random()}`,
    category: category.category,
    icon: category.icon,
    store: store.name,
    name: item.name,
    price: item.price
  });

  saveCart();
  showToast(`${item.name}をカートに追加しました`);
  showScreen("cart");
}

function renderCart() {
  checkoutList.innerHTML = "";

  if (cart.length === 0) {
    checkoutList.innerHTML = `
      <div class="empty-state">
        <strong>カートは空です</strong>
        <p>商品をタップすると、ここに追加されます。</p>
      </div>
    `;
  }

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checkout-item";

    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <span>${item.store}・${item.category}</span>
      </div>
      <div class="checkout-price">
        <strong>${formatYen(item.price)}</strong>
        <button class="remove-item" data-id="${item.id}" type="button">削除</button>
      </div>
    `;

    checkoutList.appendChild(row);
  });

  const subtotal = getCartSubtotal();
  const deliveryFee = getDeliveryFee();
  const serviceFee = getServiceFee();
  const total = getCartTotal();

  checkoutSubtotal.textContent = formatYen(subtotal);
  checkoutDelivery.textContent = `${formatYen(deliveryFee)}（${getStoreCount()}店舗）`;
  checkoutService.textContent = formatYen(serviceFee);
  checkoutTotal.textContent = formatYen(total);
  confirmOrder.disabled = cart.length === 0;

  updateCartCount();
}

function updateClearSearchButton() {
  if (searchInput.value.trim()) {
    clearSearch.classList.remove("hidden");
  } else {
    clearSearch.classList.add("hidden");
  }
}

function renderSearch(query) {
  const q = query.trim().toLowerCase();
  searchResults.innerHTML = "";
  updateClearSearchButton();

  if (!q) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <strong>メニューや店舗を検索</strong>
        <p>例：ラーメン、カレー、チキン、カフェ、寿司</p>
      </div>
    `;

    CATEGORIES.slice(0, 8).forEach((category, categoryIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "search-result";
      button.dataset.type = "category";
      button.dataset.categoryIndex = categoryIndex;

      button.innerHTML = `
        <strong>${category.icon} ${category.category}</strong>
        <span>${category.stores.length}店舗を見る</span>
      `;

      searchResults.appendChild(button);
    });

    return;
  }

  let results = [];

  CATEGORIES.forEach((category, categoryIndex) => {
    if (category.category.toLowerCase().includes(q)) {
      results.push({
        type: "category",
        categoryIndex,
        title: `${category.icon} ${category.category}`,
        description: `${category.stores.length}店舗を見る`
      });
    }

    category.stores.forEach((store, storeIndex) => {
      if (store.name.toLowerCase().includes(q)) {
        results.push({
          type: "store",
          categoryIndex,
          storeIndex,
          title: store.name,
          description: `${category.category}・${store.items.length}商品`
        });
      }

      store.items.forEach((item, itemIndex) => {
        if (item.name.toLowerCase().includes(q)) {
          results.push({
            type: "item",
            categoryIndex,
            storeIndex,
            itemIndex,
            title: item.name,
            description: `${store.name}・${formatYen(item.price)}`
          });
        }
      });
    });
  });

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <strong>見つかりませんでした</strong>
        <p>別のキーワードで検索してみてください。</p>
      </div>
    `;
    return;
  }

  results.slice(0, 30).forEach((result) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    button.dataset.type = result.type;
    button.dataset.categoryIndex = result.categoryIndex;

    if (result.storeIndex !== undefined) {
      button.dataset.storeIndex = result.storeIndex;
    }

    if (result.itemIndex !== undefined) {
      button.dataset.itemIndex = result.itemIndex;
    }

    button.innerHTML = `
      <strong>${result.title}</strong>
      <span>${result.description}</span>
    `;

    searchResults.appendChild(button);
  });
}

function startAccepting() {
  if (cart.length === 0) return;

  clearAcceptTimers();

  const subtotal = getCartSubtotal();
  const deliveryFee = getDeliveryFee();
  const serviceFee = getServiceFee();
  const total = getCartTotal();

  latestOrder = {
    id: `${Date.now()}-${Math.random()}`,
    date: new Date().toISOString(),
    dateText: new Date().toLocaleString("ja-JP", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }),
    month: getMonthKey(),
    items: [...cart],
    subtotal,
    deliveryFee,
    serviceFee,
    total
  };

  addSavings(latestOrder.total);
  addOrderHistory(latestOrder);

  cart = [];
  saveCart();
  renderCart();

  showScreen("accepting");

  acceptStatus.textContent = "注文を受け付けたつもりです";

  acceptTimers.push(
    setTimeout(() => {
      acceptStatus.textContent = "お店が注文を確認しているつもりです";
    }, 700)
  );

  acceptTimers.push(
    setTimeout(() => {
      acceptStatus.textContent = "調理しているつもりです";
    }, 1400)
  );

  acceptTimers.push(
    setTimeout(() => {
      acceptStatus.textContent = "配達員が向かっているつもりです";
    }, 2100)
  );

  acceptTimers.push(
    setTimeout(() => {
      acceptStatus.textContent = "受付完了しました";
    }, 2800)
  );

  acceptTimers.push(
    setTimeout(() => {
      renderResult();
      showScreen("result");
    }, 3500)
  );
}

function renderResult() {
  if (!latestOrder) return;

  const itemNames = latestOrder.items
    .map((item) => {
      return `
        <li>
          ${item.name}
          <span>${formatYen(item.price)}</span>
        </li>
      `;
    })
    .join("");

  resultTitle.textContent = `${latestOrder.items.length}品を食べたつもり！`;

  resultText.innerHTML = `
    <div class="result-order-list">
      <ul>
        ${itemNames}
      </ul>
    </div>

    <div class="result-fee-list">
      <div>
        <span>小計</span>
        <strong>${formatYen(latestOrder.subtotal)}</strong>
      </div>
      <div>
        <span>配達料</span>
        <strong>${formatYen(latestOrder.deliveryFee)}</strong>
      </div>
      <div>
        <span>サービス料 7%</span>
        <strong>${formatYen(latestOrder.serviceFee)}</strong>
      </div>
    </div>

    <div class="result-total">
      <span>今回の節約合計</span>
      <strong>${formatYen(latestOrder.total)}</strong>
    </div>

    <p class="result-message">
      注文したつもりなので、出費もカロリーもゼロのつもりです。
    </p>
  `;
}

function resetHistoryAndGraph() {
  const ok = confirm("注文履歴と節約グラフをリセットしますか？");

  if (!ok) return;

  localStorage.setItem("todaySaved", "0");
  localStorage.setItem("totalSaved", "0");
  localStorage.setItem("monthlySavings", "{}");
  localStorage.setItem("orderHistory", "[]");

  renderAccount();
  showToast("注文履歴と節約グラフをリセットしました");
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");

  if (oldToast) {
    oldToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 1700);
}

categoryList.addEventListener("click", (event) => {
  const card = event.target.closest(".category-card");
  if (!card) return;

  selectedCategoryIndex = Number(card.dataset.index);
  renderStores();
  showScreen("store");
});

storeList.addEventListener("click", (event) => {
  const card = event.target.closest(".store-card");
  if (!card) return;

  selectedStoreIndex = Number(card.dataset.index);
  renderItems();
  showScreen("item");
});

itemList.addEventListener("click", (event) => {
  const card = event.target.closest(".item-card");
  if (!card) return;

  const itemIndex = Number(card.dataset.index);

  addToCart(selectedCategoryIndex, selectedStoreIndex, itemIndex);
});

checkoutList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-item");
  if (!removeButton) return;

  const id = removeButton.dataset.id;

  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
});

searchInput.addEventListener("input", () => {
  renderSearch(searchInput.value);
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderSearch("");
  searchInput.focus();
});

searchResults.addEventListener("click", (event) => {
  const card = event.target.closest(".search-result");
  if (!card) return;

  const type = card.dataset.type;
  const categoryIndex = Number(card.dataset.categoryIndex);
  const storeIndex = Number(card.dataset.storeIndex);
  const itemIndex = Number(card.dataset.itemIndex);

  if (type === "category") {
    selectedCategoryIndex = categoryIndex;
    renderStores();
    showScreen("store");
  }

  if (type === "store") {
    selectedCategoryIndex = categoryIndex;
    selectedStoreIndex = storeIndex;
    renderItems();
    showScreen("item");
  }

  if (type === "item") {
    addToCart(categoryIndex, storeIndex, itemIndex);
  }
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    if (target === "home") {
      showScreen("home");
    }

    if (target === "search") {
      showScreen("search");
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    }

    if (target === "cart") {
      showScreen("cart");
    }

    if (target === "account") {
      showScreen("account");
    }
  });
});

backToCategories.addEventListener("click", () => {
  showScreen("home");
});

backToStores.addEventListener("click", () => {
  showScreen("store");
});

continueShopping.addEventListener("click", () => {
  if (selectedCategoryIndex !== null && selectedStoreIndex !== null) {
    renderItems();
    showScreen("item");
  } else {
    showScreen("home");
  }
});

clearCart.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

confirmOrder.addEventListener("click", () => {
  startAccepting();
});

resultHome.addEventListener("click", () => {
  showScreen("home");
});

resultAccount.addEventListener("click", () => {
  showScreen("account");
});

saveAccountName.addEventListener("click", () => {
  const name = accountNameInput.value.trim() || "ゲストさん";

  localStorage.setItem("accountName", name);
  renderAccountName();
  showToast("アカウント名を変更しました");
});

accountNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saveAccountName.click();
  }
});

resetAccountData.addEventListener("click", () => {
  resetHistoryAndGraph();
});

loadCart();
loadSavings();
renderCategories();
renderSearch("");
renderCart();
renderAccountName();
showScreen("home");
