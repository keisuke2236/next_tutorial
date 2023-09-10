---
title: 【2017年度版】Webエンジニアでも最低限押さえておきたい、SEO施策のまとめと実装
date: '2017-01-01'
tags: HTML SEO
author: rorensu2236
slide: false
---
# Webエンジニアでも最低限のSEO知識を持っておきたい
<a href="https://ferret-plus.com/">ferret</a>や<a href="https://ferret-one.com/">ferretOne</a>といったウェブマーケティングのメディア、ツールを開発、運営している株式会社ベーシックで働いており、近々ECサイトphocaseにて本格的にSEO施策を行うので、勉強がてらエンジニアが覚えておくべきだと思ったSEO周りの知識をまとめました。

この記事も書いていたら長くなってしまったので**知らない部分をピックアップ**して読んでいただければと思います。

実装方法やSEO施策の詳細は貼ってあるリンクだけではなく、
別途Googleで検索するなどして**複数の意見をインプット**することをおすすめします。

### ★この記事を読むとどうなるか
* マーケター、ディレクターとのやりとりがスムーズになる。
* 意図せず検索順位を下げてしまうコードに気づける様になる。
* エンジニア側だけで動けるSEO施策を提案できる様になる。
* なんとなくSEOの全体像をつかめる。

かもしれません。
## 【Google公式発表の施策をまずは正確に】
ウェブ上で検索すると様々な情報が出てきますが、最低限ここに書いてあることはウェブ上での法律なので絶対に守り施策を行いましょう。

**<a href="http://static.googleusercontent.com/media/www.google.co.jp/ja/jp/intl/ja/webmasters/docs/search-engine-optimization-starter-guide-ja.pdf">検索エンジン最適化スターターガイド</a>**

ここに書いてあること以外にも<a href="https://webmaster-ja.googleblog.com/2010/09/seo.html">Googleが公式で発表</a>している内容も複数ありますが、まずはこれを一読することをおすすめします。

### ★SEO施策の実装の前に1度確認すると良い公式情報
今から実装する分野に関する単語をSearch Consoleヘルプで検索すると、思わぬ仕様の見落としが見つかるかもしれません。

「画像」のaltタグを実装する場合であれば、実装の前に「画像」とSearch Consoleヘルプで検索してみることをお勧めします。
altタグにキーワードを詰め込みすぎてスパム扱いされることを防ぐことができるかもしれません。

<a href="http://support.google.com/webmasters/">Search Consoleヘルプ</a>

#Googleのモバイルサイトに対する施策
## 【モバイルファーストインデックス（MFI）】
2016年11月5日に<a href="https://webmaster-ja.googleblog.com/2016/11/mobile-first-indexing.html">Google公式からモバイルファーストインデックスに向けて</a>という記事が公開されました。

概要：「今までPC向けページの内容でランク付けしていましたが、今度からSPサイトの内容も解析し、SPサイトの内容を重視してランク付けをします」

つまり今までの**真逆**

今後はSPサイトのSEO対策が重要になり、PCサイトは今のSPサイトと同じようにあまり見られなくなるようです。
そのため、MFI実装と同時に今はPCサイトに導入しておけば良い、**リッチスニペット**といった構造化データの**SPサイト対応**も必要になってきます。

2017年4月5日に開催された<a href="https://www.stonetemple.com/next10x-conference/">Next10x Conferenceカンファレンス</a>でGoogleのエンジニアは年内の導入を”目指している”との発表がありましたが導入時期は未定です。

MFI導入以前（現在）
PC検索 : PCサイトの内容でランク付けした順位で表示
SP検索 : PCサイトの内容でランク付けした順位で表示

MFI導入後（時期未定）
PC検索 : <font color="red">SP</font>サイトの内容でランク付けした順位を重要視して表示（PCをサイトを加味しないわけではない）
SP検索 : <font color="red">SP</font>サイトの内容でランク付けした順位で表示


### ★影響を受ける可能性のあるサイト
* **PCとSP**のサイトを別に用意していて**差異**が大きい
* 軽量化のためPCにあるがSPにない情報が多い
* PCサイトのSEO施策はやっているが、SPは何もやっていない
* ヘッダーフッター以外のメインコンテンツが異なる
* HTMLの構造が異なる
* SPサイトの表示速度が遅い

->レスポンシブデザインや<a href="https://newformation.jp/strata/archives/212">ダイナミックサービング</a>を用いてサイトを構成している場合は問題ない。

ちなみにそもそもSPページが存在しない場合は、もうすでにモバイルフレンドリーテストに落ちてSEO評価の低下につながっているはずです。

参考：<a href="https://www.suzukikenichi.com/blog/which-should-you-implement-structured-data-on-mobile-desktop-or-amp/">構造化データを設置するのはどのページ？ モバイル向け？、PC向け？、AMP？</a>

参考：<a href="https://www.suzukikenichi.com/blog/google-introduces-mobile-first-index/">Google、モバイルファーストインデックスの導入予定を正式発表。スマホ向けページを検索の評価対象に。SEOへの影響は？</a>

### ★影響を受けないと予想されている項目
* AMP対応は今まで通りの実装でも大丈夫
* canonicalやalternateはGoogleがよしなに対応してくれそう
* ハンバーガーメニューなどの非表示コンテンツも低評価にはすぐには繋がらない

参考：<a href="http://amateras-seo.com/archives/1369">モバイルファーストインデックス（MFI）のGoogle公式情報と、不安な方のための事前準備と対応手順（仮）</a>

## 【モバイルフレンドリー】
2015年4月21日からスマートフォンデバイスでサイトを利用する場合のUI、UXも検索順位に関わるようになると<a href="https://webmaster-ja.googleblog.com/2015/04/rolling-out-mobile-friendly-update.html">Googleから発表</a>がありました。

>携帯端末での検索の掲載順位にのみ影響する
世界中のすべての言語で検索結果に影響する
ウェブサイト全体ではなく、個々のページが対象となる

モバイルフレンドリーでない場合検索順位などの低下につながり、ECサイトなどの場合売上に直接関わってきます。

下記サイトにて、サイトがモバイルフレンドリーかどうかを確認することができます。
<a href="https://www.google.com/webmasters/tools/mobile-friendly/">モバイルフレンドリーチェック</a>

### ★チェック項目
* 適切なフォントサイズ（16px以上）か
* モバイル用のviewportをmeta要素に指定しているか
* リンクの間隔が狭すぎないか （誤操作防止）
* サイトコンテンツが画面内に収まっているか
* 最低限3秒以内に表示される　（3秒経過時で40％のユーザーが離脱）

上記で満たせていないものがあると検索順位が低下している恐れがあります。

### ★モバイルフレンドリー対応と再クロール依頼
GoogleSearchConsoleを用いることで、上記のチェック項目の中でできていない部分が具体的にわかります。
<a href="https://www.google.com/webmasters/tools/home">Googleモバイルフレンドリーチェック</a>

問題点を解決した後、GoogleにそのURLの再クロールをリクエストすることができます。
詳細は公式の文章があるのでそちらを参照ください。
<a href="https://support.google.com/webmasters/answer/6065812?hl=ja">URL の再クロールを Google にリクエストする</a>

### ★その他のUXの観点から満たしておくと良いポイント
* サイトのファーストビューが1秒以内に表示されるか（Google推奨）
* 画像サイズをPCサイトと別に用意し軽量化する
* ライブラリなどの長いコードを短縮するツールYUI CompressorやJSMInを使う
* タップ可能なコンテンツは48px以上に設定する


<a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a>でサイト表示速度を確認することができます。


### ★インタースティシャル広告
インターステシャル広告とは目的のページに行くまでに表示されてしまう以下の画像のような広告をさしており、適切に使用していないサイトに対して2016年11月からGoogleはペナルティーを加えるようになりました。
![image](https://qiita-image-store.s3.amazonaws.com/0/69647/c0f7a8da-d83d-1e04-e366-f8b1a24d15be.png)
引用：https://london3.jp/2014/12/skip/

### ★評価低下につながる用途
* メインコンテンツを覆うポップアップ（モーダルを含む）
* メインコンテンツにたどり着く前に表示される上記画像のような広告
* ファーストビューに大きく広告を配置しスクロールしないとメインコンテンツを閲覧できないようにすること

### ★評価に影響しない用途
* Cookie使用許諾ポップアップ
* 法律に基づき表示されている年齢確認ページなどの表示
* 特定ユーザーのみの閲覧可能にするために用意された、ログインページなどの表示
* 画面を大きく占有しないポップアップバナー広告

またこの他にもGoogleとユーザーの対話の中で。
>ポップアップ（広告）コンテンツの方が、それに隠れた本コンテンツよりも、Googlebotに優先される、といったリスクはあるのでしょうか？

という質問に対して、Googleは「その可能性があるのは確かだ」と答えており、
どちらにしろポップアップやモーダルによる広告の表示は今後使わない方針のほうが良さそうです。

#【サイトマップの適切な設置とフィード登録】
<a href="https://webmasters.googleblog.com/2014/10/best-practices-for-xml-sitemaps-rssatom.html">Googleは海外のブログ</a>でRSS・AtomフィードとサイトマップXMLの両方を送信することを推奨すると通知しました。

## RSS、Atomによるフィード登録とPuSHについて
RSSリーダーでおなじみのRSSやAtomフォーマットはサイトマップとして利用することが出来ます。
### ★サイトマップだけではなく、フィードを登録する利点
* 直近で更新したURLのみが登録される
* 通常のサイトマップよりも頻繁にクロールされる

直近で更新したページや作成したページをすぐにGoogleに伝えるにはクロール頻度が高いフィードを用いて伝える手段が有効です。

### ★PubSubHubbub（PuSH）によるリアルタイムインデックスの実現
この他にもページの変更時にすぐに変更をGoogleへ伝える方法としてPubSubHubbub（通称：PuSH）というリアルタイムインデックスを実現する方法もあります。

<a href="https://github.com/pubsubhubbub">PuSH実装用の各言語のライブラリリポジトリ一覧</a>

PHPで実装する場合はライブラリをDLし以下のファイルを利用
pubsubhubbub-php-master/library/publisher.php

```php:publisher.php
require_once './publisher.php' ;
$publisher = new Publisher('http://pubsubhubbub.appspot.com/');
$publisher->publish_update('http://example.com/article/1');
```
Googleに通知する際のurlをインスタンスに渡して作成し、publish_updateメソッドに更新したページのURLを渡してを叩くだけ。

## サイトマップの登録
### ★HTMLサイトマップ
* サイトに訪れたユーザーのためのサイトマップ
* リンク切れがない様に常に管理
* カテゴリごとに分類しておくと利便性が向上します

### ★XMLサイトマップ
検索エンジンにXML形式のサイトマップを提供することで主にインデックスの手助けとなります。
サイトマップの種類には以下の様なものがありSPサイトPCサイトの両方合わせて記述しましょう。

| XMLファイルの種類   | 役割                 |
|:------------ |:---------------------------------:|
| sitemap.xml  |　サイト構造を示す、またモバイルサイトマップもこちらに記載する |
| movie.xml    |　動画コンテンツを検索に表示されやすくする |
| image.xml    |  画像コンテンツを検索に表示されやすくする |
| news.xml     |　Googleニュースに送信するファイルを定義 |


* 各XMLファイルを適切に配置することでサイトインデックスの促進ができる
* しかしクローラの巡回がそもそもない場合はサイトマップ以前に他の改善を行う必要がある。
* SPサイトで .htaccessなどを用いて携帯端末以外を閲覧不可にしている場合はBotがクロールできないためGooglebot-Mobileを許可する必要があります。

実際にサイトマップを作成、送信する際は<a href="https://support.google.com/webmasters/answer/183668?hl=ja">Google、サイトマップの作成と送信</a>を参考にすると各種作成ツールやテストツールの紹介もあり、便利です。


### ★動画、画像サイトマップ
動画や画像などのクロールが困難なコンテンツに関しては別途動画、画像サイトマップを用いて、コンテンツの情報を渡す必要性があります。

作成方法としては新規に動画や画像だけをまとめたXMLでも既存のXMLに追加する方法でも良いのですが、
Google<a href="https://www.sitemaps.org/ja/index.html">サイトマッププロトコル</a>の動画拡張機能を利用することで、タイトル、長さ、説明などをGoogleに伝えます。

また動画サイトマップを用いることで、検索エンジンで動画や画像を検索した際に動画が検索に引っかかる様になります。

```xml:movie.xmlの例
xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
```

ECサイトの運営を行っている場合などに画像サイトマップを利用することで画像から買いたい商品を探すユーザーにリーチすることができます。

#HTMLタグの適切な使用と注意点
## 【Title】
TitleタグはSEOにおいて最も重要なタグで、必ずページ内に１つだけheadタグの中に記述する。

```html:index.html
<head>
    <title>ページタイトル</title>
</head>
```
* ユーザーが検索したキーワードと一致すると太字になる
* ページごとに異なるタイトルが好ましい
* 検索エンジンで表示されるのは32文字前後
* titleタグに不要なキーワードを入れると、本来きてほしいキーワードの濃度が薄まる
* ページの内容を推測可能なタイトル

検索エンジンで表示されるのは32文字、スマホで検索した際は24文字程度なので動的に生成する場合は気をつける。

ページの内容を推測できないタイトルにすると、本来来るユーザーの減少、タイトルと本文の不一致による評価の低下などを引き起こし、サイトにきたとしても求めている内容と異なるためすぐに離脱します。


## 【Description】
まずはじめにDescriptionを設定するとここに表示される文字が変更されます。
<img src="https://qiita-image-store.s3.amazonaws.com/0/69647/de2f16e6-5f34-be34-b5e6-7446cbb3f225.png" alt="descriptionは検索結果に表示されるタイトルのしたの説明文に利用されます。" height=300px>

ユーザーが求めている内容をDescriptionに記述することで、この検索結果上での**クリック率**に寄与します。
ただ検索順位ランキングの評価要素としては弱いようです。

またDescriptionは明示的に記述せずとも、基本的にGoogleが自動でDescriptionを作成して表示する。
Googleが作成したものよりも、正確に情報が伝わると判断された場合のみ設定したDescriptionが反映されます。

* Googleは動的にdescriptionを作成することを推奨
* ページごとに異なる内容にする
* タイトルタグと整合性をとる
* 124文字前後までしか表示されない、重要キーワードの省略に注意
* スマホでは80文字、伝えたいことは80文字以内にまとめる
* 正しい文章である必要はない、タグや特徴といった明確な情報を含める

チェックツールを使うことで正確なdescriptionがつけられているか確認することができます。
<a href="http://seolaboratory.jp/description/">
メタディスクリプション（meta description）評価チェックツール</a>

## 【h1】
h1スパムが流行したため現在はGoogleが評価を下げましたが、検索結果にh1タグの文章を引っ張ってくることがあるなど、引き続きSEOとして重要です。

* 各ページ固有のh1タグを設定する
* Googleは正式に複数設置しても良いと言っているが、何が主として言いたいことなのかブレるため非推奨
* h1タグに画像を設定してもよい

```html:/iphone6/?color="white"
<h1>
  <img src="/images/iphone6_white.jpg" alt="女性に人気の白いiPhone6スマホケース一覧" />
</h1>
```
ページのh1タグとして認識されるのでalt属性（代用テキスト）には適切な文章を記述しましょう。

Qiitaにおけるh1タグは #　1つの表題に当たります。
またこの記事を自社ウェブサイト上で公開する際は、本当は複数の記事に分けたいところです。
＝＞h1を複数設置するならページを分けた方が見やすいかもしれません

### ★キーワードを伝えるTDH（Title　Description　H1）
TDH（Title　Description　H1）の全てに狙いたいキーワードが入ることでGoogleに初めて適切にキーワードが伝わる様になります。
そのため、動的にこれらを生成する場合はこの3箇所全てにキーワードが入っているか考慮する必要があります。

## 【imgタグとaltの注意点】
画像や動画といったコンテンツに対してalt属性をつけることで、視覚障害者（読み上げ機能を利用している）やネットワーク回線の遅いユーザーにも情報を提供でき、Googleからも高評価を得られます。

以下ソースコード、<a href="https://support.google.com/webmasters/answer/114016">GoogleSearchConsole画像について</a>からの引用

```html:不適切な利用方法
<img src="puppy.jpg" alt=""/>

<img src="puppy.jpg" alt="子犬 犬の赤ちゃん 
小さな子犬 レトリーバー ラブラドール ウルフハウンド 
セッター ポインター ジャックラッセル テリヤ 
ドッグ フード ドッグフード 安い 子犬の餌"/>
```
altタグにキーワードを詰め込むことは**スパム（<a href="https://support.google.com/webmasters/answer/66358">キーワードの乱用</a>）**として認識される場合があり推奨されません。

```html:最適
<img src="puppy.jpg" alt="子犬"/>

<img src="puppy.jpg" alt="持ってこいをするダルメシアンの子犬"> 
```

できれば単語だけではなく画像そのものを見なくても理解できる文章にする必要性があります。

## # ★その他画像の推奨項目（必須ではない）
* ファイル名とaltの説明を統一すること
* スペーサーなどはaltを設定しなくても良い
* 画像とその画像の説明のテキストは可能な限り近くに配置すること。
* 類似する画像は同じディレクトリに保存するべきである。　例：成人向け画像は別ディレクトリにとGoogle公式発表
* 同じ画像が複数のサイトで利用された際に、Googleにできるだけ多くその画像の情報を伝えておくことで、このサイトの画像がオリジナルの画像と識別してもらうことができるようです。（効果は不明）

### ★同時に知っておきたいクローラビリティとインデクサビリティの話
【クローラビリティ】
GoogleBotなどのクローラーがサイト内を巡回する際の、巡回のしやすさであり、以下が求められます。

* 適切なHTMLでの記述
* コンテンツ同士のURLの結びを適切にし、サイト内をくまなく全てクロール可能な状態に保つ

<a href="https://ferret-plus.com/search?q=%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3%E3%83%BC">クローラビリティーを向上させる施策一覧「ferret」</a>

【インデクサビリティ】
GoogleBotなどのクローラーがサイトに訪れた際に画像や音声、動画に対して適切な代替コンテンツ（altタグ等）を用意することで、どの様なコンテンか説明することで正確にインデックスできるようにすること。

## 【aタグ】
* アンカーリンク（テキスト）を適切に設定すること。
* アンカーリンクを適切に設定することでGoogleにもより伝わりやすくなります

## #クローラビリティーを損なう実装
* javascriptでのリンク移動（Googleもある程度は認識できます）
* フォーム送信によるサイト内検索
* FLASHを用いたコンテンツのリンク

このような実装はクローラビリティーを低下させるため、可能な限り静的なaタグのURLも配置しましょう。

## 【rel="next" or "prev"】
ページネーションを設定した際はrel属性で nextと prevを指定する必要があります。

### ★ rel=”prev/next”はrel=”canonical”よりも優先されて評価される
canonicalでページ2,3,4が1に向けられていたとしても、nextとprevはcanonicalの評価よりも優先されるため、
以下の様に**同じパラメータが連続**しないURLにするとprevとnextは受け入れてくれない。

```html:ダメな例
http://example.com/iphone7?page=1
http://example.com/iphone7?color=red&page=2
http://example.com/iphone7?page=3
http://example.com/iphone7?page=4
```
以下の様に**同じパラメーターを連続**させる必要がある。

```html:正常に受け入れてくれるprevとnextのURL
//page=の表記
http://example.com/iphone7?color=red&page=1
http://example.com/iphone7?color=red&page=2
http://example.com/iphone7?color=red&page=3
http://example.com/iphone7?color=red&page=4

//p=　と省略した表記
http://example.com/foo.html
http://example.com/foo.html?p=2
http://example.com/foo.html?p=3

//URLの一部に含まれる表記
http://example.com/foo/1/
http://example.com/foo/2/
http://example.com/foo/3/
```

### ★ 表示されるコンテンツが変化するので、並び替えのフィルタ毎にnextとprev属性が必須
新着順で並び替えをしているページや人気順で並び替えをしているページがある際に、異なる条件で並び替えをしている場合、
ページコンテンツが異なるため、新着順は新着順のprevとnext、人気順は人気順のprevとnextの両方を設定する必要がある。

### ★その他ポイント
* 1ページに１つのnextとprevが設定可能（２つは不可能）
* 相対パスではなく絶対パスで記述すると良い（必須ではない）
* 条件式で絞り込んだページを検索結果に表示表示したい場合は、条件式で絞り込んだページにもnextとprev属性を追記する。
    * 表示したくない場合はcanonicalを全データが表示されている条件式なしのページに向ける

参考<a href="https://www.suzukikenichi.com/blog/implementing-rel-prev-next-correctly/">rel=“prev”とrel=“next”のページネーションにおける正しい使い方</a>


## 【rel="nofollow"】
nofollowはリンク先を評価しない場合につけるもので、ページランクをリンク先のページへ渡さなくなります。
以前はmetaタグに記載していましたが、ページ全体にかかってしまうため、現在ではaタグに記載します。
またGoogleBotはリンク先のページも辿り、そのサイトの評価も行うためリンクを貼る祭はそのリンク先のページが信頼できるページかも加味する必要があります。

### ★以下のようなサイトへのリンクはnofollowを推奨します
* ユーザーが入力可能なコメント欄や掲示板
* ブックマークサイトへのリンク
* ランキングサイトへのリンク
* お金を払ってレビューなどをしてもらう際のリンク
* アクセスカウンターなどのウィジットの下に記述されている powerd by　...のリンク（見落としがち）

Googleミューラー氏曰く、お金を支払ってもらって張ったリンクに関してもnofollowをつけたほうが良いそうです。
>nofollowが付いていれば、ペイドレビュー（金品の見返りとして書いたレビュー）だとアルゴリズムで認識できる。本当のレビューなのか頼まれたレビューなのかを区別できなかったとすると、すべてのリンクを無視しなければならなくなる。これはもっと良くない状況で、Googleは避けようとしている。だからnofollowを付けてほしい。

### ★注意したい自社サイトに悪影響を与える可能性があるリンク

* ユーザーから見れない位置にある、クリックできないといった隠しリンク
* 相互リンク支援サイトとのリンク
* Googleから悪質と判断されているサイトへのリンク

基本的な考え方として、そのリンクがあることでサイトが使いやすくなるのかを基準に持って貼りましょう。

## 【robots.txtで不要なクロールをさせない】
以下の様な場合はそのページをクロールさせない様にrobots.txtで指定する必要があります。

* 流入はあるがサイト内で量産されている低品質ページ

robots.txtはサイトのルートディレクトリに配置することでbotが自動的に読み取ってくれます。

```txt:robots.txtの例
User-Agent: *
Disallow: /*/matome/
Disallow: /ajax/*.json
Disallow: /image/
Disallow: /search
```

また公式のツールを用いることでrobots.txtの検証を行うことができます
<a href="https://support.google.com/webmasters/answer/6062598?hl=ja">Google robots.txtテスター</a>


## 【rel="noindex"】
意図的にGoogleなどの検索エンジンの検索結果に表示されないようにします。

更新のタイミングはサイトがクロールされたタイミングで、表示や非表示の変更を行ったとしても実際に反映されるのは次回GoogleBotなどからのアクセスのあったタイミングになります。

### ★robots.txtとの違い
robots.txtはそのページのクローリングも禁止します。
noindexは適応後もサイトへのナチュラルリンクやソーシャルシェアが多い場合SEO評価が残り、そのサイトに貼られたリンク先へ評価は渡されます。
そのページ内に張ったリンク先に評価を渡したくない場合はrobots.txtでクロールを禁止する必要があります。

### ★noindexの主な利用用途
* 低品質なページに対してnoindexをつけ、低評価を受けないようにする
* robots.txtで設定するまでもないページ
* 404ページ（status404を返していても一応設定する）

```html:設定方法
<meta name=”robots” content=”noindex”>
```

### ★インデックスステータスの確認方法
Googleの<a href="https://www.google.com/webmasters/tools/index-status">Search　Console</a>のGoogleインデックスから確認することができる。

<img src="https://qiita-image-store.s3.amazonaws.com/0/69647/8c1cc73b-969a-00c3-6712-ebc76333e717.png" alt="Googleインデックス数" height="300px">


意図せず動的に作成しているページがインデックスされ、「著しくインデックスページが増加した結果SEO順位の低下した」といったことが起きないように定期的に確認すると良い。

## 【リッチスニペットを表示させる】
schema.orgで公表されている構造でマークアップすることで、Googleの検索結果にリッチスニペットとして表示されるようになる可能性が上がります。

<img src="https://qiita-image-store.s3.amazonaws.com/0/69647/8239d96e-daea-7cd1-d9c4-656b688bd406.png" alt="リッチスニペットとは検索結果に表示される画像や評価などである。">

現状は評価に関係ないものの、リッチスニペットを検索順位の評価要素に加えるかもしれないと<a href="https://www.youtube.com/watch?v=QWL864VlW7I&feature=youtu.be">youtubeでのハングアウト動画</a>でGoogleのJohn氏が言っております。


記述方法は以下のような形になっており
itemtypeでGameとCorporationを利用していますがその他の種類は http://schema.org/ で調べることができます。
検索結果から詳細に入り、canonicalURLと書いてあるものがitemtypeに対応するものになります。

```html:snipet.html
<section itemscope itemtype="http://schema.org/Game">
    <h1>モンスターハンターゲームシリーズ</h1>
    <span itemprop="name">モンスターハンターダブルクロス</span>
    <p itemprop="description">6大メインモンスターがいる最新モンハンシリーズ</p>
    <div itemprop="author" itemscope itemtype="http://schema.org/Corporation
">
    <p itemprop="name">CONAMI</p>
    <p itemprop="email">example@conamikan.jp</p>
    </div>
</section>
```

詳細な実装方法に関しては<a href="http://qiita.com/ryotanatsume/items/91d16968a4677443a6e7">schema.orgで構造化マークアップせよ！</a>の記事が参考になるかと思われます。

#URLについて
## 【ソフト404】
statusコード200の状態で、このURLは存在しませんという内容のページを表示することをソフト404といいます。

公式に<a href="https://www.suzukikenichi.com/blog/google-webmaster-tools-show-soft-404/">Google Search Console</a>にてソフト404レポート機能があるのでそれで確認ができます。

<img src="https://qiita-image-store.s3.amazonaws.com/0/69647/516eaf2f-f73a-9cbf-5315-dfea43f642d5.png" height="400px" alt="googleSearchConsoleのクロールエラータブの中にあるメニューのソフト404で確認することができます。">

また、開発者ツールの「networkタブ」からも確認することができます。

<img src="https://qiita-image-store.s3.amazonaws.com/0/69647/a43bdc40-213a-2325-d9ee-6ba7c066e359.png" alt="開発者ツールのネットワークタブのステータス" height="300px">

最新のGoogleBotはソフト404を見分けることができ、公式に**ソフト404のページがあることによるペナルティーは与えない**と明言している。
### ★結論、急遽対応する必要は無いができればやったほうが良い
* 基本的には異なるURLで同一コンテンツをstatus200で返しているが**同一コンテンツとして扱われない**。
* そのためソフト404があっても**緊急で直す必要はない**
* Googleは「綺麗に取り払うことに越したことはない、そのためにソフト404を検出できるツールを作った」と発言している
* ソフト404認識されずインデックス、重複コンテンンツ扱いされる可能性が無いとは言えないので対応したほうが良い


```php:CakePHPの1例　＝＞notFoundExceptionをちゃんと投げることで404コードが帰る（他の実装方法もたくさんあります
throw new NotFoundException();
```


海外SEOブログ：　<a href="https://www.suzukikenichi.com/blog/does-google-penalize-your-site-for-having-soft-404/">ソフト404が原因でGoogleにペナルティを受けることはあるのか?</a>

## 【URL正規化】
URLはブラウザがよしなに理解してくれるため、異なる書き方をしても同じページが表示されるようになっていることが多くあります。
しかしGoogleなどの検索エンジンは異なるURLで同じコンテンツを表示している場合ペナルティーを与えることがあり、この対策としてURLの正規化を行う必要があります。

### ★正規化によって恩恵を受けられる例
前　提：wwwのありとなしでは**別ページ**として認識される
問　題：せっかくの被リンクもwwwありとなし、バラバラに貼られてしまうと**評価が分散**されてしまう
解決策：予め、wwwにアクセスされたらwwwなしのページに**301リダイレクト**をしておく必要がある。

### ★301リダイレクト
* <a href="https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89">HTTPステータスコード一覧をまずはご覧ください(wiki)</a>
* 永続的にURLが変更されたことをGoogleに伝えることができるので、URL変更の際には必ず実施。
* Googleロボットは転送先にインデックスを引継ぎ、301転送元の内容を読むことができなくなる。
* サイトの価値の大半をリンク先のURLに渡すが全ては渡さないため、サイトの価値が元に戻るまでセッションが減少する可能性がある。
* 301リダイレクトの設定を行ってからサイトがクロールされるまで1ヶ月かかる可能性がある

### ★対応例（両方ともcanonicalでも良い）
* **wwwの有無**を301転送で統一
* **index.htmlまたは何もつけない**、これも別URL判定されるので301転送で統一
* **ページネーション**　/search/?page=1 と /search/　で同じ内容を表示する場合
* /search/　と /search といったディレクトリ階層の表示ルール

開発時の注意：ブラウザの機能によって一度特定URLから別URLに301転送を行うとキャッシュを削除するまでその設定が残り自動でページ遷移します。

## 【Canonical】
canonicalを利用することで、似た様なサイトコンテンツを複数配置した際に大本はここであるとGoogleに知らせることができます。
その他にも**SPページ**や**検索結果ページング**などサイト内に似たページが大量発生してしまう際に、１つのページに向けてcanonicalを設定することで、Googleの同一コンテンツによる検索順位の低下を防ぐこともできます。

```html:PCとSPページを別途用意している場合のcanonicalの設定例
<head>
  ...
  <link rel="canonical" href="http://www.example.com/" />
  ...
</head>
```
またcanonicalと下記で説明するalternateは同時に利用することがあります。

### ★Canonicalの具体的な対応例
* 検索結果ページなどは内容が似てしまうことが多いため設定することが多い
* モバイルページのURLを別途用意している場合もページコンテンツが同様になりやすい
* GoogleAnalyticsなどの計測用URLの対応も必要
* 複数のサイト（外部、内部問わず）で同じ内容のコンテンツをウェブ上で公開する場合も注意
* どうしても301転送が使えない場合
* ミラーサイトを用いて負荷軽減を行う場合（ミラーサイトは代表的なスパムの一種なので非推奨）

Googleは外部URLでもcanonicalが有効になります。
またミラーサイトを用意して負荷軽減を行うのはあまり推奨されませんAWSの場合はELBなどを用いて負荷分散を行いましょう。

## 【Alternate】
alternateはGoogle翻訳曰く「代わりの」という意味で、基本的にcanonicalと1：1対にして利用します。

主な用途は**SPページ**、**他言語対応ページ**などで、同一の内容で異なるURLでのペナルティー**「同一コンテンツ」**と見なされてしまうのを回避できます。

```html:example.com
<head>
  ...
  <link rel="alternate" href="http://sp.example.com/" />
  ...
</head>
```
alternateを用いて「このPCページの代用ページはsp.example.com」と記述した場合。
canonicalを用いて「このSPページの元ページはexample.com」とSPページからcanonicalを以下のように設定します。

```html:sp.example.com
<head>
  ...
  <link rel="canonical" href="http://example.com/" />
  ...
</head>
```

canonicalが多数のページのオリジナルを指定する　**多：1** という構造に対し。
alternateはcanonicalとalternateで互いに参照し合う **1:1**の構造になります。

<a href="https://ferret-plus.com/1426">canonical属性とalternate属性を使ってスマホサイトの存在を適切に伝える方法</a>

## 【クローキング】
* GoogleBotとユーザーに見せる情報を異なるものにするのは禁止されており表示順位に関わります。
* またPCでアクセスした際は「スマホでアクセスしてください」と書いているが、UAがスマホなら正常に見えるといったページはクローキングになる可能性があります。
* またサイトがハッキングされた際にクローキングを仕込まれることがあるため、不自然な動作やログを見つけた際は再度デプロイ。


## 【URLを考える際に念頭に入れておきたい　永続化の観点】
検索エンジンはそのURLがどれだけ**長期間安定してユーザーに情報提供**していたかを検索順位に反映させているため、301転送を用いることでサイトの保つ価値の大半を新URLに転移させることは一応可能ですが、持っている**評価を全て渡せるわけではない**です。

### ★URL設計時の確認事項
* 拡張子 .php　などが入っていないか（CakePHPからRailsなどに切り替えた際URLが変わらないようにする）
* ハイフンとアンダースコアが利用可能だがGoogleは単語をハイフンで区切るのでハイフン推奨
* URLは全て小文字になる
* 長さは短いほうが一応良い（下記に詳細解説）
* ディレクトリ階層が深くなっていないか
* キーワードを含むと良い（日本語可）
* 普遍的に使い続けることができるURLで今後の施策も実行可能かどうか
* 重複コンテンツが生まれないか


### ★URLの設計から重複コンテンツが生まれないか確認
以下の様なページは重複コンテンツを生むため、非推奨なURL設計です。
例：アニメのホームページ

* 主人公一覧ページ
* 全登場キャラクターの一覧ページ

主人公：山田さんのページは2通りのURLでアクセスできるのは重複コンテンツ扱い

主要人物一覧 heros/yamada.html
登場人物一覧 characters/yamada.html

同じコンテンツ内容で異なるURLという状態が発生しない様に設計する必要があります。

## 【URLの長さは長くても良い】
Googleのイリーズ氏がSMXにてURLの長さは短くても長くても良いと言っている。

>
URLの長さはランキングには関係しない。
しかしURLの発見に役立つことがある。

[Googleで、URLの長さは問題にならないが階層の深さは重要 from #SMX Advanced 2015 | 海外SEO情報ブログ](https://www.suzukikenichi.com/blog/length-of-url-doesnt-matter-but-structure-does-matter/) から引用

SEOの評価の観点だけ見ればまったく関係ないのでいくら長くしても大丈夫ではありますが、IEが2084文字しかURLを扱えないのでそれ以下の方が良いです。
また、Amazonで感じる様にURLは短い方がシェアをしやすいため、被リンクのことを考えると短くするにこしたことはありません。

### ★URLのすすめ
* URLは検索結果に表示されるため、コンテンツと関連した単語を利用する
* 検索キーワードと一致した際に太字で表示される
* 検索エンジンは単語をハイフンで区切るので、URLの単語はハイフンで区切るとよい

またGETパラメータ　?color=2　などのパラメータはしばし削除されてリンクが貼られることもありますので長すぎると適切な被リンクを得られない可能性があります。




## 【ディレクトリ構造はあまり意識しなくて良いがリンク構造は重要】
### ★ディレクトリ構造が深いとクロールされないかもしれないが、SEOには関係ない
<a href="https://support.google.com/webmasters/answer/156184?hl=ja">GoogleSearchConsoleのサイトマップの解説</a>をみると、階層が浅いディレクトリから順次クロールを行うと記述があり、
階層の深い位置にあるどのページからもリンクされていないサイト内のページはクロールが遅れ、なかなかインデックスされない状態に陥ります。
開発者として重要なページには内部施策としてリンクを配置することを忘れない様にしたいです。

注意：GoogleBotのクロールのしやすさであり、SEOの順位には階層は関係ありません。

### ★リンク構造はSEOに関係ある
リンク構造とは簡単にいうと「何回クリックしたらそのページに到達できるか」です。
つまり重要なページは簡単にユーザーがアクセスできる状況を保つべきということです。

リンク構造が5階層以上深くなるとGoogleがページをインデックスするまでに時間がかかってしまいます。
基本的に4階層以下であれば問題ないようです。

参考：<a href="http://s-supporter.hatenablog.jp/entry/seo-difference-of-the-hierarchy#ディレクトリ階層とリンク階層の違い">リンク構造とディレクトリ構造の違い</a>


## 【パラメータ付きのURLは良いがしかし】
GoogleのJohn Mueller氏は静的なページがたくさんあるよりは、動的にパラメータによってコンテンツの内容を変えた方がわかりやすくて**良い**と言っています。

<a href="https://www.suzukikenichi.com/blog/google-prefers-the-clean-parameterized-url-to-unnecessary-url-rewriting/">不必要に静的化したURLよりもパラメータ付きURLをGoogleは好む</a>


検索結果ページなどのパラメータを用いてページの内容を書き換えている**動的ページ**の場合は、上記で解説している通り**同一コンテンツ**として認識されてしまうことを防ぐために**Canonical設定**を行った方が良い場合もあります。

## 【GETパラメータ過多によるインデックスの低下】
Googleは上記の【パラメータ付きのURLは良いのか？】で説明した通り、動的にURLを生成することを推奨しており、GETパラメータの解析も行っています。

しかし**GETパラメータが多い**場合に**インデクサビリティーが低下**する可能性があります。

その結果インデックス数が低下し、検索結果に表示されなくなったという例があるため、GETパラメータがあまりに長くなった場合はURL静的化を行ったほうが良い場合があります。

### ★URLの静的化
静的化とはGETパラメータをなくし、URLの階層構造に含めることです。
以下に例を示します。

```php:長い動的URL（色と素材とカテゴリー）
https://phocase.jp/iphone7/?color=3&material=3&category=cute
```
以上のようなURLだとパラメータが多くなる、以下のようにパラメータが2個以下になるように静的化する。

```php:改善：カテゴリーを静的URLに変更
https://phocase.jp/iphone7/cute/？color=3&material=3
```

### ★静的化する際のポイント
* 不要なパラメータを排除する
* セッションIDをパラメータ管理しない
* 構造化できそうなパラメータは静的化を行う。
* 静的化をする際には階層が深くなりすぎないようにする。
* 意味のあるURLにするとよい（しなくても良い）

静的化を行ったところで階層が深くなりすぎ流ことによるクロラビリティーの低下を招いても本末店頭なので、GETパラメータと静的化のバランスが重要です。

### ★静的化の実装を簡単に行う
静的化するにあたり、システムを触りルーティングを切り替える方法もありますが。

簡単に実装する方法として.htaccessファイルの設定を書き換えることで簡単に静的化を行うことができます。

```txt:.htaccess
RewriteEngine On

RewriteRule http://phocase.jp/([0-9]+)/$　http://phocase.jp/?color=$1 [L,NC]
```

　<a href="http://server-setting.info/centos/apache-nginx-4-setting-redirect.html">Nginx でリダイレクト ( rewrite ) するには</a>


#サイトのコンテンツに関しての注意事項
## 【サイトのインデックス数が多いとSEOも強い時代は終わった。】
Googleは公式に不要なページ（低品質コンテンツ）の量産は無意味と明言しており、
内容の薄いコンテンツを大量に配置するのではなく１つのページの内容を濃くすることで価値のあるページと認識させるべきです。

### ★評価されるサイト
* このサイトにしか存在しない固有の情報
* 画像や動画が多くわかりやすい内容
* 理解するのに必要な情報量とロジックが記述されていること

以前までは検索エンジンにインデックスされているページ数が多いほど順位が高くなる時代もありましたが、
現代ではページが無駄に多く、尚且つ内容が低品質と判断された場合はサイト全体の評価に繋がってしまいます。

一応気休めかもしれませんが<a href="https://ezorisu-seo.jp/?seolaboratory">えぞりすSEO</a>というサイトで現在狙っているキーワードに対して、自サイトにどのようなコンテンツが足りないかを判定することができます。

プログラムで動的にページを作成している際はすぐにページ数が増えるため、最大いくつのページが生成されるかを一応把握しておく必要があります。
例：スマホケース　赤色　iphone6　で検索できる際は　商材数×色数×機種数　ですぐに1000を超えます。

### ★対応と対策
* Google Search ConsoleのURLパラメータ機能
* robots.txtによる不要コンテンツの、noindex化

<a href="https://valueagent.co.jp/blog/2959">日本語版検索品質ガイドライン</a>

## 【ファーストビューに固有な有用コンテンツが存在するか】
サイトアクセス時にスクロールせずとも閲覧可能な場所をファーストビューと呼びます。

一般的に500×950pxの幅であり以下の点に注意する必要があります。

### ★注意点
* 外部リンクを設置しない
* SEO用のキーワードを適度に配置する
* 画像にはaltで代用文字を入れ、ファイル名も画像と統一する。


## 使っているツール（一部）
<a href="https://adwords.google.co.jp/KeywordPlanner">検索されている単語を知るキーワードプランナー</a>
その他にも検索されている単語を知るにはGoogleのオートコンプリートをみるといい
<a href="http://www.related-keywords.com/">関連キーワード取得サービス</a>
<a href="https://www.google.com/intl/ja_jp/analytics/">GoogleAnalytics</a>
<a href="https://www.similarweb.com/">シミラーウェブ</a>

## 便利なSearch Console(旧webmaster tool)
* googleBotの円滑なサイトクロールを手助けします。
* 問題が生じているページを確認
* XML形式のサイトマップをアップロード
* robots.txtの作成と分析
* title descriptionが正しく設定されているか確認可能
* サイトに来訪したユーザーの検索キーワードがわかる
* インプレッションはあるがクリック率が低いキーワードがわかる
* その他GoogleBotのクロールに関する情報
* Google検索結果に表示されたくないリンクの削除
* サイトのガイドライン違反のチェック
* 違反修正後の再確認リクエストの送信

<img src="https://qiita-image-store.s3.amazonaws.com/0/69647/311c0ba3-0c20-df51-aefa-a110b11e1ef3.png" height="300px">
https://www.google.com/webmasters/tools/home

## 参考サイト
* <a href="https://ferret-plus.com/">Ferret　-ウェブマーケティングに強くなるメディア-</a>
* <a href="https://mkst.ferret-plus.com/">Marketer's STORE</a>
* <a href="http://static.googleusercontent.com/media/www.google.co.jp/ja/jp/intl/ja/webmasters/docs/search-engine-optimization-starter-guide-ja.pdf">Google検索エンジン最適化スターターガイド</a>
* <a href="https://webmaster-ja.googleblog.com/">Googleウェブマスター向け公式ブログ</a>
* <a href="http://web-tan.forum.impressrd.jp/l/3302">エンジニアのためのSEO入門記事一覧<a/>
* <a href="http://web-tan.forum.impressrd.jp/">Web担当者フォーラム</a>
* <a href="https://bazubu.com/">バズ部</a>
* <a href="https://www.suzukikenichi.com/blog/">海外SEOブログ</a>



