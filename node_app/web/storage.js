function readStorage(key, init_value) {
  item = localStorage.getItem(key);
  if (!item) {
    console.log('this key is not exist');
    return init_value
  }
  return item;
}

function writeStorage(key, value) {
  localStorage.setItem(key, value);
}

function deleteStorage(key) {
  localStorage.removeItem(key);
}

function deleteStorageAll() {
  Object.keys(localStorage).forEach(function(key) {
    localStorage.removeItem(key);
  });
}

/*
function sort_reverse() {
  sort_order = localStorage.getItem('sort_order');
  console.log(sort_order);
  if (!sort_order) {
    sort_order='des';
  } else {
    if (sort_order == 'asc') {
      sort_order = 'des';
    } else {
      sort_order = 'asc';
    }
  }
  localStorage.setItem('sort_order', sort_order);
  showMemoList()
}
*/

