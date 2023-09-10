---
title: gitでパスワードを毎回聞かれる問題の解決方法
tags: GitHub SSH password
author: rorensu2236
slide: false
date: '2012-01-01'
---
# gitで毎回パスワード聞かれて困った

原因：<b><font color="red">https通信だったので毎回聞かれる</font></b>

## 解決策：httpsではなく`Use SSH`の方を利用する
リポジトリの `clone or download` を押すと `Clone with HTTPS` という文字が表示されるはず。
この右上の `Use SSL` をクリックし、出てきたURLをコピーする
![image.png](https://qiita-image-store.s3.amazonaws.com/0/69647/f6f70842-c8b0-2fc1-e418-74b67bc5c17d.png)

あとはターミナルから以下のコマンドを実行したら完了

```zsh:sshを用いてgitと通信を行うように設定するコマンド
git remote set-url origin コピーしたものをここに貼り付け
```

あとは以下の記事を参考に、`git hub`に公開鍵を登録したら完了です

<a href="https://qiita.com/shizuma/items/2b2f873a0034839e47ce">GitHubでssh接続する手順~公開鍵・秘密鍵の生成から~</a>


以下はこれでもわからなかった人向けドキュメントです。
うまくいかない際のデバッグ方法について書いてあります。

## 現状把握：https通信を使ってしまっていないかチェック
現在git管理利用しているディレクトリで以下を実行する

```
git remote -v
```
```
origin	https://github.com/keisuke2236/temp.git (fetch)
origin	https://github.com/keisuke2236/temp.git (push)
```

このように `https://github.com` で始まっていると毎回パスワードを聞かれてしまう。


## gitにパスワードを毎回聞かれないようにするコマンド
`https通信` ではなく `sshプロトコル` で通信するように設定します。


```zsh:git_remote_-vを打つと出て来るこれ
https://github.com/keisuke2236/CODE-COFFEE.git
```

``` zsh:前半のこの部分を
https://github.com/　　　　　　　　　　　　　　　　　keisuke2236/CODE-COFFEE.git
```

```zsh:これに置き換える
git@github.com:             keisuke2236/CODE-COFFEE.git
```

```zsh:完成形
git@github.com:keisuke2236/CODE-COFFEE.git
```


これでgitに毎回パスワードを聞かれなくなるコマンドが完成。


## 以下のコマンドを実行すれば毎回パスワードを聞かれなくなります。

```zsh:git_command
git remote set-url origin git@github.com:keisuke2236/CODE-COFFEE.git
```

`git@github.com:keisuke2236/CODE-COFFEE.git` この部分は適宜自分のリポジトリに書き換えてください。

## sshプロトコル通信に変更できたかチェック

```zsh:変更されたかどうかこのコマンドでチェック
git remote -v
```

```zsh:結果
origin	git@github.com:keisuke2236/startPage (fetch)
origin	git@github.com:keisuke2236/startPage (push)
```

`git@github.com:`で始まるssh接続に変更されていることができたら成功。

これでssh通信になっていますので、これでgitに毎回パスワードを打たなくても良くなります。

##gitにパスワードを毎回聞かれなくなっているかチェック
```zsh:git_password_Check
git push origin master
```

```zsh:結果
Everything up-to-date
```
もう全部アップデートされてますと、gitにパスワードなしでpushできることが確認できました。


