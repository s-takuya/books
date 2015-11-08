Meteor.methods({
  'insertSeedData': function(userId) {
    var countData = Books.find({"userId" : userId }).count();

    if (countData == 0 ) {

      FIXTURE =
      [{
        genre: 'JavaScript',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4774144665',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'JavaScript本格入門　——モダンスタイルによる基礎からAjax・jQueryまで'
      },
      {
        genre: 'JavaScript',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873114888',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'JavaScriptパターン ——優れたアプリケーションのための作法'
      },
      {
        genre: 'Ruby',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4797372273',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'たのしいRuby 第4版'
      },
      {
        genre: 'Ruby',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4798117994',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Ruby 1 はじめてのプログラミング'
      },
      {
        genre: 'Ruby',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4798118001',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Ruby 2 さまざまなデータとアルゴリズム'
      },
      {
        genre: 'Ruby',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/479811801X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Ruby 3 オブジェクト指向とはじめての設計'
      },
      {
        genre: 'Ruby',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4797363827',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Rails3レシピブック 190の技'
      },
      {
        genre: 'Ruby',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/479812192',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'The RSpec Book'
      },
      {
        genre: 'Ruby',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873113679',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '初めてのRuby'
      },
      {
        genre: 'Ruby',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4774164100',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Ruby on Rails 4 アプリケーションプログラミング'
      },
      {
        genre: 'Ruby',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4274050653',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Rubyのしくみ ——Ruby Under a Microscope'
      },
      {
        genre: 'UNIX',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/479721946',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '入門UNIXシェルプログラミング'
      },
      {
        genre: 'UNIX',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/479728355',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ふつうのLinuxプログラミング'
      },
      {
        genre: 'UNIX',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4774145017',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'プロのための Linuxシステム構築・運用​技術'
      },
      {
        genre: 'Web',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4774142042',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Webを支える技術 ——HTTP、URI、HTML、そしてREST (WEB+DB PRESS plus)'
      },
      {
        genre: 'Web',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4797372966',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'スラスラわかるHTML&CSSのきほん'
      },
      {
        genre: 'Web',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873116767',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ハイパフォーマンスブラウザネットワーキング'
      },
      {
        genre: 'Web',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/487311361X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ハイパフォーマンスWebサイト'
      },
      {
        genre: 'Web',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4774136840',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '実践 Web Standards Design ——Web標準の基本とCSSレイアウト&Tips~'
      },
      {
        genre: 'アルゴリズム',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4873114284',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'アルゴリズムクイックリファレンス'
      },
      {
        genre: 'アルゴリズム',
        difficulty: 0,
        url: 'http://www.amazon.co.jp/dp/4274069095',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ディジタル作法 ——カーニハン先生の「情報」教室'
      },
      {
        genre: 'アルゴリズム',
        difficulty: 0,
        url: 'http://www.amazon.co.jp/dp/4891003383',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'CODE ——コードから見たコンピュータのからくり'
      },
      {
        genre: 'エッセイ',
        difficulty: 0,
        url: 'http://www.amazon.co.jp/dp/4480062858',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ウェブ進化論 ——本当の大変化はこれから始まる'
      },
      {
        genre: 'エッセイ',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4904807022',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '伽藍とバザール'
      },
      {
        genre: 'エッセイ',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4121006240',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '理科系の作文技術'
      },
      {
        genre: 'エッセイ',
        difficulty: 0,
        url: 'http://www.amazon.co.jp/dp/4274065979',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ハッカーと画家'
      },
      {
        genre: 'オブジェクト指向',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4621066048',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'オブジェクト指向のこころ'
      },
      {
        genre: 'オブジェクト指向',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/479727030',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '増補改訂版Java言語で学ぶデザインパターン入門'
      },
      {
        genre: 'オブジェクト指向',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798111112',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'オブジェクト指向入門 第2版 原則・コンセプト'
      },
      {
        genre: 'オブジェクト指向',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798111120',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'オブジェクト指向入門 第2版 方法論・実践'
      },
      {
        genre: 'サービス開発',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4274214834',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ユーザビリティエンジニアリング 第2版'
      },
      {
        genre: 'サービス開発',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873115914',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Running Lean ——実践リーンスタートアップ'
      },
      {
        genre: 'サービス開発',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873117119',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Lean Analytics ——スタートアップのためのデータ解析と活用法'
      },
      {
        genre: 'サービス開発',
        difficulty: 0,
        url: 'http://www.amazon.co.jp/dp/4822248976',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'リーンスタートアップ'
      },
      {
        genre: 'セキュリティ',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/410215972X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '暗号解読'
      },
      {
        genre: 'セキュリティ',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4797350997',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '新版暗号技術入門'
      },
      {
        genre: 'セキュリティ',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4797361190',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '体系的に学ぶ安全なWebアプリケーションの作り方 ——脆弱性が生まれる原理と対策の実践'
      },
      {
        genre: 'セキュリティ',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873115140',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Hacking: 美しき策謀 第2版 ——脆弱性攻撃の理論と実際'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4274064069',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'UNIXという考え方'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4873114039',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'リファクタリング・ウェットウェア'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4822285243',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ピープルウェア'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/477415654X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'コーディングを支える技術'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4894712741',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '達人プログラマー'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/420025636',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'スーパーエンジニアへの道'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4048707876',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '継続的デリバリー'
      },
      {
        genre: 'ソフトウェア開発',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798128449',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '組織パターン'
      },
      {
        genre: 'データベース',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4798118818',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'SQL ゼロからはじめるデータベース操作'
      },
      {
        genre: 'データベース',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4798110663',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '楽々ERDレッスン'
      },
      {
        genre: 'データベース',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4873116384',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ハイパフォーマンスMySQL'
      },
      {
        genre: 'データベース',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798128023',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'プログラマのためのSQL 第4版'
      },
      {
        genre: 'デザイン',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4621082728',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '情報デザインの教室'
      },
      {
        genre: 'デザイン',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/478850362X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '誰のためのデザイン'
      },
      {
        genre: 'デザイン',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873115574',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'インタフェースデザインの心理学'
      },
      {
        genre: 'デザイン',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873116597',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'マイクロインタラクション'
      },
      {
        genre: 'デザイン',
        difficulty: 0,
        url: 'http://www.amazon.co.jp/dp/4839928401',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ノンデザイナーズ・デザインブック'
      },
      {
        genre: 'テスト',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4798130605',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '知識ゼロから学ぶソフトウェアテスト 【改訂版】'
      },
      {
        genre: 'テスト',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4817193603',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ソフトウェアテスト技法ドリル'
      },
      {
        genre: 'テスト',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/482228512X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'テストから見えてくる ——グーグルのソフトウェア開発'
      },
      {
        genre: 'テスト',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/476490296',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ソフトウェア・テストの技法'
      },
      {
        genre: 'テスト',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798119970',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '実践アジャイルテスト'
      },
      {
        genre: 'ネットワーク',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4822283119',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ネットワークはなぜつながるのか 第2版'
      },
      {
        genre: 'ネットワーク',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4797373512',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'インフラ/ネットワークエンジニアのためのネットワーク技術&設計入門'
      },
      {
        genre: 'ネットワーク',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4274068765',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'マスタリングTCP/IP 入門編'
      },
      {
        genre: 'バージョン管理',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4798023809',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '入門Git'
      },
      {
        genre: 'バージョン管理',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/477416366X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'GitHub実践入門'
      },
      {
        genre: 'プログラミング',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4873115655',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'リーダブルコード'
      },
      {
        genre: 'プログラミング',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4798124583',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '実践テスト駆動開発 ——テストに導かれてオブジェクト指向ソフトウェアを育てる'
      },
      {
        genre: 'プログラミング',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/420026926',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'プログラミング言語C'
      },
      {
        genre: 'プログラミング',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4621066072',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '珠玉のプログラミング'
      },
      {
        genre: 'プログラミング',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873113598',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '詳説 正規表現'
      },
      {
        genre: 'プログラミング',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4048676881',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'クリーンコード'
      },
      {
        genre: 'プログラミング',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/489100455X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'コードコンプリート'
      },
      {
        genre: 'プロジェクト',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4274068560',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'アジャイルサムライ'
      },
      {
        genre: 'プロジェクト',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4822281868',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '熊とワルツを ——リスクを愉しむプロジェクト管理'
      },
      {
        genre: 'プロジェクト',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4822282716',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'デスマーチ 第2版 ——ソフトウエア開発プロジェクトはなぜ混乱するのか'
      },
      {
        genre: 'プロジェクト',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873113954',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'アート・オブ・アジャイルデベロップメント'
      },
      {
        genre: 'プロジェクト',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4839924023',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'アジャイルな見積りと計画づくり ——価値あるソフトウェアを育てる概念と技法'
      },
      {
        genre: 'プロジェクト',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4621066080',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '人月の神話'
      },
      {
        genre: '関数プログラミング',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4781911609',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'プログラミングの基礎'
      },
      {
        genre: '関数プログラミング',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/427406896X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '関数プログラミング入門'
      },
      {
        genre: '機械学習',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873113644',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '集合知プログラミング'
      },
      {
        genre: '機械学習',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4873115949',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '入門 機械学習'
      },
      {
        genre: '数学',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4621045938',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'いかにして問題をとくか'
      },
      {
        genre: '数学',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4130120530',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '論理学'
      },
      {
        genre: '数学',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4274067750',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'プログラミングのための確率統計'
      },
      {
        genre: '数学',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/479729734',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'プログラマの数学'
      },
      {
        genre: '設計',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4798107956',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'UML モデリングのエッセンス 第3版'
      },
      {
        genre: '設計',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4798114456',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ユースケース駆動開発実践ガイド'
      },
      {
        genre: '設計',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/427405019X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'リファクタリング'
      },
      {
        genre: '設計',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/477414343X',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: '間違いだらけのソフトウェア・アーキテクチャ ——非機能要件の開発と評価'
      },
      {
        genre: '設計',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798105538',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'エンタープライズ アプリケーションアーキテクチャパターン'
      },
      {
        genre: '設計',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798121967',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'エリック・エヴァンスのドメイン駆動設計'
      },
      {
        genre: '設計',
        difficulty: 3,
        url: 'http://www.amazon.co.jp/dp/4798116831',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'レガシーコード改善ガイド'
      },
      {
        genre: 'Android',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/4797371250',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Java言語プログラミングレッスン第3版'
      },
      {
        genre: 'Android',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/484429871',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Android Layout Cookbook アプリの価値を高める開発テクニック'
      },
      {
        genre: 'Android',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4844331345',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Android Security'
      },
      {
        genre: 'Android',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4621066056',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'Effective Java 第2版'
      },
      {
        genre: 'iOS',
        difficulty: 1,
        url: 'http://www.amazon.co.jp/dp/B00IR89RJW',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'ミクシィ公認 スマホアプリ開発実践ガイド'
      },
      {
        genre: 'iOS',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4798040894',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'iOSアプリ テスト自動化入門'
      },
      {
        genre: 'iOS',
        difficulty: 2,
        url: 'http://www.amazon.co.jp/dp/4861007348',
        purchased: false,
        userId: userId,
        createdAt: new Date(),
        title: 'iOS開発におけるパターンによるオートマティズム'
      }]

      for (i=0; i<FIXTURE.length; i++) {
        Books.insert(FIXTURE[i]);
      }
    } else {
      console.log('You alreadry had data.')
    }
  }
});
