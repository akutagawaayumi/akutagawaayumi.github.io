ityped.init(document.querySelector("#ityped"), {
  strings: [
    'Count Down'
  ],
  startDelay: 100, //アニメーション開始までの遅延、大きいほど遅れる
  typeSpeed: 100, //表示させるスピード、大きいほどゆっくり
  loop: true, //ループ
  backDelay: 1000, //戻る時間指定
  backSpeed: 50, //戻るスピード
  showCursor: true, //カーソル表示
  cursorChar: "|", //カーソルとして表示するテキスト
})
