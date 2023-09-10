---
title: 動画をgifに変換してSlackにサクッと貼り付ける shellscript のおすすめ設定
date: '2020-01-01'
tags: Slack GIF ShellScript
author: rorensu2236
slide: false
---
# 【Macでgif画像を一瞬で作れるようにする設定】
株式会社じげんの rorensu です。
インフラからフロントまで色々見ております。

ウェブサイトを開発する上でビジネスチームや営業さんと
動作をSlackやChatworkなどで共有したい場面が多いので、
その際は動画をgifに変換して共有してます。

動画を貼れるツールであれば不要かもしれませんが
動画は容量が大きい上に、貼れないことも多々あるため

gitに貼ったりSlackに貼ったりするgif画像を作成する
便利なコマンド(ffmpeg)とその設定の紹介です。

### 【この記事で紹介する変換設定はウェブの動作チェック用です】
サイト上の動作チェックや確認に必要な最低限の画質とFPSにしてます。
画質やFPSはオプションで調節可能です。

### 【この記事の設定で作成できるgif画像（590 KB）】
![output.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/b2fa59d8-2976-b16b-8bdd-39f18f1d7817.gif)

## 【gifを作成する手順】
* `command Shift 5` で画面収録動画をDesktopに保存
* scriptでffmpegを使って動画をgif画像に変換する


## 【インストール方法】
まず動画をgifに変換できる`ffmpeg`をインストール。

```bash:インストール
brew install ffmpeg
```

以下のテキストをファイル名の拡張子を`.command`にして保存。
パスを通す（ホームディレクトリにおいても良い）

```bash:script.command
ffmpeg -y -i ~/Desktop/*.mov -r 15 -vf "scale=iw/2:-1" ~/Desktop/output.gif
rm ~/Desktop/*.mov
open ~/Desktop/
exit
```

Macの動画保存先をDesktopに設定する。
`Command + Shift + 5`を押して画面の動画収録先をDesktopにする。


※ 変換が終わると動画を削除して保存したディレクトリを開きます。

## 【使い方】
* `Command + Shift + 5`を押して画面収録動画を作成
* bashで`bash ./script.command`を実行
* 動画完成！最高！


## オプション解説（動画の画質設定など）
私の設定は極力画像の容量を抑えるために画質を下げてますが調節可能です。

-i 変換したい動画のパス
-y　出力同名ファイルを警告無しに上書き
-r フレームレート
-vf 動画のアスペクト比を保って縮小

```bash:script.command
ffmpeg -y -i ~/Desktop/*.mov -r 15 -vf "scale=iw/2:-1" ~/Desktop/output.gif
```

上記のコマンドでは以下のことをしています。

* ファイルの強制上書きをする
* デスクトップにある .mov拡張子のファイル 1つを選択
* フレームレートは 15fps
* 動画サイズを2/1に縮小
* 出力先はデスクトップに `output.gif` として保存


## ffmpeg公式サイトはこちら
https://ffmpeg.org/

