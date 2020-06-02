
function deleteDB(action, id) {
  return fetch('./api/memo/' + id, {method: "DELETE"})
    .then((response) => response.json())
}

function readDB(action) {
  return fetch('./api/memo?category=' + 'helloworld')
    .then((response) => response.json())
}

function writeDB(action, record) {
  return fetch('./api/memo',
        {method: "POST",
         headers: {
           "Content-TYpe": "application/json; charset=utf-8",
         },
         body: JSON.stringify(record)
        })
  /*
  fetch('./api/memo',
        {method: "POST",
         mode: "cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
           "Content-TYpe": "application/json; charset=utf-8",
         },
         redirect: "follow",
         referrer: "no-referrer",
         body: JSON.stringify({date: date_string(), memo:memo})
        })
        */
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error(error));
}

