app.service('TodoService', function($q, $http){
	this.getTodo =  function(){
		var t = localStorage.getItem('todo');
		if(t){
			console.log('Todo Data:', JSON.parse(t))
			return JSON.parse(t)
		}
		console.log('Todo Data:', [])
		return [];
	}
	this.saveTodos =  function(todo){
	localStorage.setItem('todo', JSON.stringify(todo));
		console.log('Todo Data Saved:', todo);
	}
})
