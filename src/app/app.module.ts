import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToDoList } from '../pages/to_do_list/to_do_list';
import { DetailsPage } from '../pages/details/details';

@NgModule({
  declarations: [
    MyApp,
    ToDoList,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDoList,
    DetailsPage
  ],
  providers: []
})
export class AppModule {}
