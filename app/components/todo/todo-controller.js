// app.controller('TodoController', function(TodoService) {
//     var tc = this;
//     tc.todos = TodoService.getTodos();


app.controller("TodoController", function() {
    var tc = this;

    // DO NOT EDIT ABOVE
    tc.addTask = function(newTask) {
        tc.todoList = [];
        tc.todoList.push(newTask)
        tc.newTask = '';
        tc.taskComplete = 0;
    }

    tc.reset = function() {
        tc.todoList = [];
        tc.taskCompleted = 0;
    }
    tc.removeTask = function(index) {
        tc.todoList.splice(index, 1);
    }

    //     $scope.showMe= false;
    //    $scope.myFunc = function(){
    //        $scope.showMe = !$scope.showMe;
    // }


})