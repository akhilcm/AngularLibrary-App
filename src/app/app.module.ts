import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewauthorsComponent } from './viewauthors/viewauthors.component';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const approutes:Routes=[
  {path :'adbook',component:AddbooksComponent},
  {path: 'viewbook',component:ViewbooksComponent},
  {path: 'adauthor',component:AddauthorsComponent},
  {path: 'viewauthor',component:ViewauthorsComponent},
  {path:'userlogin',component:LoginComponent},
  {path:'userregister',component:SignupComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbooksComponent,
    ViewbooksComponent,
    ViewauthorsComponent,
    AddauthorsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
