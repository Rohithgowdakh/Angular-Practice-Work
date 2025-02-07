import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], //Here we should import non stand alone component
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule], //Here we can import stand alone component, modules
})
export class AppModule {}
