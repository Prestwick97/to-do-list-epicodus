//Business Logic for ToDoList
function ToDoList(){
  this.tasks = [];
  this.taskId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}
ToDoList.prototype.assignId = function() {
  this.taskId +=1;
  return this.taskId;
}
ToDoList.prototype.findTask =function(id) {
  for (var i=0; i< this.tasks.length; i++){
    if (this.tasks[i]) {
    if (this.tasks[i].id == id) {
      return this.tasks[i];
      }
    }
  };
  return false;
}
ToDoList.prototype.deleteTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

//Business Logic for tasks
function Task(location, time, chore) {
  this.location = location;
  this.time = time;
  this.chore = chore;
}

Task.prototype.info = function() {
  return this.location + " " + this.time + " " + this.chore;
}

var toDoList = new ToDoList();

// User Logic
$(document).ready(function() {

  

});