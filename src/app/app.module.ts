import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToDoList } from '../pages/to_do_list/to_do_list';

@NgModule({
  declarations: [
    MyApp,
    ToDoList
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDoList
  ],
  providers: []
})
export class AppModule {}
