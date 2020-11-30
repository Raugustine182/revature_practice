import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'welcome',component:WelcomeComponent},{path:'search', component:SearchComponent}, {path:'',redirectTo:'welcome',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
