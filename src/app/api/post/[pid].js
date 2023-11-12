export default (req, res) => {
  // req オブジェクトから query プロパティ内の pid パラメータを抽出
  const { query: { pid } } = req
  // こんな感じでも取得可能
  const hoge = req.query.pid
  res.end(`request params is: ${hoge}`)
}