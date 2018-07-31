//Request relative path for each user///
//$ Dollar sign global variable required for Atom Linter//
$(document).ready(function () {
  $.getJSON('api/todos');
  $.then(addTodos);
  $('#todoInput').keypress(function (event) {
    if (event.which == 13) {
      createTodo();
      console.log('You pressed enter!');
    }
  });
});

function addTodos(todos) {
  todos.forEach(function (todo) {
    console.log(todo.name);
    var $newTodo = $('<li class="task">' + todo.name + '</li>');
    if (todo.completed) {
      newTodo.addClass('done');
    }

    $('list').append(newTodo);
  });
}

//Cannot use JSON because we are using a GET request//
function createTodo() {
  $.post('api/todos');
}
