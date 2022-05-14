// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

/*newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1*/

//logTaskState(task.title); // Clean Cat Litter has not been completed
//completeTask(0);
//logTaskState(0); // Clean Cat Litter has been completed

const task1 = newTask('Clean Cat Litter', 'Remove 💩 from 🐈📦!');
const task2 = newTask('Do Laundry', '🧺 -> 🧼 -> 👔');
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
task2.logState();
task2.markCompleted();
task2.logState();

console.log(tasks);