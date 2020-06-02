fetch('./api/v1/list')
  .then((response) => response.json())
  .then((todoList) => {
    const todo = document.querySelector('#todo-container');

    todo.innerHTML = '';

    for (const item of todoList) {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type='checkbox';
      checkbox.checked = item.done;
      const text = new Text(item.title);

      label.appendChild(checkbox);
      label.appendChild(text);

      li.appendChild(label);
      todo.appendChild(li);
    }
  })

