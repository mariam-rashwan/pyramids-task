import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:"dashboard",pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent,title:'Dashboard'},
  {path: 'projects', loadComponent: () => import('./projects/projects.component').then((c) => c.ProjectsComponent), title: 'projects' },
  {path: 'teams', loadComponent: () => import('./teams/teams.component').then((c) => c.TeamsComponent), title: 'teams' },
  {path: 'projectManagement', loadComponent: () => import('./project-management/project-management.component').then((c) => c.ProjectManagementComponent), title: 'project management' },
  {path: 'onSite', loadComponent: () => import('./onsite/onsite.component').then((c) => c.OnsiteComponent), title: 'onSite' },
  {path: 'contracts', loadComponent: () => import('./contracts/contracts.component').then((c) => c.ContractsComponent), title: 'contracts' },
  {path: 'invoices', loadComponent: () => import('./invoices/invoices.component').then((c) => c.InvoicesComponent), title: 'invoices' },
  {path: 'accounting', loadComponent: () => import('./accounting/accounting.component').then((c) => c.AccountingComponent), title: 'accounting' },
  {path: 'settings', loadComponent: () => import('./settings/settings.component').then((c) => c.SettingsComponent), title: 'settings' },
 
  // modules
  { path: "bindingManagement", loadChildren: () => import('./binding-management/binding-management.module').then((m) => m.BindingManagementModule) },
  { path: "hr", loadChildren: () => import('./hr/hr.module').then((m) => m.HRModule) },



  {path:"**",redirectTo:"dashboard",pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
