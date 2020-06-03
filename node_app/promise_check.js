
function buy(pay) {

  return new Promise(function(resolve, reject) {

    // ここではPromise、約束する関数の実行を遅延(非同期)させるため、
    // JavaScriptのタイマー関数を使った。
    setTimeout(function() {
      if (pay >= 100) {
        console.log('100円で購入しました');
        // ここが非同期処理成功時のトリガー
        resolve(pay - 100);
      } else {
        // ここが非同期処理失敗時のトリガー
        reject('お金が足りないよ');
      }
    }, 500);
  });
}

/*
buy(50)
  .then(function (change) {
    console.log(`お釣りは${change}円です`);
  })
  .catch(function(error) {console.error(error);})
  */

// アロー関数使用
buy(300)
  .then(change => console.log(`お釣りは${change}円です`))
  .catch(error => console.error(error))

buy(50)
  .then(change => console.log(`お釣りは${change}円です`))
  .catch(error => console.error(error))




