//Request relative path for each user//
/* $ Dollar sign global variable */
$(document).ready(function () {
  $.getJSON('api/todos');
  $.then(function (data) {
    console.log(data);
  });

function addTodos(todos){
  todos.forEach(function(todo){
    console.log(todo.name);
    var newTodo = $('<li class="task">' +todo.name + '</li>');
    $('list').append(newTodo);
  });
}
