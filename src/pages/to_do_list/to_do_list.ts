import { Component } from '@angular/core';
import { ToDoService } from '../../providers/to_do.service';

import { NavController} from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'to-do-list',
  templateUrl: 'to_do_list.html',
  providers: [ToDoService]
})
export class ToDoList {
  constructor(private toDoService: ToDoService,  private nav: NavController) {
    
  }

  markAsDone(toDo){
    this.toDoService.markAsDone(toDo);
  };

  remove(toDo){
    this.toDoService.remove(toDo);
  };

  goToDetails(toDo) {  
    this.nav.push(DetailsPage, { toDo: toDo });
  };
}
