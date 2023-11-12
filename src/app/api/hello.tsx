// リクエストとレスポンスを引数の形で入れてください。 Lambda 関数として利用できる。
// 当然こちらのコードもブラウザ配信される js にはバンドルされない。
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
  const email = req.body.email
}

// Static Generation は便利だけれども、ビルドしないとページは見れない。
// 下書きを書いて居て、previewをしたい場合に、めんどくさいので、特別な機能がある。
// API Routes を利用すると、プレビュー機能が作れるので試してみてね。
