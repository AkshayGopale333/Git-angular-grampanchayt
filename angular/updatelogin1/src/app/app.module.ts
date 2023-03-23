import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateloginComponent } from './updatelogin/updatelogin.component';
import{Updatelogin2Component} from './updatelogin2/updatelogin3.component';
import { Login1Component } from './login1/login1.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateloginComponent,
    Login1Component,
 Updatelogin2Component,
 ProfileComponent,
 TestComponent,
 Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
