import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddFormPageComponent } from './pages/add-form-page/add-form-page.component';
import { EditFormPageComponent } from './pages/edit-form-page/edit-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',canActivate:[AuthGuard],component:HomePageComponent},
  {path:'add-product',component:AddFormPageComponent},
  {path:'edit-product',component:EditFormPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
