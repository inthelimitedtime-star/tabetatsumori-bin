function estimateCalories(name, price) {
  let kcal = Math.round(price * 0.55);

  if (/ラーメン|らぁ麺|つけ麺|そば|麺/.test(name)) kcal = 760;
  if (/カレー/.test(name)) kcal = 920;
  if (/バーガー|サンド|ドッグ/.test(name)) kcal = 640;
  if (/ピザ/.test(name)) kcal = 820;
  if (/寿司|にぎり|ちらし|巻き/.test(name)) kcal = 620;
  if (/海鮮|刺身|まぐろ|サーモン|えび|蟹|かに|帆立|ほたて|いくら/.test(name)) kcal = 560;
  if (/焼肉|カルビ|ハラミ|牛|ロース|肉/.test(name)) kcal = 850;
  if (/弁当|定食/.test(name)) kcal = 880;
  if (/唐揚げ|から揚げ|チキン|鶏|ナゲット/.test(name)) kcal = 780;
  if (/ポテト|フライ/.test(name)) kcal = 520;
  if (/アイス|ジェラート|ソフト|シャーベット|サンデー/.test(name)) kcal = 330;
  if (/ケーキ|タルト|パフェ|クレープ|プリン|ワッフル|ドーナツ|スイーツ/.test(name)) kcal = 460;
  if (/コーヒー|ラテ|ティー|茶|ブレンド|アイスティー/.test(name)) kcal = 180;
  if (/スープ|味噌汁|豚汁|ポタージュ|ミネストローネ|クラムチャウダー/.test(name)) kcal = 240;
  if (/サラダ/.test(name)) kcal = 180;

  return Math.max(80, Math.min(kcal, 1400));
}

function menu(...items) {
  return items.map(([name, price]) => ({
    name,
    price,
    kcal: estimateCalories(name, price)
  }));
}

const CATEGORIES = [
  {
    category: "ファストフード",
    icon: "🍟",
    image: "./fastfood.PNG",
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
      },
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
      },
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
      },
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
  },

  {
    category: "アイスクリーム",
    icon: "🍦",
    stores: [
      {
        name: "アイス工房ミルキー",
        items: menu(
          ["濃厚バニラアイス", 420],
          ["チョコチップアイス", 480],
          ["いちごミルクアイス", 520],
          ["抹茶あずきアイス", 560],
          ["ダブルアイスカップ", 680]
        )
      },
      {
        name: "ジェラート日和",
        items: menu(
          ["ピスタチオジェラート", 620],
          ["マンゴーシャーベット", 560],
          ["塩ミルクジェラート", 520],
          ["ベリーヨーグルトジェラート", 580],
          ["トリプルジェラート", 780]
        )
      },
      {
        name: "ソフトクリーム研究所",
        items: menu(
          ["北海道ミルクソフト", 480],
          ["チョコバニラミックス", 520],
          ["キャラメルナッツサンデー", 680],
          ["黒蜜きなこソフト", 620],
          ["カラフルアイスパフェ", 760]
        )
      }
    ]
  },

  {
    category: "海鮮料理",
    icon: "🦐",
    stores: [
      {
        name: "海鮮食堂なみの音",
        items: menu(
          ["海鮮ミックス丼", 1380],
          ["まぐろ山かけ丼", 1180],
          ["サーモンいくら丼", 1480],
          ["えびフライ定食", 1280],
          ["あさり味噌汁", 360]
        )
      },
      {
        name: "漁師めし港町",
        items: menu(
          ["刺身盛り定食", 1580],
          ["炙り帆立バター丼", 1380],
          ["銀鮭ハラス焼き定食", 1280],
          ["海老天重", 1180],
          ["蟹クリームコロッケ", 780]
        )
      },
      {
        name: "海老と魚の台所",
        items: menu(
          ["特大えび天丼", 1280],
          ["白身魚フライプレート", 980],
          ["海鮮塩焼きそば", 1080],
          ["まぐろレアカツ丼", 1380],
          ["いくら小鉢", 580]
        )
      }
    ]
  },

  {
    category: "スープ",
    icon: "🥣",
    stores: [
      {
        name: "スープ食堂ぽかぽか",
        items: menu(
          ["具だくさん野菜スープ", 680],
          ["濃厚コーンポタージュ", 620],
          ["チキンと豆のスープ", 760],
          ["ミネストローネ", 720],
          ["パンセット", 380]
        )
      },
      {
        name: "スープラボ湯気",
        items: menu(
          ["クラムチャウダー", 820],
          ["海老ビスクスープ", 880],
          ["きのこクリームスープ", 760],
          ["牛すじトマトスープ", 920],
          ["チーズリゾット風スープ", 980]
        )
      },
      {
        name: "朝スープと夜スープ",
        items: menu(
          ["朝のたまごスープ", 560],
          ["参鶏湯風スープ", 980],
          ["豚汁たっぷりセット", 720],
          ["生姜と鶏団子スープ", 820],
          ["スープカレー風ボウル", 1060]
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

const checkoutOriginalSubtotal = document.getElementById("checkoutOriginalSubtotal");
const checkoutDiscount = document.getElementById("checkoutDiscount");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutBogo = document.getElementById("checkoutBogo");
const checkoutDelivery = document.getElementById("checkoutDelivery");
const checkoutService = document.getElementById("checkoutService");
const checkoutCalories = document.getElementById("checkoutCalories");
const checkoutTotal = document.getElementById("checkoutTotal");
const cartCount = document.getElementById("cartCount");

const acceptStatus = document.getElementById("acceptStatus");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const accountNameDisplay = document.getElementById("accountNameDisplay");
const accountNameInput = document.getElementById("accountNameInput");
const saveAccountName = document.getElementById("saveAccountName");
const accountTodaySaved = document.getElementById("accountTodaySaved");
const accountTodayCalories = document.getElementById("accountTodayCalories");
const accountMonthSaved = document.getElementById("accountMonthSaved");
const accountMonthCalories = document.getElementById("accountMonthCalories");
const accountTotalSaved = document.getElementById("accountTotalSaved");
const accountTotalCalories = document.getElementById("accountTotalCalories");
const orderHistoryList = document.getElementById("orderHistoryList");
const monthlyChart = document.getElementById("monthlyChart");
const totalChart = document.getElementById("totalChart");

const resetModal = document.getElementById("resetModal");
const openResetModal = document.getElementById("openResetModal");
const confirmResetData = document.getElementById("confirmResetData");
const cancelResetData = document.getElementById("cancelResetData");

const backToCategories = document.getElementById("backToCategories");
const backToStores = document.getElementById("backToStores");
const confirmOrder = document.getElementById("confirmOrder");
const continueShopping = document.getElementById("continueShopping");
const clearCart = document.getElementById("clearCart");
const resultHome = document.getElementById("resultHome");
const resultAccount = document.getElementById("resultAccount");

function safeText(element, text) {
  if (element) element.textContent = text;
}

function safeHtml(element, html) {
  if (element) element.innerHTML = html;
}

function addSafeEvent(element, eventName, handler) {
  if (!element) return;
  element.addEventListener(eventName, handler);
}

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

function getWeekKey() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const day = Math.floor((now - start) / 86400000);
  const week = Math.ceil((day + start.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${week}`;
}

function hashString(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function formatYen(num) {
  return `¥${Number(num).toLocaleString()}`;
}

function formatKcal(num) {
  return `${Number(num).toLocaleString()}kcal`;
}

function getStoreDiscountRate(storeName) {
  const rates = [10, 15, 20, 25, 30];
  const index = hashString(`${getWeekKey()}-${storeName}`) % rates.length;
  return rates[index];
}

function isBogoItem(storeName, itemName) {
  return hashString(`${getWeekKey()}-${storeName}-${itemName}`) % 7 === 0;
}

function getDiscountedPrice(price, storeName) {
  const rate = getStoreDiscountRate(storeName);
  return Math.max(1, Math.round(price * (1 - rate / 100)));
}

function findCategoryIndexByName(categoryName) {
  return CATEGORIES.findIndex((category) => category.category === categoryName);
}

function findStoreIndexByName(categoryIndex, storeName) {
  if (categoryIndex < 0) return -1;
  return CATEGORIES[categoryIndex].stores.findIndex((store) => store.name === storeName);
}

function normalizeCartItem(item) {
  const categoryIndex = findCategoryIndexByName(item.category);
  const storeIndex = findStoreIndexByName(categoryIndex, item.store);
  const originalPrice = Number(item.originalPrice ?? item.price ?? 0);
  const discountRate = Number(item.discountRate ?? getStoreDiscountRate(item.store || ""));
  const chargedPrice = Number(item.chargedPrice ?? getDiscountedPrice(originalPrice, item.store || ""));
  const bogo = Boolean(item.bogo ?? isBogoItem(item.store || "", item.name || ""));
  const kcal = Number(item.kcal ?? estimateCalories(item.name || "", originalPrice));

  return {
    ...item,
    categoryIndex,
    storeIndex,
    originalPrice,
    discountRate,
    chargedPrice,
    bogo,
    kcal,
    freeQuantity: bogo ? 1 : 0,
    totalKcal: kcal * (bogo ? 2 : 1)
  };
}

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem("tsumoriCart") || "[]").map(normalizeCartItem);
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

function getMonthlyCalories() {
  try {
    return JSON.parse(localStorage.getItem("monthlyCalories") || "{}");
  } catch {
    return {};
  }
}

function saveMonthlyCalories(data) {
  localStorage.setItem("monthlyCalories", JSON.stringify(data));
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
    localStorage.setItem("todayCalories", "0");
  }

  renderAccount();
}

function addSavings(amount, kcal) {
  const todaySaved = Number(localStorage.getItem("todaySaved") || 0) + amount;
  const totalSaved = Number(localStorage.getItem("totalSaved") || 0) + amount;
  const todayCalories = Number(localStorage.getItem("todayCalories") || 0) + kcal;
  const totalCalories = Number(localStorage.getItem("totalCalories") || 0) + kcal;

  const monthKey = getMonthKey();
  const monthlySavings = getMonthlySavings();
  const monthlyCalories = getMonthlyCalories();

  monthlySavings[monthKey] = Number(monthlySavings[monthKey] || 0) + amount;
  monthlyCalories[monthKey] = Number(monthlyCalories[monthKey] || 0) + kcal;

  localStorage.setItem("todaySaved", String(todaySaved));
  localStorage.setItem("totalSaved", String(totalSaved));
  localStorage.setItem("todayCalories", String(todayCalories));
  localStorage.setItem("totalCalories", String(totalCalories));
  saveMonthlySavings(monthlySavings);
  saveMonthlyCalories(monthlyCalories);

  renderAccount();
}

function addOrderHistory(order) {
  const history = getOrderHistory();

  history.unshift(order);
  saveOrderHistory(history);
}

function renderAccountName() {
  const name = localStorage.getItem("accountName") || "ゲストさん";

  safeText(accountNameDisplay, name);

  if (accountNameInput) {
    accountNameInput.value = name;
  }
}

function renderAccount() {
  const todaySaved = Number(localStorage.getItem("todaySaved") || 0);
  const totalSaved = Number(localStorage.getItem("totalSaved") || 0);
  const todayCalories = Number(localStorage.getItem("todayCalories") || 0);
  const totalCalories = Number(localStorage.getItem("totalCalories") || 0);

  const monthKey = getMonthKey();
  const monthlySavings = getMonthlySavings();
  const monthlyCalories = getMonthlyCalories();
  const monthSaved = Number(monthlySavings[monthKey] || 0);
  const monthCalories = Number(monthlyCalories[monthKey] || 0);

  safeText(accountTodaySaved, formatYen(todaySaved));
  safeText(accountTodayCalories, formatKcal(todayCalories));
  safeText(accountMonthSaved, formatYen(monthSaved));
  safeText(accountMonthCalories, formatKcal(monthCalories));
  safeText(accountTotalSaved, formatYen(totalSaved));
  safeText(accountTotalCalories, formatKcal(totalCalories));

  renderAccountName();
  renderOrderHistory();
  renderCharts();
}

function renderOrderHistory() {
  if (!orderHistoryList) return;

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
        <span>${order.dateText}・${formatKcal(order.kcalTotal || 0)}</span>
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
  if (!monthlyChart || !totalChart) return;

  const monthlySavings = getMonthlySavings();
  const monthlyCalories = getMonthlyCalories();
  const months = getLastSixMonths();

  const monthlyData = months.map((month) => ({
    key: month,
    label: getMonthLabel(month),
    value: Number(monthlySavings[month] || 0),
    kcal: Number(monthlyCalories[month] || 0)
  }));

  const maxMonthValue = Math.max(...monthlyData.map((item) => item.value), 1);

  monthlyChart.innerHTML = "";

  monthlyData.forEach((item) => {
    const percent = item.value === 0 ? 3 : Math.max(8, Math.round((item.value / maxMonthValue) * 100));
    const col = document.createElement("div");
    col.className = "chart-col";

    col.innerHTML = `
      <div class="chart-value">${formatYen(item.value)}<br>${formatKcal(item.kcal)}</div>
      <div class="chart-bar-wrap">
        <div class="chart-bar" style="height:${percent}%"></div>
      </div>
      <div class="chart-label">${item.label}</div>
    `;

    monthlyChart.appendChild(col);
  });

  let runningTotal = 0;
  let runningKcal = 0;

  const totalData = monthlyData.map((item) => {
    runningTotal += item.value;
    runningKcal += item.kcal;

    return {
      label: item.label,
      value: runningTotal,
      kcal: runningKcal
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
      <div class="line-value">${formatYen(item.value)}<br>${formatKcal(item.kcal)}</div>
    `;

    totalChart.appendChild(row);
  });
}

function getCartOriginalSubtotal() {
  return cart.reduce((sum, item) => sum + Number(item.originalPrice || 0), 0);
}

function getCartDiscountAmount() {
  return cart.reduce((sum, item) => {
    return sum + Math.max(0, Number(item.originalPrice || 0) - Number(item.chargedPrice || 0));
  }, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + Number(item.chargedPrice || 0), 0);
}

function getCartBogoValue() {
  return cart.reduce((sum, item) => {
    if (!item.bogo) return sum;
    return sum + Number(item.chargedPrice || 0);
  }, 0);
}

function getStoreCount() {
  if (cart.length === 0) return 0;
  const stores = new Set(cart.map((item) => item.store));
  return stores.size;
}

function getDeliveryFee() {
  return getStoreCount() * 100;
}

function getServiceFee() {
  return Math.round(getCartSubtotal() * 0.07);
}

function getCartKcalTotal() {
  return cart.reduce((sum, item) => sum + Number(item.totalKcal || item.kcal || 0), 0);
}

function getCartTotal() {
  return getCartSubtotal() + getDeliveryFee() + getServiceFee();
}

function getCartSummary() {
  return {
    originalSubtotal: getCartOriginalSubtotal(),
    discountAmount: getCartDiscountAmount(),
    subtotal: getCartSubtotal(),
    bogoValue: getCartBogoValue(),
    storeCount: getStoreCount(),
    deliveryFee: getDeliveryFee(),
    serviceFee: getServiceFee(),
    kcalTotal: getCartKcalTotal(),
    total: getCartTotal()
  };
}

function updateCartCount() {
  const count = cart.length;

  safeText(cartCount, count);

  if (!cartCount) return;

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

  if (name === "home" && homeScreen) homeScreen.classList.add("active");
  if (name === "store" && storeScreen) storeScreen.classList.add("active");
  if (name === "item" && itemScreen) itemScreen.classList.add("active");
  if (name === "search" && searchScreen) searchScreen.classList.add("active");
  if (name === "cart" && cartScreen) cartScreen.classList.add("active");
  if (name === "accepting" && acceptingScreen) acceptingScreen.classList.add("active");
  if (name === "result" && resultScreen) resultScreen.classList.add("active");
  if (name === "account" && accountScreen) accountScreen.classList.add("active");

  setActiveNav(name);

  if (name === "cart") renderCart();
  if (name === "account") renderAccount();
  if (name === "search" && searchInput) renderSearch(searchInput.value);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderCategories() {
  if (!categoryList) return;

  categoryList.innerHTML = "";

  CATEGORIES.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    button.dataset.index = index;

    const itemCount = category.stores.reduce((sum, store) => sum + store.items.length, 0);

    const iconHtml = category.image
      ? `<img src="${category.image}" alt="${category.category}">`
      : category.icon;

    button.innerHTML = `
      <span class="category-icon">${iconHtml}</span>
      <span class="category-name">${category.category}</span>
      <span class="category-count">${category.stores.length}店舗・${itemCount}商品</span>
    `;

    categoryList.appendChild(button);
  });
}

function renderStores() {
  if (!storeList || selectedCategoryIndex === null) return;

  const category = CATEGORIES[selectedCategoryIndex];
  if (!category) return;

  safeText(storeTitle, `${category.category}のお店`);
  storeList.innerHTML = "";

  category.stores.forEach((store, index) => {
    const rate = getStoreDiscountRate(store.name);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "store-card";
    button.dataset.index = index;

    button.innerHTML = `
      <div class="store-card-top">
        <div>
          <strong>${store.name}</strong>
          <span>${store.items.length}件の商品・配達料 ¥100 のつもり</span>
          <span class="store-sub-badge">今週 ${rate}% OFF</span>
        </div>
        <div class="store-badge">${rate}% OFF</div>
      </div>
    `;

    storeList.appendChild(button);
  });
}

function renderItems() {
  if (!itemList || selectedCategoryIndex === null || selectedStoreIndex === null) return;

  const category = CATEGORIES[selectedCategoryIndex];
  if (!category) return;

  const store = category.stores[selectedStoreIndex];
  if (!store) return;

  safeText(itemTitle, store.name);
  itemList.innerHTML = "";

  store.items.forEach((item, index) => {
    const rate = getStoreDiscountRate(store.name);
    const discountedPrice = getDiscountedPrice(item.price, store.name);
    const bogo = isBogoItem(store.name, item.name);

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
          <div class="item-tags">
            <span class="deal-tag">${rate}% OFF</span>
            ${bogo ? `<span class="bogo-tag">1つ買うと1つ無料</span>` : ""}
            <span class="kcal-tag">${formatKcal(item.kcal)}</span>
          </div>
        </div>
      </div>
      <div class="item-price-wrap">
        <span class="item-old-price">${formatYen(item.price)}</span>
        <strong class="item-price">${formatYen(discountedPrice)}</strong>
      </div>
    `;

    itemList.appendChild(button);
  });
}

function addToCart(categoryIndex, storeIndex, itemIndex) {
  const category = CATEGORIES[categoryIndex];
  if (!category) return;

  const store = category.stores[storeIndex];
  if (!store) return;

  const item = store.items[itemIndex];
  if (!item) return;

  const discountRate = getStoreDiscountRate(store.name);
  const chargedPrice = getDiscountedPrice(item.price, store.name);
  const bogo = isBogoItem(store.name, item.name);

  selectedCategoryIndex = categoryIndex;
  selectedStoreIndex = storeIndex;

  localStorage.setItem("lastCategoryIndex", String(categoryIndex));
  localStorage.setItem("lastStoreIndex", String(storeIndex));

  cart.push({
    id: `${Date.now()}-${Math.random()}`,
    category: category.category,
    icon: category.icon,
    store: store.name,
    name: item.name,
    originalPrice: item.price,
    discountRate,
    chargedPrice,
    bogo,
    kcal: item.kcal,
    freeQuantity: bogo ? 1 : 0,
    totalKcal: item.kcal * (bogo ? 2 : 1)
  });

  saveCart();
  showToast(`${item.name}をカートに追加しました`);
  showScreen("cart");
}

function renderCart() {
  if (!checkoutList) return;

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
        <span>${item.discountRate}% OFF・${formatKcal(item.totalKcal)}</span>
        ${item.bogo ? `<span>1つ買ったら1つ無料つき</span>` : ""}
      </div>
      <div class="checkout-price">
        <span class="old">${formatYen(item.originalPrice)}</span>
        <strong>${formatYen(item.chargedPrice)}</strong>
        <button class="remove-item" data-id="${item.id}" type="button">削除</button>
      </div>
    `;

    checkoutList.appendChild(row);
  });

  const summary = getCartSummary();

  safeText(checkoutOriginalSubtotal, formatYen(summary.originalSubtotal));
  safeText(checkoutDiscount, `-${formatYen(summary.discountAmount)}`);
  safeText(checkoutSubtotal, formatYen(summary.subtotal));
  safeText(checkoutBogo, `${formatYen(summary.bogoValue)}分お得`);
  safeText(checkoutDelivery, `${formatYen(summary.deliveryFee)}（${summary.storeCount}店舗）`);
  safeText(checkoutService, formatYen(summary.serviceFee));
  safeText(checkoutCalories, formatKcal(summary.kcalTotal));
  safeText(checkoutTotal, formatYen(summary.total));

  if (confirmOrder) {
    confirmOrder.disabled = cart.length === 0;
  }

  updateCartCount();
}

function updateClearSearchButton() {
  if (!clearSearch || !searchInput) return;

  if (searchInput.value.trim()) {
    clearSearch.classList.remove("hidden");
  } else {
    clearSearch.classList.add("hidden");
  }
}

function renderSearch(query) {
  if (!searchResults) return;

  const q = query.trim().toLowerCase();
  searchResults.innerHTML = "";
  updateClearSearchButton();

  if (!q) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <strong>メニューや店舗を検索</strong>
        <p>例：ラーメン、カレー、チキン、アイス、海鮮、スープ</p>
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
          description: `${category.category}・今週${getStoreDiscountRate(store.name)}% OFF`
        });
      }

      store.items.forEach((item, itemIndex) => {
        if (item.name.toLowerCase().includes(q)) {
          const discountedPrice = getDiscountedPrice(item.price, store.name);

          results.push({
            type: "item",
            categoryIndex,
            storeIndex,
            itemIndex,
            title: item.name,
            description: `${store.name}・${formatYen(discountedPrice)}・${formatKcal(item.kcal)}`
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

  const summary = getCartSummary();

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
    originalSubtotal: summary.originalSubtotal,
    discountAmount: summary.discountAmount,
    subtotal: summary.subtotal,
    bogoValue: summary.bogoValue,
    deliveryFee: summary.deliveryFee,
    serviceFee: summary.serviceFee,
    kcalTotal: summary.kcalTotal,
    total: summary.total
  };

  addSavings(latestOrder.total, latestOrder.kcalTotal);
  addOrderHistory(latestOrder);

  cart = [];
  saveCart();
  renderCart();

  showScreen("accepting");

  safeText(acceptStatus, "注文を受け付けたつもりです");

  acceptTimers.push(setTimeout(() => {
    safeText(acceptStatus, "お店が注文を確認しているつもりです");
  }, 700));

  acceptTimers.push(setTimeout(() => {
    safeText(acceptStatus, "調理しているつもりです");
  }, 1400));

  acceptTimers.push(setTimeout(() => {
    safeText(acceptStatus, "配達員が向かっているつもりです");
  }, 2100));

  acceptTimers.push(setTimeout(() => {
    safeText(acceptStatus, "受付完了しました");
  }, 2800));

  acceptTimers.push(setTimeout(() => {
    renderResult();
    showScreen("result");
  }, 3500));
}

function renderResult() {
  if (!latestOrder || !resultText) return;

  const itemNames = latestOrder.items.map((item) => {
    return `
      <li>
        ${item.name}${item.bogo ? " ＋無料1個" : ""}
        <span>${formatYen(item.chargedPrice)}</span>
      </li>
    `;
  }).join("");

  safeText(resultTitle, `${latestOrder.items.length}品を食べたつもり！`);

  resultText.innerHTML = `
    <div class="result-order-list">
      <ul>
        ${itemNames}
      </ul>
    </div>

    <div class="result-fee-list">
      <div>
        <span>定価小計</span>
        <strong>${formatYen(latestOrder.originalSubtotal)}</strong>
      </div>
      <div>
        <span>店舗割引</span>
        <strong>-${formatYen(latestOrder.discountAmount)}</strong>
      </div>
      <div>
        <span>割引後小計</span>
        <strong>${formatYen(latestOrder.subtotal)}</strong>
      </div>
      <div>
        <span>1つ無料分</span>
        <strong>${formatYen(latestOrder.bogoValue)}分お得</strong>
      </div>
      <div>
        <span>配達料</span>
        <strong>${formatYen(latestOrder.deliveryFee)}</strong>
      </div>
      <div>
        <span>サービス料 7%</span>
        <strong>${formatYen(latestOrder.serviceFee)}</strong>
      </div>
      <div>
        <span>合計カロリー</span>
        <strong>${formatKcal(latestOrder.kcalTotal)}</strong>
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

function showResetModal() {
  if (resetModal) resetModal.classList.remove("hidden");
}

function hideResetModal() {
  if (resetModal) resetModal.classList.add("hidden");
}

function resetHistoryAndGraph() {
  localStorage.setItem("todaySaved", "0");
  localStorage.setItem("totalSaved", "0");
  localStorage.setItem("monthlySavings", "{}");
  localStorage.setItem("orderHistory", "[]");
  localStorage.setItem("todayCalories", "0");
  localStorage.setItem("totalCalories", "0");
  localStorage.setItem("monthlyCalories", "{}");

  hideResetModal();
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

function returnToLastStore() {
  let categoryIndex = selectedCategoryIndex;
  let storeIndex = selectedStoreIndex;

  if (categoryIndex === null || storeIndex === null || categoryIndex < 0 || storeIndex < 0) {
    const lastCategoryIndex = Number(localStorage.getItem("lastCategoryIndex"));
    const lastStoreIndex = Number(localStorage.getItem("lastStoreIndex"));

    if (!Number.isNaN(lastCategoryIndex) && !Number.isNaN(lastStoreIndex)) {
      categoryIndex = lastCategoryIndex;
      storeIndex = lastStoreIndex;
    }
  }

  if ((categoryIndex === null || storeIndex === null || categoryIndex < 0 || storeIndex < 0) && cart.length > 0) {
    const last = cart[cart.length - 1];
    categoryIndex = findCategoryIndexByName(last.category);
    storeIndex = findStoreIndexByName(categoryIndex, last.store);
  }

  if (categoryIndex !== null && storeIndex !== null && categoryIndex >= 0 && storeIndex >= 0) {
    selectedCategoryIndex = categoryIndex;
    selectedStoreIndex = storeIndex;
    renderItems();
    showScreen("item");
  } else {
    showScreen("home");
  }
}

addSafeEvent(categoryList, "click", (event) => {
  const card = event.target.closest(".category-card");
  if (!card) return;

  selectedCategoryIndex = Number(card.dataset.index);
  renderStores();
  showScreen("store");
});

addSafeEvent(storeList, "click", (event) => {
  const card = event.target.closest(".store-card");
  if (!card) return;

  selectedStoreIndex = Number(card.dataset.index);

  localStorage.setItem("lastCategoryIndex", String(selectedCategoryIndex));
  localStorage.setItem("lastStoreIndex", String(selectedStoreIndex));

  renderItems();
  showScreen("item");
});

addSafeEvent(itemList, "click", (event) => {
  const card = event.target.closest(".item-card");
  if (!card) return;

  const itemIndex = Number(card.dataset.index);
  addToCart(selectedCategoryIndex, selectedStoreIndex, itemIndex);
});

addSafeEvent(checkoutList, "click", (event) => {
  const removeButton = event.target.closest(".remove-item");
  if (!removeButton) return;

  const id = removeButton.dataset.id;

  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
});

addSafeEvent(searchInput, "input", () => {
  renderSearch(searchInput.value);
});

addSafeEvent(clearSearch, "click", () => {
  if (!searchInput) return;

  searchInput.value = "";
  renderSearch("");
  searchInput.focus();
});

addSafeEvent(searchResults, "click", (event) => {
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

    localStorage.setItem("lastCategoryIndex", String(categoryIndex));
    localStorage.setItem("lastStoreIndex", String(storeIndex));

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

    if (target === "home") showScreen("home");

    if (target === "search") {
      showScreen("search");

      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    }

    if (target === "cart") showScreen("cart");
    if (target === "account") showScreen("account");
  });
});

addSafeEvent(backToCategories, "click", () => {
  showScreen("home");
});

addSafeEvent(backToStores, "click", () => {
  showScreen("store");
});

addSafeEvent(continueShopping, "click", () => {
  returnToLastStore();
});

addSafeEvent(clearCart, "click", () => {
  cart = [];
  saveCart();
  renderCart();
});

addSafeEvent(confirmOrder, "click", () => {
  startAccepting();
});

addSafeEvent(resultHome, "click", () => {
  showScreen("home");
});

addSafeEvent(resultAccount, "click", () => {
  showScreen("account");
});

addSafeEvent(saveAccountName, "click", () => {
  if (!accountNameInput) return;

  const name = accountNameInput.value.trim() || "ゲストさん";

  localStorage.setItem("accountName", name);
  renderAccountName();
  showToast("アカウント名を変更しました");
});

addSafeEvent(accountNameInput, "keydown", (event) => {
  if (event.key === "Enter" && saveAccountName) {
    saveAccountName.click();
  }
});

addSafeEvent(openResetModal, "click", () => {
  showResetModal();
});

addSafeEvent(cancelResetData, "click", () => {
  hideResetModal();
});

addSafeEvent(confirmResetData, "click", () => {
  resetHistoryAndGraph();
});

addSafeEvent(resetModal, "click", (event) => {
  if (event.target === resetModal) {
    hideResetModal();
  }
});

loadCart();
loadSavings();
renderCategories();
renderSearch("");
renderCart();
renderAccountName();
showScreen("home");
