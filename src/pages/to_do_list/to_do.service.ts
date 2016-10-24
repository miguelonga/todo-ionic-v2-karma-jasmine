import {Injectable} from '@angular/core';

@Injectable()
export class ToDoService {
	toDoList: Array<{title: string, note: string, done: boolean}>;

	// toDoExample: { 
	// 	title: 'Tarea',
	// 	note: 'Lorem Ipsum es simplemente el texto de relleno de las impre',
	// 	done: false
	// };

	constructor(){
		console.log("estoy");
		this.toDoList = [];
		for (let i = 1; i < 11; i++) {
		  this.toDoList.push({
		    title: 'Item ' + i,
		    note: 'This is item #' + i,
		    done: false
		  });
		}
	};

	markAsDone(toDo){
		toDo.done = true;
	};

	remove(toDo){
		var taskIndex = this.toDoList.indexOf(toDo);
		this.toDoList.splice(taskIndex, 1);
	};
}