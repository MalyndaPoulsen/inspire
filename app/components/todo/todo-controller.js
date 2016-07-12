
(function(){
    var todos = [];
    $('#todo-form').on('submit', function(event){
        event.preventDefault();
        var form = this;
      var task = form.task.value
       todo.push(task);
       update();
})

function update(){
    for (var i = 0; i < todos.length; i++){
        var currentTask= todos[i];
        $('#todo-list').append(`<div>${currentTask.toUpperCase()} </div>`)
    }
}
}())
// angular.module('inspire')

// .controller('todo-controller', function() {
//     var tc = this;
//         tc.list = [];

//     // DO NOT EDIT ABOVE
//     tc.addTodo = function(newTodo) {
//         tc.list.push(newTodo)
//         tc.newTodo = '';
//         tc.todoCompleted = 0;
//     }

//     tc.reset = function() {
//         tc.list = [];
//         tc.todoCompleted = 0;
//     }
//     tc.removeTodo = function(index) {
//         tc.list.splice(index, 1);
//     }

    


// })