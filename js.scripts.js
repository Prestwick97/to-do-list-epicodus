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
  return  "<li>" + this.location + " " + this.time + " " + this.chore + "</li>";
}

var toDoList = new ToDoList();
// var location = new Task("#location");
// var time = new Task("#time");
// var chore = new chore("#chore");
// toDoList.addTask("#location");
// toDoList.addTask("time");
// toDoList.addTask("#chore");
// var location = new Task();
// var time = new Task();
// var chore = new chore();
// toDoList.addTask();
// toDoList.addTask();
// toDoList.addTask();


// User Logic------
$(document).ready(function() {
$("form#list").submit(function(event){
  event.preventDefault();
  // $("input#name") = new ToDoList();
  var location = $("input#location").val();
  var time = $("input#time").val();
  var chore = $("input#chore").val();
  var task = new Task(location,time,chore);
  console.log(task);
  toDoList.addTask(task);
  $("#listed").append(task.info()).show();
  $("#listed").click(function() {
  // $(this).addClass(".done"); need to make this work and we are done :}
  });
  // $("#location").text(location).info().show();
});


});