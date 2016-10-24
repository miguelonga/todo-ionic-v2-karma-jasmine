import { Component } from '@angular/core';
import { ToDoService } from './to_do.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'to-do-list',
  templateUrl: 'to_do_list.html',
  providers: [ToDoService]
})
export class ToDoList {
  constructor(public navCtrl: NavController, private toDoService: ToDoService) {
    
  }

  markAsDone(toDo){
    this.toDoService.markAsDone(toDo);
  };

  remove(toDo){
    this.toDoService.remove(toDo);
  };

}
