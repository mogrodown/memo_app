
function deleteMemoDb(id) {
  return fetch('./api/memo/' + id, {method: "DELETE"})
    .then((response) => response.json())
}

function readMemoDbAll(category, sort_order) {
  return fetch('./api/memo?category=' + category + '&sort_order=' + sort_order)
    .then((response) => response.json())
}

function writeMemoDb(record) {
  return fetch('./api/memo',
        {method: "POST",
         headers: {
           "Content-TYpe": "application/json; charset=utf-8",
         },
         body: JSON.stringify(record)
        })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error(error));
}

