---
title: 【ChatGPT活用法】Railsで新規サービス立ち上げる際の活用術
date: '2019-01-01'
tags: ChatGPT Rails AI
author: rorensu2236
slide: false
---
# Railsでサービス立ち上げる際の相棒にChatGPT
ChatGPTがウェブサービスを開発する上で有用な点をまとめてみました。

全てにおいて共通する考え方ですが

> 1. あのGemを使って、こんなカラムを持ってるテーブルだから、こうしてああすれば、完成する
> 2. これ、汚いコードで本当はもっと綺麗に書けるよなー

という ”理想” を描く必要はあります


しかし、今までは Google検索 で知識を補完し、自分でその状態に持っていっていましたが
Google検索 より ChatGPT の方がより早く理想の状態に持っていけるというのが体感値です。

ChatGPTの回答がベストプラクティスかどうかを判断するのは個人の責任です
そのプロジェクト、クラス、メソッドにおいてそれが”良い”かどうかを判断する必要はありそうです。

## AIが作ったコードを本採用するの？
よければそのまま採用してます

しかし、AIが作ったコードを修正した結果、全く別の形になることもあると思います。
でも良いのです、 "同じコードを3回書かないと理想のコードにはならない" という名言もあるので
その1回目の雑なコードをAIに作ってもらいましょう。


## システム構成はこんな感じのサービスです
* GCP Cloud Run
* Rails7 Ruby3.1
* tailwind（テンプレートデザイン）

### エンジニア1人（開発工数は2ヶ月）の業務内容は以下の通り
* インフラ構築(gcp cloud run) ＋ railsバックエンド + フロント
* ビジネス要求定義 ＋ 要件定義 + サイトデザイン + SEO
* ビジネスロジック実装 + 別サービスエンジニアの育成（3名）

テストマーケサイトなので、結構雑で良い部分は多い前提ですが（管理画面など）
普通にちゃんと作ろうと思ったら厳しいですね



## ChatGPT使い所
1. テストデータの作成
1. カラム名の相談
1. コードレビュー
1. テストコードチェック
1. よくある機能を雑に作ってもらう
1. サンプルデータ作成など
1. リファクタリング
1. 変数名を考えて
1. 挙動ベースで上手くいかないと相談できる
1. error & warning の解決
1. ネットで見つけたコードの対応バージョン変更

## テストデータの作成
テーブルを作った後、開発する際にサンプルデータが欲しくなりますよね
Fakerなどを使って作ると思います。

そのサンプルデータを作るコードを作ってくれるので活用すると爆速で開発できます。

まずテーブルのカラム名を認識させるために、migrationファイルデータをChatGPTにプレゼントします。
そして使いたいGemを指定して、20件作ってくれと依頼すると

```rb
# このテーブルのサンプルデータをFakerで20件作って
class CreateClient < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name, null: false, default: '', comment: 'クライアント名'
      t.string :kana, null: false, default: '', comment: 'クライアント名（よみがな）'
      t.string :zip1, null: false, default: '', comment: '郵便番号前半'
      t.string :zip2, null: false, default: '', comment: '郵便番号後半'
      t.integer :pref_id, null: false, default: 0, comment: '都道府県ID'
      t.string :city, null: false, default: '', comment: '市区町村'
      ...省略
      t.timestamps
    end
  end
end
```

ChatGPT側から20件サンプルデータを作るコードが送られてきます。
あとは seed.rb にコピーすればOK、細かい微調整は自分でやりましょう。

```rb
require 'faker'

20.times do
  Client.create!(
    name: Faker::Company.name,
    kana: '',
    zip1: Faker::Address.zip_code.slice(0,3),
    zip2: Faker::Address.zip_code.slice(4,7),
    pref_id: rand(1..47),
    city: Faker::Address.city,

    deleted_at: nil,
  )
end
```


## カラム名の相談
雑にカラム名を相談してみても良いと思います
ただ、カラム名、テーブル名はシステムの設計やビジネスロジックによっても変えるべきなので
その背景を伝えた上で考えてもらうか、AIのアイディアを鵜呑みにせず自分でも再度考えることは重要です。



![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/a070ecc8-ece9-e87e-7870-3b416ec0b9c7.png)


## コードレビュー
シンプルに間違っているコードを指摘もしてくれますが。
人の感性的にこっちの方が良いのではないだろうかという提案まで含めてレビューしてくれるのは大きいと思います。

例えばこれは、ファイル名の例ですが、普通に考えてファイル名長いので、省略したらどうだろうという
他のシステムでよく取り入れられているファイル名のルールの提案などをしてくれます。

もちろん取り入れるかは個人の感性次第ですが、レビューをする観点が良いと思ってます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/9b204a66-32b6-4554-9cc1-574627d9466e.png)

## テストケースの洗い出し
作ったメソッドを提供するとテストコードも書いてくれます
作った機能のテストケースの洗い出しの見落としチェックにも使えます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/bba07772-7bf9-db8c-4689-ac750298b3cd.png)



## よくある機能を雑に作ってもらう
htmlのフォームを js で validation しようとすると地味にコードをたくさん書かないといけないので
30分くらいは時間が、かかってしまうと思います

しかし、HTMLのformのコードを超絶雑にコピペして

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/75a44c3a-3592-8783-7678-ba589c1e7814.png)

と依頼するとそのまま書いてくれます。

```js
document.addEventListener('turbolinks:load', function() {
  const form = document.querySelector('.max-w-screen-md');

  form.addEventListener('submit', function(event) {
    const userType = form.querySelector('select[name="user[user_type]"]');
    const businessId = form.querySelector('select[name="user[business_id]"]');
    ......
    const furigana1 = form.querySelector('input[name="user[furigana1]"]');
    const furigana2 = form.querySelector('input[name="user[furigana2]"]');

    if (!userType.value) {
       省略
    } else if (!name2.value) {
      event.preventDefault();
      alert('名を入力してください');
      name2.focus();
    } else if (!furigana1.value) {
      event.preventDefault();
      alert('フリガナ(苗字)を入力してください');
      furigana1

```

form の要素を全部取得して、という冗長なコードだったのでリファクタを依頼しました

> 「これを配列を使ってリファクタして」

どのようにリファクタするのかは指定しましょう。
するといい感じにリファクタしてくれます

まだリファクタできそうですが大枠はこんな感じで良いので、これを修正しました。
jsのvalidation機能、10分で完成です。

```js
const requiredFields = [
  { field: userType, message: "法人／個人は必須です" },
  { field: businessId, message: "職業は必須です" },
  { field: jobId, message: "職業は必須です" },
  { field: furigana1, message: "フリガナ（苗字）は必須です" },
  { field: furigana2, message: "フリガナ（名）は必須です" },
  { field: password, message: "パスワードは必須です" }
];

for (const { field, message } of requiredFields) {
  if (!field) {
    alert(message);
    return;
  }
}
```

## リファクタリング
確実に動くコードを雑に作って、リファクタしてとお願いします

> どのようにリファクタをするのかを指定すると非常に効果的です


今回の場合は確実に動くコードを冗長な書き方をして作ったので、
メソッドを分けたりするリファクタではなくシンプルに短くまとめて欲しいので短くリファクタしてとお願いしてます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/d0c2b977-84c8-4807-20d2-ac0309e37b54.png)

### 【これ、1行で書けるよな、どうやるんだっけ】
Googleで調べるより、聞いてしまったほうが早いです
何せコピペで使えるコードがそのまま帰ってきます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/e3930cf0-cb5f-db3b-0fe5-9064a44563b0.png)



## 挙動ベースで上手くいかないことを相談できるのもすごい
> このコードだと、こう上手くいかないから、こうなるようにして欲しい

他のエンジニアに相談して、相談内容を理解して返答するのも結構大変な作業ですが
ChatGPTであれば即解決してくれます。

”過去何度も実装してきたけど、暗記まではしてないけど大体こういうことできるよな”という
ふわっとしたものをすぐに相談して回答が得られるのは素晴らしいUXです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/d5e972d6-95e8-af6d-ecb8-dea0b83513a7.png)


## error & warning の解決
よくあるエラーの場合、検索しても回答を得られますが
取り合えずChatGPTに聞いておいて返答が返ってくるまでGoogleで検索します。

Googleの検索結果とChatGPTの解答結果を照らし合わせながら模索すると非常に対応が早くなります。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/66be4d07-e32f-8b79-ac32-f3c377b79feb.png)


## ネットで見つけたコードのバージョン変更

ネットのコードをコピペしたいけど、バージョン違って動かないとかあるので
そのバージョン変更も依頼しましょう、ライブラリのバージョンを指定すればそれにあったバージョンのコードで書き直してくれます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/8f7aadf0-ab76-0c0f-8c27-bb008f9ad552.png)




## これは作れちゃっていいのだろうか（API利用コード）
郵便番号から住所を入力する機能も自動生成できちゃいます。
はたしてAPIの利用規約など読んでないけどAIが作りましたって感じで使ってしまうのは問題なのではないだろうか。


```javascript
async function getAddress() {
  const zip_label = document.getElementById('user_zip_label'); // 郵便番号フォームのラベル
  const zipcode = document.getElementById('user_zip').value;   // 郵便番号テキストボックス
  const prefOptions = document.getElementById('user_pref_id').options; // 都道府県の選択肢メニュー
  const city = document.getElementById('user_city') // 都道府県の選択肢メニュー
  const town = document.getElementById('user_town') // 都道府県の選択肢メニュー
  const next_form = document.getElementById('user_building') // 自動入力成功時次に入力するフォームにフォーカス

  const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
  zip_label.innerHTML = '郵便番号'

  try {
    const response = await fetch(url);
    if (!response.ok) { throw new Error('通信エラーが発生しました'); }

    const data = await response.json();
    if (data.status !== 200) { throw new Error('該当する住所がありません'); }

    const prefName = data.results[0].address1;
    const option = Array.from(prefOptions).find((opt) => opt.text.includes(prefName));
    if (option) { option.selected = true; }

    city.value = data.results[0].address2;
    town.value = data.results[0].address3;
    zip_label.innerHTML = '郵便番号 (' + prefName + city.value + town.value + ')';

    next_form.focus()
  } catch (error) {
    if (error.message.indexOf('null')) { error.message = '該当の住所が見つかりませんでした' }
    zip_label.innerHTML = '郵便番号 (' + error.message + ')';
  }
}
```


## フロントエンドフレームワーク ChatGPT
フロントエンドフレームワーク何使ってます？と聞かれたらChatGPTと答えるかもしれません。

### よくある開いたり閉じたりするAdmin管理画面
* メニューは折りたたみ式
* ページを開いた時には現在のページが強調されるように
* 項目は ruby の配列で簡単に管理できて
* 他のタブを開いたら現在のタブは閉じる

こんな感じのメニューも 生js であれば自動でつくってくれちゃいます。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/52fa1f8d-82a4-b34a-1923-2cf3fa61967f.png)

何度かリファクタや修正点を指摘しましたが、毎回コピペで動くコードを完璧に上げてくれます。
やばいです。

もう、私いらないのでは.....

```erb
<%
menus = [
{ name: "CV管理", id: "lead-menu-items", collection: [ ['******product_***g_requests', 'UCV管理', 'fas fa-users'], ['******user_requests', '(TCV)資料請求情報', 'fas fa-users'], ['******users', 'ユーザー', 'fa-user'] ] },
{ name: "クライアント管理", id: "client-menu-items", collection: [ ['******clients', 'クライアント管理', 'fas fa-store'], ['******products', '製品 Product', 'fas fa-industry'], ['******product_***gs', '製品PDF', 'far fa-file-pdf'] ] },
{ name: "ログインアカウント管理", id: "setting-menu-items", collection: [ ['******admin_users', '***アカウント管理', 'fa-table'], ['******client_users', 'Clientアカウント', 'fas fa-store'] ] }
]
%>

<aside class='relative bg-sidebar h-screen w-72 hidden sm:block shadow-xl'>
  <nav class='text-white text-base pt-3'>
    <a href='/admin' class="<%= request.path.include?('******') ? '' : 'active-nav-link' %> flex items-center text-white py-4 pl-6 nav-item"><i class='fas fa-tachometer-alt mr-3'></i>ホーム</a>
    <% menus.each do |menu| %>
      <button class="menu-btn w-full focus:outline-none flex items-center text-white py-4 pl-6 nav-item font-semibold " data-target="<%= menu[:id] %>"><i class='fas fa-bars mr-3'></i><%= menu[:name] %></button>
      <div class="menu-items <%= menu[:collection].to_s.include?(request.path) ? '' : 'hidden' %>" id="<%= menu[:id] %>" data-active="false">
        <% menu[:collection].each do |submenu| %>
          <a href='<%= submenu[0] %>' class="<%= request.path.include?(submenu[0]) ? 'active-nav-link' : '' %> flex items-center text-white py-4 pl-6 nav-item"><% if submenu[2].present? %><i class='fas <%= submenu[2] %> mr-3 ml-6'></i><% end %><%= submenu[1] %></a>
        <% end %>
      </div>
    <% end %>
  </nav>
  <a href='#' class='absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4'><%= current_admin_user&.email %></a>
</aside>

<script>
  const menuBtns = document.querySelectorAll('.menu-btn');
  const menuItems = document.querySelectorAll('.menu-items');

  // 開閉状態の初期化
  menuItems.forEach((item) => {
    if (item.dataset.active === 'true') {
      item.classList.remove('hidden');
    }
  });

  // メニューボタンのクリックイベント
  menuBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      menuItems.forEach((item, idx) => {
        if (index === idx) {
          item.classList.toggle('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
</script>
```

## デザイナー ChatGPT
こちらの、すごく雑なエラーメッセージに雑にいい感じのデザインをつけたかったので

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/b890a65c-6185-d05e-543b-6f7659d00966.png)


デザインを依頼したら作ってくれました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/5e3c2bf1-f87e-908b-82a3-3bc0e0c05bdd.png)

いい感じのデザインを汲み取ってくれます。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/dd018b99-82e7-102a-20a8-4755ccd1e6f1.png)


## 他にもあれば追記します
ここまで自動で作られていると

ビジネス要件からテストコードを洗い出し
テストコードを作成し
それをパスするコードを生成

テストコード駆動開発をAIだけで完結できるのではないかと思いました。

恐ろしいですね

果たして10年後にウェブエンジニアは生きているのだろうかと思います.....


