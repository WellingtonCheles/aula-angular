import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

import { Page401Component } from './page401/page401.component';

import { CadastroComponent } from './cadastro/cadastro.component';




import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './auth.service';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';




@NgModule({

declarations: [

AppComponent,

LoginComponent,

HomeComponent,

Page401Component,

CadastroComponent,
 CadastroAdmComponent,

],

imports: [

CommonModule,

FormsModule,

BrowserModule,

AppRoutingModule,

HttpClientModule,

ReactiveFormsModule,

AngularFireModule.initializeApp(

{

  apiKey: "AIzaSyDH3N0tF4QBEG8sGyUGOwsa210P8PX3aHE",
  authDomain: "conversor-angular-cast.firebaseapp.com",
  projectId: "conversor-angular-cast",
  storageBucket: "conversor-angular-cast.appspot.com",
  messagingSenderId: "1086916266338",
  appId: "1:1086916266338:web:351bba4d2aeebe5af1443b"

}

), AngularFireAuthModule

],

providers: [AuthService],

bootstrap: [AppComponent]

})

export class AppModule { }

