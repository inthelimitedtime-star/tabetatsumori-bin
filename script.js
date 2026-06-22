const CATEGORIES = [
  {
    category: "ファストフード",
    icon: "🍟",
    stores: [
      {
        name: "パクっとキッチン",
        items: [
          { name: "ごちそうスマッシュバーガー", price: 980 },
          { name: "サクサクチキンバスケット", price: 880 },
          { name: "ほくほくポテトBOX", price: 520 },
          { name: "てりやきミートサンド", price: 760 },
          { name: "ナゲットパーティーセット", price: 690 }
        ]
      },
      {
        name: "スピードミール88",
        items: [
          { name: "ダブルミートサンド", price: 920 },
          { name: "スパイシーチキンロール", price: 820 },
          { name: "やみつきペッパーポテト", price: 560 },
          { name: "チーズドッグプレート", price: 780 },
          { name: "バニラシェイク気分", price: 480 }
        ]
      },
      {
        name: "モグモグステーション",
        items: [
          { name: "特盛ジャンクプレート", price: 1180 },
          { name: "ガーリックチキンBOX", price: 890 },
          { name: "チーズポテト山盛り", price: 650 },
          { name: "ミートパイセット", price: 760 },
          { name: "甘辛チキンナゲット", price: 680 }
        ]
      }
    ]
  },

  {
    category: "ハンバーガー",
    icon: "🍔",
    stores: [
      {
        name: "バーガースタンド橙",
        items: [
          { name: "橙クラシックバーガー", price: 1080 },
          { name: "炙りチーズバーガー", price: 1180 },
          { name: "アボカドベーコンバーガー", price: 1280 },
          { name: "オニオンリングバスケット", price: 620 },
          { name: "自家製レモンスカッシュ", price: 520 }
        ]
      },
      {
        name: "ミートラボ横丁",
        items: [
          { name: "極厚パティバーガー", price: 1380 },
          { name: "月見てりたまバーガー", price: 1160 },
          { name: "黒こしょうチキンバーガー", price: 980 },
          { name: "ガーリックポテト", price: 580 },
          { name: "濃厚ミルクシェイク", price: 560 }
        ]
      },
      {
        name: "バンズ研究所",
        items: [
          { name: "ふわバンズチーズバーガー", price: 1080 },
          { name: "はちみつベーコンバーガー", price: 1260 },
          { name: "スモーキーBBQバーガー", price: 1320 },
          { name: "チリチーズポテト", price: 690 },
          { name: "コーラフロート", price: 540 }
        ]
      }
    ]
  },

  {
    category: "ラーメン",
    icon: "🍜",
    stores: [
      {
        name: "麺処しろうず",
        items: [
          { name: "白だし豚骨らぁ麺", price: 980 },
          { name: "辛赤味噌らぁ麺", price: 1060 },
          { name: "炙りチャーシュー麺", price: 1280 },
          { name: "ひとくち餃子", price: 480 },
          { name: "焼豚めし", price: 520 }
        ]
      },
      {
        name: "らぁ麺 風雲堂",
        items: [
          { name: "濃厚鶏白湯そば", price: 1080 },
          { name: "魚介しょうゆらぁ麺", price: 960 },
          { name: "背脂ねぎらぁ麺", price: 1050 },
          { name: "半熟味玉トッピング", price: 180 },
          { name: "特製炒飯", price: 620 }
        ]
      },
      {
        name: "麺屋こがね",
        items: [
          { name: "黄金味噌ラーメン", price: 1020 },
          { name: "焦がし醤油ラーメン", price: 980 },
          { name: "肉盛りつけ麺", price: 1240 },
          { name: "にんにく餃子", price: 460 },
          { name: "ねぎ塩チャーシュー丼", price: 580 }
        ]
      }
    ]
  },

  {
    category: "寿司",
    icon: "🍣",
    stores: [
      {
        name: "すし湊まる",
        items: [
          { name: "まぐろ三昧セット", price: 1480 },
          { name: "炙りサーモン握り", price: 1280 },
          { name: "海鮮ちらし重", price: 1380 },
          { name: "えび天巻き", price: 920 },
          { name: "茶碗蒸し", price: 360 }
        ]
      },
      {
        name: "鮨うたげ",
        items: [
          { name: "特上にぎり盛り", price: 1980 },
          { name: "とろサーモンづくし", price: 1380 },
          { name: "ねぎとろ巻き", price: 780 },
          { name: "いくら小丼", price: 980 },
          { name: "あおさ味噌汁", price: 260 }
        ]
      },
      {
        name: "海町すし便",
        items: [
          { name: "海町にぎり10貫", price: 1580 },
          { name: "まぐろ赤身セット", price: 1180 },
          { name: "穴子一本握り", price: 980 },
          { name: "サーモン親子ちらし", price: 1480 },
          { name: "玉子焼き", price: 420 }
        ]
      }
    ]
  },

  {
    category: "カレー",
    icon: "🍛",
    stores: [
      {
        name: "カレー工房スパイス月",
        items: [
          { name: "王道ビーフカレー", price: 980 },
          { name: "サクサクロースカツカレー", price: 1260 },
          { name: "彩り野菜カレー", price: 1050 },
          { name: "チーズまみれカレー", price: 1120 },
          { name: "タンドリーチキンカレー", price: 1180 }
        ]
      },
      {
        name: "ごろっと煮込みカレー屋",
        items: [
          { name: "とろ旨ポークカレー", price: 960 },
          { name: "海老フライカレー", price: 1280 },
          { name: "ほうれん草チキンカレー", price: 1080 },
          { name: "温玉カレー", price: 920 },
          { name: "旨辛キーマカレー", price: 1060 }
        ]
      },
      {
        name: "スパイス食堂まる雲",
        items: [
          { name: "濃厚バターチキンカレー", price: 1150 },
          { name: "黒ごまビーフカレー", price: 1180 },
          { name: "なすとひき肉のカレー", price: 980 },
          { name: "三種あいがけカレー", price: 1380 },
          { name: "チーズナン気分", price: 520 }
        ]
      }
    ]
  },

  {
    category: "日本風カレー",
    icon: "🥄",
    stores: [
      {
        name: "和だし咖喱 あかり",
        items: [
          { name: "和風牛すじカレー", price: 1080 },
          { name: "だし香るカツカレー", price: 1260 },
          { name: "とろ玉カレー丼", price: 960 },
          { name: "甘辛そぼろカレー", price: 920 },
          { name: "きのこ和風カレー", price: 980 }
        ]
      },
      {
        name: "おうち咖喱日和",
        items: [
          { name: "昔ながらの家カレー", price: 880 },
          { name: "しょうが焼きカレー", price: 1120 },
          { name: "ハンバーグカレー", price: 1180 },
          { name: "コロッケカレー", price: 920 },
          { name: "やさしい甘口カレー", price: 850 }
        ]
      },
      {
        name: "カレー亭こむぎ",
        items: [
          { name: "給食風ポークカレー", price: 860 },
          { name: "和牛すじ煮込みカレー", price: 1280 },
          { name: "からあげカレー", price: 1080 },
          { name: "半熟卵のせカレー", price: 980 },
          { name: "福神漬け大盛り", price: 120 }
        ]
      }
    ]
  },

  {
    category: "ピザ",
    icon: "🍕",
    stores: [
      {
        name: "ピッツァ空と窯",
        items: [
          { name: "王道マルゲリータ", price: 1480 },
          { name: "照り焼きチキンピザ", price: 1680 },
          { name: "4種チーズの濃厚ピザ", price: 1780 },
          { name: "海の幸トマトピザ", price: 1880 },
          { name: "フライドポテト", price: 520 }
        ]
      },
      {
        name: "まるっとピザ研究所",
        items: [
          { name: "ペパロニスマイル", price: 1580 },
          { name: "コーンマヨベーコン", price: 1480 },
          { name: "たっぷりソーセージピザ", price: 1720 },
          { name: "バジル香るピザ", price: 1660 },
          { name: "ハニーチーズピザ", price: 1740 }
        ]
      },
      {
        name: "夜ふかしピザ便",
        items: [
          { name: "深夜のミートピザ", price: 1690 },
          { name: "チリトマトピザ", price: 1580 },
          { name: "もち明太ピザ", price: 1620 },
          { name: "ポテマヨピザ", price: 1480 },
          { name: "チキンナゲット", price: 640 }
        ]
      }
    ]
  },

  {
    category: "中華料理",
    icon: "🥟",
    stores: [
      {
        name: "中華食堂 龍々",
        items: [
          { name: "肉汁焼き餃子", price: 520 },
          { name: "黄金炒飯", price: 850 },
          { name: "ふわとろ天津飯", price: 920 },
          { name: "本格麻婆豆腐", price: 980 },
          { name: "油淋鶏", price: 1050 }
        ]
      },
      {
        name: "上海ダイニング紅福",
        items: [
          { name: "海老炒飯", price: 980 },
          { name: "黒酢酢豚", price: 1120 },
          { name: "四川風麻婆丼", price: 960 },
          { name: "小籠包", price: 680 },
          { name: "鶏から香味ソース", price: 980 }
        ]
      },
      {
        name: "町中華まんぷく楼",
        items: [
          { name: "にんにく餃子定食", price: 920 },
          { name: "チャーシュー炒飯", price: 980 },
          { name: "回鍋肉丼", price: 960 },
          { name: "えびチリ", price: 1180 },
          { name: "春巻きセット", price: 560 }
        ]
      }
    ]
  },

  {
    category: "韓国料理",
    icon: "🌶️",
    stores: [
      {
        name: "ソウル屋台ハヌル",
        items: [
          { name: "ヤンニョムチキン", price: 1180 },
          { name: "石焼きビビンバ", price: 1080 },
          { name: "チーズトッポギ", price: 890 },
          { name: "カルビキンパ", price: 860 },
          { name: "スンドゥブ", price: 980 }
        ]
      },
      {
        name: "韓ごはんモグモグ亭",
        items: [
          { name: "ハニーバターチキン", price: 1160 },
          { name: "プルコギ丼", price: 1080 },
          { name: "韓国風海苔巻き", price: 820 },
          { name: "チーズボール", price: 620 },
          { name: "キムチチャーハン", price: 920 }
        ]
      },
      {
        name: "チキンとキンパの店",
        items: [
          { name: "甘辛チキンBOX", price: 1280 },
          { name: "チーズキンパ", price: 920 },
          { name: "旨辛ラッポッキ", price: 980 },
          { name: "ナムルビビンバ", price: 960 },
          { name: "韓国のりポテト", price: 540 }
        ]
      }
    ]
  },

  {
    category: "和食",
    icon: "🍱",
    stores: [
      {
        name: "ごはん処 いろは",
        items: [
          { name: "しょうが焼き定食", price: 1080 },
          { name: "鯖の塩焼き定食", price: 1120 },
          { name: "鶏の黒酢あん定食", price: 1180 },
          { name: "だし巻き玉子", price: 480 },
          { name: "豚汁", price: 360 }
        ]
      },
      {
        name: "和み食堂こまち",
        items: [
          { name: "チキン南蛮定食", price: 1160 },
          { name: "から揚げ定食", price: 1050 },
          { name: "鮭の西京焼き定食", price: 1240 },
          { name: "肉じゃが小鉢", price: 420 },
          { name: "五目炊き込みご飯", price: 520 }
        ]
      },
      {
        name: "定食屋まる福",
        items: [
          { name: "とんかつ定食", price: 1180 },
          { name: "味噌カツ定食", price: 1260 },
          { name: "ぶり照り焼き定食", price: 1280 },
          { name: "茶碗蒸し", price: 380 },
          { name: "ごはん大盛り", price: 120 }
        ]
      }
    ]
  },

  {
    category: "弁当",
    icon: "🍱",
    stores: [
      {
        name: "できたて弁当ひなた",
        items: [
          { name: "のりから弁当", price: 780 },
          { name: "チキン南蛮弁当", price: 920 },
          { name: "しょうが焼き弁当", price: 880 },
          { name: "ハンバーグ弁当", price: 960 },
          { name: "幕の内弁当", price: 1080 }
        ]
      },
      {
        name: "おべんとうキッチン福まる",
        items: [
          { name: "唐揚げたっぷり弁当", price: 920 },
          { name: "牛焼肉弁当", price: 980 },
          { name: "さば味噌弁当", price: 860 },
          { name: "そぼろ二色弁当", price: 780 },
          { name: "ミックスフライ弁当", price: 960 }
        ]
      },
      {
        name: "弁当茶屋のんびり",
        items: [
          { name: "だし巻き弁当", price: 820 },
          { name: "照り焼きチキン弁当", price: 890 },
          { name: "豚キムチ弁当", price: 920 },
          { name: "鮭のり弁当", price: 860 },
          { name: "おかず盛り合わせ", price: 760 }
        ]
      }
    ]
  },

  {
    category: "焼肉",
    icon: "🥩",
    stores: [
      {
        name: "焼肉どんどこ亭",
        items: [
          { name: "カルビ焼肉弁当", price: 1280 },
          { name: "ハラミ焼肉弁当", price: 1380 },
          { name: "ねぎ塩牛タン弁当", price: 1580 },
          { name: "焼肉ビビンバ", price: 1120 },
          { name: "キムチ盛り", price: 420 }
        ]
      },
      {
        name: "炙り肉屋 火ノ丸",
        items: [
          { name: "特選ロース弁当", price: 1480 },
          { name: "スタミナ焼肉丼", price: 1180 },
          { name: "にんにくカルビ弁当", price: 1360 },
          { name: "牛ホルモン焼き", price: 980 },
          { name: "ナムル3種盛り", price: 480 }
        ]
      },
      {
        name: "肉めし山小屋",
        items: [
          { name: "牛カルビ重", price: 1180 },
          { name: "豚トロ塩だれ丼", price: 980 },
          { name: "焼肉ミックス弁当", price: 1480 },
          { name: "チョレギサラダ", price: 580 },
          { name: "温玉ビビンバ", price: 1080 }
        ]
      }
    ]
  },

  {
    category: "焼き鳥",
    icon: "🍢",
    stores: [
      {
        name: "炭火やきとり鳥あかり",
        items: [
          { name: "もも串", price: 220 },
          { name: "ねぎま串", price: 240 },
          { name: "つくね串", price: 260 },
          { name: "かわ串", price: 220 },
          { name: "焼き鳥丼", price: 920 }
        ]
      },
      {
        name: "やきとり日和すずめ",
        items: [
          { name: "塩おまかせ5本盛り", price: 980 },
          { name: "たれおまかせ5本盛り", price: 980 },
          { name: "レバー串", price: 230 },
          { name: "ぼんじり串", price: 260 },
          { name: "チキン南蛮", price: 780 }
        ]
      },
      {
        name: "串焼き満月",
        items: [
          { name: "月見つくね串", price: 320 },
          { name: "砂肝串", price: 220 },
          { name: "せせり串", price: 280 },
          { name: "焼き鳥重", price: 980 },
          { name: "山盛りキャベツ", price: 360 }
        ]
      }
    ]
  },

  {
    category: "鶏料理",
    icon: "🍗",
    stores: [
      {
        name: "鶏うま本舗",
        items: [
          { name: "特製から揚げ弁当", price: 920 },
          { name: "油淋鶏弁当", price: 980 },
          { name: "チキン南蛮弁当", price: 1050 },
          { name: "塩こうじから揚げ", price: 780 },
          { name: "親子丼", price: 860 }
        ]
      },
      {
        name: "からあげ研究会",
        items: [
          { name: "醤油からあげBOX", price: 820 },
          { name: "旨塩からあげBOX", price: 820 },
          { name: "甘だれチキン弁当", price: 960 },
          { name: "スパイシーチキン弁当", price: 980 },
          { name: "山盛りポテト", price: 560 }
        ]
      },
      {
        name: "チキン食堂こけこっこ",
        items: [
          { name: "グリルチキンプレート", price: 1080 },
          { name: "照り焼きチキン丼", price: 920 },
          { name: "鶏天弁当", price: 980 },
          { name: "手羽からBOX", price: 880 },
          { name: "鶏そぼろ丼", price: 780 }
        ]
      }
    ]
  },

  {
    category: "パスタ",
    icon: "🍝",
    stores: [
      {
        name: "パスタ食堂アルデンテ",
        items: [
          { name: "濃厚カルボナーラ", price: 1180 },
          { name: "王道ミートソース", price: 1080 },
          { name: "海老のトマトクリーム", price: 1280 },
          { name: "きのこバターしょうゆ", price: 1060 },
          { name: "ガーリックトースト", price: 420 }
        ]
      },
      {
        name: "洋麺キッチンsora",
        items: [
          { name: "明太クリームパスタ", price: 1160 },
          { name: "ペペロンチーノ", price: 980 },
          { name: "ナポリタン", price: 1050 },
          { name: "和風ツナおろしパスタ", price: 1080 },
          { name: "ミニサラダ", price: 380 }
        ]
      },
      {
        name: "くるくるパスタ亭",
        items: [
          { name: "ベーコントマトパスタ", price: 1080 },
          { name: "あさりバター醤油パスタ", price: 1180 },
          { name: "チーズミートパスタ", price: 1200 },
          { name: "ジェノベーゼ", price: 1150 },
          { name: "スープセット", price: 420 }
        ]
      }
    ]
  },

  {
    category: "カフェ",
    icon: "☕",
    stores: [
      {
        name: "カフェ日だまり",
        items: [
          { name: "カフェラテ", price: 560 },
          { name: "ハニートースト", price: 780 },
          { name: "たまごサンド", price: 720 },
          { name: "キャラメルミルク", price: 620 },
          { name: "ベイクドチーズケーキ", price: 580 }
        ]
      },
      {
        name: "珈琲と風の店",
        items: [
          { name: "深煎りブレンド", price: 520 },
          { name: "アイスカフェオレ", price: 560 },
          { name: "厚切りバタートースト", price: 680 },
          { name: "ナポリタン", price: 980 },
          { name: "クラシックプリン", price: 520 }
        ]
      },
      {
        name: "午後のテーブル",
        items: [
          { name: "ミックスサンド", price: 760 },
          { name: "チキンと野菜のラップ", price: 820 },
          { name: "抹茶ミルクラテ", price: 620 },
          { name: "チョコブラウニー", price: 540 },
          { name: "アイスティー", price: 480 }
        ]
      }
    ]
  },

  {
    category: "スイーツ",
    icon: "🍰",
    stores: [
      {
        name: "甘味ラボしゅがー",
        items: [
          { name: "もちもちリングドーナツ", price: 360 },
          { name: "生クリームシュー", price: 420 },
          { name: "ふわふわロールケーキ", price: 580 },
          { name: "濃厚チョコタルト", price: 620 },
          { name: "ミルクプリン", price: 420 }
        ]
      },
      {
        name: "おやつの森",
        items: [
          { name: "いちごショート", price: 620 },
          { name: "ダブルチーズケーキ", price: 680 },
          { name: "カスタードエクレア", price: 460 },
          { name: "しっとりフィナンシェ", price: 320 },
          { name: "バニラソフト", price: 480 }
        ]
      },
      {
        name: "砂糖日和",
        items: [
          { name: "ふわとろパンケーキ", price: 980 },
          { name: "チョコバナナクレープ", price: 720 },
          { name: "いちごミルクパフェ", price: 860 },
          { name: "焼きたてワッフル", price: 760 },
          { name: "なめらか杏仁", price: 420 }
        ]
      }
    ]
  },

  {
    category: "デザート",
    icon: "🍨",
    stores: [
      {
        name: "デザート工房ミルミル",
        items: [
          { name: "とろけるプリン", price: 460 },
          { name: "ごほうびクレープ", price: 760 },
          { name: "チョコバナナパフェ", price: 880 },
          { name: "いちごワッフル", price: 820 },
          { name: "マンゴー杏仁", price: 520 }
        ]
      },
      {
        name: "しあわせ甘味店",
        items: [
          { name: "黒みつきなこパンケーキ", price: 920 },
          { name: "抹茶あんみつ", price: 780 },
          { name: "白玉ぜんざい", price: 680 },
          { name: "いちごミルクかき氷", price: 760 },
          { name: "キャラメルワッフル", price: 790 }
        ]
      },
      {
        name: "夜のデザート便",
        items: [
          { name: "深夜のチョコパフェ", price: 920 },
          { name: "ほろ苦コーヒーゼリー", price: 560 },
          { name: "ミルクレープ", price: 680 },
          { name: "ベリータルト", price: 720 },
          { name: "アイス盛り合わせ", price: 640 }
        ]
      }
    ]
  },

  {
    category: "コーヒーとお茶",
    icon: "🍵",
    stores: [
      {
        name: "豆と茶ひとやすみ",
        items: [
          { name: "本日のコーヒー", price: 480 },
          { name: "抹茶ラテ", price: 620 },
          { name: "ほうじ茶ラテ", price: 620 },
          { name: "アイスティー", price: 460 },
          { name: "あんバタースコーン", price: 520 }
        ]
      },
      {
        name: "茶房ブレンド",
        items: [
          { name: "深煎りアイスコーヒー", price: 520 },
          { name: "ロイヤルミルクティー", price: 580 },
          { name: "黒糖きなこラテ", price: 640 },
          { name: "たまごサンド", price: 720 },
          { name: "自家製ガトーショコラ", price: 560 }
        ]
      },
      {
        name: "珈琲小屋まめ助",
        items: [
          { name: "まめ助ブレンド", price: 500 },
          { name: "カフェモカ", price: 620 },
          { name: "ゆず茶", price: 560 },
          { name: "抹茶フィナンシェ", price: 360 },
          { name: "ホットサンド", price: 780 }
        ]
      }
    ]
  },

  {
    category: "コンビニ",
    icon: "🏪",
    stores: [
      {
        name: "ローソン",
        items: [
          { name: "からあげクン", price: 280 },
          { name: "おにぎり", price: 180 },
          { name: "サンドイッチ", price: 360 },
          { name: "弁当", price: 620 },
          { name: "スイーツ", price: 320 }
        ]
      },
      {
        name: "ファミリーマート",
        items: [
          { name: "ファミチキ", price: 240 },
          { name: "おにぎり", price: 180 },
          { name: "パスタ", price: 560 },
          { name: "弁当", price: 620 },
          { name: "スイーツ", price: 330 }
        ]
      },
      {
        name: "セブン-イレブン",
        items: [
          { name: "おにぎり", price: 180 },
          { name: "弁当", price: 650 },
          { name: "サンドイッチ", price: 380 },
          { name: "カップ麺", price: 260 },
          { name: "スイーツ", price: 340 }
        ]
      }
    ]
  }
];

let selectedCategoryIndex = null;
let selectedStoreIndex = null;

const todaySavedEl = document.getElementById("todaySaved");
const totalSavedEl = document.getElementById("totalSaved");

const categorySection = document.getElementById("categorySection");
const storeSection = document.getElementById("storeSection");
const itemSection = document.getElementById("itemSection");
const resultSection = document.getElementById("resultSection");

const categoryList = document.getElementById("categoryList");
const storeList = document.getElementById("storeList");
const itemList = document.getElementById("itemList");

const storeTitle = document.getElementById("storeTitle");
const itemTitle = document.getElementById("itemTitle");

const deliveryStatus = document.getElementById("deliveryStatus");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

document.getElementById("backToCategories").addEventListener("click", () => {
  showScreen("category");
});

document.getElementById("backToStores").addEventListener("click", () => {
  showScreen("store");
});

document.getElementById("orderAgain").addEventListener("click", () => {
  showScreen("category");
});

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function loadSavings() {
  const savedDate = localStorage.getItem("savedDate");
  const today = getTodayString();

  if (savedDate !== today) {
    localStorage.setItem("savedDate", today);
    localStorage.setItem("todaySaved", "0");
  }

  const todaySaved = Number(localStorage.getItem("todaySaved") || 0);
  const totalSaved = Number(localStorage.getItem("totalSaved") || 0);

  todaySavedEl.textContent = formatYen(todaySaved);
  totalSavedEl.textContent = formatYen(totalSaved);
}

function addSavings(amount) {
  const todaySaved = Number(localStorage.getItem("todaySaved") || 0) + amount;
  const totalSaved = Number(localStorage.getItem("totalSaved") || 0) + amount;

  localStorage.setItem("todaySaved", String(todaySaved));
  localStorage.setItem("totalSaved", String(totalSaved));

  loadSavings();
}

function formatYen(num) {
  return `¥${num.toLocaleString()}`;
}

function showScreen(screenName) {
  categorySection.classList.remove("active");
  storeSection.classList.remove("active");
  itemSection.classList.remove("active");
  resultSection.classList.remove("active");

  if (screenName === "category") categorySection.classList.add("active");
  if (screenName === "store") storeSection.classList.add("active");
  if (screenName === "item") itemSection.classList.add("active");
  if (screenName === "result") resultSection.classList.add("active");
}

function renderCategories() {
  categoryList.innerHTML = "";

  CATEGORIES.forEach((category, index) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.innerHTML = `
      <span class="category-icon">${category.icon}</span>
      <span class="category-name">${category.category}</span>
    `;

    card.addEventListener("click", () => {
      selectedCategoryIndex = index;
      renderStores();
      showScreen("store");
    });

    categoryList.appendChild(card);
  });
}

function renderStores() {
  const category = CATEGORIES[selectedCategoryIndex];

  storeTitle.textContent = `${category.category}のお店を選ぶ`;
  storeList.innerHTML = "";

  category.stores.forEach((store, index) => {
    const card = document.createElement("button");
    card.className = "store-card";
    card.innerHTML = `
      <strong>${store.name}</strong>
      <span>${store.items.length}件の商品</span>
    `;

    card.addEventListener("click", () => {
      selectedStoreIndex = index;
      renderItems();
      showScreen("item");
    });

    storeList.appendChild(card);
  });
}

function renderItems() {
  const category = CATEGORIES[selectedCategoryIndex];
  const store = category.stores[selectedStoreIndex];

  itemTitle.textContent = `${store.name}の商品を選ぶ`;
  itemList.innerHTML = "";

  store.items.forEach((item) => {
    const row = document.createElement("button");
    row.className = "item-card";
    row.innerHTML = `
      <span>${item.name}</span>
      <strong>${formatYen(item.price)}</strong>
    `;

    row.addEventListener("click", () => {
      orderItem(category, store, item);
    });

    itemList.appendChild(row);
  });
}

function orderItem(category, store, item) {
  addSavings(item.price);

  showScreen("result");

  deliveryStatus.textContent = "注文を受け付けたつもりです";

  setTimeout(() => {
    deliveryStatus.textContent = "調理しているつもりです";
  }, 700);

  setTimeout(() => {
    deliveryStatus.textContent = "配達員が向かっているつもりです";
  }, 1400);

  setTimeout(() => {
    deliveryStatus.textContent = "届いたつもりです";
  }, 2100);

  resultTitle.textContent = `${item.name}を食べたつもり！`;

  resultText.innerHTML = `
    <span>カテゴリ：${category.category}</span><br>
    <span>店舗：${store.name}</span><br>
    <span>節約できた金額：<strong>${formatYen(item.price)}</strong></span>
  `;
}

loadSavings();
renderCategories();
showScreen("category");
