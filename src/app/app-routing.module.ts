import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Page401Component } from './page401/page401.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [

  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: '**', component:Page401Component
  

  }];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
