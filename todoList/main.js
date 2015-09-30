// shorthand for $(document).ready(function() { ... });
$(function () {
  var $form = $(/* get element selector */);
  var $todoInput = $(/* get element selector */);
  function TodoList(domId) {
    this.element = $('#' + domId);
    this.todos = /* make a container to store all todo objects */;
    this.addTodo = function(content) {
      // make a new Todo object
      // add the object to this.todos
      // add the object's element to $todoList
    };
  }
  function Todo(content) {
    this.isComplete = false;
    // store the todo's content
    // create a checkbox element
    // add an event handler to the checkbox...when clicked, call this.markAsComplete
    this.element = /* make an li element that contains the todo's content and the checkbox */;
    //markasComplete is a METHOD, because it's a function that is a property of an instance of a constructor
  }

  Todo.prototype.markAsComplete = function() {
    var time = new Date();
    var hour = time.getHours();
    if (hour < 17) {
      this.isComplete = true;
    }
  }


  var todoList = new TodoList('todo-list');
  // on form submit...
  $form.submit(function() {
    var todoContent = /* get the value inside $todoInput */;
    // add the todo to the TodoList
  });
});
