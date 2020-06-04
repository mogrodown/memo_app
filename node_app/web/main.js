
function category_changed() {
  showMemoList(document.getElementById("category").value);
}

function sort_reverse() {
  sort_order = localStorage.getItem('sort_order');
  if (!sort_order) {
    localStorage.setItem('sort_order', 'asc');
  } else {
    if (sort_order == 'asc') {
      localStorage.setItem('sort_order', 'des');
    } else {
      localStorage.setItem('sort_order', 'asc');
    }
  }
  showMemoList(document.getElementById("category").value);
}

function saveMemo() {
  // DBへの書き出しが完了したら、UIを再描画する。
  writeMemoDb({date: date_string(),
             memo:document.getElementById("id_memo").value,
             category: document.getElementById("category").value
            })
    .then(showMemoList('none'));
}

function deleteMemo(id) {
  deleteMemoDb(id)
    .then(showMemoList('none'));
}

function clear2() {
  document.getElementById("id_memo").value = '';
}

function showMemoList(category) {
  // わかったぞ、then句のチェーンがなんのために用意されているか。
  // getMemoList関数内はwebAPIをコールするfetchAPIを叩いており、
  // これは非同期関数である。やりたいのは、この非同期fetchAPIを叩いて
  // その結果が得られたタイミングで画面を更新したい。
  // 従って、getMemoListの後段もthen句で実装する。
  // 要するに、UIを更新するための処理は、さまざまな非同期チェーンの
  // 最終then句に接続する形となる。
  // getMemoListの戻り地 ret = getMemoList()とかやっても、
  // retは約束された値(Promise)という定義のみが同期リターンしてるだけで、
  // それを使ってUI操作はできない。
  //
  // Promiseとは、JavaScriptエンジンの実行スタックに予約しておいたよ、
  // というニュアンスかな。
  readMemoDbAll(category, localStorage.getItem('sort_order'))
    .then(res_json => {
      console.log('res json = ', res_json);
      let tb = document.getElementById("memo_table");
      while (tb.firstChild) {
        tb.removeChild(tb.firstChild);
      }
      for (let data_key in res_json) {
        console.log(res_json[data_key]['memo']);

        // 純粋なテキスト挿入ならcreateTextNode。
        // テキストにHTML構文を使いたいなら、innerHTMLセット。

        tb.appendChild(document.createElement("tr"));
        let td0 = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td0.style.backgroundColor="green";
        td0.style.color="white";
        td0.appendChild(document.createTextNode(data_key));
        td1.style.backgroundColor="skyblue";
        td1.style.color="white";
        td1.appendChild(document.createTextNode(res_json[data_key]['date']));
        td2.innerHTML = res_json[data_key]['memo'];
        td3.appendChild(document.createTextNode(res_json[data_key]['category']));
        td4.innerHTML = '<input type="button" onclick="deleteMemo(\'' + res_json[data_key]['_id'] + '\')" value="削除">';

        tb.appendChild(td0);
        tb.appendChild(td1);
        tb.appendChild(td2);
        tb.appendChild(td3);
        tb.appendChild(td4);
      }
    })
}

window.onload = function() {
  localStorage.setItem('sort_order', 'asc');
  showMemoList('none');
}
