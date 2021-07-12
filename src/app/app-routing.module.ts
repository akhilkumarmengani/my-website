import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PresentLifeComponent } from './components/present-life/present-life.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkExpComponent } from './components/work-exp/work-exp.component';

const routes: Routes = [
  {path:'home', component: PresentLifeComponent},
  {path:'workexperience',component: WorkExpComponent},
  {path:'projects',component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
